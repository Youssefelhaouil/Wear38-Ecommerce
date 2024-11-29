function HeroImg() {
  return (
    <>
      <div className="h-full w-full flex justify-center lg:justify-end items-center">
        <div className="h-[50vh] w-[50vh] lg:h-[70vh] lg:w-[70vh] bg-[#dad5d5] rounded-full">
          <img
            src="./Hero.png"
            alt="Hero Section Image"
            className="h-[40vh] w-[30vh] ml-10 mt-5 lg:ml-0 lg:mt-0 lg:h-[70vh] lg:w-[60vh] saturate-50"
          />
        </div>
      </div>
    </>
  );
}

export default HeroImg;
