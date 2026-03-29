import heroBg from "@/assets/images/hero-bg.png";
import heroLogo from "@/assets/images/VAV-Customs-Logo-Hero.png";
import LatestProducts from "@/components/LatestProducts";

const Homepage = () => {
  return (
    <>
      <section
        className="w-full bg-center bg-cover md:bg-fixed"
        style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})` }}
      >
        <div className="flex items-center justify-center w-full h-screen bg-zinc-900/50">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <img className="max-w-150" src={heroLogo} alt="VAV Customs Logo" />
                <div className="flex items-center justify-center gap-4 mt-8">
                  <a href="#" className="btn btn-primary">
                    Shop Products
                  </a>
                  <a href="#" className="btn btn-secondary">
                    Custom Build
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LatestProducts />
    </>
  );
};

export default Homepage;
