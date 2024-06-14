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


const projects = [
    {
        name: 'Dancing Robo',
        imge: project1,
        title: 'Small Robo with audio and dancing mode.',
        des: ' Discover our latest project: a Small Robo equipped with audio and dancing modes! This engaging robot can play your favorite tunes while showcasing its impressive dance moves. Designed for entertainment and education, it’s perfect for kids and tech enthusiasts alike. With intuitive controls and interactive features, our Small Robo brings fun and learning together. Watch it groove to the beat and add a lively touch to any room. Explore the future of robotics with our innovative and entertaining creation!',
        target: 'collapseSix0'
    },
    {
        name: '3D Technology Clock',
        imge: clock,
        title: '3D Clock with best alarm and with 360<sup>o</sup> view.',
        des: ' This 3D clock application features an advanced alarm system and a 360-degree view. The holographic display projects a clear, interactive clock above its base. The superior alarm functionality ensures reliable wake-ups, while the 360-degree perspective provides a modern, engaging way to keep track of time from any angle.',
        target: 'collapseSix'
    },
    {
        name: 'Auto Delivery Bot',
        imge: autoDil3,
        title: 'Automatic delivery with all safety majors.',
        des: " This automatic delivery robot is controlled via a mobile application. Users can input the delivery location through the app, and the robot will navigate to the specified destination. Equipped with advanced safety measures and efficient navigation systems, it provides a reliable and modern solution for contactless deliveries. In the medical field, it can be used to transport medications, lab samples, and medical supplies within hospitals or to patients' homes, ensuring timely and secure delivery. This reduces the risk of contamination and enhances efficiency in healthcare logistics.",
        target: 'collapseSix1'
    },
    {
        name: 'Security Drone',
        imge: Drone,
        title: 'Automatic detection and security drone.',
        des: " Our cutting-edge automatic detection and security drone offers unparalleled surveillance and protection. Designed for both residential and commercial use, this drone features advanced AI-powered sensors that detect and respond to potential threats in real-time. With high-definition cameras and night vision capabilities, it provides continuous monitoring, ensuring safety around the clock. Controlled via a user-friendly mobile application, users can receive instant alerts, live video feeds, and detailed reports directly on their devices. Enhance your security infrastructure with our state-of-the-art drone, delivering peace of mind through innovative technology.",
        target: 'collapseSix2'
    },
    {
        name: 'Smart Water Tank',
        imge: SmartWaterTank,
        title: 'Smart Water Tank. Get All updates on your mobile phone.',
        des: " Experience the convenience of our Smart Water Tank, designed to keep you informed and in control. This innovative system monitors water levels, usage, and quality, sending real-time updates directly to your mobile phone. With its user-friendly app, you can track consumption, receive low-level alerts, and schedule maintenance effortlessly. Ensure efficient water management and prevent wastage with our state-of-the-art Smart Water Tank. Stay connected and make smarter decisions for your home or business, all from the palm of your hand.",
        target: 'collapseSix3'
    },
    {
        name: 'Smart Dustbin',
        imge: dustbin,
        title: 'Auto Dustbin for dry and wet wastage.',
        des: "  Introducing our innovative Auto Dustbin, designed to streamline waste management for both dry and wet waste. This advanced dustbin features a sensor-operated lid, ensuring a hygienic and touch-free experience. Separate compartments for dry and wet waste make recycling and disposal more efficient. With a sleek design and durable construction, our Auto Dustbin is perfect for homes, offices, and public spaces. Enhance your waste disposal system today with our state-of-the-art Auto Dustbin, combining convenience, cleanliness, and environmental responsibility.",
        target: 'collapseSix4'
    },
]

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
            <section className="portfolio_section projects_portfolio_section" style={{ minHeight: "100vh" }}>
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
                        {
                            projects.map((data, idx) => (
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12" key={idx}>
                                    <div style={{ maxHeight: '400px' }} className='bg-white rounded-5'>
                                        <div className="portfolio_image" style={{ maxHeight: '350px' }}>
                                            <div className="portfolio_image_box">
                                                <span dangerouslySetInnerHTML={{ __html: (data.name) }}></span>
                                            </div>
                                            {/* <figure className="mb-0 rounded-4 d-flex justify-content-center align-content-center" style={{ height: '400px', width: '', background: '#fff8f821' }}> */}
                                            <figure className="mb-0 rounded-4 d-flex justify-content-center align-content-center pt-3" style={{ height: '400px', width: '', background: '' }}>
                                                <img src={data.imge} alt="" className="img-fluid" style={{ maxHeight: '300px', width: '-webkit-fill-available', height: '100%' }} />
                                            </figure>
                                            <div className="portfolio_box">
                                                <p className='text-white' dangerouslySetInnerHTML={{ __html: (data.title) }}></p>
                                                <div className="btn_wrapper">
                                                    <button className="btn btn-link collapsed text-decoration-none text-white" data-toggle="collapse" data-target={`#${data.target}`} aria-expanded="false" aria-controls={`${data.target}`}>Read More<i className="fa-solid fa-angle-right"></i></button>
                                                    {/* <div id={`${data.target}`} className="collapse bg-dark px-2" aria-labelledby="headingSix" style={{ position: "absolute", zIndex: '600', maxHeight: '250px', overflow: 'auto' }}>
                                                        <p>
                                                            {data.des}
                                                        </p>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        {
                            projects.map((data, idx) =>
                            (
                                <div id={`${data.target}`} className="collapse px-4 rounded-2 me-5" aria-labelledby="headingSix" style={{ position: "fixed", background: "#040b2b", zIndex: '600', height: '80vh', maxWidth: '', top: '50px', left: '50px', right: "0px", overflow: 'auto', boxShadow: 'rgb(0 0 0 / 77%) 0px 0px 8000px 4000px' }} key={idx}>
                                    <div className='d-flex align-items-center justify-content-end'>
                                        <button className="btn btn-link collapsed text-decoration-none text-white fs-3 btn-danger my-2 " data-toggle="collapse" data-target={`#${data.target}`} aria-expanded="false" aria-controls={`${data.target}`}>Close<i className="fa-solid fa-x mx-3"></i></button>
                                    </div>
                                    <hr className='text-white' />
                                    <div className='fw-bold text-center fs-2 my-4' style={{ color: "#48e44f" }} dangerouslySetInnerHTML={{ __html: data.name }}></div>
                                    <div className='fs-4 my-4 text-center' style={{ color: '#57b4ff' }} dangerouslySetInnerHTML={{ __html: data.title }}></div>
                                    <hr className='' />
                                    <center>
                                        <img src={data.imge} className='rounded-5 mb-4' style={{ maxHeight: "250px" }} />
                                    </center>
                                    <p className='text-white'>
                                        {data.des}
                                    </p>
                                </div>
                            ))
                        }
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