import { Link } from "react-router";
import heroBg from "@/assets/images/grid-images/shelf3.jpg";

const StorePage = () => {
  return (
    <>
      <title>Store | VAV Customs</title>
      <meta name="description" content="Custom woodworking company specializing in high quality, one-of-a-kind pieces." />
      <meta name="keywords" content="woodworking, custom, one-of-a-kind, high quality" />
      <meta name="author" content="VAV Customs" />
      <link rel="canonical" href={`${window.location.origin}/store`} />

      <div
        className="w-full bg-cover bg-center h-120 pt-15"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-darkbrown/80">
          <div className="text-center px-4 md:px-0">
            <p className="font-mono text-brand-500 text-sm uppercase tracking-widest mb-3">Fine Handcrafted Woodwork</p>
            <h1 className="font-heading font-bold text-warmwhite text-3xl md:text-6xl">The Store</h1>
            <p className="text-warmwhite/70 mt-3">
              Have a specific piece in mind? We can turn your dream item into reality.
            </p>
            <Link to="/custom-build" className="btn btn-primary mt-6">
              Custom Build
            </Link>
          </div>
        </div>
      </div>
      <section></section>
    </>
  );
};

export default StorePage;
