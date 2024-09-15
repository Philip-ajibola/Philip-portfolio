import React, { useState } from 'react';
import styles from './index.module.css'; // Importing as styles for CSS Modules

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#home');
    const[Toggle, showMenu] = useState(false);

    return (
            <header className={styles.header}>
                <nav className={`${styles.nav} container`}>
                    <a href="index.html" className={styles.nav__logo}>Abolaji</a>

                    <div className={`${styles.nav__menu} ${Toggle ? styles.show_menu : ''}`}>
                        <ul className={`${styles.nav__list} grid`}>
                            <li className={styles.nav__item}>
                                <a
                                    href="#home"
                                    className={`${styles.nav__link} ${activeNav === '#home' ? styles.active_link : ''}`}
                                    onClick={() => setActiveNav('#home')}
                                >
                                    <i className={`uil uil-estate ${styles.nav__icon}`}></i> Home
                                </a>
                            </li>

                            <li className={styles.nav__item}>
                                <a
                                    href="#about"
                                    className={`${styles.nav__link} ${activeNav === '#about' ? styles.active_link : ''}`}
                                    onClick={() => setActiveNav('#about')}
                                >
                                    <i className={`uil uil-user ${styles.nav__icon}`}></i> About
                                </a>
                            </li>

                            <li className={styles.nav__item}>
                                <a
                                    href="#skills"
                                    className={`${styles.nav__link} ${activeNav === '#skills' ? styles.active_link : ''}`}
                                    onClick={() => setActiveNav('#skills')}
                                >
                                    <i className={`uil uil-file-alt ${styles.nav__icon}`}></i> Skills
                                </a>
                            </li>

                            <li className={styles.nav__item}>
                                <a
                                    href="#services"
                                    className={`${styles.nav__link} ${activeNav === '#services' ? styles.active_link : ''}`}
                                    onClick={() => setActiveNav('#services')}
                                >
                                    <i className={`uil uil-briefcase-alt ${styles.nav__icon}`}></i> Services
                                </a>
                            </li>

                            <li className={styles.nav__item}>
                                <a
                                    href="#portfolio"
                                    className={`${styles.nav__link} ${activeNav === '#portfolio' ? styles.active_link : ''}`}
                                    onClick={() => setActiveNav('#portfolio')}
                                >
                                    <i className={`uil uil-scenery ${styles.nav__icon}`}></i> Portfolio
                                </a>
                            </li>

                            <li className={styles.nav__item}>
                                <a
                                    href="#contact"
                                    className={`${styles.nav__link} ${activeNav === '#contact' ? styles.active_link : ''}`}
                                    onClick={() => setActiveNav('#contact')}
                                >
                                    <i className={`uil uil-message ${styles.nav__icon}`}></i> Contact
                                </a>
                            </li>
                        </ul>

                        <i className={`uil uil-times ${styles.nav__icon} ${styles.nav__close}`} onClick={() => showMenu(!Toggle)}></i>
                    </div>

                    <div className={styles.nav__toggle} onClick={() => showMenu (!Toggle)}>
                        <i className={`uil uil-apps ${styles.nav__icon}`}></i>
                    </div>
                </nav>
            </header>
    );
}

export default Navbar;
