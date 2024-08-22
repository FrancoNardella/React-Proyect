import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import Hero from "../pages/Hero/Hero";
import { Layout } from "../components/Layout/Layout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";

function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<Hero />} />

          {/* Rutas anidadas */}
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":productName" element={<Product />} />
          </Route>

          <Route path="about" element={<About />} />

          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<h2>Error 404</h2>} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
}

export default Routes;
