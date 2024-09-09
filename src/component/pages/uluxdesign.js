import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../images/uiux.jpg'

const uluxdesign = () => {
  
    return (
        <>
            {/* webdev section1 */}
            <div className='header-wrapeer sm'>

                <div className='main-info '>
                    {/* <h2>hello welcome</h2> */}
                    <div className="container">
                        <div className="row home-flex">
                            <div className="col col-lg info">
                                <h2 className=""> Become a<span> UI/UX Designer </span></h2>
                                <p className=''>Tagging tech talents with the resources they need to be globally relevant.</p>

                                <div>
                                    <button className="btn btn-lg btn-dark me-2 fs-3" type="button"><Link to={"https://docs.google.com/forms/d/e/1FAIpQLScshIxOu3MDys4IpMltlUKYcSjWbwFeXYQ_Exo2jZAp3Aw6Aw/viewform?usp=pp_url"} target='_blank' className="nav-link active" >Enroll now for N90,000</Link></button>
                                    {/* <button className="btn btn-lg btn-outline-success me-2" type="button"><Link to={"/Contact"} className="nav-link active" >Contact</Link></button> */}
                                </div>
                            </div>
                            <div className="col col-md-5 image">
                                <img className='w-100 img-fluid' src={Image} alt='image .....' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='mt-5 container'>
            <button className="btn btn-lg btn-success me-2 fs-3 " type="button"><a href="../pdf/UiUx.pdf" target='_blank' className="nav-link active" >Download Course Curriculum </a></button>
                {/* <button className="btn btn-lg btn-outline-success me-2" type="button"><Link to={"/Contact"} className="nav-link active" >Contact</Link></button> */}
            </div>

            {/* webdev section2 */}

            <div>
                <div className='webdev-section2'>
                    <div className='container'>
                        <div className=' w-75 lh-lg'>
                            {/* <h1 className='fs-1'>Intermediate Course</h1> */}
                            <p className='fs-5 fst-lighter'>
                                Mastering UI/UX Principles ensures that your designs resonate with users and drive business objectives.
                                Our self-paced learning approach allows you to study when and where it's convenient for you. Whether you're balancing
                                work, family, or other commitments, you can progress at your own pece.
                            </p>
                        </div>
                        {/* <div className=' mt-5'>
                            <button className="btn btn-lg btn-dark me-2 " type="button"><Link to={"/Courses"} className="nav-link active" >Get started</Link></button>
                            <button className="btn btn-lg btn-outline-success me-2" type="button"><Link to={"/Contact"} className="nav-link active" >Contact</Link></button>
                        </div> */}
                    </div>

                    <div>
                        <div className='about_section6'>
                            <div className='container'>
                                {/* <h1 className='mt-5'>You’d like to reach us?</h1> */}
                                
                                <div>
                                    <div className='container overflow-hidden '>
                                        <div className="row gx-1 mt-5 mb-5">
                                            <div className=" pt-5 col-md-3 ">
                                                <div class="col-md-5 ">
                                                    <p>Mode of learning</p>
                                                    <p className='fw-bold'>virtual/physical</p>
                                                    
                                                </div>
                                                <div class="col-md-5 pt-4">
                                                    <p>Class Frequency</p>
                                                    <p className='fw-bold'>3 times a week</p>
                                                    
                                                </div>
                                            </div>
                                            <div className=" pt-5 col-md-4 ">
                                                <div class="col-md-4 ">
                                                    <p>Course Duration</p>
                                                    <p className='fw-bold'>15 Weeks</p>
                                                    
                                                </div>
                                                {/* <div class="col-md-4">
                                                    <p>Class Frequency</p>
                                                    <p className='fw-bold'>5 times a week</p>
                                                    
                                                </div> */}
                                            </div>
                                            
                                            <div className="col">

                                                <div className=" lh-lg reach-bg">
                                                    <div className=''>
                                                        <li>Understanding user Research</li>
                                                        <li>Personas & User flow</li>
                                                        <li>Element of UX design</li>
                                                        <li>Principles of UI design</li>
                                                        <li>Learning how to Design with Figma</li>
                                                        <li>Learn Prototyping and Animation in Figma</li>
                                                        <li>Building your first Portfolio As a product designer</li>
                                                        
                                                        {/* <li><FontAwesomeIcon icon="fa-duotone fa-solid fa-check" /></li> */}
                                                    </div>
                                                
                                                </div>
                                            
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
  
}
export default uluxdesign
