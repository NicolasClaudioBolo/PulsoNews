import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { Information } from "../Components/Information/Information";

export const Layout = ({ children }) => {
    const location = useLocation().pathname;

    useEffect(() => {
    }, [Layout]);

    return (

        <>
            <Navbar />
            <Information/>
            {children}
            <Footer />
        </>
    );
};
