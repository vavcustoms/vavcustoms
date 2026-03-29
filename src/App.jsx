import { Routes, Route } from "react-router";
import Layout from "@/components/Layout";
import HomePage from "@/pages/Homepage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
