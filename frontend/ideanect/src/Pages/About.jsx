import React from 'react'
import HomeCard from '../components/HomeCom/HomeCard'
import Heroabout from '../components/AboutCom/Heroabout'
import OurMission from '../components/AboutCom/Ourmission'
import OurVision from '../components/AboutCom/Ourvision'
import FuturePlans from '../components/AboutCom/Futureplans'
import Companydetails from '../components/AboutCom/Companydetails'



function About() {
  return (
    <div>
      <Heroabout/>
       <HomeCard/>
       <OurMission/>
       <OurVision/>
       <FuturePlans/>
       <Companydetails/>
    </div>
  )
}

export default About
