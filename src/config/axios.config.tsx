import axios from "axios";

const axiosInstance=axios.create({
    baseURL:"https://ecommerce-api-sand.vercel.app",
    timeout:2000
})
export default axiosInstance