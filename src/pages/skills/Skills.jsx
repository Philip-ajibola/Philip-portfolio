import React from "react";
import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>

            <div className="skills__container container grid">
                <Backend/>
                <Frontend/>
            </div>
        </section>
    );
}

export default Skills;