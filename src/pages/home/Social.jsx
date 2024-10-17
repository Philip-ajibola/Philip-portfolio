import React from "react";
import Styles from "./Home.module.css";

const Social = () => {
    return (
        <div className={Styles.home__social}>
            <a href="https://www.instagram.com/ajibola2973/" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/philip-ajibola-63772623b/" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://x.com/bobbyjay092" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-twitter"></i>
            </a>

            <a href="https://github.com/Philip-ajibola" className={Styles.home__socialIcon} target={"_blank"} >
                <i className="uil uil-github"></i>
            </a>
        </div>

    );
};

export default Social;
