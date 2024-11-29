import Button from "../Components/Ui/Button";
import { useFetchContext } from "../hooks/useFetchContext";
import ProductCard from "../Components/ProductCard";
import CardSkeleton from "../Components/CardSkeleton";
import { useEffect, useState } from "react";
import { IProduct } from "../interfaces";

function Collection() {
  const { data, isLoading,setCategory,category } = useFetchContext();
  const [product, setProduct] = useState<IProduct[] | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("");

  console.log(category)

  useEffect(() => {
    if (data) {
      let filteredProducts = [...data];

      if (category !== "all") {
        filteredProducts = filteredProducts.filter(
          (item) => item.category.toLowerCase() === category
        );
      }

      if (sortOrder === "asc") {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "desc") {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
      }else if(sortOrder === "topReview"){
        filteredProducts = filteredProducts.sort((a, b) => b.review.note - a.review.note)
      }

      setProduct(filteredProducts);
    }
  }, [data, category, sortOrder]);

  const handleFilterByCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectedCategory = e.currentTarget.innerText.toLowerCase();
    setCategory(selectedCategory);
  };

  const handleSortByPrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const productCategories = ["All", "T-Shirts", "Pants", "Jackets", "Sweatshirts"];

  if (isLoading) {
    return (
      <div className="container mt-32 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {Array.from({ length: 8 }).map((_, idx) => (
          <CardSkeleton key={idx} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="py-10 container">
        <div className="flex flex-col w-full justify-center md:flex-row gap-2 md:justify-between pb-10">
          <div className="flex gap-2 flex-wrap ">
            {productCategories.map((cat, idx) => (
              <Button
                key={idx}
                onClick={handleFilterByCategory}
                className={`bg-dark-gray/20 rounded-full hover:bg-gray-400 ${
                  category === cat.toLowerCase() ? "bg-gray-700" : ""
                }`}
                width="w-fit"
              >
                {cat}
              </Button>
            ))}
          </div>
          <select className="bg-transparent" name="Price" id="Price" onChange={handleSortByPrice}>
            <option value="" disabled>Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
            <option value="topReview">Top Review</option>
          </select>
        </div>
        <div className="mt-4 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {product?.length ? (
            product.map((prod, idx) => (
              <div key={idx}>
                <ProductCard product={prod} isLoading={isLoading} />
              </div>
            ))
          ) : (
            <p>No products found for the selected category.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Collection;
