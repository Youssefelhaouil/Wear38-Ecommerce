import { FaStar } from "react-icons/fa";
import { IProduct } from "../interfaces";
import Image from "./Ui/Image";
import { Link } from "react-router-dom";

interface IProps {
  isLoading: boolean;
  product: IProduct;
}

function ProductCard({ isLoading, product }: IProps) {
  return (
    <>
      {!isLoading ? (
        <Link to={`/products/${product.id}`}>
          <div className="relative grid grid-rows-1 h-[330px] border-2 rounded-md p-3  space-y-1 shadow-sm cursor-pointer hover:shadow-md">
            <div className="flex flex-col">
              <Image
                url={product.img}
                alt={product.title}
                classname="h-[80%] w-full rounded-xl"
              />
              <h1 className=" font-semibold text-xl text-dark-gray/80 pl-1 pt-2  ">
                {product.title}
              </h1>
              <div className="flex justify-between items-center pt-1">
                <h4 className="text-xl font-bold text-dark-gray/40">
                  ${product.price.toLocaleString("en-US")}
                </h4>
                <div className="flex text-base text-dark-gray/80 font-medium">
                  {product.review.note}
                  <FaStar className="text-[#ffe234] text-xl" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default ProductCard;
