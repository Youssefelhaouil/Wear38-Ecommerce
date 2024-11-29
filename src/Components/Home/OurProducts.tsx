import ProductCard from "../ProductCard";
import { IProduct } from "../../interfaces";
import { useFetchContext } from "../../hooks/useFetchContext";
import CardSkeleton from "../CardSkeleton";

function OurProducts() {
  
  const { data, isLoading } = useFetchContext();
  const feature = data?.filter((dt) => dt.feature === true);

  if (isLoading) {
    return (
      <div className="container mt-4 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {feature?.map((ft) => (
          <CardSkeleton key={ft.id} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="container pt-8 pb-10">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-black/80 text-2xl tracking-wider">
            Our Products
          </h1>
          <p className=" text-black/40 text-base">Curated just for you </p>
        </div>
        <div className="mt-4 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {feature?.map((product: IProduct, idx: number) => (
              <div key={idx}>
                <ProductCard product={product} isLoading={isLoading} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default OurProducts;
