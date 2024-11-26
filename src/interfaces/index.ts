import { ReactElement } from "react";

export interface ICategory {
  title: string;
  icon: ReactElement;
}
export interface IProduct {
  id: string;
  title: string;
  img: string;
  category: string;
  price: number;
  feature: boolean;
  review: {
    note: number;
    total: number;
  };
  sizes: string[];
  colors: string[];
  description: string;
}
