import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
