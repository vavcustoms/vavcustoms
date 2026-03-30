const ProductCard = ({ product }) => {
  const forSale = product.variants.edges[0].node.availableForSale;

  return (
    <div key={product.id} className="bg-warmwhite overflow-hidden transition duration-150 ease-in-out hover:-translate-y-1">
      <img className="w-full h-62.5 aspect-4/5 object-cover" src={product.images.edges[0].node.url} alt={product.title} />
      <div className="py-5 px-6">
        <p className="font-heading font-bold text-lg mb-1">{product.title}</p>
        <p className="text-dark-mid mb-4">${Number(product.priceRange.minVariantPrice.amount)?.toFixed(2)}</p>
        <button
          disabled={!forSale}
          className={`btn btn-dark w-full text-xs ${!forSale && "bg-dark-mid/80 border-dark-mid/80 cursor-default"}`}
        >
          {forSale ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
