import { createContext, useContext, useReducer } from "react";
import { shopifyClient } from "@/utils/shopifyClient";

const CartContext = createContext();

const initialState = {
  isCartOpen: false,
  items: [],
  checkoutUrl: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_CART":
      return {
        ...state,
        isCartOpen: true,
      };
    case "CLOSE_CART":
      return {
        ...state,
        isCartOpen: false,
      };
    case "ADD_TO_CART": {
      const existingItem = state.items.find((item) => item.variantId === action.payload.variantId);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.variantId === action.payload.variantId
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item,
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.variantId === action.payload.variantId ? { ...item, quantity: action.payload.quantity } : item,
          )
          .filter((item) => item.quantity > 0),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.variantId !== action.payload),
      };
    case "SET_CART":
      return {
        ...state,
        items: action.payload,
      };
    case "SET_CHECKOUT_URL":
      return {
        ...state,
        checkoutUrl: action.payload,
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [{ isCartOpen, items, checkoutUrl }, dispatch] = useReducer(reducer, initialState);

  const openCart = () => {
    document.body.style.overflow = "hidden";
    dispatch({ type: "OPEN_CART" });
  };

  const closeCart = () => {
    document.body.style.overflow = "auto";
    dispatch({ type: "CLOSE_CART" });
  };

  const addToCart = async (product, quantity = 1) => {
    try {
      if (product.variants && product.variants.edges && product.variants.edges.length > 0) {
        const variant = product.variants.edges[0].node;

        if (!variant.availableForSale) {
          throw new Error("Product variant not available");
        }

        const cartItem = {
          variantId: variant.id,
          productId: product.id,
          title: product.title,
          price: parseFloat(product.priceRange.minVariantPrice.amount),
          quantity: quantity,
          image: product.images.edges[0]?.node.url || null,
          variant: null,
        };

        dispatch({ type: "ADD_TO_CART", payload: cartItem });
        return;
      }

      const variantQuery = `
        query getProductVariants($id: ID!) {
          product(id: $id) {
            variants(first: 1) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  availableForSale
                }
              }
            }
          }
        }
      `;

      const response = await shopifyClient.request(variantQuery, {
        variables: { id: product.id },
      });

      // Check for GraphQL errors
      if (response.errors && response.errors.graphQLErrors) {
        console.error("GraphQL errors:", response.errors.graphQLErrors);
        throw new Error(`GraphQL Error: ${response.errors.graphQLErrors[0]?.message || "Unknown GraphQL error"}`);
      }

      const data = response.data || response;

      if (!data || !data.product) {
        throw new Error("Product not found in GraphQL response");
      }

      const variant = data.product.variants.edges[0]?.node;

      if (!variant || !variant.availableForSale) {
        throw new Error("Product variant not available");
      }

      const cartItem = {
        variantId: variant.id,
        productId: product.id,
        title: product.title,
        price: parseFloat(variant.price.amount),
        quantity: quantity,
        image: product.images.edges[0]?.node.url || null,
        variant: variant.title !== "Default Title" ? variant.title : null,
      };

      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    } catch (error) {
      console.error("Error adding to cart:", error);
      console.error("Product data:", product);
      alert("Sorry, there was an error adding this product to your cart. Please try again.");
    }
  };

  const updateQuantity = (variantId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { variantId, quantity } });
  };

  const removeFromCart = (variantId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: variantId });
  };

  const createCheckout = async () => {
    if (items.length === 0) return;

    const cartCreateQuery = `
      mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
          cart {
            id
            checkoutUrl
            totalQuantity
            cost {
              totalAmount {
                amount
                currencyCode
              }
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const lineItems = items.map((item) => ({
      merchandiseId: item.variantId,
      quantity: item.quantity,
    }));

    try {
      const response = await shopifyClient.request(cartCreateQuery, {
        variables: {
          input: {
            lines: lineItems,
          },
        },
      });

      if (response.errors && response.errors.graphQLErrors) {
        console.error("GraphQL errors:", response.errors.graphQLErrors);
        throw new Error(`GraphQL Error: ${response.errors.graphQLErrors[0]?.message || "Unknown GraphQL error"}`);
      }

      const data = response.data || response;

      if (!data.cartCreate) {
        throw new Error("cartCreate not found in response");
      }

      if (data.cartCreate.userErrors && data.cartCreate.userErrors.length > 0) {
        const errorMessage = data.cartCreate.userErrors[0].message;
        console.error("Cart user errors:", data.cartCreate.userErrors);
        throw new Error(`Cart Error: ${errorMessage}`);
      }

      if (!data.cartCreate.cart) {
        throw new Error("Failed to create cart - no cart object returned");
      }

      const checkoutUrl = data.cartCreate.cart.checkoutUrl;

      if (!checkoutUrl) {
        console.error("No checkoutUrl in cart response");
        throw new Error("No checkout URL returned");
      }

      dispatch({ type: "SET_CHECKOUT_URL", payload: checkoutUrl });
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error("Error creating checkout:", error);
      console.error("Cart items:", items);
      alert(`Sorry, there was an error creating your checkout: ${error.message}`);
    }
  };

  const getCartTotal = () => {
    if (!Array.isArray(items)) return 0;
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    if (!Array.isArray(items)) return 0;
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        items,
        checkoutUrl,
        openCart,
        closeCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        createCheckout,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { CartProvider, useCart };
