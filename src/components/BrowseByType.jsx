import woodworkImg from "@/assets/images/grid-images/bathroom1.jpg";
import plansImg from "@/assets/images/plans.jpg";
import toolsImg from "@/assets/images/tools.jpeg";
import apparelImg from "@/assets/images/apparel.jpg";

const BrowseByType = () => {
  return (
    <section className="py-28 px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-12">
          <p className="section-label text-brand-500">Browse by Type</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          <div className="group relative overflow-hidden aspect-4/5 cursor-pointer">
            <img
              className="aspect-4/5 object-cover saturate-60 brightness-50 transistion ease-in-out duration-150 group-hover:saturate-100 group-hover:brightness-80 group-hover:scale-105"
              src={woodworkImg}
              alt="Bathroom vanity and mirror"
              loading="lazy"
            />
            <span className="absolute bottom-5 left-5 font-heading font-bold text-xl text-warmwhite">Woodwork</span>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-600 transition-all ease-in-out duration-300 group-hover:w-full"></div>
          </div>
          <div className="group relative overflow-hidden aspect-4/5 cursor-pointer">
            <img
              className="aspect-4/5 object-cover saturate-60 brightness-50 transistion ease-in-out duration-150 group-hover:saturate-100 group-hover:brightness-80 group-hover:scale-105"
              src={plansImg}
              alt="Plans of woodworking projects"
              loading="lazy"
            />
            <span className="absolute bottom-5 left-5 font-heading font-bold text-xl text-warmwhite">Plans</span>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-600 transition-all ease-in-out duration-300 group-hover:w-full"></div>
          </div>
          <div className="group relative overflow-hidden aspect-4/5 cursor-pointer">
            <img
              className="aspect-4/5 object-cover saturate-60 brightness-50 transistion ease-in-out duration-150 group-hover:saturate-100 group-hover:brightness-80 group-hover:scale-105"
              src={toolsImg}
              alt="Wall of woodworking tools"
              loading="lazy"
            />
            <span className="absolute bottom-5 left-5 font-heading font-bold text-xl text-warmwhite">Tools</span>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-600 transition-all ease-in-out duration-300 group-hover:w-full"></div>
          </div>
          <div className="group relative overflow-hidden aspect-4/5 cursor-pointer">
            <img
              className="aspect-4/5 object-cover saturate-60 brightness-50 transistion ease-in-out duration-150 group-hover:saturate-100 group-hover:brightness-80 group-hover:scale-105"
              src={apparelImg}
              alt="Man wearing VAV Customs Apparel"
              loading="lazy"
            />
            <span className="absolute bottom-5 left-5 font-heading font-bold text-xl text-warmwhite">Apparel</span>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-600 transition-all ease-in-out duration-300 group-hover:w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByType;
