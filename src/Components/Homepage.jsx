import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import Statics from '../Utils/Statics'
import FAQ from './FAQ'
import ClientsLogo from './ClientsLogo'
import GetStarted from './GetStarted'
import mainImg from '../Images/mainHome.jpg'
import project1 from '../Images/smallRobo.png'
import autoDil3 from '../Images/Autodil3.png'
import clock from '../Images/clock.png'
import leftBanner from '../Images/childrenRobo.jpg'
import Drone from '../Images/Drone.png'
import dustbin from '../Images/dustbin.png'
import SmartWaterTank from '../Images/SmartWaterTank.jpg'

const Homepage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            easing: 'ease-in-out'
        })
    })
    return (
        <>
            <div className="banner-section-outer position-relative" style={{ minHeight: '100vh' }}>

                {/* <!-- BANNER SECTION --> */}
                <section className="banner-section position-relative" style={{ padding: "125px " }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-md-1 col-sm-1 col-1 d-md-block d-none">
                                <div className="banner_best_image position-relative">
                                    <figure className="mb-0 position-absolute">
                                        <img src="./assets/images/best_image.png" alt="" className="img-fluid" /></figure>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12">
                                <div className="banner-section-content">
                                    <h2 data-aos="fade-up text-white" style={{ fontSize: '60px' }}><b className='text-white'>RoboSlog</b></h2>
                                    <div className="banner_content_wrapper position-relative">
                                        <p className="text-white mb-0" data-aos="fade-right">
                                            <b className='showInLowScreen' style={{ fontSize: '28px', marginLeft: '-120px' }}>“Your Idea, Our Innovation.”</b>
                                            <b className='hideInLowScreen' style={{ fontSize: '28px', marginLeft: '-40px' }}>“Your Idea, Our Innovation.”</b>
                                            <br />
                                            <div className='hideInLowScreen' style={{ textAlign: 'left', fontSize: '14px',marginLeft:'-30px',width:"300px" }}>
                                                ROBOSLOG™ is one of the distinguished leading suppliers for all kinds of Robotics and Automation Services. We aim to revolutionize the robotics industry by offering high quality products and services to various sectors, including industries, individuals with disabilities and students. Additionally, we provide web services such as domain registration, web design, and ready - to - use applications at an affordable cost.
                                            </div>
                                            <div className='showInLowScreen' style={{ textAlign: 'left', fontSize: '14px',marginLeft:'-130px',width:"350px" }}>
                                                ROBOSLOG™ is one of the distinguished leading suppliers for all kinds of Robotics and Automation Services. We aim to revolutionize the robotics industry by offering high quality products and services to various sectors, including industries, individuals with disabilities and students. Additionally, we provide web services such as domain registration, web design, and ready - to - use applications at an affordable cost.
                                            </div>
                                        </p>
                                        <figure className="mb-0 position-absolute hideInLowScreen" style={{ marginLeft: '-50px' }}>
                                            <img src="./assets/images/banner_white_line.png" alt="" className="img-fluid" /></figure>
                                    </div>
                                    <div className="btn_wrapper showInLowScreen" data-aos="fade-up">
                                        <a className="text-decoration-none default-btn btn-size-18 d-flex  align-items-center hover-effect readmore_btn my-1" style={{maxWidth:'150px',marginLeft:'-80px'}} href="/about">Read More<i className="fa-solid fa-angle-right"></i></a>
                                        <a className="text-decoration-none default-btn-two btn-size-18 d-flex align-items-center  hover-effect my-1" style={{maxWidth:'150px',marginLeft:'-80px'}} href="/contact">Contact Us<i className="fa-solid fa-angle-right"></i></a>
                                    </div>
                                    <div className="btn_wrapper hideInLowScreen" data-aos="fade-up">
                                        <a className="text-decoration-none default-btn btn-size-18 hover-effect readmore_btn my-1" href="/about">Read More<i className="fa-solid fa-angle-right"></i></a>
                                        <a className="text-decoration-none default-btn-two btn-size-18 hover-effect my-1" href="/contact">Contact Us<i className="fa-solid fa-angle-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="banner_image position-relative">
                                    <figure className="banner_main_image mb-0 left_right_shape d-flex align-items-center justify-content-center">
                                        <img src={mainImg} alt="" style={{ maxHeight: '300px', width: '', maxWidth: "350px", marginBottom: '0px', marginLeft: '100px', marginTop: "10vh" }} /></figure>
                                    <figure className="banner_image_top_shape left_right_shape  mb-0 position-absolute">
                                        <img src="./assets/images/banner_image_top_shape.png" alt="" className="img-fluid hideInLowScreen" style={{ maxWidth: '',marginLeft:'100px',marginTop:'45px',border:'',transform:'rotateZ(25deg)' }} /></figure>
                                    <figure className="banner_image_bottom_shape position-absolute top_bottom_shape">
                                        <img src="./assets/images/banner_image_bottom_shape.png" alt="" className="img-fluid" /></figure>
                                </div>
                            </div>
                        </div>
                        <figure className="banner_left_image mb-0 position-absolute left_right_shape">
                            <img src={leftBanner} alt="" className="img-fluid" style={{ maxWidth: '320px' }} /></figure>
                        <a href="#footer_section" className="top-btn">
                            <figure className=" position-absolute homerMe text-white" style={{ marginTop: '-75px' }}>
                                <button className='btn btn-outline-primary'> Bottom <b className='bi bi-arrow-down' ></b></button>
                            </figure>
                        </a>
                    </div>
                </section>
                <figure className="banner_top_shape mb-0 position-absolute top_bottom_shape">
                    <img src="./assets/images/banner_top_shape.png" alt="" className="img-fluid" style={{ width: '250px' }} /></figure>
                <figure className="banner_background_shape mb-0 position-absolute left_right_shape">
                    <img src="./assets/images/banner_background_shape.png" alt="" /></figure>
            </div>
            {/* Statistic Section */}
            <Statics />
            {/* <!--SERVICES SECTION-- > */}
            {/* <section className="services_section position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                            <div className="services_content">
                                <h6>What We Can Do</h6>
                                <h2>Services We Can Help You With</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-md-block d-none"></div>
                    </div>
                    <div className="row position-relative" data-aos="fade-up">
                        <div className="col-lg-4 col-md-3 col-sm-6 col-12">
                            <div className="services_box hover-effect">
                                <figure>
                                    <img src="./assets/images/services_box_image1.png" alt="" className="img-fluid hover-effect" /></figure>
                                <h5>Robotic Automation</h5>
                                <p>Quam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...</p>
                                <div className="btn_wrapper">
                                    <a href="/services" className="text-decoration-none">Read More<i className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-6 col-12">
                            <div className="services_box box2 hover-effect">
                                <figure>
                                    <img src="./assets/images/services_box_image2.png" alt="" className="img-fluid hover-effect" /></figure>
                                <h5>Predictive Analysis</h5>
                                <p>Ruam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...</p>
                                <div className="btn_wrapper">
                                    <a href="/services" className="text-decoration-none">Read More<i className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-6 col-12">
                            <div className="services_box box3 hover-effect">
                                <figure>
                                    <img src="./assets/images/services_box_image3.png" alt="" className="img-fluid hover-effect" /></figure>
                                <h5>Machine Learning</h5>
                                <p>Suam nihil molestiae conseua illum rui dolorem eum fugiat auo volutas nulla pariatur...</p>
                                <div className="btn_wrapper">
                                    <a href="/services" className="text-decoration-none">Read More<i className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <figure className="services_background_shape mb-0 position-absolute left_right_shape">
                            <img src="./assets/images/services_background_shape.png" alt="" className="img-fluid" /></figure>
                    </div>
                    <figure className="services_right_shape mb-0 position-absolute top_bottom_shape">
                        <img src="./assets/images/services_right_shape.png" alt="" className="img-fluid" /></figure>
                </div>
            </section> */}
            {/* <!--ABOUT US SECTION-- > */}
            <section className="aboutus_section position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="aboutus_image">
                                <figure className="aboutus_main_image mb-0">
                                    <img src="./assets/images/aboutus_image.jpg" alt="" className="img-fluid" /></figure>
                                <figure className="aboutus_image_shape position-absolute mb-0 left_right_shape">
                                    <img src="./assets/images/aboutus_image_shape.png" alt="" className="img-fluid" /></figure>
                                <div className="image_box_wrapper hover-effect">
                                    <figure className="mb-0 box_image float-left">
                                        <img src="./assets/images/aboutus_box_image.png" alt="" className="img-fluid hover-effect" /></figure>
                                    <div className="image_content_wrapper">
                                        <div className="span_wrapper">
                                            <span className="number counter">5</span>
                                            <span className="plus">+</span>
                                        </div>
                                        <p className="mb-0">Years of Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="aboutus_content" data-aos="fade-right">
                                <h6>About US</h6>
                                <h2>Empowering Business with <b>RoboSlog</b> Solutions</h2>
                                <p>RoboSlog is supplier of all kinds of Robotics and Automation Services.</p>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                        <p>Create Specific devices with most latest security system.</p>
                                    </li>
                                    <li>
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                        <p>Available for all type of business and also for School and College Projects</p>
                                    </li>
                                    <li>
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                        <p>On time completion of projects.</p>
                                    </li>
                                </ul>
                                <div className="btn_wrapper">
                                    <a className="text-decoration-none default-btn btn-size-18 hover-effect" href="/about">Read More<i className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <figure className="aboutus_background_shape mb-0 position-absolute left_right_shape">
                        <img src="./assets/images/aboutus_background_shape.jpg" alt="" /></figure>
                    <figure className="aboutus_top_shape mb-0 position-absolute top_bottom_shape">
                        <img src="./assets/images/aboutus_top_shape.png" alt="" className="img-fluid" /></figure>
                </div>
            </section>
            {/* <!--WHO WE ARE SECTION-- > */}
            {/* <section className="who_we_are_section position-relative">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="who_we_are_left_content" data-aos="fade-up">
                                <h6 className="text-white">Who We ARe</h6>
                                <h2 className="text-white">Artificial Intelligence is The New Big Thing in Technology</h2>
                                <p>Nam libero tempore, cum soluta nobis est eligendi optiona cumue nihil impedit quo minus id quod maxime placeat fae possimus necessitatibus,</p>
                                <div className="btn_wrapper">
                                    <a className="text-decoration-none default-btn-two btn-size-18 hover-effect" href="/about">Get Started<i className="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12"></div>
                        <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="who_we_are_right_content_wrapper">
                                <div className="video_wrapper position-absolute">
                                    <div className="video_icon position-relative">
                                        <a className="popup-vimeo" href="https://previews.customer.envatousercontent.com/c58ac645-a2d9-4189-913b-48465e467b7c/watermarked_preview/watermarked_preview.mp4">
                                            <figure className="mb-0">
                                                <img className="img-fluid thumb" style={{ cursor: "pointer" }} src="./assets/images/who_we_are_video_icon.png" alt="" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h5 className="mb-0 text-white">Watch Video</h5>
                                    </div>
                                </div>
                                <div className="who_we_are_right_content">
                                    <div className="who_we_are_rightside">
                                        <span>4.6</span>
                                        <ul className="list-unstyled">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                        </ul>
                                        <h6>Google Reviews</h6>
                                        <p className="text-size-16 mb-0">Dolor sit amet consecteu adiriscing elit.</p>
                                    </div>
                                    <div className="who_we_are_rightside second_column">
                                        <span>4.9</span>
                                        <ul className="list-unstyled">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                        </ul>
                                        <h6>Clutch Reviews</h6>
                                        <p className="text-size-16 mb-0">Rolor sit amet consecte adiriscing elit. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <figure className="who_we_are_image position-absolute mb-0">
                        <img src="./assets/images/who_we_are_image.png" alt="" className="img-fluid" /></figure>
                    <figure className="who_we_are_left_shape mb-0 position-absolute top_bottom_shape">
                        <img src="./assets/images/who_we_are_left_shape.png" alt="" className="img-fluid" /></figure>
                    <figure className="who_we_are_right_shape mb-0 position-absolute top_bottom_shape">
                        <img src="./assets/images/who_we_are_right_shape.png" alt="" className="img-fluid" /></figure>
                </div>
            </section> */}
            {/* <!--PORTFOLIO SECTION-- > */}
            <section className="portfolio_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="portfolio_content">
                                <h6>Portfolio</h6>
                                <h2>Our Latest Projects Showcase</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row text-white mb-4" data-aos="" style={{ zIndex: '450' }}>
                        {/* <div className={`${hover?"owl-carousel":"owl-carousel "} owl-theme `} onMouseEnter={e => setHover(true)} onMouseLeave={e => setHover(false)}> */}
                        <div className={`owl-carousel owl-theme d-block `} style={{ cursor: 'pointer' }} >
                            <div className="item bg-white rounded-5" style={{ maxHeight: '400px', minWidth: "200px" }}>
                                <div className="portfolio_image">
                                    <div className="portfolio_image_box">
                                        <span>Dancing Robo</span>
                                    </div>
                                    <figure className="mb-0 rounded-4 d-flex justify-content-center align-content-center" style={{
                                        height: '400px',
                                        // background: '#fff8f821'
                                    }}>
                                        <img src={project1} alt="" className="img-fluid" style={{ height: '400px' }} />
                                    </figure>
                                    <div className="portfolio_box">
                                        <p className='text-white'>Small Robo with audio and dancing mode.</p>
                                        <div className="btn_wrapper">
                                            <a href="/projects" className="text-decoration-none">See More<i className="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item bg-white rounded-5" style={{ maxHeight: '400px' }}>
                                <div className="portfolio_image">
                                    <figure className="mb-0 rounded-4" style={{
                                        height: '400px',
                                        // background: '#fff8f821'

                                    }}><img src={clock} alt="" className="img-fluid" style={{ height: '400px' }} /></figure>
                                    <div className="portfolio_box">
                                        <p>3D Clock with best sound effects and with 360<sup>o</sup> view.</p>
                                        <div className="btn_wrapper">
                                            <a href="/projects" className="text-decoration-none">See More<i className="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                    <div className="portfolio_image_box">
                                        <span>3D Technology</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item bg-white rounded-5" style={{ maxHeight: '400px' }}>
                                <div className="portfolio_image">
                                    <figure className="mb-0 rounded-4" style={{
                                        height: '400px',
                                        // background: '#fff8f821'
                                    }}><img src={autoDil3} style={{ height: '400px' }} alt="" className="img-fluid" /></figure>
                                    <div className="portfolio_box">
                                        <p>Automatic delivery with all safety majors.</p>
                                        <div className="btn_wrapper">
                                            <a href="/projects" className="text-decoration-none">See More<i className="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                    <div className="portfolio_image_box">
                                        <span>Auto Delivery</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item bg-white rounded-5" style={{ maxHeight: '400px' }}>
                                <div className="portfolio_image">
                                    <figure className="mb-0 rounded-4" style={{
                                        height: '400px',
                                        // background: '#fff8f821' 

                                    }}><img src={Drone} style={{ height: '400px' }} alt="" className="img-fluid" /></figure>
                                    <div className="portfolio_box">
                                        <p>Automatic detection and security drone</p>
                                        <div className="btn_wrapper">
                                            <a href="/projects" className="text-decoration-none">See More<i className="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                    <div className="portfolio_image_box">
                                        <span>Security Drone</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item bg-white rounded-5" style={{ maxHeight: '400px' }}>
                                <div className="portfolio_image">
                                    <figure className="mb-0 rounded-4" style={{
                                        height: '400px',
                                        // background: '#fff8f821'

                                    }}><img src={SmartWaterTank} style={{ height: '400px' }} alt="" className="img-fluid" /></figure>
                                    <div className="portfolio_box">
                                        <p>Smart Water Tank. Get All updates on your mobile phone.</p>
                                        <div className="btn_wrapper">
                                            <a href="/projects" className="text-decoration-none">See More<i className="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                    <div className="portfolio_image_box">
                                        <span>Smart Water Tank</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item bg-white rounded-5" style={{ maxHeight: '400px' }}>
                                <div className="portfolio_image">
                                    <figure className="mb-0 rounded-4" style={{
                                        height: '400px',
                                        //  background: '#fff8f821'
                                    }}><img src={dustbin} style={{ height: '400px' }} alt="" className="img-fluid" /></figure>
                                    <div className="portfolio_box">
                                        <p>Auto Dustbin for dry and wet wastage.</p>
                                        <div className="btn_wrapper">
                                            <a href="/projects" className="text-decoration-none">See More<i className="fa-solid fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                    <div className="portfolio_image_box">
                                        <span>Smart Dustbin</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <figure className="portfolio_left_shape mb-0 position-absolute top_bottom_shape">
                        <img src="./assets/images/portfolio_left_shape.png" alt="" className="img-fluid" style={{ height: '250px' }} />
                    </figure>
                </div>
            </section>
            {/* <!--TESTIMONIALS SECTION-- > */}
            {/* <section className="testimonials_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="testimonials_content">
                                <h6>Testimonials</h6>
                                <h2>Hear it From Our Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <div className="testimonials_box">
                                    <div className="testimonials_image">
                                        <figure className="mb-0"><img src="./assets/images/testimonial_image1.png" alt="" className="img-fluid hover-effect" /></figure>
                                        <div className="testimonials_image_content_wrappper">
                                            <p className="person_name">Kevin Andrew</p>
                                            <p className="testimonials_text text-size-16 mb-0">Head of informatics at EBI</p>
                                        </div>
                                    </div>
                                    <p className="testimonials_paragraph mb-0"><span>“</span>Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.<span>”</span></p>
                                    <figure className="testimonial_apostrophy_shape position-absolute mb-0"><img src="./assets/images/testimonial_apostrophy_shape.png" alt="" className="img-fluid hover-effect" /></figure>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials_box">
                                    <div className="testimonials_image">
                                        <figure className="mb-0"><img src="./assets/images/testimonial_image2.png" alt="" className="img-fluid hover-effect" /></figure>
                                        <div className="testimonials_image_content_wrappper">
                                            <p className="person_name">Perin Rames</p>
                                            <p className="testimonials_text text-size-16 mb-0">Head of Management at ZE</p>
                                        </div>
                                    </div>
                                    <p className="testimonials_paragraph mb-0"><span>“</span>Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.<span>”</span></p>
                                    <figure className="testimonial_apostrophy_shape position-absolute mb-0"><img src="./assets/images/testimonial_apostrophy_shape.png" alt="" className="img-fluid hover-effect" /></figure>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials_box">
                                    <div className="testimonials_image">
                                        <figure className="mb-0"><img src="./assets/images/testimonial_image1.png" alt="" className="img-fluid hover-effect" /></figure>
                                        <div className="testimonials_image_content_wrappper">
                                            <p className="person_name">Kevin Andrew</p>
                                            <p className="testimonials_text text-size-16 mb-0">Head of informatics at EBI</p>
                                        </div>
                                    </div>
                                    <p className="testimonials_paragraph mb-0"><span>“</span>Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.<span>”</span></p>
                                    <figure className="testimonial_apostrophy_shape position-absolute mb-0"><img src="./assets/images/testimonial_apostrophy_shape.png" alt="" className="img-fluid hover-effect" /></figure>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials_box">
                                    <div className="testimonials_image">
                                        <figure className="mb-0"><img src="./assets/images/testimonial_image2.png" alt="" className="img-fluid hover-effect" /></figure>
                                        <div className="testimonials_image_content_wrappper">
                                            <p className="person_name">Perin Rames</p>
                                            <p className="testimonials_text text-size-16 mb-0">Head of Management at ZE</p>
                                        </div>
                                    </div>
                                    <p className="testimonials_paragraph mb-0"><span>“</span>Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.<span>”</span></p>
                                    <figure className="testimonial_apostrophy_shape position-absolute mb-0"><img src="./assets/images/testimonial_apostrophy_shape.png" alt="" className="img-fluid hover-effect" /></figure>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials_box">
                                    <div className="testimonials_image">
                                        <figure className="mb-0"><img src="./assets/images/testimonial_image1.png" alt="" className="img-fluid hover-effect" /></figure>
                                        <div className="testimonials_image_content_wrappper">
                                            <p className="person_name">Kevin Andrew</p>
                                            <p className="testimonials_text text-size-16 mb-0">Head of informatics at EBI</p>
                                        </div>
                                    </div>
                                    <p className="testimonials_paragraph mb-0"><span>“</span>Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.<span>”</span></p>
                                    <figure className="testimonial_apostrophy_shape position-absolute mb-0"><img src="./assets/images/testimonial_apostrophy_shape.png" alt="" className="img-fluid hover-effect" /></figure>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonials_box">
                                    <div className="testimonials_image">
                                        <figure className="mb-0"><img src="./assets/images/testimonial_image2.png" alt="" className="img-fluid hover-effect" /></figure>
                                        <div className="testimonials_image_content_wrappper">
                                            <p className="person_name">Perin Rames</p>
                                            <p className="testimonials_text text-size-16 mb-0">Head of Management at ZE</p>
                                        </div>
                                    </div>
                                    <p className="testimonials_paragraph mb-0"><span>“</span>Quisquam est, qui dolorem ipsum quia dolor sit amet cone aetur, adipisci velit, sed quia non numquam eius modi temor incidunt ut labore et dolore magnam.<span>”</span></p>
                                    <figure className="testimonial_apostrophy_shape position-absolute mb-0"><img src="./assets/images/testimonial_apostrophy_shape.png" alt="" className="img-fluid hover-effect" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <figure className="testimonials_background_shape mb-0 position-absolute left_right_shape">
                        <img src="./assets/images/testimonial_background_shape.jpg" alt="" />
                    </figure>
                    <figure className="testimonials_top_shape mb-0 position-absolute top_bottom_shape">
                        <img src="./assets/images/testimonial_top_shape.png" alt="" className="img-fluid" />
                    </figure>
                </div>
            </section> */}
            {/* <!--COMBO SECTION-- > */}
            <FAQ />
            {/* <section className="combo_section"> */}
            {/* <!-- FAQ'S SECTION --> */}
            {/* <!-- CLIENT LOGO'S SECTION --> */}
            {/* <ClientsLogo /> */}
            {/* <!-- GET STARTED SECTION --> */}
            {/* <GetStarted /> */}
            {/* </section> */}
            {/* <!--FOOTER SECTION-- > */}
        </>
    )
}

export default Homepage