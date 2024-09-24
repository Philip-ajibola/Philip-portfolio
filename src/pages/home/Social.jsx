import React from "react";
import Styles from "./Home.module.css";

const Social = () => {
    return (
        <div className={Styles.home__social}>
            <a href="https://www.instagram.com/yung_saviour_?igsh=NTc4MTIwNjQ2YQ==" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/abolaji-abisoye-15a0b41b1/" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://x.com/Aabolaji2k21" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-twitter"></i>
            </a>

            <a href="https://github.com/Abolaji2K21" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-github"></i>
            </a>
        </div>

    );
};

export default Social;
