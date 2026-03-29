import { PencilRuler, TrendingUp, MessageSquareText } from "lucide-react";

const Services = () => {
  return (
    <section
      className="py-28 px-12 bg-fixed bg-darkbrown"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/retina-wood.png')",
      }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="bg-darkbrown p-12">
            <PencilRuler size={36} strokeWidth={1} className="text-brand-500 mb-5" />
            <h3 className="font-heading text-lightbrown text-xl mb-3">One-of-a-Kind</h3>
            <p className="text-lightbrown/80">
              Custom one-of-a-kind wood pieces. Select from one of our pre-made pieces, or message us to create your dream
              item.
            </p>
          </div>
          <div className="bg-darkbrown p-12">
            <TrendingUp size={36} strokeWidth={1} className="text-brand-500 mb-5" />
            <h3 className="font-heading text-lightbrown text-xl mb-3">High Quality</h3>
            <p className="text-lightbrown/80">
              High quality products require high quality materials. We source only the best raw materials to create our
              products.
            </p>
          </div>
          <div className="bg-darkbrown p-12">
            <MessageSquareText size={36} strokeWidth={1} className="text-brand-500 mb-5" />
            <h3 className="font-heading text-lightbrown text-xl mb-3">Customer Service</h3>
            <p className="text-lightbrown/80">
              Customer service you can count on. This is an investment and we want to ensure that you are getting your dream
              piece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
