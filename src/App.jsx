import { Routes, Route } from "react-router";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import TheShopPage from "@/pages/TheShopPage";
import CustomBuildPage from "@/pages/CustomBuildPage";
import StorePage from "@/pages/StorePage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import NotFoundPage from "@/pages/NotFoundPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="the-shop" element={<TheShopPage />} />
        <Route path="custom-build" element={<CustomBuildPage />} />
        <Route path="store">
          <Route index element={<StorePage />} />
          <Route path=":handle" element={<ProductDetailsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
