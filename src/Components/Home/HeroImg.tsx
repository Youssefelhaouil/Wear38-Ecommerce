function HeroImg() {
  return (
    <>
      <div className="h-full w-full flex justify-center lg:justify-end items-center ">
        <div className="h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] bg-[#dad5d5] rounded-full ">
          <img
            src="./Hero.png"
            alt="Hero Section Image"
            className="h-[300px] w-[200px] lg:h-[500px] lg:w-[400px]  saturate-50"
          />
        </div>
      </div>
      
    </>
  );
}

export default HeroImg;
