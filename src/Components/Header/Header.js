import React from "react";
import {Link} from "react-router-dom";
import HeaderLinks from "./HeaderLinks";

function Header() {
    return (
        <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light container container-largest" >
                <Link className="navbar-brand" to="/">
                    <img src="/img/logo/logo.svg" alt="Dexatel"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <HeaderLinks/>
                    <div className="navbar-auth">
                        <Link to={'login'}>Log In</Link>
                        <button className="btn btn-primary small">
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
