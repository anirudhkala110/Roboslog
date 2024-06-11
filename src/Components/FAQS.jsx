import React from 'react'


const faqs = [
    {
        id: 1,
        ques: "What services does Roboslog offer?",
        ans: "Roboslog specializes in developing customized robotics and IoT-based projects according to client requirements. Our services include concept design, prototyping, software development, hardware integration, and full-scale deployment.",
        target: 'collapseFour',
    },
    {
        id: 2,
        ques: "How do I get started with a project at Roboslog?",
        ans: "Getting started is easy! Contact us through our website or directly via email/phone. We'll schedule a consultation to discuss your project requirements and provide you with a tailored solution and a detailed proposal.",
        target: 'collapseFive',
    },
    {
        id: 3,
        ques: "What industries does Roboslog cater to?",
        ans: "Roboslog serves a diverse range of industries, including manufacturing, healthcare, agriculture, logistics, retail, school/college projects and smart homes/offices. Our expertise in robotics and IoT allows us to deliver innovative solutions across various sectors.",
        target: 'collapseSix',
    },
    {
        id: 4,
        ques: "Can Roboslog work with small businesses or startups?",
        ans: "Absolutely! We work with businesses of all sizes, from startups to large enterprises. Our team is dedicated to providing scalable and cost-effective solutions that meet the unique needs of each client.",
        target: 'collapseSeven',
    },
    {
        id: 5,
        ques: "What is the typical timeline for a project?",
        ans: "The timeline for a project varies depending on its complexity and scope. After our initial consultation, we provide an estimated timeline along with the project proposal. We strive to deliver projects on time while maintaining the highest quality standards.",
        target: 'collapseEight',
    },
    {
        id: 6,
        ques: "How does Roboslog ensure the quality of its projects?",
        ans: " Quality is our top priority. We follow a rigorous development process that includes thorough testing, quality assurance, and client feedback at each stage of the project. Our team of experts ensures that every project meets the highest industry standards.",
        target: 'collapseNine',
    },
    {
        id: 7,
        ques: "What kind of support does Roboslog provide after project completion?",
        ans: " We offer comprehensive post-project support, including maintenance, updates, and troubleshooting. Our goal is to ensure the long-term success of your project, and we're always here to help with any issues that may arise.",
        target: 'collapseTen',
    },
    {
        id: 8,
        ques: "How does Roboslog handle data security and privacy?",
        ans: "We take data security and privacy very seriously. We implement robust security measures to protect your data and ensure compliance with all relevant regulations. Your information is handled with the utmost care and confidentiality.",
        target: 'collapseEleven',
    },
    {
        id: 9,
        ques: "Can Roboslog integrate existing systems with new robotics and IoT solutions?",
        ans: " Yes, we can integrate new solutions with your existing systems. Our team has extensive experience in creating seamless integrations that enhance the functionality and efficiency of your current operations.",
        target: 'collapseTwelve',
    },
    {
        id: 10,
        ques: "How much does a project typically cost?",
        ans: "The cost of a project depends on various factors such as its complexity, scope, and specific requirements. During our initial consultation, we'll discuss your needs and provide a detailed cost estimate based on the proposed solution.",
        target: 'collapseThirteen',
    },
]

const FAQS = () => {
    return (
        <div className=''>
            <div>
                <div className="accordian-section" style={{ zIndex: '1000' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="heading position-relative text-center py-3">
                                    <h1 className='text-white'>FAQ’s</h1>
                                    <h4 className='text-white'>Frequently Asked Questions</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="about-service-section-text accordian-section-inner-text position-relative">
                                    <div className="accordian-inner">
                                        <div id="accordion1">
                                            {
                                                faqs.map((data, idx) => (
                                                    <div className="accordion-card my-1" key={idx}>
                                                        <div className="card-header" id="headingFour">
                                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target={`#${data.target}`} aria-expanded="false" aria-controls={`${data.target}`}>
                                                                {data.id}. &nbsp;
                                                                {data.ques}
                                                            </button>
                                                        </div>
                                                        <div id={`${data.target}`} className="collapse" aria-labelledby="headingFour">
                                                            <div className="card-body">
                                                                <p className="text-size-16 text-left mb-0 p-0">{data.ans}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            {/* <div className="accordion-card my-1">
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
                                                <div className="card-header" id="headingSeven">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="" aria-expanded="false" aria-controls="">
                                                        More...
                                                    </button>
                                                </div>
                                            </div> */}

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
        </div>
    )
}

export default FAQS