import Button from "../Ui/Button";

function Cover() {
  return (
    <>
      <div className="homeCover h-[200px] lg:h-[300px] flex flex-col justify-center items-center py-10 space-y-2 ">
        <h1 className="text-white text-xl lg:text-2xl xl:text-3xl xl:font-bold font-semibold">
          Enhance Your Everyday Style
        </h1>
        <p className="text-pretty text-sm lg:text-base text-light-gray/65 text-center">
        Upgrade your wardrobe with Wear 38. Our designs bring comfort and confidence
        </p>
        <Button
          width="w-fit"
          className="border-2 border-light-gray hover:bg-light-gray/50 text-dark-gray mx-auto mt-10"
        >
          View All Products
        </Button>
      </div>
    </>
  );
}

export default Cover;