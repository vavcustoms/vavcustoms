import { useEffect, useState } from "react";
import { shopifyClient } from "@/utils/shopifyClient";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const query = `
        query {
          products(first: 3) {
            edges {
              node {
                id
                title
                handle
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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="py-28 px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="section-label">Available Now</p>
            <h2 className="section-title">Latest Products</h2>
          </div>
          <a href="#" className="btn btn-dark">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-lightbrown">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-warmwhite overflow-hidden transition duration-150 ease-in-out hover:-translate-y-1"
            >
              <img src={product.images.edges[0].node.url} alt={product.title} />
              <div className="py-5 px-6">
                <p className="font-heading font-bold text-lg mb-1">{product.title}</p>
                <p className="text-dark-mid mb-4">${Number(product.priceRange.minVariantPrice.amount)?.toFixed(2)}</p>
                <button className="btn btn-dark w-full text-xs">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
