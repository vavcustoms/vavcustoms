import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

const CartIcon = ({ styles }) => {
  const { openCart, getCartCount } = useCart();
  const itemCount = getCartCount();

  return (
    <button
      onClick={openCart}
      className={`relative cursor-pointer text-brand-600 items-center gap-2 py-2 px-4 rounded border border-brand-600 hover:border-brand-500 hover:text-brand-500 transition duration-150 ease-in-out ${styles}`}
    >
      <ShoppingCart className="w-4 h-4" />
      <span className="text-xs leading-none">Cart</span>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 border border-dark-mid bg-warmwhite text-dark-mid text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;
