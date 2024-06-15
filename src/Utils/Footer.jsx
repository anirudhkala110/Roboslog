import React from 'react'
import Logo from './logo.png'
const Footer = () => {
    return (
        <div>
            <section class="footer-section mt-5" id="footer_section">
                <div class="container">
                    <div class="middle-portion pt-5">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div class="about_col">
                                    <a href="/" className='text-decoration-none'>
                                        <figure>
                                            <img src={Logo} alt="RoboSlog" class="img-fluid" style={{ maxWidth: '100px', filter: 'invert(1)' }} />
                                            <br />
                                            <strong className=' text-white ' style={{ textDecoration: 'none', marginTop: '50px' }}>
                                                RoboSlog
                                            </strong>
                                        </figure>
                                    </a>
                                    <ul class="list-unstyled mb-0">
                                        {/* <li>
                                            <p class="text-size-16">ROBOSLOG™ is one of the distinguished leading suppliers for all kinds of Robotics and Automation Services. We aim to create a revolution in the field of Robotics industry by helping industries, Disabled and students and providing them high-quality products and services. Also providing Web Services like Domain, Web designing & Ready to use App at an affordable cost.</p>
                                        </li> */}
                                        <li class="icons hover-effect"><a href="https://www.facebook.com/roboslog"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a></li>
                                        <li class="icons hover-effect"><a href="https://www.instagram.com/roboslog/"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a></li>
                                        <li class="icons hover-effect"><a href="https://www.linkedin.com/company/roboslog/mycompany/"><i class="fa-brands fa-linkedin-in mr-0" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-3 col-xs-3 d-md-block d-sm-block">
                                <div class="links_col showInLowScreen">
                                    <h4>Useful Links</h4>
                                    <span class="list-unstyled mb-0">
                                        <button className='m-1 btn btn-outline-primary border-0' style={{ width: 'max-content' }} >
                                            <span></span>
                                            <a className='text-decoration-none text-white' style={{ width: 'fit-content', minWidth: '150px !important' }} href="/">Home</a>
                                        </button>
                                        <button className='m-1 btn btn-outline-primary border-0' style={{ width: 'max-content' }} >
                                            <span></span>
                                            <a className='text-decoration-none text-white' style={{ width: 'fit-content', minWidth: '150px !important' }} href="/about">About</a>
                                        </button>
                                        {/* <li>
                                            <span></span>
                                            <a href="/services">Services</a>
                                        </li> */}
                                        <button className='m-1 btn btn-outline-primary border-0' style={{ width: 'max-content' }} >
                                            <span></span>
                                            <a className='text-decoration-none text-white' style={{ width: 'fit-content', minWidth: '150px !important' }} href="/projects">Projects</a>
                                        </button>
                                        <button className='m-1 btn btn-outline-primary border-0' style={{ width: 'max-content' }} >
                                            <span></span>
                                            <a className='text-decoration-none text-white' style={{ width: 'fit-content', minWidth: '150px !important' }} href="/faqs">FAQs</a>
                                        </button>
                                        <button className='m-1 btn btn-outline-primary border-0' style={{ width: 'max-content' }} >
                                            <span></span>
                                            <a className='text-decoration-none text-white' style={{ width: 'fit-content', minWidth: '150px !important' }} href="/contact">Contact Us</a>
                                        </button>
                                        <button className='m-1 btn btn-outline-primary border-0' style={{ width: 'max-content' }} >
                                            <span></span>
                                            <a className='text-decoration-none text-white' style={{ width: 'fit-content', minWidth: '150px !important' }} href="#navbar">Careers</a>
                                        </button>
                                    </span>
                                </div>
                                <div class="links_col hideInLowScreen">
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
                                        {/* <li>
                                            <span></span>
                                            <a href="/services">Services</a>
                                        </li> */}
                                        <li>
                                            <span></span>
                                            <a href="/projects">Projects</a>
                                        </li>
                                        <li>
                                            <span></span>
                                            <a href="/faqs">FAQs</a>
                                        </li>
                                        <li>
                                            <span></span>
                                            <a href="/contact">Contact Us</a>
                                        </li>
                                        <li>
                                            <span></span>
                                            <a href="#navbar">Careers</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr className='d-sm-block d-md-block text-white my-3 d-lg-none d-xl-none' />
                            <div class="col-lg-3 col-md-4 col-sm-3 col-xs-12 d-none d-lg-block">
                                <div class="contact_col">
                                    <h4>Contact Us</h4>
                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <i class="fa-solid fa-phone"></i>
                                            <a href="tel:+91 80051 83363" class="text-decoration-none">+91 6306854780</a>
                                        </li>
                                        <li class="contact_mail">
                                            <i class="fa-sharp fa-solid fa-envelope"></i>
                                            <a href="mailto:roboslog@gmail.com" class="text-decoration-none">roboslog@gmail.com</a>
                                        </li>
                                        <li class="mb-0">
                                            <a className='d-flex' href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35661.6942074034!2d144.91637077397664!3d-37.811636671563036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1659530976839!5m2!1sen!2s" target='__blank' >
                                                <i class="fa-solid fa-location-dot location me-1"></i>
                                                <span class="text-size-16 ps-1">75/9, kishangarh, Aruna Asaf Ali Marg, Vasant Kunj, New Delhi, Delhi 110070</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="showInLowScreen">
                                <div class="contact_col">
                                    <h4>Contact Us</h4>
                                    <div class="d-flex mb-0">
                                        <ul class="list-unstyled mb-0">
                                            <li>
                                                <i class="fa-solid fa-phone"></i>
                                                <a href="tel:+91 80051 83363" class="text-decoration-none">+91 6306854780</a>
                                            </li>
                                            <li class="contact_mail">
                                                <i class="fa-sharp fa-solid fa-envelope"></i>
                                                <a href="mailto:roboslog@gmail.com" class="text-decoration-none">roboslog@gmail.com</a>
                                            </li>
                                        </ul>
                                        <ul class="list-unstyled mb-0">
                                            <li class="mb-0">
                                                <a className='d-flex' href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1056.504162906141!2d77.16288404191312!3d28.519832021652434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1e4317e5aab%3A0x5d1c04d23170494d!2sRoboSlog!5e0!3m2!1sen!2sin!4v1718259376487!5m2!1sen!2sin" target='__blank' >
                                                    <i class="fa-solid fa-location-dot location me-1"></i>
                                                    <span class="text-size-16 ps-1">75/9, kishangarh, Aruna Asaf Ali Marg, Vasant Kunj, New Delhi, Delhi 110070</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="col-lg-3 col-md-4 col-sm-6 col-12 text-sm-left text-center d-lg-block d-none">
                                <div class="footer-info-content">
                                    <h4>Newsletter</h4>
                                    <input type="email" name="email" id="emailadd" class="form-control" placeholder="Enter Email:" />
                                    <div class="input-group-append form-button">
                                        <button class="btn" name="btnsubmit" id="submitbtn" type="submit"><i class="fa-solid fa-paper-plane"></i></button>
                                    </div>
                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <input type="checkbox" id="check" name="check" />
                                            <span>Remember me. Details will not be shared with anayone else.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
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
