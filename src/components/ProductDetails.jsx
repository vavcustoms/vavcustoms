import { Link } from "react-router";

const ProductDetails = ({ product, isAvailable, handleAddToCart }) => {
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
      <div className="mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vero quidem ut possimus officiis nihil cupiditate
        in, tenetur distinctio dolorum corrupti asperiores error temporibus quis fuga, unde hic officia beatae! Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Veritatis aliquid doloribus, assumenda, error illo minima blanditiis
        numquam, laborum repellendus voluptas facere consequatur aperiam deserunt accusantium vero enim eum sed iure. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Iure dolor atque qui repellendus dicta sint in voluptates ipsum,
        animi, exercitationem praesentium harum aspernatur nemo reiciendis repudiandae mollitia hic perspiciatis laborum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non placeat, accusantium voluptas perspiciatis hic
        repellendus, iure illo, labore dolorem earum id eum nulla vero! A itaque neque veniam delectus. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Deserunt quae aperiam, laborum harum praesentium porro minus qui quo libero
        deleniti provident cupiditate impedit vitae rem odio ullam iure quia beatae? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Explicabo, facere nobis sed, sequi ipsum magnam consequatur soluta cupiditate perspiciatis natus
        quibusdam facilis ducimus provident voluptate optio enim excepturi obcaecati dolore.
      </div>
    </div>
  );
};

export default ProductDetails;
