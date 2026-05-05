import BlueprintBg from "@/components/BlueprintBg";

const BuildProcess = () => {
  return (
    <section className="relative bg-lightgray py-28 px-12">
      <BlueprintBg />
      <div className="relative max-w-screen-2xl mx-auto">
        <div className="mb-10">
          <p className="section-label text-brand-500">How It Works</p>
          <h2 className="section-title">The Build Process</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          <div className="p-8 bg-midgray/20 border border-dark-muted/20 rounded-md">
            <div className="text-xs text-brand-600 tracking-wide mb-1.5">01</div>
            <h3 className="font-heading text-lg font-bold mb-1">Design</h3>
            <p className="text-dark/70">Discuss your project, dimensions, and desired finish.</p>
          </div>
          <div className="p-8 bg-midgray/20 border border-dark-muted/20 rounded-md">
            <div className="text-xs text-brand-600 tracking-wide mb-1.5">02</div>
            <h3 className="font-heading text-lg font-bold mb-1">Material</h3>
            <p className="text-dark/70">Source the perfect wood for your project, ensuring the best quality.</p>
          </div>
          <div className="p-8 bg-midgray/20 border border-dark-muted/20 rounded-md">
            <div className="text-xs text-brand-600 tracking-wide mb-1.5">03</div>
            <h3 className="font-heading text-lg font-bold mb-1">Build</h3>
            <p className="text-dark/70">Craft your project with precision and attention to detail.</p>
          </div>
          <div className="p-8 bg-midgray/20 border border-dark-muted/20 rounded-md">
            <div className="text-xs text-brand-600 tracking-wide mb-1.5">04</div>
            <h3 className="font-heading text-lg font-bold mb-1">Finish</h3>
            <p className="text-dark/70">Apply the desired finish and prepare it for shipping or pick up.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildProcess;
