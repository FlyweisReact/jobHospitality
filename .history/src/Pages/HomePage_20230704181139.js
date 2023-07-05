import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import AboutUs from '../Component/Shared/about-us'
import Banner from '../Component/Shared/Banner'
import PopularJobs from '../Component/Shared/popular-jobs'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <div className='Center_Heading'>

        </div>
        <AboutUs />
        <PopularJobs />

    </>
  )
}

export default HomePage