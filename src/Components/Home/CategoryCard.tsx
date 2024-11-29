import { useNavigate } from "react-router-dom";
import { ICategory } from "../../interfaces";
import { IoIosArrowDropright } from "react-icons/io";
import { useFetchContext } from "../../hooks/useFetchContext";

interface IProps {
    products:ICategory,
}

function CategoryCard({products}: IProps) {
  const {data,setCategory}=useFetchContext()
  const navigate=useNavigate()
  
  const handleCategory=()=>{
    if(!data){
      setCategory("All")
    }else{
      setCategory(products.title.toLowerCase())
    }
    navigate("/products")

  }
  return (
    <>
    
      <div className="flex-1 flex justify-between items-center h-[100px]  border-2 border-light-gray rounded-lg px-4 py-2">
        <div className="flex space-x-2 items-center">
          <div className="h-12 w-12 bg-light-gray rounded-full flex items-center justify-center text-2xl text-dark-gray">
            {products.icon}
          </div>
          <h1 className="text-2xl text-dark-gray">{products.title.toUpperCase()}</h1>
        </div>
        <span  onClick={handleCategory} className="  hover:text-gray-400 text-2xl"><IoIosArrowDropright /></span>
      </div>
    </>
  );
}

export default CategoryCard;
