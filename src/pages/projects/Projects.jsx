import React, { useState } from 'react';
import "./Projects.css";

const ServiceModal = ({ toggleTab, toggleState, index, title, description, projects }) => {
    return (
        <div className={toggleState === index ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                <h3 className="services__modal-title">{title}</h3>
                <p className="services__modal-description">{description}</p>

                {/* Projects Section */}
                <h4 className="services__modal-subtitle">Projects</h4>
                <ul className="services__modal-projects">
                    {projects.map((project, i) => (
                        <li key={i} className="services__modal-project">
                            <i className="uil uil-folder services__modal-icon"></i>
                            <p className="services__modal-info">
                                {project.projectName} -{" "}
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const ServiceContent = ({ icon, title, toggleTab, index }) => {
    return (
        <div className="services__content">
            <div>
                <i className={`uil ${icon} services__icon`}></i>
                <h3 className="services__title">{title}</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(index)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
        </div>
    );
};

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const serviceData = [
        {
            title: "Frontend Engineer",
            description: "Specializing in intuitive, user-friendly interfaces with modern JavaScript frameworks, I build fast, responsive, and accessible web applications optimized for performance.",
            icon: "uil-web-grid",
            projects: [
                {
                    projectName: "Logistic Application",
                    githubLink: "https://deelogistics-dee-dayos-projects.vercel.app/"
                },
                {
                    projectName: "Login/SignUp Website",
                    githubLink: "https://login-page-ten-kappa.vercel.app/"
                },
                {
                    projectName: "3D-portfolio",
                    githubLink: "https://philip-3d-portfolio.vercel.app"
                },
                {
                    projectName: "Connectivity Website",
                    githubLink: "https://multilconnect-front-end.vercel.app/"
                },
                {
                    projectName: "Connectivity Mobile Application",
                    githubLink: "https://github.com/MultiConnectWeb/multi_connect_mobile"
                },
                {
                    projectName: "E-store Application",
                    githubLink: "https://bobby-store-nu.vercel.app/"
                },
                {
                    projectName: "Uber Clone",
                    githubLink: "https://github.com/Philip-ajibola/uber_clone.git"
                },
                {
                    projectName: "Chat Application",
                    githubLink: "https://github.com/Philip-ajibola/chatApplication"
                },
                {
                    projectName: "Portfolio Website",
                    githubLink: "https://my-portfolio-phi-drab-12.vercel.app/"
                },
                {
                    projectName: "Book Collection Website",
                    githubLink: "https://bookcollections.vercel.app/"
                },
            ]
        },
        {
            title: "Backend Engineer",
            description: "Experienced in building scalable and efficient backend systems, " +
                "ensuring performance and security using Java, Python and JavaScript.",
            icon: "uil-server-network",
            projects: [
                {
                    projectName: "Movie Hub REST API",
                    githubLink: "https://github.com/Philip-ajibola/MavericksHub"
                },
                {
                    projectName: "Connectivity API",
                    githubLink: "https://github.com/MultiConnectWeb/MultiConnect"
                },
                {
                    projectName: "Library Management API",
                    githubLink: "https://github.com/Philip-ajibola/LibraryManagementSystemApp"
                },
                {
                    projectName: "Blog Hub REST API",
                    githubLink: "https://github.com/Philip-ajibola/NaijaBlog"
                },
                {
                    projectName: "Event Management System API ",
                    githubLink: "https://github.com/Philip-ajibola/eventBookingRepo"
                },
                {
                    projectName: "E-Store API ",
                    githubLink: "https://github.com/Philip-ajibola/E-store"
                },
                {
                    projectName: "Expense Tracker Api ",
                    githubLink: "https://github.com/Philip-ajibola/expenseTracker"
                },
                {
                    projectName: "Account Management Api ",
                    githubLink: "https://github.com/Philip-ajibola/account_management_system"
                },

            ]
        },
        {
            title: "Algorithm Developer",
            description: "Proficient in algorithm design and problem-solving, optimizing solutions for complex computational problems.",
            icon: "uil-brain",
            projects: [
                {
                    projectName: "Student Grade Algorithm",
                    githubLink: "https://github.com/Philip-ajibola/FireDrill/tree/main/src/studentGrade"
                },
                {
                    projectName: "Tic Tac Toe Game Algorithm",
                    githubLink: "https://github.com/Philip-ajibola/FireDrill/tree/main/src/ticTacTo"
                },
                {
                    projectName: "Advance Tic Tac Toe Game Algorithm",
                    githubLink: "https://github.com/Philip-ajibola/FireDrill/tree/main/src/ticTacToOverAmbitious"
                },
                {
                    projectName: "TurtleGraphics Algorithm",
                    githubLink: "https://github.com/Philip-ajibola/FireDrill/tree/main/src/turtle"
                },
                {
                    projectName: "Checkout Application Algorithm",
                    githubLink: "https://github.com/Philip-ajibola/FireDrill/blob/main/src/CheckOut.java"
                },
                {
                    projectName: "GeoPolitical Zone Algorithm",
                    githubLink: "https://github.com/Philip-ajibola/FireDrill/blob/main/src/GeoPoliticalZone.java"
                },
                {
                    projectName: "SevenSegment Algorithm",
                    githubLink: "https://github.com/Philip-ajibola/FireDrill/blob/main/src/SevenSegmentDisplay.java"
                },
                {
                    projectName: "Credit Card Validator",
                    githubLink: "https://github.com/Philip-ajibola/FireDrill/tree/main/src/creditCardValidator"
                },
                {
                    projectName: "Credit Card Validator",
                    githubLink: "https://github.com/Philip-ajibola/FireDrill/tree/main/src/creditCardValidator"
                },
                {
                    projectName: "Solving Algorithm using Golang",
                    githubLink: "https://github.com/Philip-ajibola/golang_task"
                },
                {
                    projectName: "Solving Algorithm using Python",
                    githubLink: "https://github.com/Philip-ajibola/pythonProject"
                },
            ]
        }
    ];

    return (
        <section className="services section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">What I Have Done</span>

            <div className="services__container container grid">
                {serviceData.map((service, index) => (
                    <React.Fragment key={index}>
                        <ServiceContent
                            icon={service.icon}
                            title={service.title}
                            toggleTab={toggleTab}
                            index={index + 1}
                        />
                        <ServiceModal
                            toggleTab={toggleTab}
                            toggleState={toggleState}
                            index={index + 1}
                            title={service.title}
                            description={service.description}
                            projects={service.projects}
                        />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Projects;
