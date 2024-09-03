import React from 'react'
import Image from "../images/happy-man-working-laptop_758367-122878.png"
import Colon from "../images/image 7.png"
import colon1 from "../images/Logo (4).png"
import colon2 from "../images/image 9.png"
import certificate from "../images/image 10.jpg"
import coaching from "../images/image 11.png"
import expert from "../images/image 12.png"
import work1 from "../images/work1.png"
import work2 from "../images/work2.png"
import work3 from "../images/work3.png"
import work4 from "../images/work4.png"
import work5 from "../images/work5.png"
import work6 from "../images/work6.png"
import work7 from "../images/work7.png"
import work8 from "../images/work8.png"
import work9 from "../images/work9.png"
import {Link} from 'react-router-dom'


const home = () => {
  
    return (
      <>

      {/* section1 */}

        <div className='header-wrapeer sm'>

          <div className='main-info '>
              {/* <h2>hello welcome</h2> */}
              <div className="container">
                  <div className="row home-flex">
                      <div className="col col-lg info">
                          <h2 className=""> Enabling Lifelong <span> Learning</span></h2>
                          <p className=''>Equipping African's youthful population with the learning resources needed to position them for global relevance.</p>

                          <div className=''>
                              <button className="btn btn-lg  btn-dark me-2 " type="button"><Link to={"/Courses"} className="nav-link active" >Get started</Link></button>
                              <button className="btn btn-lg bt btn-outline-success me-2" type="button"><Link to={"/Contact"} className="nav-link active" >Contact</Link></button>
                          </div>
                      </div>
                      <div className="col col-md-5 image">
                          <img className='w-98 img-fluid' src={Image} alt='image .....' />
                      </div>
                  </div>

              </div>

            </div>
        </div>

        {/* section 2 */}

        <div className='section-2'>
            <div className='container overflow-hidden '>
                <div className="row gx-3">
                    <div className="col-md-4">
                    {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                        <img src={Colon} className='img-fluid' alt='colon ...'/>
                    </div>
                    <div className="col-md-4">
                    {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                        <img src={colon1} className='img-fluid' alt='colon1 ...'/>
                    </div>
                    <div className="col-md-4">
                    {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                        <img src={colon2} className='img-fluid' alt='colon2 ...'/>
                    </div>
                </div>
            </div>
        </div>

        {/* section3 */}

        <div className='section3'>

            <div>
                <div className='container overflow-hidden '>
                    <div className="row gx-5 mt-5 mb-5">
                        <div className="col">

                            <div className="p-1  mt-5 lh-lg">
                                <h2 className='fs-1'>Set yourself apart with a certification of professional mastery!</h2>
                                <p className='fs-4'>Tagging tech talents with the resources they need to be globally relevant.</p>
                            
                            </div>
                        
                        </div>
                        <div className="col-md-5">
                            {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                            <img src={certificate} className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='container overflow-hidden '>
                    <div className="row gx-5 mt-5 mb-5">
                        <div className=" col-md-5">
                            {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                            <img src={coaching} className='img-fluid'/>
                        </div>

                        <div className="col">

                            <div className="p-1  mt-5 lh-lg">
                                <h2 className='fs-1'>Receive extensive coaching and guidance to improve your skills</h2>
                                <p className='fs-4'>Tagging tech talents with the resources they need to be globally relevant.</p>
                            
                            </div>
                    
                        </div>
                
                    </div>
                </div>
            </div>
            <div>
                <div className='container overflow-hidden '>
                    <div className="row gx-5 mt-5 mb-5">
                        <div className="col">

                            <div className="p-1  mt-5 lh-lg">
                                <h2 className='fs-1'>Learn at your pace through our expert-curated resources.</h2>
                                <p className='fs-4'>Tagging tech talents with the resources they need to be globally relevant.</p>
                            
                            </div>
                        
                        </div>
                        <div className="col-md-5">
                            {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                            <img src={expert} className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* section 4 */}
        <div>
            <div className="p-1 section4 mt-5 lh-lg text-center container w-50 ">
                <h2 className='fs-1'> Where Our students have worked at.</h2>
                <p className='fs-5 fst-lighter'>
                    Beyond the training, getting job is one of the crucial concern we address. 
                    Learning to earn through freelancing is the initial step to fulfilling our promise.
                </p>
                            
            </div>

            <div className="container section4b px-4 p-5 ">
                <div className="row gx-5">
                    <div className="col-md-2">
                    {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                    <img src={work1} className='img-fluid'/>
                    </div>
                    <div className="col-md-2">
                    {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                    <img src={work2} className='img-fluid'/>
                    </div>
                    <div className="col-md-2">
                    {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                    <img src={work3} className='img-fluid'/>
                    </div>
                    <div className="col-md-2">
                    {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                    <img src={work4} className='img-fluid'/>
                    </div>
                    <div className="col-md-2">
                    {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                    <img src={work7} className=' w-50 img-fluid'/>
                    </div>
                </div>
                <div className="row gy-4 pt-3" >
                    <div className="col-md-2">
                    {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                    <img src={work5} className=' img-fluid'/>
                    </div>
                    <div className="col-md-2">
                    {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                    <img src={work6} className=' img-fluid'/>
                    </div>

                    <div className="col-md-2">
                    {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                    <img src={work8} className=' img-fluid'/>
                    </div>
                    <div className="col-md-3">
                    {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                    <img src={work9} className=' w-75 img-fluid'/>
                    </div>
                   
                </div>
            </div>
            
        </div>

        {/* section 5 */}

        <div>
            <div className='section5 text-center '>
                <div className='container w-50 lh-lg'>
                    <h1 className='fs-1'>Are You Ready to Get into Tech Today?</h1>
                    <p className='fs-5 fst-lighter'>Choose Talgd to get started and get tagged with the learning resources you need, as you want it and at your pace.</p>
                </div>
                <div className=' mt-5'>
                    <button className="btn btn-lg btn-dark me-2 " type="button"><Link to={"/Courses"} className="nav-link active" >Get started</Link></button>
                    <button className="btn btn-lg btn-outline-success me-2" type="button"><Link to={"/Contact"} className="nav-link active" >Contact</Link></button>
                </div>
            </div>
            
        </div>
      </>
    )
  
}

export default home
