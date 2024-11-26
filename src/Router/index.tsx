import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Collection from "../pages/Collection";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProdcutDetails from "../pages/ProdcutDetails";

export const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProdcutDetails />} />




        <Route path="*" element={<PageNotFound />}/>

    </Route>
))