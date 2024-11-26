import { LiHTMLAttributes, ReactNode } from "react";

interface IProps extends LiHTMLAttributes<HTMLLIElement>{
  children: ReactNode,
  className?:string
}

function Li({children,className ,...rest}: IProps) {
  return <li className={`${className} flex space-x-1  font-medium text-base cursor-pointer hover:text-gray-600`} {...rest}>{children}</li>;
}

export default Li;
