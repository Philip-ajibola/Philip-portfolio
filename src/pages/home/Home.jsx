import React from "react";
import Styles from "./Home.module.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import About from "../about/About"
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Qualification from "../qualification/Qualification";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
    return (
        <section className={Styles.home__section} id="home">
            <div className={`${Styles.home__container} container grid`}>
                <div className={`${Styles.home__content} grid`}>
                    <Social />

                    <div className={Styles.home__img}></div>

                    <Data />
                </div>

                <ScrollDown />

                {/* Render the About component */}
                <About />
                <Skills/>
                <Projects/>
                <Qualification/>
                <Testimonials/>
            </div>
        </section>
    );
}

export default Home;
