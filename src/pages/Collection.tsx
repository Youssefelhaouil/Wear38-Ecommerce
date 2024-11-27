import { useState } from "react";
import Button from "../Components/Ui/Button";
import { useFetchContext } from "../hooks/useFetchContext";
import ProductCard from "../Components/ProductCard";

function Collection() {
  const { data, isLoading, setUrl, url } = useFetchContext();

  const [price, setPrice] = useState("");

  const ProductCategory = ["T-Shirts", "Pants", "Jackets", "Sweatshirts"];

  console.log(data);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <div className="py-10 container">
        <div className="flex flex-col md:flex-row space-x-2 md:justify-between  pb-10">
          <div className="flex space-x-2">
            <Button
              onClick={() => setUrl(`/`)}
              className={`bg-dark-gray/20 rounded-full ${
                (!url || url === "/") && "bg-gray-700"
              }`}
              width="w-fit"
            >
              All
            </Button>
            {ProductCategory.map((category, idx) => (
              <Button
                key={idx}
                className={`bg-dark-gray/20 rounded-full ${
                  url.includes(`/${category}`) && "bg-gray-700"
                }`}
                width="w-fit"
                onClick={() => setUrl(`/${category}`)}
              >
                {category}
              </Button>
            ))}
          </div>
          <select
            onChange={(e) => setPrice(e.target.value)}
            name="Price"
            id="Price"
          >
            <option value="/">Price</option>
            <option value="asc">Low</option>
            <option value="desc">High</option>
          </select>
        </div>
        <div className="mt-4 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {data ? (
            data.map((product, idx: number) => (
              <div key={idx}>
                <ProductCard product={product} isLoading={isLoading} />
              </div>
            ))
          ) : (
            <h1>Loading ...</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Collection;
