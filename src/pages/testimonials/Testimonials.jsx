import React from 'react';
import './testimonials.css';
import { Data } from './Data';

const Testimonials = () => {
    return (
        <section className="testimonial container section" id="testimonials">
            <h2 className="section__title">Those I've worked with say...</h2>
            <span className="section__subtitle">Testimonials</span>

            <div className="testimonial__grid">
                {Data.map(({ id, title, description }) => (
                    <div className="testimonial__card" key={id}>
                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial__description">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
