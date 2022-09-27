import React from 'react'

import ContactUs from '../components/ContactUs'
import Feedback from '../components/Feedback'
import QuestionsAndAnswers from "../components/QuestionsAndAnswers"
import Ordering from "../components/Ordering"
import AboutUs from "../components/AboutUs"
import VideoBackground from "../components/VideoBackground"
import SlideOnScrollWrapper from '../components/animation/SlideOnScrollWrapper'

const HomePage = () => {
  return (
    <div className='page home-page'>
      <VideoBackground />
      <SlideOnScrollWrapper element={<AboutUs />} />
      <SlideOnScrollWrapper element={<Ordering />} />
      <QuestionsAndAnswers />
      <Feedback />
      <ContactUs />
    </div>
  )
}

export default HomePage
