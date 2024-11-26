import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

interface IProps {}

function Footer({}: IProps) {
  return (
    <>
      <div className=" bg-light-gray  ">
        <div className="container max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2   mx-auto">
          <div className="p-5">
            <h3 className="font-bold text-xl text-gray-500">WEAR 38</h3>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-[#242323]  font-bold">
              Resources
            </div>
            <Link to={"/products"} className="my-3 block hover:text-[#bbb9b9] ">
              Collections
            </Link>
            <Link to={"/about"} className="my-3 block hover:text-[#bbb9b9]">
              About
            </Link>
            <Link to={"/contact"} className="my-3 block hover:text-[#bbb9b9]">
              Contact
            </Link>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-[#242323] font-bold">
              Support
            </div>
            <a className="my-3 block hover:text-[#bbb9b9]">Help Center</a>
            <a className="my-3 block hover:text-[#bbb9b9]">Privacy Policy</a>
            <a className="my-3 block hover:text-[#bbb9b9]">Conditions</a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-[#242323] font-bold">
              Contact us
            </div>
            <a className="my-3 block hover:text-[#bbb9b9]">
              Ofppt, Ouarzazate, MA
            </a>
            <a className="my-3 block hover:text-[#bbb9b9]">
              Wear38@company.com
            </a>
          </div>
        </div>
        <div className="pt-2">
          <div
            className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800  text-xl gap-1
      max-w-screen-lg items-center justify-center"
          >
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
