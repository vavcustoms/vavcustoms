import { Link } from "react-router";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const forSale = product.variants.edges[0].node.availableForSale;

  return (
    <Link
      to={`/store/${product.handle}`}
      key={product.id}
      className="bg-warmwhite overflow-hidden transition duration-150 ease-in-out hover:-translate-y-1"
      prefetch="none"
    >
      <img className="w-full h-75 object-cover" src={product.images.edges[0].node.url} alt={product.title} />
      <div className="py-5 px-6">
        <p className="font-heading font-bold text-lg mb-1">{product.title}</p>
        <p className="text-dark-mid mb-4">${Number(product.priceRange.minVariantPrice.amount)?.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product, 1)}
          disabled={!forSale}
          className={`btn btn-dark w-full text-xs ${!forSale && "bg-mutedbrown border-mutedbrown cursor-not-allowed"}`}
        >
          {forSale ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
