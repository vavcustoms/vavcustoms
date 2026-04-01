const ProductGallery = ({ product }) => {
  const image = product.images.edges[0]?.node;

  return (
    <div>
      <div className="sticky top-22 h-auto">
        <img className="mainImg" src={image.url} alt={image.altText} />
      </div>
    </div>
  );
};

export default ProductGallery;
