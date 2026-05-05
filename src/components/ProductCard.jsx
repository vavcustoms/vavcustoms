import { Link } from "react-router";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const variant = product.variants.edges[0].node;
  const forSale = variant.availableForSale;
  const image = product.images.edges[0]?.node;
  const price = Number(product.priceRange.minVariantPrice.amount);
  const category = product.category.name || null;

  return (
    <Link
      to={`/store/${product.handle}`}
      key={product.id}
      className="group bg-white border border-dark-muted/30 rounded-md overflow-hidden block"
      prefetch="none"
    >
      <div className="relative overflow-hidden">
        <img
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          src={image.url}
          alt={image.altText || product.title}
        />
        <span
          className={`absolute top-2.5 left-2.5 text-[9px] font-semibold leading-none uppercase tracking-widest px-2 py-1 rounded-sm border ${
            forSale ? "bg-white text-brand-700 border-brand-600/30" : "bg-white text-dark-mid/50 border-dark-muted/30"
          }`}
        >
          {forSale ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <div className="px-5 pt-4 pb-5">
        {category && <p className="text-[9.5px] uppercase tracking-widest font-semibold text-brand-700 mb-1">{category}</p>}
        <p className="flex justify-between font-heading font-bold text-lg leading-snug mb-3">
          {product.title} <span className="text-xl">${price.toFixed(2)}</span>
        </p>
        <div className="h-px bg-dark-muted/20 mb-3" />
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1);
            }}
            disabled={!forSale}
            className={`btn btn-dark text-xs w-full ${!forSale && "opacity-40 cursor-not-allowed"}`}
          >
            {forSale ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
