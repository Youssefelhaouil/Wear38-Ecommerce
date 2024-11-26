import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../config/axios.config";

interface IPram{
    queryKey:string[],
    url:string,
}
const useFetch = ({queryKey,url}:IPram) => {
  return useQuery({
    queryKey:[`${queryKey}`],
    queryFn: async () => {
      const {data} = await axiosInstance.get(`${url}`);
      return data;
    },
  });
};
export default useFetch;