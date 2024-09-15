import React from "react";
import Styles from "./index.module.css";
import Social from "./social";
import Data from "./data";

const Home = () => {

    return (
        <section className={Styles.home} id="home">
            <div className={`${Styles.home__container} container grid`}>
                <div className={`${Styles.home__content} grid`}>
                    <Social />

                    <div className={Styles.home__img}></div>

                    <Data />
                </div>
            </div>
        </section>
    );
}

export default Home;
