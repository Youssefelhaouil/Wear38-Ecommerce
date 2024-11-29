import { FaArrowRight } from "react-icons/fa";
import Button from "../Ui/Button";
import HeroImg from "./HeroImg";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div className="bg-[#e0dfdf] h-auto lg:h-[calc(100vh-140px)] w-full px-[40px] lg:px-[80px] xl:pl-[120px] py-10 flex flex-col-reverse lg:flex-row items-center ">
        <div className="flex justify-between ">
          <div className="flex flex-col items-center lg:items-start space-y-5 ">
            <div className="flex flex-col  space-y-3">
              <h1 className="font-semibold text-2xl text-center lg:text-start lg:text-4xl text-black/80 ">
                Wear the Boldness of You
              </h1>
              <p className="text-base tracking-widest text-pretty text-center text-black text-opacity-70  lg:text-start">
                Discover the essence of Moroccan craftsmanship with Wear 38.
                Bold, timeless, and designed for the modern spirit wear your
                story.
              </p>
            </div>
            <Link to={"/products"}>
              <Button className="flex gap-x-2 items-center  bg-[#242323] hover:bg-[#707070] ">
                Our Collections <FaArrowRight />
              </Button>
            </Link>
          </div>
        </div>
        <HeroImg />
      </div>
    </>
  );
}

export default HeroSection;
