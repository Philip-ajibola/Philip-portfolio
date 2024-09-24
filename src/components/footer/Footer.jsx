import React from 'react';
import './footer.css'
const Footer = () => {
    return (
       <footer className="footer">
           <div className="footer__container container">
               <h1 className="footer__title">Abolaji</h1>
               <ul className="footer__list">
                   <li>
                       <a href="#about" className="footer__link">About</a>
                   </li>
                   <li>
                       <a href="#projects" className="footer__link">Projects</a>
                   </li>
                   <li>
                       <a href="#testimonials" className="footer__link">Testimonials</a>
                   </li>

               </ul>

               <div className="footer__social">
                   <a href="https://www.instagram.com/yung_saviour_?igsh=NTc4MTIwNjQ2YQ==" className="footer__social-link"  target={"_blank"}>
                       <i className="uil uil-instagram"></i>
                   </a>

                   <a href="https://www.linkedin.com/in/abolaji-abisoye-15a0b41b1/" className="footer__social-link"  target={"_blank"}>
                       <i className="uil uil-linkedin"></i>
                   </a>

                   <a href="https://x.com/Aabolaji2k21" className="footer__social-link"  target={"_blank"}>
                       <i className="uil uil-twitter"></i>
                   </a>

                   <a href="https://github.com/Abolaji2K21" className="footer__social-link" target={"_blank"}>
                       <i className="uil uil-github"></i>
                   </a>

               </div>
               <span className="footer__copy">&#169; Abisoye Abolaji. All rights reserved</span>
           </div>
       </footer>
    );
}

export default Footer;
