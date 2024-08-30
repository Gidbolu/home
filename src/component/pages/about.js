import React from 'react'
import Image from '../images/Achievements.png'
import Image21 from '../images/image 21.png'
import Image23 from '../images/image 23.png'
import Image25 from '../images/image 25.png'
import Logo1 from '../images/Logo (2).png'
import Logo2 from '../images/Logo (3).png'
import Logo3 from '../images/Logo (4).png'
import Logo4 from '../images/Logo (5).png'
import Logo5 from '../images/Logo (6).png'
import Logo6 from '../images/Logo (7).png'
import Leader1 from '../images/leader 1.png'
import Leader2 from '../images/leader 2.png'
import Leader3 from '../images/leader 3.png'
import Leader4 from '../images/leader 4.png'
import Leader5 from '../images/leader 5.png'
import Leader6 from '../images/leader 6.png'
import Leader7 from '../images/leader 7.png'
import Leader8 from '../images/leader 8.png'
import Leader9 from '../images/leader 9.png'
import Leader10 from '../images/leader 10.png'
import Leader11 from '../images/leader 11.png'
import Leader12 from '../images/leader 12.png'
import Leader13 from '../images/leader 13.jpg.png'
import Leader14 from '../images/leader 14.jpg.png'
import Leader15 from '../images/leader15.png'
import {Link} from 'react-router-dom'
const about = () => {
  
    return (
        // adout section 1
        <>
            <div>
                <div className='about_section1'>
                    <div className='container'>
                        <h1>Leading The </h1>
                        <h1>Edtech Sector </h1>
                        <p>
                            Talgd is an edtech product built to connect technology enthusiasts 
                            with resource providers, to get them equipped and become technology experts.
                        </p>
                    </div>
                </div>
                
            </div>

            {/* section2 */}

            <div>
                <div className='about_section2 secondary'>
                    <div className='container'>
                        <h1>Why Are We Different?</h1>
                        <p>
                            Talgd is committed to the development of the key infrastructures that power 
                            the future of lifelong learning for all age groups, starting with the youths.
                        </p>
                        <div className='about-image'>
                        <img src={Image} className='img-fluid' alt='colon ...'/>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 3 */}

            <div>
                <div className='about_section3 '>
                    <div className=''>
                        <div>
                            <div className='container overflow-hidden '>
                                <div className="row gx-5 mt-5 mb-5">
                                    <div className="col">

                                        <div className="p-1  mt-5 lh-lg">
                                            <h2 className='fs-1'>Our Story</h2>
                                            <p className='fs-4'>
                                                The company started out of 
                                                the need to adapt and contextualise the imported technology skills of 
                                                the first-world nations, to equip indigenous talents to solve local challenges and be globally relevant.
                                            </p>
                                        
                                        </div>
                                    
                                    </div>
                                    <div className="col-md-5">
                                        {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                                        <img src={Image21} className='img-fluid '/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='container overflow-hidden '>
                                <div className="row gx-5 mt-5 mb-5">
                                    <div className=" col-md-5">
                                        {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                                        <img src={Image23} className='img-fluid'/>
                                    </div>

                                    <div className="col">

                                        <div className="p-1  mt-5 lh-lg">
                                            <h2 className='fs-1'>Our Vision</h2>
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
                                            <h2 className='fs-1'>Our Mission</h2>
                                            <p className='fs-4'>Equipping African's youthful Population with the resources needed to position them for global relevance.</p>
                                        
                                        </div>
                                    
                                    </div>
                                    <div className="col-md-5">
                                        {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                                        <img src={Image25} className='img-fluid'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 4 */}

            <div className='section-2'>
                <div className='container overflow-hidden '>
                    <div className="row gx-3">
                        <div className="col-md-4">
                        {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                            <img src={Logo1} className='img-fluid' alt='colon ...'/>
                        </div>
                        <div className="col-md-4">
                        {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                            <img src={Logo2} className='img-fluid' alt='colon1 ...'/>
                        </div>
                        <div className="col-md-4">
                        {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                            <img src={Logo3} className='img-fluid' alt='colon2 ...'/>
                        </div>
                        <div className="col-md-4">
                        {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                            <img src={Logo4} className='img-fluid' alt='colon2 ...'/>
                        </div>
                        <div className="col-md-4">
                        {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                            <img src={Logo5} className='img-fluid' alt='colon2 ...'/>
                        </div>
                        <div className="col-md-4">
                        {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                            <img src={Logo6} className='img-fluid' alt='colon2 ...'/>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 5 */}

            <div className='section-2 section-5'>
                <div className='container '>
                    <div className='pt-5'> <h1> Meet our Team</h1></div>
                    <div>
                        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                            <div className="col">
                                <div className="card h-70">
                                <img src={Leader1} className='img-fluid' alt='colon ...'/>
                                <div className="card-body">
                                    <h5 className="card-title"><b>Adeleke Akinsanni</b></h5>
                                    <p className="card-text">Chief Mentor</p>
                                </div>
                                {/* <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div> */}
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-70">
                                <img src={Leader4} className='img-fluid' alt='colon ...'/>
                                <div className="card-body">
                                    <h5 className="card-title"><b>Ayobami Adebayo</b></h5>
                                    <p className="card-text">Mentor</p>
                                </div>
                                {/* <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div> */}
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-70">
                                <img src={Leader9} className='img-fluid' alt='colon ...'/>
                                <div className="card-body">
                                    <h5 className="card-title"><b>Dara Sobaloju</b></h5>
                                    <p className="card-text">Mentor</p>
                                </div>
                                {/* <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div> */}
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                <img src={Leader10} className='img-fluid' alt='colon ...'/>
                                <div className="card-body">
                                    <h5 className="card-title"><b>Opeyemi Alabi</b></h5>
                                    <p className="card-text">Resource Manager</p>
                                </div>
                                {/* <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-5'> <h2> INSTRUCTORS </h2></div>
                   
                    <div>
                        <div className="row row-cols-1 row-cols-md-5 g-4 mt-3 pb-5">
                            {/* <div className="col">
                                <div className="card h-70">
                                <img src={Leader14} className='img-fluid' alt='colon ...'/>
                                <div className="card-body">
                                    <h5 className="card-title">Tolulope Joshua, Jejeniwa.</h5>
                                    <p className="card-text">Data Analyst</p>
                                </div>
                                
                                </div>
                            </div> */}
                            <div className="col">
                                <div className="card h-70">
                                <img src={Leader2} className='img-fluid' alt='colon ...'/>
                                <div className="card-body">
                                    <h5 className="card-title fs-6"><b>Ariremako Oluwatoyin</b></h5>
                                    <p className="card-text">Data Analyst</p>
                                </div>
                               
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-70">
                                <img src={Leader11} className='img-fluid' alt='colon ...'/>
                                <div className="card-body">
                                    <h5 className="card-title  fs-6"><b>Alabi Marvellous</b></h5>
                                    <p className="card-text">Data Analyst</p>
                                </div>
                               
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-70">
                                <img src={Leader14} className='img-fluid' alt='colon ...'/>
                                <div className="card-body">
                                    <h5 className="card-title fs-6"><b>Tolulope Joshua.</b></h5>
                                    <p className="card-text">Data Analyst</p>
                                </div>
                               
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-70">
                                <img src={Leader5} className='img-fluid' alt='colon ...'/>
                                <div className="card-body">
                                    <h5 className="card-title  fs-6"><b>Joe Great</b></h5>
                                    <p className="card-text">UI/UX Designer</p>
                                </div>
                               
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-70">
                                <img src={Leader6} className='img-fluid' alt='colon ...'/>
                                <div className="card-body">
                                    <h5 className="card-title  fs-6"><b>Adediran Francis</b></h5>
                                    <p className="card-text">UI/UX Designer</p>
                                </div>
                                
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-70">
                                <img src={Leader8} className='img-fluid' alt='colon ...'/>
                                <div className="card-body">
                                    <h5 className="card-title  fs-6"><b>Owoseni John</b></h5>
                                    <p className="card-text">Front End Developer</p>
                                </div>
                                
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-70">
                                <img src={Leader3} className='img-fluid' alt='colon ...'/>
                                <div className="card-body">
                                    <h5 className="card-title  fs-6"><b>Ajibade Susannah </b></h5>
                                    <p className="card-text">Front End Developer</p>
                                </div>
                                
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-70">
                                <img src={Leader15} className='img-fluid' alt='colon ...'/>
                                <div className="card-body">
                                    <h5 className="card-title  fs-6"><b>Adeyeye Paul</b></h5>
                                    <p className="card-text">Back End Developer</p>
                                </div>
                                
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-70">
                                <img src={Leader12} className='img-fluid' alt='colon ...'/>
                                <div className="card-body">
                                    <h5 className="card-title  fs-6"><b>Akinwande Gideon</b></h5>
                                    <p className="card-text"> Back End Developer</p>
                                </div>
                               
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-70">
                                <img src={Leader13} className='img-fluid' alt='colon ...'/>
                                <div className="card-body">
                                    <h5 className="card-title fs-6"><b>Ariyo Israel </b></h5>
                                    <p className="card-text">Graphic Designer</p>
                                </div>
                               
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* section 6 */}

            <div>
                <div className='about_section6'>
                    <div className='container'>
                        <h1 className='mt-5'>You’d like to reach us?</h1>
                        
                        <div>
                            <div className='container overflow-hidden '>
                                <div className="row gx-5 mt-5 mb-5">
                                    <div className="col">

                                        <div className=" lh-lg reach-bg">
                                            <h2 className='fs-1'>Worry no more. We’re here to help.</h2>
                                            <p className='fs-4'>
                                               <b>Email:</b>  talgdoperations@gmail.com
                                            </p>
                                            <p className='fs-4'>
                                               <b>Number:</b>  08130070006
                                            </p>
                                        
                                        </div>
                                    
                                    </div>
                                    <div className=" pt-5 col-md-5">
                                        <p className='fs-4'>
                                           <b> Address:</b> Zone 9, woleola Estate, Baruwa street, Behind Adolak hotel, osogbo, osun state, Nigeria.
                                        </p>
                                        <p className='fs-4'>
                                          <b>Working hours:</b>   Monday - Friday (10am - 4pm) 
                                        </p>
                                        <div className=' mt-4'>
                                            <button className="btn btn-lg btn-dark me-2 " type="button"><Link to={"https://www.google.com/maps/place/7%C2%B046'00.2%22N+4%C2%B032'11.1%22E/@7.7660254,4.5360951,17.97z/data=!4m4!3m3!8m2!3d7.7667222!4d4.5364167?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D"} target='_blank' className="nav-link active" >Click here for the Location Map</Link></button>
                                            {/* <button className="btn btn-lg btn-outline-success me-2" type="button"><Link to={"/Contact"} className="nav-link active" >Contact</Link></button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 7 */}

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

export default about
