import React from 'react';
import styles from './index.module.css'; // Importing as styles for CSS Modules

const Navbar = () => {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav + " container"}>
                    <a href="index.html" className={styles.nav_logo}> Abolaji</a>

                    <div className={styles.nav__menu}>
                        <ul className={styles.nav__list + " grid"}>
                            <li className={styles.nav__item}>
                                <a href="#home" className={styles.nav__link}>
                                    <i className="uil uil-estate nav_icon"></i> Home
                                </a>
                            </li>
                            <li className={styles.nav__item}>
                                <a href="#about" className={styles.nav__link}>
                                    <i className="uil uil-user nav_icon"></i> About
                                </a>
                            </li>

                            <li className={styles.nav__item}>
                                <a href="#skills" className={styles.nav__link}>
                                    <i className="uil uil-file-alt nav_icon"></i> Skills
                                </a>
                            </li>

                            <li className={styles.nav__item}>
                                <a href="#services" className={styles.nav__link}>
                                    <i className="uil uil-briefcase-alt nav_icon"></i> Services
                                </a>
                            </li>

                            <li className={styles.nav__item}>
                                <a href="#portfolio" className={styles.nav__link}>
                                    <i className="uil uil-scenery nav_icon"></i> Portfolio
                                </a>
                            </li>

                            <li className={styles.nav__item}>
                                <a href="#contact" className={styles.nav__link}>
                                    <i className="uil uil-message nav_icon"></i> Contact
                                </a>
                            </li>
                        </ul>

                        <i className={`uil uil-times ${styles.nav__close}`}></i>
                    </div>

                    <div className={styles.nav__toggle}>
                        <i className="uil uil-apps nav_icon"></i>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
