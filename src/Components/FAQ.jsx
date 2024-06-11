import React from 'react'
import { useNavigate } from 'react-router-dom'

const FAQ = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/faqs')
    }
    return (
        <div>
            <div className="accordian-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="heading position-relative text-center">
                                <h6>FAQ’s</h6>
                                <h2>Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12" data-aos="fade-right">
                            <div className="about-service-section-text accordian-section-inner-text position-relative">
                                <div className="accordian-inner">
                                    <div id="accordion1">
                                        <div className="accordion-card my-1">
                                            <div className="card-header" id="headingFour">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    What services does Roboslog offer?
                                                </button>
                                            </div>
                                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour">
                                                <div className="card-body">
                                                    <p className="text-size-16 text-left mb-0 p-0">Roboslog specializes in developing customized robotics and IoT-based projects according to client requirements. Our services include concept design, prototyping, software development, hardware integration, and full-scale deployment.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-card my-1">
                                            <div className="card-header" id="headingFive">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    How do I get started with a project at Roboslog?
                                                </button>
                                            </div>
                                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive">
                                                <div className="card-body">
                                                    <p className="text-size-16 text-left mb-0 p-0">Getting started is easy! Contact us through our website or directly via email/phone. We'll schedule a consultation to discuss your project requirements and provide you with a tailored solution and a detailed proposal.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-card my-1">
                                            <div className="card-header" id="headingSix">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                    What industries does Roboslog cater to?
                                                </button>
                                            </div>
                                            <div id="collapseSix" className="collapse" aria-labelledby="headingSix">
                                                <div className="card-body">
                                                    <p className="text-size-16 text-left mb-0 p-0">Roboslog serves a diverse range of industries, including manufacturing, healthcare, agriculture, logistics, retail, school/college projects and smart homes/offices. Our expertise in robotics and IoT allows us to deliver innovative solutions across various sectors.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-card my-1">
                                            <div className="card-header" id="headingSeven">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                    Can Roboslog work with small businesses or startups?
                                                </button>
                                            </div>
                                            <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven">
                                                <div className="card-body">
                                                    <p className="text-size-16 text-left mb-0 p-0">
                                                        Absolutely! We work with businesses of all sizes, from startups to large enterprises. Our team is dedicated to providing scalable and cost-effective solutions that meet the unique needs of each client.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-card my-1">
                                            <a href='/faqs' className="card-header" id="headingSeven">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="" aria-expanded="false" aria-controls="" >
                                                    More...
                                                </button>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <figure className="mb-0 faq_right_shape position-absolute top_bottom_shape">
                    <img src="./assets/images/faq_right_shape.png" alt="" className="img-fluid" />
                </figure>
            </div>
        </div>
    )
}

export default FAQ