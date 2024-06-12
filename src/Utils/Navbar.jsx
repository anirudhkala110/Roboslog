import React from 'react'
import './Main.css'
import { NavLink, useParams } from 'react-router-dom'
import Logo from './logo.png'

const Navbar = () => {
    return (
        <div>
            <header style={{ boxShadow: '0px 0px 5px 1px #00a6ff73' }}>
                <div className="container" >
                    <nav id="navbar" className="navbar navbar-expand-lg navbar-light d-flex justify-content-between align-items-center">
                        <a className="navbar-brand" href="/"><figure className="mb-0 d-flex align-items-center justify-content-center"><img src={Logo} style={{ maxHeight: '45px', maxWidth: '45px', filter: 'invert(1)' }} alt="RoboSlog" className="img-fluid" /><div className='mx-2 text-white' style={{ fontFamily: 'Manrope', letterSpacing: '2px' }}>ROBOSLOG</div></figure></a>
                        <button className="navbar-toggler collapsed" style={{ width: '55px' }} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" style={{ minWidth: '180px', position: 'relative', zIndex: "1000" }} id="navbarSupportedContent">
                            <ul className="navbar-nav ps-0" style={{ listStyle: 'none' }}>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false"> Pages </NavLink>
                                    <div className="dropdown-menu drop-down-content">
                                        <ul className="list-unstyled drop-down-pages">
                                            <li className="nav-item">
                                                <NavLink className="dropdown-item nav-link" to="/faqs">FAQ's</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="dropdown-item nav-link" to="/projects">Projects</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="dropdown-item nav-link" to="/team">Our Team</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li> */}
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/faqs">FAQs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' target='__blank' to='https://wa.me/+918005183363'><b class="bi bi-whatsapp fs-3"></b> </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar