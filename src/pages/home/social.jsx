import React from "react";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com" className="home__social-icon" target={"_blank"} rel="noreferrer">
                <i className="uil uil-instagram"></i>
            </a>

            <a href="https://www.linkedin.com" className="home__social-icon" target={"_blank"} rel="noreferrer">
                <i className="uil uil-linkedin"></i>
            </a>

            <a href="https://www.twitter.com" className="home__social-icon" target={"_blank"} rel="noreferrer">
                <i className="uil uil-twitter"></i>
            </a>

            <a href="https://www.github.com" className="home__social-icon" target={"_blank"} rel="noreferrer">
                <i className="uil uil-github"></i>
            </a>
        </div>
    );
};

export default Social;
