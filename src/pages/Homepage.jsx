import Hero from "@/components/Hero";
import LatestProducts from "@/components/LatestProducts";
import Services from "../components/Services";
import CustomWork from "@/components/CustomWork";
import ProjectGallery from "@/components/ProjectGallery";
import AboutMe from "@/components/AboutMe";

const Homepage = () => {
  return (
    <>
      <Hero />
      <LatestProducts />
      <Services />
      <CustomWork />
      <ProjectGallery />
      <AboutMe />
    </>
  );
};

export default Homepage;
