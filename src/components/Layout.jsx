import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="flex flex-col h-full grow">{children}</main>

      <Footer />
      <Cart />
    </div>
  );
};

export default Layout;
