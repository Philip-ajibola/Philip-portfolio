import React from "react";
import Styles from "./Home.module.css";
import Social from "./social";
import Data from "./data";
import ScrollDown from"./scrollDown";
const Home = () => {

    return (
        <section className={Styles.home__section} id="home">
            <div className={`${Styles.home__container} `}>
                <div className={`${Styles.home__content} grid`}>
                    <Social />

                    <div className={Styles.home__img}></div>

                    <Data />
                </div>
                <ScrollDown/>

            </div>
         </section>
    );
}

export default Home;
