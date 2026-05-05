import { PencilRuler, TrendingUp, MessageSquareText } from "lucide-react";
import BlueprintBg from "@/components/BlueprintBg";

const Services = () => {
  return (
    <section className="relative py-28 px-12 bg-lightgray">
      <BlueprintBg />
      <div className="relative max-w-screen-2xl mx-auto">
        <div className="mb-12">
          <p className="section-label text-brand-500">What We Offer</p>
          <h2 className="section-title text-dark">Why VAV Customs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-midgray/20 border border-dark-muted/20 p-12 rounded-md">
            <div className="inline-flex rounded-md border border-brand-500/60 p-2 bg-brand-500/10 mb-5">
              <PencilRuler size={24} strokeWidth={1} className="text-brand-500" />
            </div>
            <h3 className="font-heading font-semibold text-dark text-xl mb-3">One-of-a-Kind</h3>
            <p className="text-dark/60">
              Custom one-of-a-kind wood pieces. Select from one of our pre-made pieces, or message us to create your dream
              item.
            </p>
          </div>
          <div className="bg-midgray/20 border border-dark-muted/20 p-12 rounded-md">
            <div className="inline-flex rounded-md border border-brand-500/60 p-2 bg-brand-500/10 mb-5">
              <TrendingUp size={24} strokeWidth={1} className="text-brand-500" />
            </div>
            <h3 className="font-heading font-semibold text-dark text-xl mb-3">High Quality</h3>
            <p className="text-dark/60">
              High quality products require high quality materials. We source only the best raw materials to create our
              products.
            </p>
          </div>
          <div className="bg-midgray/20 border border-dark-muted/20 p-12 rounded-md">
            <div className="inline-flex rounded-md border border-brand-500/60 p-2 bg-brand-500/10 mb-5">
              <MessageSquareText size={24} strokeWidth={1} className="text-brand-500" />
            </div>
            <h3 className="font-heading font-semibold text-dark text-xl mb-3">Customer Service</h3>
            <p className="text-dark/60">
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
