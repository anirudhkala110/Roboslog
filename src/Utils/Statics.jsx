import React from 'react'

const Statics = () => {
    return (
        <div>
            <section className="statistics_section position-relative">
                <div className="container">
                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <center>
                                <h2 className='fw-semibold' style={{ fontSize: '3rem' }}>RoboSlog</h2>
                            </center>
                            <div className="statistics_content">
                                <h3 className="mb-0 fw-bold">Empowering The Future With new technologies.</h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-3 col-sm-6 col-12 my-1">
                            <div className="statistics_box hover-effect">
                                <div className="span_wrapper">
                                    <span className="number counter">18</span>
                                    <span className="plus">K+</span>
                                </div>
                                <p className="text-size-16 text-white pp">Project Completed</p>
                                <p className="text-size-16 mb-0 text">Change the times to complete work at time.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-3 col-sm-6 col-12 my-1">
                            <div className="statistics_box hover-effect">
                                <div className="span_wrapper">
                                    <span className="number counter">10</span>
                                    <span className="plus">K+</span>
                                </div>
                                <p className="text-size-16 text-white pp">Happy Clients</p>
                                <p className="text-size-16 mb-0 text">All have their excellent experience with <strong>RoboSlog</strong>.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-3 col-sm-6 col-12 my-1" style={{ zIndex: '500' }}>
                            <div className="statistics_box hover-effect" >
                                <div className="span_wrapper">
                                    <span className="number counter">6</span>
                                    <span className="plus">+</span>
                                </div>
                                <p className="text-size-16 text-white pp">Years of Experience</p>
                                <p className="text-size-16 mb-0 text">Experienced team of Engineers for your ideas; working over 6 years with us.</p>
                            </div>
                        </div>
                    </div>
                    <figure className="statistics_left_shape mb-0 position-absolute top_bottom_shape">
                        <img src="./assets/images/statistics_left_shape.png" alt="" className="img-fluid" /></figure>
                    <figure className="statistics_right_shape mb-0 position-absolute top_bottom_shape">
                        <img src="./assets/images/statistics_right_shape.png" alt="" className="img-fluid" /></figure>
                </div>
            </section>
        </div>
    )
}

export default Statics