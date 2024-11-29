import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import Li from "./Ui/Li";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

function NavBar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header
        className={`px-8 md:px-16 lg:px-[80px] xl:px-[110px]  flex justify-between items-center h-[80px] w-full `}
      >
        <div className="w-full flex justify-between items-center ">
          <Link
            to={"/"}
            className="flex items-center gap-1 text-2xl font-medium text-gray-700 cursor-pointer"
          >
            WEAR <span className="text-gray-500 font-bold ">38</span>
          </Link>
          <div className="hidden lg:flex lg:mr-48">
            <ul className="flex gap-10">
              <Link to="/">
                <Li>Home</Li>
              </Link>
              <Link to="/products">
                <Li>Collections</Li>
              </Link>
              <Link to="/about">
                <Li>About</Li>
              </Link>
              <Link to="/contact">
                <Li>Contact us</Li>
              </Link>
            </ul>
          </div>
          {!menu && (
            <IoMenu
              onClick={() => setMenu(!menu)}
              className="text-dark-gray text-4xl flex lg:hidden"
            />
          )}
        </div>
        <div className="hidden lg:flex w-[30%]  justify-end items-center space-x-2 text-xl ">
          <FaUserCircle className="hover:text-gray-600 cursor-pointer" />
          <FaShoppingCart className="hover:text-gray-600 cursor-pointer" />
        </div>
      </header>
      {menu && (
        <div className="fixed right-0 top-0 bottom-0 h-[calc(100vh-80px))] w-full bg-black/30 z-[1000] ">
          <div className="fixed right-0 top-0 bottom-0 w-[60%] bg-white">
            <div className="pt-4 px-8 flex flex-col items-end">
              <IoIosClose
                onClick={() => setMenu(!menu)}
                className="text-dark-gray text-4xl flex lg:hidden f"
              />
            </div>
            <div className="pt-8 ">
              <ul className="flex flex-col items-center gap-4">
                <Link to="/">
                  <Li>Home</Li>
                </Link>
                <Link to="/products">
                  <Li>Collections</Li>
                </Link>
                <Link to="/about">
                  <Li>About</Li>
                </Link>
                <Link to="/contact">
                  <Li>Contact us</Li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
