import { Categories } from "../../Data";
import CategoryCard from "./CategoryCard";

interface IProps {}

function Category({}: IProps) {
  return (
    <>
      <div className="container pt-8  ">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-black/80 text-2xl tracking-wider">Our Collections</h1>
          <p className=" text-black/40 text-base">Explore Our Collections</p>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 pt-6">
          {Categories.map((category,idx)=>(
            <CategoryCard products={category} key={idx}/>
          ))}
        </div>
      </div>

    </>
  );
}

export default Category;
