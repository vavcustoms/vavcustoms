import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <Footer />
      <Cart />
    </div>
  );
};

export default Layout;
