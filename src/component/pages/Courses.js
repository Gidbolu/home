import React from 'react'
import Couses1 from '../images/data-analysist.jpg.png.jpg.png'
import Couses2 from '../images/uiux.jpg'
import Couses3 from '../images/digital marketing.png.jpg'
import Couses4 from '../images/product management.png'
import Couses5 from '../images/WEB DEV UPD.jpg'
import {Link} from 'react-router-dom'

const Courses = () => {
  
    return (

      <>
        {/* section-course1 */}
        <div>
          <div className='about_section1'>
            <div className='container'>
              <h1>Courses</h1>
              <p>
                Talgd is an edtech product built to connect technology enthusiasts 
                with resource providers, to get them equipped and become technology experts.
                </p>
              </div>
            </div>
                
        </div>

        {/* section-course1 */}
        <div className=''>
          <div className='container'>
            <div className='pt-5 section-course1'> <h1> I want to Become a</h1></div>
            <div>
              <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 pb-5">
                <Link to={"/Dataanalysis"} className="col link">
                  <div className="card h-100 shadow">
                    <img src={Couses1} className='img-fluid' alt='colon ...'/>
                    <div className="card-body">
                      <h5 className="card-title">DATA ANALYSIS</h5>
                      <p className="card-text">Data Analysis with Excel, Data Visualization with Power Bi Sql, Statistical Analysis, 
                        Pivot Table and Chart, Look Ups, Power Query Editor, Data Modeling, Dax, Portfolio Projects </p>
                    </div>
                    <div className="card-footer">
                    <small className=""><b className='fs-5'> Enrol</b></small>
                    </div>
                  </div>
                </Link>
                <Link to={"/Uiuxdesign"} className="col link">
                  <div className="card h-100 shadow">
                    <img src={Couses2} className='img-fluid' alt='colon ...'/>
                    <div className="card-body">
                      <h5 className="card-title"> UI/UX DESIGN</h5>
                      <p className="card-text">Understanding user Research, Personas & user Flow, 
                        Element of UX Design, Principles Of UI Design, Learning How To Design With Figma, Learn Prototyping 
                        and Animation In Figma, Building your First Portfolio as a Product Designer</p>
                    </div>
                    <div className="card-footer">
                    <small className=""><b className='fs-5'> Enrol</b></small>
                    </div>
                  </div>
                </Link>
                <Link to={"/Digitalmarketing"} className="col link">
                  <div className="card h-100 shadow">
                    <img src={Couses3} className='img-fluid' alt='colon ...'/>
                    <div className="card-body">
                      <h5 className="card-title"> DIGITAL MARKETING</h5>
                      <p className="card-text">Content Marketing, Social Media Marketing, Copywriting</p>
                    </div>
                    <div className="card-footer">
                    <small className=""><b className='fs-5'> Enrol</b></small>
                    </div>
                  </div>
                </Link>
                <Link to={"/Productmanagement"} className="col link">
                  <div className="card h-100 shadow">
                    <img src={Couses4} className='img-fluid' alt='colon ...'/>
                    <div className="card-body">
                      <h5 className="card-title">PRODUCT MANAGEMENT</h5>
                      <p className="card-text">Learn Product Lifecycle Management best Practices from Vision to Post-Launch using Atlassian, 
                        Learn Requirement Gathering and Wireframing using Figma, Learn Product Pricing and Growth Hacks, Learn Prioritisation, 
                        Stakeholder Management and Effective Communication</p>
                    </div>
                    <div className="card-footer">
                    <small className=""><b className='fs-5'> Enrol</b></small>
                    </div>
                  </div>
                </Link>
                <Link to={"/Webdevelopment"} className="col link">
                  <div className="card h-100 shadow">
                    <img src={Couses5} className='img-fluid' alt='colon ...'/>
                    <div className="card-body">
                      <h5 className="card-title">WEB DEVELOPMENT</h5>
                      <p className="card-text">HTML, CSS, JAVASCRIPT, REACT JS, PHP</p>
                    </div>
                    <div className="card-footer">
                    <small className=""><b className='fs-5'> Enrol</b></small>
                    </div>
                  </div>
                </Link>
                {/* <Link to={"/Productmanagement"} className="col link">
                  <div className="card h-100 shadow">
                    <img src={Couses4} className='img-fluid' alt='colon ...'/>
                    <div className="card-body">
                      <h5 className="card-title">GRAPHIC DESIGN</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                  </div>
                </Link> */}
            
              </div>
            </div>
          </div>  
        </div>
      </>
      
    )
 
}

export default Courses