import heroBg from "@/assets/images/hero-bg.png";
import heroLogo from "@/assets/images/VAV-Customs-Logo-Hero.png";

const Hero = () => {
  return (
    <section className="w-full bg-center bg-cover md:bg-fixed" style={{ background: `url(${heroBg})` }}>
      <div className="flex items-center justify-center w-full h-screen bg-darkbrown/75">
        <div className="text-center">
          <div className="container px-12 mx-auto">
            <div className="w-full max-w-2xl mx-auto text-center">
              <img className="w-full h-auto mx-auto mb-8" src={heroLogo} alt="VAV Customs Logo" />
              <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
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
  );
};

export default Hero;
