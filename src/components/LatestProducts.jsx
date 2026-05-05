import { useEffect, useState } from "react";
import { Link } from "react-router";
import { MoveRight } from "lucide-react";
import { shopifyClient } from "@/utils/shopifyClient";
import ProductCard from "@/components/ProductCard";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const query = `
        query {
          products(first: 4) {
            edges {
              node {
                id
                title
                handle
                category {
                  id
                  name
                }
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
                variants(first: 1) {
                  edges {
                    node {
                      id
                      title
                      price {
                        amount
                        currencyCode
                      }
                      availableForSale
                    }
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const { data } = await shopifyClient.request(query);
        const productNodes = data.products.edges.map((edge) => edge.node);
        setProducts(productNodes);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <section className="py-28 px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="section-label">Available Now</p>
            <h2 className="section-title">Latest Products</h2>
          </div>
          <Link to="/store" className="btn btn-secondary" prefetch="none">
            View All
            <MoveRight size={12} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {loading
            ? [...Array(4)].map((_, i) => (
                <div key={i} className="bg-white border border-dark-muted/30 rounded-md overflow-hidden animate-pulse">
                  <div className="h-64 bg-dark-muted/10" />
                  <div className="px-5 pt-4 pb-5 space-y-3">
                    <div className="h-3 bg-dark-muted/10 rounded w-1/3" />
                    <div className="flex items-center gap-2">
                      <div className="h-5 bg-dark-muted/10 rounded w-3/4" />
                      <div className="h-5 bg-dark-muted/10 rounded w-1/4" />
                    </div>
                    <div className="h-px bg-dark-muted/20" />
                    <div className="h-9 bg-dark-muted/10 rounded" />
                  </div>
                </div>
              ))
            : products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
