import BlueprintBg from "@/components/BlueprintBg";
import ServicesList from "@/components/ServicesList";
import BuildProcess from "@/components/BuildProcess";
import FaqList from "@/components/FaqList";

const ServicesPage = () => {
  return (
    <>
      <title>Services | VAV Customs</title>
      <meta name="description" content="Custom woodworking company specializing in high quality, one-of-a-kind pieces." />
      <meta name="keywords" content="woodworking, custom, one-of-a-kind, high quality" />
      <meta name="author" content="VAV Customs" />
      <link rel="canonical" href={`${window.location.origin}/services`} />

      <div className="relative mt-14 md:mt-16.5 bg-lightgray py-20 px-12 text-center">
        <BlueprintBg />
        <div className="relative">
          <h1 className="font-heading font-bold text-dark text-3xl md:text-6xl">Services</h1>
          <p className="text-dark/70 mt-3 max-w-md mx-auto">
            A look at the different services we offer, including custom woodworking, CNC machining, and more.
          </p>
        </div>
      </div>
      <ServicesList />
      <BuildProcess />
      <FaqList />
    </>
  );
};

export default ServicesPage;
