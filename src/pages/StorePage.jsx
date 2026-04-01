import { Link } from "react-router";
import { PencilRuler, Zap, Users } from "lucide-react";
import heroBg from "@/assets/images/grid-images/shelf3.jpg";
import StoreProductsList from "@/components/StoreProductsList";
import BrowseByType from "../components/BrowseByType";

const StorePage = () => {
  return (
    <>
      <title>Store | VAV Customs</title>
      <meta name="description" content="Custom woodworking company specializing in high quality, one-of-a-kind pieces." />
      <meta name="keywords" content="woodworking, custom, one-of-a-kind, high quality" />
      <meta name="author" content="VAV Customs" />
      <link rel="canonical" href={`${window.location.origin}/store`} />

      <div
        className="w-full bg-cover bg-center h-120"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full pt-14 bg-darkbrown/80">
          <div className="text-center px-4 md:px-0">
            <p className="font-mono text-brand-500 text-sm uppercase tracking-widest mb-3">Fine Handcrafted Woodwork</p>
            <h1 className="font-heading font-bold text-warmwhite text-3xl md:text-6xl">The Store</h1>
            <p className="text-warmwhite/70 mt-3">
              Have a specific piece in mind? We can turn your dream item into reality.
            </p>
            <Link to="/custom-build" className="btn btn-primary mt-6" prefetch="none">
              Custom Build
            </Link>
          </div>
        </div>
      </div>
      <section className="py-20 px-12 bg-lightbrown/60">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center text-center py-8 px-10 border-0 md:border-r border-darkbrown/10">
              <PencilRuler size={32} className="block text-brand-500 mb-5" />
              <h3 className="font-heading font-semibold text-lg mb-2 md:text-xl">Customizable</h3>
              <p className="text-sm text-darkbrown/70">
                We want this to be your dream item. We support fully custom builds, down to the finish and stain.
              </p>
            </div>
            <div className="flex flex-col items-center text-center py-8 px-10 border-0 md:border-r border-darkbrown/10">
              <Zap size={32} className="block text-brand-500 mb-5" />
              <h3 className="font-heading font-semibold text-lg mb-2 md:text-xl">Quick Response</h3>
              <p className="text-sm text-darkbrown/70">
                No one likes waiting. We strive to respond to customers and ship orderes as quickly as possible.
              </p>
            </div>
            <div className="flex flex-col items-center text-center py-8 px-10">
              <Users size={32} className="block text-brand-500 mb-5" />
              <h3 className="font-heading font-semibold text-lg mb-2 md:text-xl">Customer Service</h3>
              <p className="text-sm text-darkbrown/70">
                This is a big purchase, which is why we give personalized attention and tailored solutions for each customer.
              </p>
            </div>
          </div>
        </div>
      </section>
      <StoreProductsList />
      <section className="py-28 px-12 bg-darkbrown">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center">
            <p className="section-label text-brand-500 mb-4">Can't find what you're looking for?</p>
            <h2 className="section-title text-warmwhite mb-4">Custom Woodwork is Here</h2>
            <p className="text-warmwhite/60 max-w-lg mx-auto mb-4">
              Have a specific piece that you're looking for? We're able to turn your dream item into a reality.
            </p>
            <Link to="/custom-build" className="btn btn-primary" prefetch="none">
              Start a Custom Build
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default StorePage;
