import { ReactNode } from "react";

interface IProps {
  bgColor?: string,
  children?:ReactNode
}

function Square({children,bgColor}: IProps) {
  return (
    <>
      <div className="h-9 w-9 border border-dark-gray/30 cursor-pointer flex items-center justify-center text-gray-500 hover:text-gray-700" style={{backgroundColor:bgColor}}>{children}</div>
    </>
  );
}

export default Square;
