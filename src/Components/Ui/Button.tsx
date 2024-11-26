import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: "w-fit" | "w-full";
  className?: string;
  children: ReactNode;
}

function Button({ width = "w-fit", className, children, ...rest }: IProps) {
  return (
    <>
      <button
        className={`${width} ${className} px-3 py-2 rounded-md text-white`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
