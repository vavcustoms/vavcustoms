import Hero from "@/components/Hero";
import LatestProducts from "@/components/LatestProducts";
import Services from "../components/Services";
import CustomWork from "@/components/CustomWork";
import ProjectGallery from "@/components/ProjectGallery";
import AboutMe from "@/components/AboutMe";

const HomePage = () => {
  return (
    <>
      <title>Home | VAV Customs</title>
      <meta
        name="description"
        content="Custom woodworking company specializing in high quality, one-of-a-kind pieces to satisfy your unique needs."
      />
      <meta name="keywords" content="woodworking, custom, one-of-a-kind, high quality" />
      <meta name="author" content="VAV Customs" />
      <link rel="canonical" href={`${window.location.origin}`} />

      <Hero />
      <LatestProducts />
      <Services />
      <CustomWork />
      <ProjectGallery />
      <AboutMe />
    </>
  );
};

export default HomePage;
