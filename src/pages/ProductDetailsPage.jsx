import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { shopifyClient } from "@/utils/shopifyClient";
import { useCart } from "@/context/CartContext";
import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "../components/ProductDetails";

const ProductDetailsPage = () => {
  const { handle } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);

  const isAvailable = product?.variants?.edges?.[0]?.node?.availableForSale ?? false;

  useEffect(() => {
    if (!handle) {
      console.error("Invalid handle provided:", handle);
      return;
    }

    const query = `
      query getProductByHandle($handle: String!) {
        productByHandle(handle: $handle) {
          id
          title
          descriptionHtml
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
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

    const fetchProduct = async () => {
      try {
        const response = await shopifyClient.request(query, {
          variables: { handle: handle.trim() },
        });

        if (response.errors) {
          console.error("GraphQL errors:", response.errors);
          return;
        }

        setProduct(response.data.productByHandle);
      } catch (error) {
        console.error("Network or other error:", error);
      }
    };

    fetchProduct();
  }, [handle]);

  const handleAddToCart = async () => {
    if (!product) return;

    try {
      await addToCart(product, 1);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-16.5 font-mono text-xs bg-lightbrown/60 border-b border-lightbrown py-5 px-12 flex items-center gap-4">
        <Link
          to="/store"
          className="text-mutedbrown hover:text-darkbrown transition duration-150 ease-in-out"
          prefetch="none"
        >
          Store
        </Link>
        <span className="breadcrumb-sep">/</span>
        <span>{product.title}</span>
      </div>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 max-w-6xl mx-auto py-20 px-12 mb-12">
        <ProductGallery product={product} />
        <ProductDetails product={product} isAvailable={isAvailable} handleAddToCart={handleAddToCart} />
      </div>
    </>
  );
};

export default ProductDetailsPage;
