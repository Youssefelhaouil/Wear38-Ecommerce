import Image from "../Ui/Image";

function Features() {
  return (
    <>
      <div className="container mt-10">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-black/80 text-2xl tracking-wider">
            Features
          </h1>
          <p className=" text-black/40 text-base">New Arrivals </p>
        </div>
        <div className="pt-4 flex flex-col items-center justify-center md:flex-row md:gap-6 gap-4 h-auto md:h-[700px]">
          <Image
            url="./arival.png"
            alt="New Arrivals image"
            classname=" h-[350px] w-full md:h-[88%] md:w-[60%]"
          />
          <div className="flex flex-col gap-4 md:h-[600px] md:w-[40%]">
            
            <Image
              url="./arival2.png"
              alt="New Arrivals image 3"
              classname="h-1/2 "
            />
            <Image
              url="./Arival1.png"
              alt="New Arrivals image 2"
              classname="h-[48%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
