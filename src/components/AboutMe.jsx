import { Link } from "react-router";
import aboutImg from "@/assets/images/about-me.jpg";

const AboutMe = () => {
  return (
    <section className="py-28 px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <img className="w-full aspect-4/5 object-cover object-left" src={aboutImg} alt="About Me" />
          </div>
          <div>
            <h2 className="section-title mb-6">Hey, I'm Vince</h2>
            <p className="text-darkbrown leading-7 mb-4">
              I'm skilled woodworker with over 20 years of experience in the trade. When not bringing my creative visions to
              life through woodworking, I can be found out on the boat, enjoying a peaceful day of fishing. With a passion
              for both the art of woodworking and the great outdoors, I bring a unique perspective to each of my projects.
            </p>
            <p className="text-darkbrown leading-7 mb-4">
              Want to see what goes on behind the scenes? Get a look at the tools, the process, and what I recommend.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/the-shop" className="btn btn-primary">
                Check Out The Shop
              </Link>
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
