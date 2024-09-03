import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../images/data-analysist.jpg.png.jpg.png'
// import {Talgd_ Data_Analysis} from 'pdf'

const dataanalysis = () => {
  
    return (
        <>
            {/* webdev section1 */}
            <div className='header-wrapeer sm'>

                <div className='main-info '>
                    {/* <h2>hello welcome</h2> */}
                    <div className="container">
                        <div className="row home-flex">
                            <div className="col col-lg info">
                                <h2 className=""> Become a<span> Data Analysist</span></h2>
                                <p className=''>Tagging tech talents with the resources they need to be globally relevant.</p>

                                <div>
                                    
                                    <button className="btn btn-lg  btn-dark me-2 fs-3" type="button"><Link to={"https://paystack.com/pay/uiuxbytalgd"} target='_blank' className="nav-link active" >Enroll now for N100,000</Link></button>
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
                <button className="btn btn-lg btn-success me-2 fs-3 " type="button"><a href="../pdf/Talgd_ Data_Analysis.pdf" target='_blank' className="nav-link active" >Download Course Curriculum </a></button>
                {/* <button className="btn btn-lg btn-outline-success me-2" type="button"><Link to={"/Contact"} className="nav-link active" >Contact</Link></button> */}
            </div>

            {/* webdev section2 */}

            <div>
                <div className='webdev-section2'>
                    <div className='container'>
                        <div className=' w-75 lh-lg'>
                            {/* <h1 className='fs-1'>Intermediate Course</h1> */}
                            <p className='fs-5 fst-lighter'>
                            You don't need to be a software developer to thrive in tech. Work on your schedule, learn at your pace, and get career-ready!
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
                                                <div class="col-md-5 pt-3">
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
                                                        <li>Data Analysis with Excel</li>
                                                        <li>Data visualization with power bi SQL</li>
                                                        <li>Statistical Analysis</li>
                                                        <li>Pivot table and Chart</li>
                                                        <li>Look ups</li>
                                                        <li>Power query editor</li>
                                                        <li>Data modeling</li>
                                                        <li>Dax</li>
                                                        <li>Portfolio Projects</li>
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

export default dataanalysis
