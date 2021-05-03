import React from 'react';
import {NavLink} from "react-router-dom";
import {routes} from '../../Constatns/constants'

function HeaderLinks() {
    const handleClick = (e,el) => {

        if (el.subRoutes.length) e.preventDefault()
    }
    return (
        <ul className="navbar-nav">
            {routes.map((el, i) => {
                return (
                    <li className={`nav-item ${el.subRoutes.length ? 'dropdown' : ''}`} key={i}>
                        <NavLink className="nav-link" to={el.link ? el.link : ''}
                                 id={`navbarDropdown_${i+1}`}
                                 // isActive={() => el.subRoutes.map((e) => {
                                 //     return e.link
                                 // }).includes(path.replace('/', ''))}
                                 data-toggle={el.subRoutes.length ? 'dropdown' : ''}
                                 aria-haspopup={el.subRoutes.length}
                                 aria-expanded={!!el.subRoutes.length}
                                 onClick={(e) => handleClick(e,el)}>
                            <span>{el.name}</span>
                        </NavLink>
                        {el.subRoutes.length ? (
                            <ul className="nav-sublinks dropdown-menu row" aria-labelledby={`navbarDropdown_${i+1}`}>
                                {el.subRoutes.map((elem, index) => {
                                    return (
                                        <li key={index} className="nav-item col-md-6">
                                            <NavLink className="nav-link" to={elem.link}>
                                                <span></span>
                                                <span>{elem.name}</span>
                                            </NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        ):''}
                    </li>
                )
            })}
        </ul>
    )
}

export default HeaderLinks
