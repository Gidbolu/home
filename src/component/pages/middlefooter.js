import React from 'react'
import logo from '../images/image 20.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'
const middlefooter = () => {
  
    return (

      <>
      {/* section6 */}
        <div>
            <div className='section6'>
                <div className="container px-4 con">
                    <div className="row gx-5">
                        <div className="col ">
                            <h1 className=''>Join Our Community</h1>
                            <p>Connect with others who can be your accountability partner on your journey to becoming a tech expert.</p>
                        </div>
                        <div className="col middle1">
                            <button className="btn btn-lg btn-success me-2 " type="button"><Link to={"https://chat.whatsapp.com/L2SuwWk1zziJ4gGt6hc0J8"} target='_blank' className="nav-link active" >Join our community</Link></button>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>

        {/* section 7 */}

        <div>

            <div className='section7'>

                <div className='container '>

                    <div class="row row-cols-md-3 gx-1 mt-5 pb-5">
                        <div class="col">
                            <a className="navbar-brand" href="#"><img className='w-25' src={logo} alt='logo....'/></a>
                            <div className='mt-4'>
                                <p >Connecting technology enthusiasts with resource providers, to get them equipped and become technology experts.</p>
                            </div>
                            <div className='col mt-3 fs-5'>
                                <a href="tel:08130070006">Tel: 08130070006</a>
                                
                            </div>
                            <div className='row row-cols-5 row-cols-md-3 fs-4 mt-4 '>
                                <div className='col-md-2'>
                                    <Link to={"https://x.com/talgdhq"} target='_blank' className="col link"> <FontAwesomeIcon icon={faTwitter} /> </Link> 
                                </div>

                                <div className='col-md-2'>
                                <Link to={"https://www.instagram.com/talgd_techhub"} target='_blank' className="col link"> <FontAwesomeIcon icon={faInstagram} /> </Link> 
                                </div>
                                <div className='col-md-2'>
                                <Link to={"https://www.linkedin.com/company/talgdhq/"} target='_blank' className="col link"> <FontAwesomeIcon icon={faLinkedin} /> </Link> 
                                </div>
                                
                            </div>
                            
                        </div>
                        <div class="col foot">
                            <div className='row row-cols-2 row-cols-md-2'>
                                <div class="col">
                                    <h2 className='fs-4'> <b> About </b></h2>
                                    <div>

                                        <li><Link to={"/About"} className="col link"> Our Team </Link></li>
                                        <li><Link to={"https://g.co/kgs/ezNgtPp"} target='_blank' className="col link"> Our Location</Link></li>
                                    
                                    </div>
                                </div>

                                <div class="col">
                                    <h2 className='fs-4'> <b> Courses </b></h2>
                                    <div>
                                    
                                        <li> <Link to={"/Dataanalysis"} className="col link"> Data Analysis </Link></li>
                                        <li> <Link to={"/Uiuxdesign"} className="col link"> UI/UX Design </Link></li>
                                        <li> <Link to={"/Digitalmarketing"} className="col link">Digital Marketing </Link></li>
                                        <li> <Link to={"/Productmanagement"} className="col link"> Product Management </Link></li>
                                        <li> <Link to={"/Webdevelopment"} className="col link"> Website Development </Link></li>
                                    
                                        
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

export default middlefooter
