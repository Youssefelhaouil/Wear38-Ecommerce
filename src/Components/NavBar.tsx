import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import Li from "./Ui/Li";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <>
      <header className="container  flex justify-between items-center h-[80px]   ">
        <div className="w-[50%] flex justify-between items-center ">
          <h1 className="flex items-center gap-1 text-2xl font-medium text-gray-700 cursor-pointer">
            WEAR <span className="text-gray-500 font-bold ">38</span>
          </h1>
          <div>
            <ul className="flex gap-10">
                <Link to="/"><Li>Home</Li></Link>
                <Link to="/products"><Li>Collections</Li></Link>
                <Link to="/about"><Li>About</Li></Link>
                <Link to="/contact"><Li>Contact us</Li></Link>
            </ul>
          </div>
        </div>
        <div className="w-[30%] flex justify-end items-center space-x-2 text-xl ">
            <FaUserCircle className="hover:text-gray-600 cursor-pointer"/>
            <FaShoppingCart className="hover:text-gray-600 cursor-pointer"/>
        </div>
      </header>
    </>
  );
}

export default NavBar;
