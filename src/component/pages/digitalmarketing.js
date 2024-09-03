import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../images/digital marketing.png.jpg'

const digitalmarketing = () => {
  
    return (
        <>
            {/* webdev section1 */}
            <div className='header-wrapeer sm'>

                <div className='main-info '>
                    {/* <h2>hello welcome</h2> */}
                    <div className="container">
                        <div className="row home-flex">
                            <div className="col col-lg info">
                                <h2 className=""> Become a<span> Digital Marketer </span></h2>
                                <p className=''>Tagging tech talents with the resources they need to be globally relevant.</p>

                                <div>
                                    <button className="btn btn-lg btn-dark me-2 fs-3" type="button"><Link to={"https://paystack.com/pay/uiuxbytalgd"} target='_blank' className="nav-link active" >Enroll now for N80,000</Link></button>
                                    {/* <button className="btn btn-lg btn-outline-success me-2" type="button"><Link to={"/Contact"} className="nav-link active" >Contact</Link></button> */}
                                </div>
                            </div>
                            <div className="col col-md-5 image">
                                <img className='w-98 img-fluid' src={Image} alt='image .....' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='mt-5 container'>
                {/* <button className="btn btn-lg btn-dark me-2 fs-3 " type="button"><Link to={"/Courses"} className="nav-link active" >Enroll for Full Virtual Class</Link></button> */}
                {/* <button className="btn btn-lg btn-outline-success me-2" type="button"><Link to={"/Contact"} className="nav-link active" >Contact</Link></button> */}
            </div>

            {/* webdev section2 */}

            <div>
                <div className='webdev-section2'>
                    <div className='container'>
                        <div className=' w-50 lh-lg'>
                            {/* <h1 className='fs-1'>Intermediate Course</h1> */}
                            <p className='fs-5 fst-lighter'>
                                Whether you're new to the filed of looking to enhance your skills, Mastering digital marketing can open 
                                doors to exciting career opportiunities. Our comprehensive Digital Markeing course equips you with the skills
                                and knowledge to thrive in the digital landscape
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
                                                    <p className='fw-bold'>Virtual/Physical</p>
                                                    
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
                                                        <li>Content Marketing</li>
                                                        <li>Social Media Marketing</li>
                                                        <li>Copywriting</li>
                                                                                                                
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
export default digitalmarketing
