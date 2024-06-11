import React from 'react'

const GetStarted = () => {
    return (
        <div><div class="get_started_section">
            <div class="container">
                <div class="get_started_box">
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-12 col-12 order-md-1 order-2">
                            <div class="get_started_box_image">
                                <figure class="mb-0 left_right_shape">
                                    <img src="./assets/images/get_started_image.png" alt="" class="img-fluid" />
                                </figure>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-12 col-12 order-md-2 order-1">
                            <div class="get_started_box_content" data-aos="fade-right">
                                <h6>GEt Started</h6>
                                <h2>Let's Make Something Great Together</h2>
                                <div class="btn_wrapper">
                                    <a class="text-decoration-none default-btn-two btn-size-18 hover-effect" href="/contact">Contact Us<i class="fa-solid fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <figure class="get_started_shape mb-0 left_right_shape">
                    <img src="./assets/images/get_started_shape.png" alt="" class="img-fluid" />
                </figure>
            </div>
        </div></div>
    )
}

export default GetStarted