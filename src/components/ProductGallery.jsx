import { useState } from "react";

const ProductGallery = ({ product }) => {
  const images = product.images.edges;
  console.log(images);

  const [selectedImage, setSelectedImage] = useState(images.length > 0 ? images[0].node : null);

  return (
    <div>
      <div className="sticky top-34 h-auto">
        <div className="overflow-hidden aspect-square bg-lightgray border border-midgray">
          <img
            className="w-full h-full object-cover transition duration-150 ease-in-out"
            src={selectedImage?.url}
            alt={selectedImage?.altText}
          />
        </div>
        <div className="grid grid-cols-4 gap-0.5 mt-0.5">
          {images.map(({ node }) => (
            <div key={node.url} className="overflow-hidden aspect-square" onClick={() => setSelectedImage(node)}>
              <img
                className={`w-full h-full object-cover transition duration-150 ease-in-out ${selectedImage?.url === node.url ? "border border-brand-500" : ""}`}
                src={node.url}
                alt={node.altText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
