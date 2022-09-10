import React from "react"
import logo from "../media/logo.png"
import ua from "../data/_ua"
import Button from "./Button"

const AboutUs = () => {
  const { aboutUs } = ua
  return (
    <section className="section section_about-us pd--4">
      <h2 className='title uc text-align--center fs-14'>{aboutUs.title}</h2>
      <div className="section_container section_about-us_container border">
        <div className='section_about-us_container_text-container'>
          <p className='subtitle fs-20 uc txt-white text-align--left bold'>
            {aboutUs.subtitle1}
            <span className='txt-green'>{aboutUs.subtitle2}</span>
            {aboutUs.subtitle3}
          </p>
          <p className='subtitle fs-14 txt-white text-align--left'>{aboutUs.text}</p>
          <Button text={aboutUs.btnText} link="ABOUT_US" />
        </div>
        <img className="logo" src={logo} alt="logo" />
      </div>
    </section>
  )
}

export default AboutUs
