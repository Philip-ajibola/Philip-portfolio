import React from 'react';
import './footer.css'
const Footer = () => {
    return (
       <footer className="footer">
           <div className="footer__container container">
               <h1 className="footer__title">Philip Ajibola</h1>

               <div className="footer__social">
                   <a href="https://www.instagram.com/ajibola2973/" className="footer__social-link"  target={"_blank"}>
                       <i className="uil uil-instagram"></i>
                   </a>

                   <a href="https://www.linkedin.com/in/philip-ajibola-63772623b/" className="footer__social-link"  target={"_blank"}>
                       <i className="uil uil-linkedin"></i>
                   </a>

                   <a href="https://x.com/bobbyjay092" className="footer__social-link"  target={"_blank"}>
                       <i className="uil uil-twitter"></i>
                   </a>

                   <a href="https://github.com/Philip-ajibola" className="footer__social-link" target={"_blank"}>
                       <i className="uil uil-github"></i>
                   </a>

               </div>
               <span className="footer__copy">&#169; Philip Ajibola All rights reserved</span>
           </div>
       </footer>
    );
}

export default Footer;
