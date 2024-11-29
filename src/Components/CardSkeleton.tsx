interface IProps {}

function CardSkeleton({}: IProps) {
  return (
    <>
      <div className="relative grid grid-rows-1 h-[330px] border-2 rounded-md p-3  space-y-1 shadow-sm cursor-pointer hover:shadow-md">
        <div className="flex flex-col">
          <span className="h-[80%] w-full rounded-xl bg-dark-gray/5"></span>
          <span className=" h-4 w-full text-xl bg-dark-gray/5 pl-1 pt-2 rounded-full  "></span>
          <div className="flex justify-between items-center gap-2 pt-1">
            <h4 className="h-4 font-bold text-dark-gray/40 rounded-full"></h4>
            <span className="flex  bg-dark-gray/5 h-4 w-full rounded-full "></span>
            <span className="flex  bg-dark-gray/5 h-4 w-full rounded-full "></span>
            <span className="flex  bg-dark-gray/5 h-4 w-full rounded-full "></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSkeleton;
