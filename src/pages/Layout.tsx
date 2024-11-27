import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Layout() {
  return (
    <>
      <div>
        <NavBar />
        <ScrollRestoration />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
