import React, { useEffect } from 'react'
import Statics from '../Utils/Statics'
import complete from '../Images/complete.png'
import project1 from '../Images/smallRobo.png'
import autoDil3 from '../Images/Autodil3.png'
import clock from '../Images/clock.png'
import Drone from '../Images/Drone.png'
import dustbin from '../Images/dustbin.png'
import SmartWaterTank from '../Images/SmartWaterTank.jpg'
import AOS from 'aos'
const Projects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            easing: 'ease-in-out'
        })
    })
    return (
        <div>
            <div class="sub-banner-section-outer services-banner-section-outer position-relative">
                <section class="banner-section position-relative" style={{ padding: '50px 0px' }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="banner-section-content">
                                    <h1 class="text-white" data-aos="fade-up">Projects</h1>
                                    <p class="text-white" data-aos="fade-right">Our Team has build so many projects according to the requirement of the Clients. Some of them are shown below.</p>
                                    <div class="btn_wrapper" data-aos="fade-up">
                                        <span> Home </span><i class="fa-solid fa-angles-right" aria-hidden="true"></i><span class="sub_span">Projects</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="banner_image position-relative p-3">
                                    <figure class="banner_main_image mb-0 left_right_shape" style={{ marginTop: '80px' }}>
                                        <img src={complete} className="rounded-4 px-3" alt="" style={{ minHeight: "220px", minWidth: "250px", maxHeight: '550px', background: 'rgb(0 0 0 / 10%)', filter: "drop-shadow(2px 4px 6px rgb(114 172 225))" }} />
                                    </figure>
                                    <figure class="banner_image_bottom_shape mb-0 position-absolute top_bottom_shape">
                                        <img src="./assets/images/sub_banner_image_bottom_shape.png" alt="" class="img-fluid" style={{ marginLeft: "", marginTop: "" }} />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <figure class="banner_top_shape mb-0 position-absolute top_bottom_shape">
                    <img src="./assets/images/sub_banner_top_shape.png" alt="" class="img-fluid" />
                </figure>
                <figure class="banner_background_shape mb-0 position-absolute left_right_shape" >
                    <img src="./assets/images/sub_banner_background_shape.png" alt="" />
                </figure>
            </div>
            {/* <!-- PORTFOLIO SECTION-- > */}
            <section className="portfolio_section projects_portfolio_section" style={{ marginTop: "" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="portfolio_content">
                                <h6>Portfolio</h6>
                                <h2>Our Latest Projects Showcase</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row text-white" data-aos="fade-up" style={{ zIndex: '450' }}>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div style={{ maxHeight: '400px' }} className='bg-white rounded-3'>
                                <div className="portfolio_image">
                                    <div className="portfolio_image_box">
                                        <span>Dancing Robo</span>
                                    </div>
                                    {/* <figure className="mb-0 rounded-4 d-flex justify-content-center align-content-center" style={{ height: '400px', width: '', background: '#fff8f821' }}> */}
                                    <figure className="mb-0 rounded-4 d-flex justify-content-center align-content-center" style={{ height: '400px', width: '', background: '' }}>
                                        <img src={project1} alt="" className="img-fluid" style={{ maxHeight: '400px', height: '100%' }} />
                                    </figure>
                                    <div className="portfolio_box">
                                        <p className='text-white'>Small Robo with audio and dancing mode.</p>
                                        <div className="btn_wrapper">
                                            <button className="btn btn-link collapsed text-decoration-none text-white" data-toggle="collapse" data-target="#collapseSix0" aria-expanded="false" aria-controls="collapseSix0">Read More<i className="fa-solid fa-angle-right"></i></button>
                                            <div id="collapseSix0" className="collapse bg-dark px-2" aria-labelledby="headingSix" style={{ position: "absolute", zIndex: '600', maxHeight: '250px', overflow: 'auto' }}>
                                                <p>
                                                    Discover our latest project: a Small Robo equipped with audio and dancing modes! This engaging robot can play your favorite tunes while showcasing its impressive dance moves. Designed for entertainment and education, it’s perfect for kids and tech enthusiasts alike. With intuitive controls and interactive features, our Small Robo brings fun and learning together. Watch it groove to the beat and add a lively touch to any room. Explore the future of robotics with our innovative and entertaining creation!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div style={{ maxHeight: '400px' }} className='bg-white rounded-5'>
                                <div className="portfolio_image">
                                    <figure className="mb-0 rounded-4" style={{ height: '400px', background: '' }}><img src={clock} alt="" className="img-fluid" style={{ height: '400px' }} /></figure>
                                    <div className="portfolio_box">
                                        <p>3D Clock with best alarm and with 360<sup>o</sup> view.</p>
                                        <div className="btn_wrapper">
                                            <button className="btn btn-link collapsed text-decoration-none text-white" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Read More<i className="fa-solid fa-angle-right"></i></button>
                                            <div id="collapseSix" className="collapse bg-dark px-2" aria-labelledby="headingSix" style={{ position: "absolute", zIndex: '600', maxHeight: '250px', overflow: 'auto' }}>
                                                <p>
                                                    This 3D clock application features an advanced alarm system and a 360-degree view. The holographic display projects a clear, interactive clock above its base. The superior alarm functionality ensures reliable wake-ups, while the 360-degree perspective provides a modern, engaging way to keep track of time from any angle.
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="portfolio_image_box">
                                        <span>3D Technology</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div style={{ maxHeight: '400px' }} className='bg-white rounded-5'>
                                <div className="portfolio_image">
                                    <figure className="mb-0 rounded-4" style={{ height: '400px', background: '' }}><img src={autoDil3} style={{ height: '400px' }} alt="" className="img-fluid" /></figure>
                                    <div className="portfolio_box">
                                        <p>Automatic delivery with all safety majors.</p>
                                        <div className="btn_wrapper">
                                            <button className="btn btn-link collapsed text-decoration-none text-white" data-toggle="collapse" data-target="#collapseSix1" aria-expanded="false" aria-controls="collapseSix1">Read More<i className="fa-solid fa-angle-right"></i></button>
                                            <div id="collapseSix1" className="collapse bg-dark px-2 rounded" aria-labelledby="headingSix" style={{ position: "absolute", zIndex: '600', maxHeight: '250px', overflow: 'auto' }}>
                                                <p>
                                                    This automatic delivery robot is controlled via a mobile application. Users can input the delivery location through the app, and the robot will navigate to the specified destination. Equipped with advanced safety measures and efficient navigation systems, it provides a reliable and modern solution for contactless deliveries. In the medical field, it can be used to transport medications, lab samples, and medical supplies within hospitals or to patients' homes, ensuring timely and secure delivery. This reduces the risk of contamination and enhances efficiency in healthcare logistics.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio_image_box">
                                        <span>Auto Delivery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="portfolio_image bg-white rounded-5">
                                <figure className="mb-0 rounded-4" style={{ height: '400px', background: '' }}><img src={Drone} style={{ height: '400px' }} alt="" className="img-fluid " /></figure>
                                <div className="portfolio_box">
                                    <p>Automatic detection and security drone.</p>
                                    <div className="btn_wrapper">
                                        <button className="btn btn-link collapsed text-decoration-none text-white" data-toggle="collapse" data-target="#collapseSix2" aria-expanded="false" aria-controls="collapseSix2">Read More<i className="fa-solid fa-angle-right"></i></button>
                                        <div id="collapseSix2" className="collapse bg-dark px-2 rounded" aria-labelledby="headingSix" style={{ position: "absolute", zIndex: '600', maxHeight: '250px', overflow: 'auto' }}>
                                            <p>
                                                Our cutting-edge automatic detection and security drone offers unparalleled surveillance and protection. Designed for both residential and commercial use, this drone features advanced AI-powered sensors that detect and respond to potential threats in real-time. With high-definition cameras and night vision capabilities, it provides continuous monitoring, ensuring safety around the clock. Controlled via a user-friendly mobile application, users can receive instant alerts, live video feeds, and detailed reports directly on their devices. Enhance your security infrastructure with our state-of-the-art drone, delivering peace of mind through innovative technology.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio_image_box">
                                    <span>Security Drone</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="portfolio_image bg-white rounded-5">
                                <figure className="mb-0 rounded-4 d-flex justify-content-center" style={{ height: '400px', background: '' }}><img src={SmartWaterTank} style={{ height: '400px' }} alt="" className="img-fluid " /></figure>
                                <div className="portfolio_box">
                                    <p>Smart Water Tank. Get All updates on your mobile phone.</p>
                                    <div className="btn_wrapper">
                                        <button className="btn btn-link collapsed text-decoration-none text-white" data-toggle="collapse" data-target="#collapseSix3" aria-expanded="false" aria-controls="collapseSix3">Read More<i className="fa-solid fa-angle-right"></i></button>
                                        <div id="collapseSix3" className="collapse bg-dark px-2 rounded" aria-labelledby="headingSix" style={{ position: "absolute", zIndex: '600', maxHeight: '250px', overflow: 'auto' }}>
                                            <p>
                                                Experience the convenience of our Smart Water Tank, designed to keep you informed and in control. This innovative system monitors water levels, usage, and quality, sending real-time updates directly to your mobile phone. With its user-friendly app, you can track consumption, receive low-level alerts, and schedule maintenance effortlessly. Ensure efficient water management and prevent wastage with our state-of-the-art Smart Water Tank. Stay connected and make smarter decisions for your home or business, all from the palm of your hand.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio_image_box">
                                    <span>Smart Water Tank</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="portfolio_image bg-white rounded-5">
                                <figure className="mb-0 rounded-4 d-flex justify-content-center" style={{ height: '400px', background: '' }}><img src={dustbin} style={{ height: '400px' }} alt="" className="img-fluid  p-1" /></figure>
                                <div className="portfolio_box">
                                    <p>Auto Dustbin for dry and wet wastage.</p>
                                    <div className="btn_wrapper">
                                        <button className="btn btn-link collapsed text-decoration-none text-white" data-toggle="collapse" data-target="#collapseSix4" aria-expanded="false" aria-controls="collapseSix4">Read More<i className="fa-solid fa-angle-right"></i></button>
                                        <div id="collapseSix4" className="collapse bg-dark px-2 rounded" aria-labelledby="headingSix" style={{ position: "absolute", zIndex: '600', maxHeight: '250px', overflow: 'auto' }}>
                                            <p>
                                                Introducing our innovative Auto Dustbin, designed to streamline waste management for both dry and wet waste. This advanced dustbin features a sensor-operated lid, ensuring a hygienic and touch-free experience. Separate compartments for dry and wet waste make recycling and disposal more efficient. With a sleek design and durable construction, our Auto Dustbin is perfect for homes, offices, and public spaces. Enhance your waste disposal system today with our state-of-the-art Auto Dustbin, combining convenience, cleanliness, and environmental responsibility.
                                            </p>
                                        </div>
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
            </section >
            {/* <!--STATISTICS SECTION-- > */}
            < section className='mt-5 pt-5' >
                <div className='mt-5 pt-5'>
                    <Statics className="" />
                </div>
            </section >
        </div >
    )
}

export default Projects