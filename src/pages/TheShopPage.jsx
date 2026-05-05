import { Link } from "react-router";
import BlueprintBg from "@/components/BlueprintBg";
import tableSawSvg from "@/assets/icons/table-saw.svg";
import cncSvg from "@/assets/icons/cnc-router.svg";
import planerSvg from "@/assets/icons/planer.svg";
import chiselSvg from "@/assets/icons/chisel.svg";
import rulerSvg from "@/assets/icons/ruler.svg";
import clampSvg from "@/assets/icons/clamp.svg";
import grid2 from "@/assets/images/grid-images/cutting2.jpg";
import grid4 from "@/assets/images/grid-images/table2.jpg";
import BuildProcess from "@/components/BuildProcess";

const TheShopPage = () => {
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

      {/* HERO */}
      <div className="relative mt-14 md:mt-16.5 bg-lightgray py-20 px-12 text-center">
        <BlueprintBg />
        <div className="relative">
          <h1 className="font-heading font-bold text-dark text-3xl md:text-6xl">The Shop</h1>
          <p className="text-dark/70 mt-3 max-w-md mx-auto">
            A look at the tools, the process, and what I recommend for building high quality, one-of-a-kind pieces from wood.
          </p>
        </div>
      </div>
      {/* A GLIMPSE INTO THE SHOP */}
      <section className="bg-white py-28 px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-10">
            <p className="section-label">What We Use</p>
            <h2 className="section-title">Tools in the Shop</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-sm text-brand-600 tracking-widest uppercase pb-3 border-b border-lightbrown mb-6">
                Power Tools
              </h3>
              <ul>
                <li className="flex items-center gap-4 py-5 border-b border-dark-muted/20">
                  <div className="w-11 h-11 bg-brand-500/10 rounded-md border border-brand-500 flex items-center justify-center shrink-0">
                    <img className="size-8" src={tableSawSvg} alt="Table Saw Icon" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg leading-none mb-1">Table Saw</p>
                    <p className="text-dark/70 text-sm leading-none">
                      Used to make precise straight cuts in wood by pushing the it across the blade.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4 py-5 border-b border-dark-muted/20">
                  <div className="w-11 h-11 bg-brand-500/10 rounded-md border border-brand-500 flex items-center justify-center shrink-0">
                    <img className="size-6" src={cncSvg} alt="CNC Router Icon" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg leading-none mb-1">CNC Router</p>
                    <p className="text-dark/70 text-sm leading-none">
                      A computer-controlled machine that uses rotating tools to precisely carve, cut, or engrave.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4 py-5">
                  <div className="w-11 h-11 bg-brand-500/10 rounded-md border border-brand-500 flex items-center justify-center shrink-0">
                    <img className="size-6" src={planerSvg} alt="Planer Icon" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg leading-none mb-1">Planer</p>
                    <p className="text-dark/70 text-sm leading-none">
                      Shaves thin layers off a board’s surface to make it uniformly thick and smooth.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-brand-600 tracking-widest uppercase pb-3 border-b border-lightbrown mb-6">
                Hand Tools
              </h3>
              <ul>
                <li className="flex items-center gap-4 py-5 border-b border-dark-muted/20">
                  <div className="w-11 h-11 bg-brand-500/10 rounded-md border border-brand-500 flex items-center justify-center shrink-0">
                    <img className="size-6" src={chiselSvg} alt="Chisel Icon" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg leading-none mb-1">Chisel</p>
                    <p className="text-dark/70 text-sm leading-none">
                      Sharp, beveled blade used to cut, shape, or carve wood, often driven by hand or a mallet.
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4 py-5 border-b border-dark-muted/20">
                  <div className="w-11 h-11 bg-brand-500/10 rounded-md border border-brand-500 flex items-center justify-center shrink-0">
                    <img className="size-6" src={rulerSvg} alt="Ruler Icon" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg leading-none mb-1">Measuring Tools</p>
                    <p className="text-dark/70 text-sm leading-none">Tools used to measure distances, angles, and areas.</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 py-5">
                  <div className="w-11 h-11 bg-brand-500/10 rounded-md border border-brand-500 flex items-center justify-center shrink-0">
                    <img className="size-6 text-brand-600" src={clampSvg} alt="Clamp Icon" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg leading-none mb-1">Clamp</p>
                    <p className="text-dark/70 text-sm leading-none">
                      Can never have too many, used to secure objects to a surface.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <BuildProcess />
      <div className="py-10 px-12 bg-brand-500">
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <p className="font-heading font-semibold text-xl text-white">Every piece built to order.</p>
          <Link to="/custom-build" className="btn btn-dark hover:bg-dark/90 hover:border-dark/90" prefetch="none">
            Start a Project →
          </Link>
        </div>
      </div>
      <section className="py-28 px-12 bg-dark">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <p className="section-label text-brand-500">More On The Way</p>
              <h2 className="section-title text-white">Behind the Build</h2>
            </div>
            <a href="#" target="_blank" className="btn btn-white-outline">
              Follow on Instagram
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
            <img
              className="aspect-4/5 object-cover"
              src="https://images.unsplash.com/photo-1624451322046-a31372fa6e3e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="CNC Placeholder"
              loading="lazy"
            />
            <img className="aspect-4/5 object-cover" src={grid2} alt="Cutting Board" loading="lazy" />
            <img
              className="aspect-4/5 object-cover"
              src="https://images.unsplash.com/photo-1520554704788-a6a2e7854290?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Using nailgun on 2 pieces of wood"
              loading="lazy"
            />
            <img className="aspect-4/5 object-cover" src={grid4} alt="Coffee Table" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
};

export default TheShopPage;
