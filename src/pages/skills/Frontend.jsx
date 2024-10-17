import React from "react";
import techStack from "../../assets/icons";
const Frontend = () => {
    return (
        <div className='mother'>
                <h3>Technical Skills (Stacks)</h3>
            <div className="skills__content">
                {
                    techStack.map((stack) => (
                        <div className='stacks'>
                            <img
                                src={stack.image}
                                alt={stack.name}
                                className='skills__image'
                            />
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Frontend;
