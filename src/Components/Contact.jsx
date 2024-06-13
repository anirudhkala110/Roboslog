import React, { useEffect } from 'react'
import Footer from '../Utils/Footer'
import GetStarted from './GetStarted'
import ClientsLogo from './ClientsLogo'
import AOS from 'aos'

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            easing: 'ease-in-out'
        })
    })
    return (
        <>
            <div className='banner-section-outer position-relative min-vh-100 pt-5'>
                <div class="sub-banner-section-outer contact-banner-section-outer position-relative">
                    <section class="banner-section position-relative">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div class="banner-section-content">
                                        <h1 class="text-white" style={{ fontSize: '3em' }} data-aos="fade-up">Contact Us</h1>
                                        <p class="text-white" data-aos="fade-right">Connect with us. We are always here to help you.</p>
                                        <div class="btn_wrapper" data-aos="fade-up">
                                            <span> Home </span><i class="fa-solid fa-angles-right" aria-hidden="true"></i><span class="sub_span">Contact</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div class="banner_image position-relative">
                                        <figure class="banner_main_image mb-0 left_right_shape">
                                            <img src="./assets/images/contact_banner_image.jpg" alt="" style={{ marginTop: '50px' }} />
                                        </figure>
                                        <figure class="banner_image_bottom_shape mb-0 position-absolute top_bottom_shape">
                                            <img src="./assets/images/sub_banner_image_bottom_shape.png" alt="" class="img-fluid" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <figure class="banner_top_shape mb-0 position-absolute top_bottom_shape">
                        <img src="./assets/images/sub_banner_top_shape.png" alt="" class="img-fluid" />
                    </figure>
                    <figure class="banner_background_shape mb-0 position-absolute left_right_shape">
                        <img src="./assets/images/sub_banner_background_shape.png" alt="" />
                    </figure>
                </div>
            </div>
            {/* <!-- CONTACT INFO SECTION-- > */}
            <section class="contact_info_section position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="contact_info_content">
                                        <h6>Our information</h6>
                                        <h2>Contact Info</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row" data-aos="fade-up">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="contact_info_box hover-effect">
                                        <figure class="mb-0">
                                            <img src="./assets/images/location.png" alt="" class="img-fluid hover-effect" />
                                        </figure>
                                        <a className='text-decoration-none' href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35661.6942074034!2d144.91637077397664!3d-37.811636671563036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1659530976839!5m2!1sen!2s" target='__blank'>
                                            <div class="contact_info_box_content_wrapper">
                                                <h5>Location:</h5>
                                                <p class="mb-0">75/9, kishangarh, Aruna Asaf Ali Marg, Vasant Kunj, New Delhi, Delhi 110070</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="contact_info_box hover-effect">
                                        <figure class="mb-0">
                                            <img src="./assets/images/email.png" alt="" class="img-fluid hover-effect" />
                                        </figure>
                                        <div class="contact_info_box_content_wrapper">
                                            <h5>Email Us:</h5>
                                            <p class="mb-0"><a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsCZFQPHXCckjMhFzDBnRjqZchGtLrMPXTVFRSJpVcxfZPnJBHLFpvfnVgPLvTCjSCFvkncB" class="text-decoration-none">roboslog@gmail.com</a></p>
                                            {/* <p class="mb-0"><a href="mailto:immersiveai@gmail.com" class="text-decoration-none">immersiveai@gmail.com</a></p> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="contact_info_box hover-effect">
                                        <figure class="mb-0">
                                            <img src="./assets/images/phone.png" alt="" class="img-fluid hover-effect" />
                                        </figure>
                                        <div class="contact_info_box_content_wrapper">
                                            <h5>Phone:</h5>
                                            {/* <p class="mb-0"><a href="tel:+91 88517 19915" class="text-decoration-none">Mr. Narendra verma <div style={{ fontSize: '10px' }}>+91 88517 19915</div></a></p> */}
                                            {/* <p class="mb-0"><a href="tel:+91 80051 83363" class="text-decoration-none">Mr. Shivendra Pratap Singh <div style={{ fontSize: '10px' }}>+91 80051 83363</div></a></p> */}
                                            <p class="mb-0"><a href="tel:+91 6306 854 780" class="text-decoration-none">Mr. Abhinav Prajapati<div style={{ fontSize: '10px' }}>+91 6306 854 780</div></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12" data-aos="fade-right">
                            <div class="contact_info_form_content">
                                <h4>Send us a Message</h4>
                                <form id="contactpage" method="POST" action="">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                            <div class="form-group mb-0 input-group">
                                                <label className='text-white fs-4' style={{ fontFamily: 'Montserrat ' }}>Full Name</label>
                                                <input type="text" name="fullname" id="name" class="form-control" placeholder="Name:" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                            <div class="form-group mb-0 input-group">
                                                <label className='text-white fs-4' style={{ fontFamily: 'Montserrat ' }}>Contact Number</label>
                                                <input type="tel" name="phone" id="phonenum" class="form-control" placeholder="Phone:" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12">
                                            <div class="form-group mb-0 input-group">
                                                <label className='text-white fs-4' style={{ fontFamily: 'Montserrat ' }}>Email Address</label>
                                                <input type="email" name="emailaddress" id="emailaddrs" class="form-control" placeholder="Email:" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group mb-0 input-group">
                                                <label className='text-white fs-4' style={{ fontFamily: 'Montserrat ' }}>Message</label>
                                                <textarea rows="3" name="msg" id="comment" class="form-control" placeholder="Message:"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn_wrapper">
                                        <button type="submit" name="get_started" id="started" class="default-btn">Submit Now<i class="fa-solid fa-angle-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                    </div>
                    <figure class="contact_info_left_shape mb-0 position-absolute top_bottom_shape">
                        <img src="./assets/images/contact_info_left_shape.png" alt="" class="img-fluid" />
                    </figure>
                </div>
            </section>
            {/* <!--CONTACT MAP SECTION-- > */}
            <div class="contact_map_section">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center">
                        {/* <iframe className='border-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35661.6942074034!2d144.91637077397664!3d-37.811636671563036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1659530976839!5m2!1sen!2s" width={1920} height={560} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <iframe className='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1056.504162906141!2d77.16288404191312!3d28.519832021652434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1e4317e5aab%3A0x5d1c04d23170494d!2sRoboSlog!5e0!3m2!1sen!2sin!4v1718259376487!5m2!1sen!2sin" style={{ border: '0px', height: '100vh', width: '95vw' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            {/* <!--COMBO SECTION-- > */}
            {/* <section class="combo_section contact_combo_section"> */}
            {/* <!-- CLIENT LOGO'S SECTION --> */}
            {/* <ClientsLogo /> */}
            {/* <!-- GET STARTED SECTION --> */}
            {/* <GetStarted /> */}
            {/* </section> */}
        </ >
    )
}

export default Contact