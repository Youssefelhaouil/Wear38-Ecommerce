import {  useNavigate, useParams } from "react-router-dom";
import { useFetchContext } from "../hooks/useFetchContext";
import { FaArrowLeft } from "react-icons/fa";
import Image from "../Components/Ui/Image";
import { Rate } from "antd";
import Square from "../Components/Square";

interface IProps {}

function ProdcutDetails({}: IProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useFetchContext();
  const ProductDetails = data?.find((product) => product.id === Number(id));

  if (isLoading) return <h1>lOADING</h1>;

  const goBack=()=>{
    navigate(-1)
  }

  return (
    <>
      <div className="container pt-4 lg:pt-10">
        <button
          onClick={goBack}
          className="py-1 px-2 mb-2 text-dark-gray/60 cursor-pointer flex items-center text-sm group   border-2 border-dark-gray/10 w-fit rounded-md"
        >
          <FaArrowLeft className="transition-transform duration-300 transform group-hover:-translate-x-2" />{" "}
          GO BACK
        </button>
        <div className="flex flex-col lg:flex-row justify-center  gap-2 lg:gap-10 py-10 ">
          <Image
            url={`${ProductDetails?.img}`}
            alt={`${ProductDetails?.title}`}
            classname="lg:w-[90%] h-[300px] lg:h-[500px] w-full border-2 border-dark-gray/10 p-2"
          />
          <div className="lg:w-full pl-1 lg:pl-0 flex flex-col gap-1 py-10 ml-4">
            <h1 className="font-semibold text-dark-gray/90 text-xl lg:text-2xl xl:text-3xl ">
              {ProductDetails?.title.toUpperCase()}{" "}
              {ProductDetails?.category.toUpperCase()}
            </h1>
            <p className="font-semibold text-dark-gray/70 text-xl lg:text-2xl xl:text-3xl py-2 ">
              ${ProductDetails?.price}
              <span className="text-base pl-2 text-dark-gray/20">
                (MRP incl. of all taxes)
              </span>
            </p>
            <div className="flex items-center space-x-1 py-2">
              <Rate disabled defaultValue={ProductDetails?.review.note} />
              <span className="text-medium pl-2 text-dark-gray/80">
                {" "}
                ({ProductDetails?.review.total})
              </span>
            </div>
            <h1 className="text-xl text-dark-gray/40 pt-2">Color</h1>
            <div className="flex gap-2 flex-wrap ">
              {ProductDetails?.colors.map((color: string) => (
                <Square bgColor={color} />
              ))}
            </div>
            <h1 className="text-xl text-dark-gray/40 pt-2">Size</h1>
            <div className="flex gap-2 flex-wrap py-2">
              {ProductDetails?.sizes.map((size: string) => (
                <Square>{size}</Square>
              ))}
            </div>
            <h1 className="text-xl text-dark-gray/40 pt-2">Descrption</h1>
            <p className="text-pretty text-base text-dark-gray/80">
              {ProductDetails?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProdcutDetails;
