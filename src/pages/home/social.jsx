import React from "react";
import Styles from "./index.module.css";

const Social = () => {
    return (
        <div className={Styles.home__social}>
            <a href="https://www.instagram.com" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-instagram"></i>
            </a>

            <a href="https://www.linkedin.com" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://www.twitter.com" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-twitter"></i>
            </a>

            <a href="https://www.github.com" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-github"></i>
            </a>
        </div>

    );
};

export default Social;
