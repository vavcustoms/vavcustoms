import { Link } from "react-router";
import tableImg from "@/assets/images/grid-images/table1.jpg";
import cuttingBoardImg from "@/assets/images/grid-images/cutting1.jpg";
import vanityImg from "@/assets/images/grid-images/vanity1.jpg";

const CustomWork = () => {
  return (
    <section className="py-28 px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-12">
          <div>
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Custom Work</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="relative">
            <img className="w-full h-auto" src={tableImg} alt="Custom coffee table" loading="lazy" />
            <h3 className="font-semibold text-lightbrown/60 text-lg bg-darkbrown px-4 py-2 absolute bottom-0 left-0">
              Furniture
            </h3>
          </div>
          <div className="relative">
            <img className="w-full h-auto" src={cuttingBoardImg} alt="Custom cutting board" loading="lazy" />
            <h3 className="font-semibold text-lightbrown/60 text-lg bg-darkbrown px-4 py-2 absolute bottom-0 left-0">
              CNC Projects
            </h3>
          </div>
          <div className="relative">
            <img className="w-full h-auto" src={vanityImg} alt="Custom bathroom vanity" loading="lazy" />
            <h3 className="font-semibold text-lightbrown/60 text-lg bg-darkbrown px-4 py-2 absolute bottom-0 left-0">
              Cabinets/Vanities
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-12">
          <div className="text-start">
            <h2 className="font-heading font-bold text-3xl">Have a custom project in mind?</h2>
            <p className="text-mutedbrown text-lg">Let us know how we can help!</p>
          </div>
          <div className="justify-self-start mt-3 md:justify-self-end md:mt-0">
            <Link to="/custom-build" className="btn btn-primary" prefetch="none">
              Custom Build
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomWork;
