import heroImg from "@/assets/images/the-shop.webp";
import tableSawSvg from "@/assets/icons/table-saw.svg";
import cncSvg from "@/assets/icons/cnc-router.svg";
import planerSvg from "@/assets/icons/planer.svg";
import chiselSvg from "@/assets/icons/chisel.svg";
import rulerSvg from "@/assets/icons/ruler.svg";
import clampSvg from "@/assets/icons/clamp.svg";
import grid1 from "@/assets/images/grid-images/bathroom2.jpeg";
import grid2 from "@/assets/images/grid-images/cutting2.jpg";
import grid3 from "@/assets/images/grid-images/shelf2.jpg";
import grid4 from "@/assets/images/grid-images/table2.jpg";

const TheShop = () => {
  return (
    <>
      <title>The Shop | VAV Customs</title>
      <meta
        name="description"
        content="A look at the tools, the process, and what I recommend for building high quality, one-of-a-kind pieces from wood."
      />
      <meta name="keywords" content="Shop, tools, power tools, process, one-of-a-kind, custom, cnc, saw" />
      <meta name="author" content="VAV Customs" />
      <link rel="canonical" href={`${window.location.origin}/the-shop`} />

      <div
        className="flex items-end justify-start w-full bg-top bg-cover h-120"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-end w-full h-full bg-darkbrown/70">
          <div className="p-6 md:p-12">
            <h1 className="font-heading font-bold text-5xl text-warmwhite lg:text-7xl">The Shop</h1>
            <p className="text-warmwhite/70 text-sm md:text-lg max-w-lg mt-3">
              A look at the tools, the process, and what I recommend for building high quality, one-of-a-kind pieces from
              wood.
            </p>
          </div>
        </div>
      </div>
      {/* A GLIMPSE INTO THE SHOP */}
      <section className="py-28 px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div>
            <p className="section-label">What We Use</p>
            <h2 className="section-title mb-10">Tools in the Shop</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-mono text-sm text-brand-600 tracking-widest uppercase pb-3 border-b border-lightbrown mb-6">
                Power Tools
              </h3>
              <ul>
                <li className="flex items-center gap-4 py-5 border-b border-lightbrown">
                  <div className="w-11 h-11 bg-lightbrown/60 border border-darkbrown/20 flex items-center justify-center shrink-0">
                    <img className="size-8" src={tableSawSvg} alt="Table Saw Icon" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg leading-none mb-1">Table Saw</p>
                    <p className="text-darkbrown/70 text-sm leading-none">
                      Used to make precise straight cuts in wood by pushing the it across the blade.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4 py-5 border-b border-lightbrown">
                  <div className="w-11 h-11 bg-lightbrown/60 border border-darkbrown/20 flex items-center justify-center shrink-0">
                    <img className="size-6" src={cncSvg} alt="CNC Router Icon" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg leading-none mb-1">CNC Router</p>
                    <p className="text-darkbrown/70 text-sm leading-none">
                      A computer-controlled machine that uses rotating tools to precisely carve, cut, or engrave.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4 py-5">
                  <div className="w-11 h-11 bg-lightbrown/60 border border-darkbrown/20 flex items-center justify-center shrink-0">
                    <img className="size-6" src={planerSvg} alt="Planer Icon" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg leading-none mb-1">Planer</p>
                    <p className="text-darkbrown/70 text-sm leading-none">
                      Shaves thin layers off a board’s surface to make it uniformly thick and smooth.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-sm text-brand-600 tracking-widest uppercase pb-3 border-b border-lightbrown mb-6">
                Hand Tools
              </h3>
              <ul>
                <li className="flex items-center gap-4 py-5 border-b border-lightbrown">
                  <div className="w-11 h-11 bg-lightbrown/60 border border-darkbrown/20 flex items-center justify-center shrink-0">
                    <img className="size-6" src={chiselSvg} alt="Chisel Icon" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg leading-none mb-1">Chisel</p>
                    <p className="text-darkbrown/70 text-sm leading-none">
                      Sharp, beveled blade used to cut, shape, or carve wood, often driven by hand or a mallet.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4 py-5 border-b border-lightbrown">
                  <div className="w-11 h-11 bg-lightbrown/60 border border-darkbrown/20 flex items-center justify-center shrink-0">
                    <img className="size-6" src={rulerSvg} alt="Ruler Icon" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg leading-none mb-1">Measuring Tools</p>
                    <p className="text-darkbrown/70 text-sm leading-none">
                      Tools used to measure distances, angles, and areas.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4 py-5">
                  <div className="w-11 h-11 bg-lightbrown/60 border border-darkbrown/20 flex items-center justify-center shrink-0">
                    <img className="size-6 text-brand-600" src={clampSvg} alt="Clamp Icon" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg leading-none mb-1">Clamp</p>
                    <p className="text-darkbrown/70 text-sm leading-none">
                      Can never have too many, used to secure objects to a surface.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-28 px-12 bg-lightbrown/60">
        <div className="max-w-screen-2xl mx-auto">
          <div>
            <p className="section-label text-brand-700">How It Works</p>
            <h2 className="section-title mb-10">The Build Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            <div className="p-8 bg-warmwhite/60">
              <div className="font-mono text-xs text-brand-600 tracking-wide mb-1.5">01</div>
              <h3 className="font-heading text-lg font-bold mb-1">Design</h3>
              <p className="text-darkbrown/70">Discuss your project, dimensions, and desired finish.</p>
            </div>
            <div className="p-8 bg-warmwhite/60">
              <div className="font-mono text-xs text-brand-600 tracking-wide mb-1.5">02</div>
              <h3 className="font-heading text-lg font-bold mb-1">Material</h3>
              <p className="text-darkbrown/70">Source the perfect wood for your project, ensuring the best quality.</p>
            </div>
            <div className="p-8 bg-warmwhite/60">
              <div className="font-mono text-xs text-brand-600 tracking-wide mb-1.5">03</div>
              <h3 className="font-heading text-lg font-bold mb-1">Build</h3>
              <p className="text-darkbrown/70">Craft your project with precision and attention to detail.</p>
            </div>
            <div className="p-8 bg-warmwhite/60">
              <div className="font-mono text-xs text-brand-600 tracking-wide mb-1.5">04</div>
              <h3 className="font-heading text-lg font-bold mb-1">Finish</h3>
              <p className="text-darkbrown/70">Apply the desired finish and prepare it for shipping or pick up.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-28 px-12 bg-darkbrown">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <p className="section-label text-brand-500">More On The Way</p>
              <h2 className="section-title text-lightbrown">Behind the Build</h2>
            </div>
            <a href="#" target="_blank" className="btn btn-secondary">
              Follow on Instagram
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
            <img className="aspect-4/5 object-cover" src={grid1} alt="Bathroom vanity, mirror, and shelves" loading="lazy" />
            <img className="aspect-4/5 object-cover" src={grid2} alt="Cutting Board" loading="lazy" />
            <img className="aspect-4/5 object-cover" src={grid3} alt="Kitchen Shelf" loading="lazy" />
            <img className="aspect-4/5 object-cover" src={grid4} alt="Coffee Table" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
};

export default TheShop;
