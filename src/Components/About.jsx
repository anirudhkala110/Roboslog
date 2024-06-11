import React, { useEffect } from 'react'
import AOS from 'aos'
import Statics from '../Utils/Statics'
import FAQ from './FAQ'
import ClientsLogo from './ClientsLogo'
import GetStarted from './GetStarted'
import complete from '../Images/Collection.png'
import childrenRobo from '../Images/childrenRobo.jpg'
import Autodil3 from '../Images/Autodil3.png'

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 120,
            easing: 'ease-in-out'
        })
    })
    return (
        <>
            <div class="sub-banner-section-outer position-relative">
                {/* <!-- SUB-BANNER SECTION --> */}
                <section class="banner-section position-relative">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="banner-section-content">
                                    <h1 class="text-white" data-aos="fade-up">About Us</h1>
                                    <p class="text-white" data-aos="fade-right">ROBOSLOG™ is one of the distinguished leading suppliers for all kinds of Robotics and Automation Services. We aim to create a revolution in the field of Robotics industry by helping industries, Disabled and students and providing them high-quality products and services. Also providing Web Services like Domain, Web designing & Ready to use App at an affordable cost.</p>
                                    <div class="btn_wrapper" data-aos="fade-up">
                                        <span> Home </span><i class="fa-solid fa-angles-right" aria-hidden="true"></i><span class="sub_span">About</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="banner_image position-relative">
                                    <figure class="banner_main_image mb-0 left_right_shape">
                                        <img src={complete} className='px-3' alt="" style={{ maxWidth: '550px',background:'rgb(0 0 0 / 10%)',filter: "drop-shadow(2px 4px 6px rgb(114 172 225))" }} /></figure>
                                    <figure class="banner_image_bottom_shape mb-0 position-absolute top_bottom_shape">
                                        <img src="./assets/images/sub_banner_image_bottom_shape.png" alt="" class="img-fluid" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <figure class="banner_top_shape mb-0 position-absolute top_bottom_shape">
                    <img src="./assets/images/sub_banner_top_shape.png" alt="" class="img-fluid" /></figure>
                <figure class="banner_background_shape mb-0 position-absolute left_right_shape">
                    <img src="./assets/images/sub_banner_background_shape.png" alt="" /></figure>
            </div>
            {/* <!-- ABOUT US SECTION --> */}
            {/* <section class="about_aboutus_section position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="aboutus_content" data-aos="fade-up">
                                <h6>About US</h6>
                                <h2>Creating Intelligent Solutions With AI And Robotics</h2>
                                <p>Consectetur adipiscing elit sed do eiusmod tempor inlabore aet dolore magna aliqua ruis ipsum ultrices rav sit ame incididun zerasreiciendis maiores alias.</p>
                                <div class="btn_wrapper">
                                    <a class="text-decoration-none default-btn btn-size-18 hover-effect" href="/about">Get Started<i class="fa-solid fa-angle-right"></i></a>
                                </div>
                                <div class="position-relative">
                                    <a href="https://www.youtube.com/ENVATO" target="_blank">
                                        <figure class="video_fig mb-0">
                                            <img class="thumb img-fluid" style={{ cursor: "pointer" }} src="assets/images/about_aboutus_video_image.jpg" alt="" /></figure>
                                    </a>
                                    <figure class="about_video_background_shape mb-0 position-absolute left_right_shape">
                                        <img src="assets/images/video_background_shape.png" alt="" class="img-fluid" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                    <figure class="aboutus_right_shape mb-0 position-absolute top_bottom_shape">
                        <img src="./assets/images/aboutus_video_right_shape.png" alt="" class="img-fluid" /></figure>
                </div>
            </section> */}
            {/* <!-- STATISTICS SECTION --> */}
            <Statics />
            {/* <!-- MISSION VISION SECTION --> */}
            {/* <section class="mission_vision_section position-relative">
                <div class="container">
                    <div class="row position-relative d-flex justify-content-center" data-aos="fade-up" style={{ maxWidth: '', zIndex: '500' }}>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="mission_vision_box hover-effect">
                                <figure>
                                    <img src="./assets/images/our_mission_image.png" alt="" class="img-fluid hover-effect" /></figure>
                                <h4>Our Mission</h4>
                                <p class="mb-0">Tempora incidunt ut labore et dolore magnam aliruam quaerat volurtatem aut enim ad minima veniam ruis nostrum exercitatio.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="mission_vision_box hover-effect">
                                <figure>
                                    <img src="./assets/images/our_vision_image.png" alt="" class="img-fluid hover-effect" /></figure>
                                <h4>Our Vision</h4>
                                <p class="mb-0">Quis autem vel eum iure reprehenderit ruin voluta velit esse quam nihil molestiae conseuatur illum aui dolorem eum fugiat ruo.</p>
                            </div>
                        </div>
                        <figure class="mission_vision_background_shape mb-0 position-absolute left_right_shape">
                            <img src="./assets/images/mission_vision_background_shape.png" alt="" class="img-fluid" /></figure>
                    </div>
                    <figure class="mission_vision_left_shape mb-0 position-absolute top_bottom_shape">
                        <img src="./assets/images/mission_vision_left_shape.png" alt="" class="img-fluid" /></figure>
                </div>
            </section> */}
            {/* <!-- FEATURES SECTION --> */}
            <section class="feature_section position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="feature_image">
                                <figure class="feature_main_image position-relative mb-0">
                                    <img src={childrenRobo} alt="" class="img-fluid" /></figure>
                                <figure class="feature_second_image position-absolute mb-0">
                                    <img src={Autodil3} alt="" class="img-fluid" style={{maxWidth:'300px',marginRight:'-30px !important'}}/></figure>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="feature_content" data-aos="fade-right">
                                <h6>FEATURES</h6>
                                <h2>Empowering People By Keeping Them Well</h2>
                                <p>Consectetur adipiscing elit sed do eiusmod tempor inlabore aet dolore magna aliqua ruis.</p>
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <figure class="mb-0">
                                            <img src="./assets/images/certified_expert.png" alt="" class="img-fluid" /></figure>
                                        <div class="feature_content_wrapper">
                                            <p class="first_p">Certified Experts</p>
                                            <p class="text-size-16 mb-0">Dolor sit amet consectetur adipiscing elit, sed do eius.</p>
                                        </div>
                                    </li>
                                    <li class="second_li">
                                        <figure class="mb-0">
                                            <img src="./assets/images/support.png" alt="" class="img-fluid" /></figure>
                                        <div class="feature_content_wrapper">
                                            <p class="first_p">24/7 Support</p>
                                            <p class="text-size-16 mb-0">Sunt in culpa qui officia deserunt mollit anim esa amet.</p>
                                        </div>
                                    </li>
                                </ul>
                                <div class="btn_wrapper">
                                    <a class="text-decoration-none default-btn btn-size-18 hover-effect" href="/about">Get Started<i class="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <figure class="feature_background_shape mb-0 position-absolute left_right_shape">
                        <img src="./assets/images/features_background_shape.jpg" alt="" /></figure>
                    <figure class="feature_top_shape mb-0 position-absolute top_bottom_shape">
                        <img src="./assets/images/features_top_shape.png" alt="" class="img-fluid" /></figure>
                </div>
            </section>
            {/* <!-- COMBO SECTION --> */}
            <section class="combo_section">
                {/* <!-- FAQ'S SECTION --> */}
                <FAQ />
                {/* <!-- CLIENT LOGO'S SECTION --> */}
                {/* <ClientsLogo /> */}
                {/* <!-- GET STARTED SECTION --> */}
                {/* <GetStarted /> */}
            </section>
            {/* <!-- FOOTER SECTION --> */}
        </>
    )
}

export default About