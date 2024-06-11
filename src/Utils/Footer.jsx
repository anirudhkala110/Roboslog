import React from 'react'
import Logo from './logo.png'
const Footer = () => {
    return (
        <div>
            <section class="footer-section" id="footer_section">
                <div class="container">
                    <div class="middle-portion">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div class="about_col">
                                    <a href="/">
                                        <figure>
                                            <img src={Logo} alt="RoboSlog"  class="img-fluid" style={{maxWidth:'150px',filter:'invert(1)'}} />
                                        </figure>
                                    </a>
                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <p class="text-size-16">Qorem ipsum dolor sit amet, consectetur adipiscing elit aut elit tellus luctus nec ulla corper mattis aulvinar daibus leo.</p>
                                        </li>
                                        <li class="icons hover-effect"><a href="#"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a></li>
                                        <li class="icons hover-effect"><a href="#"><i class="fa-brands fa-twitter" aria-hidden="true"></i></a></li>
                                        <li class="icons hover-effect"><a href="#"><i class="fa-brands fa-linkedin-in mr-0" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-3 col-xs-12 d-md-block d-none">
                                <div class="links_col">
                                    <h4>Useful Links</h4>
                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <span></span>
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <span></span>
                                            <a href="/about">About</a>
                                        </li>
                                        <li>
                                            <span></span>
                                            <a href="/services">Services</a>
                                        </li>
                                        <li>
                                            <span></span>
                                            <a href="/projects">Projects</a>
                                        </li>
                                        <li>
                                            <span></span>
                                            <a href="/contact">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-sm-block d-none">
                                <div class="contact_col">
                                    <h4>Contact Us</h4>
                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <i class="fa-solid fa-phone"></i>
                                            <a href="tel:+91 80051 83363" class="text-decoration-none">+91 80051 83363</a>
                                        </li>
                                        <li class="contact_mail">
                                            <i class="fa-sharp fa-solid fa-envelope"></i>
                                            <a href="mailto:Info@immersiveai.com" class="text-decoration-none">aihomeslog@gmail.com</a>
                                        </li>
                                        <li class="mb-0">
                                            <i class="fa-solid fa-location-dot location"></i>
                                            <span class="text-size-16">21 King Street Melbourne, 3000, Australia</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 col-12 text-sm-left text-center d-lg-block d-none">
                                <div class="footer-info-content">
                                    <h4>Newsletter</h4>
                                    <input type="email" name="email" id="emailadd" class="form-control" placeholder="Enter Email:" />
                                    <div class="input-group-append form-button">
                                        <button class="btn" name="btnsubmit" id="submitbtn" type="submit"><i class="fa-solid fa-paper-plane"></i></button>
                                    </div>
                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <input type="checkbox" id="check" name="check" />
                                            <span>Quis autem vel eum iure reprehenderit rui in ea voluptate esse.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer_right_shape top_bottom_shape">
                        <figure class="mb-0"><img src="./assets/images/footer_right_shape.png" alt="" class="img-fluid" /></figure>
                    </div>
                    <div class="footer_background_shape left_right_shape">
                        <figure class="mb-0"><img src="./assets/images/footer_background_shape.jpg" alt="" /></figure>
                    </div>
                </div>
                <div class="bottom-portion">
                    <div class="copyright col-xl-12">
                        <p>Copyright © 2019 RoboSlog All rights reserved.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer