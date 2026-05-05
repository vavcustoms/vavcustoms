import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router";

const Cart = () => {
  const { isCartOpen, closeCart, items, updateQuantity, removeFromCart, createCheckout, getCartTotal, getCartCount } =
    useCart();
  const itemCount = getCartCount();

  const handleQuantityChange = (variantId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(variantId);
    } else {
      updateQuantity(variantId, newQuantity);
    }
  };

  const handleCheckout = async () => {
    await createCheckout();
  };

  return (
    <div className="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div
        onClick={closeCart}
        className={`fixed inset-0 bg-dark/60 transition-all duration-300 ease-in-out ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        aria-hidden="true"
      ></div>
      <div
        className={`pointer-events-none fixed inset-0 overflow-hidden transition-all duration-300 ease-in-out ${isCartOpen ? "translate-x-0 opacity-100 " : "opacity-0 translate-x-full"}`}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div
              onClick={(e) => e.stopPropagation()}
              className={`bg-white pointer-events-auto w-screen max-w-md transform transition-transform duration-300 ease-in-out ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-warmwhite border-l border-midgray/90 shadow-xl">
                <div className="flex-1 overflow-y-auto">
                  <div className="bg-lightgray flex items-center justify-between px-4 py-6 sm:px-6">
                    <div>
                      <h2 className="text-brand-500 text-sm uppercase" id="slide-over-title">
                        Your Cart
                      </h2>
                      <p className="text-warmwhite">
                        {itemCount} {itemCount === 1 ? "item" : "items"}
                      </p>
                    </div>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={closeCart}
                        className="relative cursor-pointer -m-2 p-2 text-dark hover:text-dark/80 transition duration-150 ease-in-out"
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="size-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {items.length === 0 ? (
                          <div className="flex flex-col items-center justify-center py-8">
                            <ShoppingCart size={36} strokeWidth={1} className="text-dark-mid/30 mb-2" />
                            <p className="font-heading font-bold text-xl mb-2">Your cart is empty.</p>
                            <p className="text-dark-mid text-sm">Start shopping to add items to your cart.</p>
                            <Link onClick={closeCart} to="/store" className="btn btn-primary mt-4">
                              Shop Now
                            </Link>
                          </div>
                        ) : (
                          items.map((item) => (
                            <li key={item.variantId} className="py-6 border-b border-midgray/20">
                              <div className="flex px-4 sm:px-6">
                                <div className="size-24 shrink-0 overflow-hidden">
                                  {item.image ? (
                                    <img src={item.image} alt={item.title} className="size-full object-cover" />
                                  ) : (
                                    <div className="size-full bg-lightgray flex items-center justify-center">
                                      <span className="text-xs">No image</span>
                                    </div>
                                  )}
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium">
                                      <h3>
                                        <span>{item.title}</span>
                                        {item.variant && (
                                          <span className="text-sm text-dark-muted block">{item.variant}</span>
                                        )}
                                      </h3>
                                      <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    {item.quantity > 1 && (
                                      <p className="text-xs text-dark-muted text-right">
                                        (${item.price.toFixed(2)} x {item.quantity})
                                      </p>
                                    )}
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex items-center space-x-2">
                                      <button
                                        onClick={() => handleQuantityChange(item.variantId, item.quantity - 1)}
                                        className="cursor-pointer w-6 h-6 flex items-center justify-center border border-midgray hover:border-migray/60 transition duration-150 ease-in-out"
                                      >
                                        -
                                      </button>
                                      <span className="text-dark-mid min-w-8 text-center">Qty {item.quantity}</span>
                                      <button
                                        onClick={() => handleQuantityChange(item.variantId, item.quantity + 1)}
                                        className="cursor-pointer w-6 h-6 flex items-center justify-center border border-midgray hover:border-midgray/60 transition duration-150 ease-in-out"
                                      >
                                        +
                                      </button>
                                    </div>
                                    <div className="flex">
                                      <button
                                        type="button"
                                        onClick={() => removeFromCart(item.variantId)}
                                        className="cursor-pointer font-medium text-dark-mid hover:text-dark-mid/70 transition duration-150 ease-in-out"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border-t border-midgray px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium">
                    <p>Subtotal</p>
                    <p>${getCartTotal().toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-dark-muted">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <button
                      onClick={handleCheckout}
                      disabled={items.length === 0}
                      className="btn btn-dark w-full disabled:bg-dark/60 disabled:border-dark/60 disabled:cursor-not-allowed"
                    >
                      Checkout
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-dark-muted">
                    <p>
                      or
                      <button
                        type="button"
                        onClick={closeCart}
                        className="cursor-pointer font-medium text-dark-mid hover:text-dark-mid/70 ml-1 transition duration-150 ease-in-out"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
