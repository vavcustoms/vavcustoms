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

      <div
        className="flex items-end justify-start w-full bg-top bg-cover h-120"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1624451322046-a31372fa6e3e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-end w-full h-full bg-darkbrown/70">
          <div className="p-6 md:p-12">
            <h1 className="font-heading font-bold text-5xl text-warmwhite lg:text-7xl">Services</h1>
            <p className="text-warmwhite/70 text-sm md:text-lg max-w-lg mt-3">
              A look at the different services we offer, including custom woodworking, CNC machining, and more.
            </p>
          </div>
        </div>
      </div>
      <ServicesList />
      <BuildProcess />
      <FaqList />
    </>
  );
};

export default ServicesPage;
