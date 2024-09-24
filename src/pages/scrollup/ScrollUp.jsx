import React, { useEffect } from "react";
import "./scrollup.css";

const ScrollUp = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleScroll = () => {
                const scrollUp = document.querySelector(".scrollup");
                if (scrollUp) {
                    if (window.scrollY >= 560) {
                        scrollUp.classList.add("show-scroll");
                    } else {
                        scrollUp.classList.remove("show-scroll");
                    }
                }
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);

    return (
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
};

export default ScrollUp;
