import { useState } from "react";
import { Link } from "react-router";

const ProductDetails = ({ product, isAvailable, handleAddToCart }) => {
  const [activeTab, setActiveTab] = useState("description");

  const features = product?.features?.references?.nodes ?? [];
  const careInstructions = product?.care_instructions?.references?.nodes ?? [];

  return (
    <div className="product-details">
      <p className={`font-mono text-xs uppercase mb-2 ${isAvailable ? "text-green-700" : "text-red-700"}`}>
        {isAvailable ? "In Stock" : "Out of Stock"}
      </p>
      <h1 className="font-heading font-bold text-4xl mb-2">{product.title}</h1>
      <div className="h-px bg-lightbrown my-6"></div>
      <p className="font-heading text-3xl font-semibold mb-6">
        ${Number(product.priceRange.minVariantPrice.amount)?.toFixed(2)}
      </p>
      <button
        className={`btn btn-dark w-full mb-2 ${!isAvailable && "bg-mutedbrown border-mutedbrown cursor-not-allowed"}`}
        disabled={!isAvailable}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <Link
        to="/custom-build"
        className="btn btn-secondary text-center w-full border-mutedbrown text-mutedbrown hover:border-brand-500 hover:text-brand-500"
        prefetch="none"
      >
        Request Custom Version
      </Link>
      <div className="mt-8">
        <div className="flex gap-3 md:gap-4 border-b border-mutedbrown/20">
          <button
            onClick={() => setActiveTab("description")}
            className={`cursor-pointer py-3 text-xs md:text-sm uppercase -mb-px border-b-2 ${activeTab === "description" ? "text-brand-600 border-brand-600" : "border-transparent hover:border-brand-600"}`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("features")}
            className={`cursor-pointer py-3 text-xs md:text-sm uppercase -mb-px border-b-2 ${activeTab === "features" ? "text-brand-600 border-brand-600" : "border-transparent hover:border-brand-600"}`}
          >
            Features
          </button>
          <button
            onClick={() => setActiveTab("care")}
            className={`cursor-pointer py-3 text-xs md:text-sm uppercase -mb-px border-b-2 ${activeTab === "care" ? "text-brand-600 border-b-2 border-brand-600" : "border-transparent hover:border-brand-600"}`}
          >
            Care Instructions
          </button>
        </div>
      </div>
      {activeTab === "description" && (
        <div className="mt-8 leading-7" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
      )}
      {activeTab === "features" && (
        <div className="mt-8">
          <ul className="list-disc list-inside space-y-3">
            {features.map((feature) => (
              <li key={feature.id}>{feature.fields[0].value}</li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === "care" && (
        <div className="mt-8">
          <ul className="list-disc list-inside space-y-3">
            {careInstructions.map((instruction) => (
              <li key={instruction.id}>{instruction.fields[0].value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
