import aboutImg from "@/assets/images/about-me.jpg";

const AboutMe = () => {
  return (
    <section className="py-28 px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <img className="w-full aspect-4/5 object-cover object-left" src={aboutImg} alt="About Me" />
            <div className="absolute w-1/2 -bottom-5 -right-5 border-3 border-brand-500 -z-1 aspect-square"></div>
          </div>
          <div>
            <p className="section-label">Meet The Builder</p>
            <h2 className="section-title mb-6">Hey, I'm Vince</h2>
            <p className="text-darkbrown leading-7 mb-4">
              Meet Vince, a skilled woodworker with over 20 years of experience in the trade. When not bringing his creative
              visions to life through woodworking, he can be found out on the boat, enjoying a peaceful day of fishing. With
              a passion for both the art of woodworking and the great outdoors, Vince brings a unique perspective to each of
              his projects.
            </p>
            <p className="text-darkbrown leading-7 mb-4">
              Want to see what goes on behind the scenes? Get a look at the tools, the process, and what he recommends.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#" className="btn btn-primary">
                Check Out The Shop
              </a>
              <a href="#" className="btn btn-dark">
                Build With Me
              </a>
            </div>
            <p className="font-heading font-bold italic text-brand-500 text-3xl mt-8">- Vince</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
