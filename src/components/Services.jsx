import React from "react"
import ua from "../data/_ua"
import Button from "./Button"
import placeholder3 from "../media/placeholder3.png"

const Services = () => {
  const { services } = ua
  return (
    <section className="section section_services">
      <h2 className='title fs-20 uc text-align--center'>{services.title}</h2>
      <div className='section_services_content'>
        <p className='section_services_content_text txt-lightgrey fs-11'>{services.text}</p>
        <img className='section_services_content_img' src={placeholder3} alt="servicesImage" />
      </div>
      <Button text="Всі послуги" link="SERVISES" />
    </section>
  )
}

export default Services
