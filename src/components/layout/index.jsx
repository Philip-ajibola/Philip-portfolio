import Navbar from "../navbar";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer";
import ScrollUp from "../../pages/scrollup/ScrollUp";
import React from "react";

const Layout = () => {
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <ScrollUp/>
        </>

    )


}

export default Layout;