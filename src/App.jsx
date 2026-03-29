import { Routes, Route } from "react-router";
import Layout from "@/components/Layout";
import HomePage from "@/pages/Homepage";
import TheShop from "@/pages/TheShop";
import NotFoundPage from "@/pages/NotFoundPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/the-shop" element={<TheShop />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
