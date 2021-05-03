import React from "react";
import {footerLinks} from "../../Constatns/constants";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-info text-center">Dexatel aims to build a better future where technology creates good
                connections
                and communication for everyone and everywhere.
            </div>
            <div className="container container-largest">
                <div className="footer-links row">
                    {footerLinks.map((el,i)=>{
                        return(
                            <div className="col-6 col-md-4 col-lg" key={i}>
                                <div className="footer-links-title">{el.title}</div>
                                <ul>
                                    {el.links.map((element,index)=>{
                                        return (
                                            <li key={index}>
                                                <Link className="footer-links-item" to={'/'}>{element.name}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="container container-largest">
                <div className="row text-center footer-contact">
                    <div className="col-md-12">
                        <a href="tel:+372 61 48009">+372 61 48009</a>
                        <a href="mailto:sales@dexatel.com">sales@dexatel.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
