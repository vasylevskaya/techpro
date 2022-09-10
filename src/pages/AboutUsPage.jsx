import React from 'react'
import Button from '../components/Button'
import AppearOnScrollWrapper from '../components/animation/AppearOnScrollWrapper'
import ua from "../data/_ua"
import img1 from "../media/service_2.png"

const AboutUsPage = () => {
  const { aboutUs } = ua
  return (
    <div className='page about-us-page'>
        <div className='page_header'>
          <img src={img1} alt="background" className='page_header_img' />
          <div className='page_header_content'>
            <AppearOnScrollWrapper
              element={(
                <>
                  <p className='subtitle fs-30 uc txt-white text-align--center bold'>
                    {aboutUs.subtitle1}
                    <span className='txt-green'>{aboutUs.subtitle2}</span>
                    {aboutUs.subtitle3}
                  </p>
                  <p className='subtitle fs-14 txt-white text-align--center'>{aboutUs.text}</p>
                </>
              )}
            />
          </div>
        </div>
        <AppearOnScrollWrapper
          element={<p className='title uc text-align--center fs-18'>{aboutUs.title2}</p>}
        />
        <AppearOnScrollWrapper
          element={(
            <ul className='about-us-page_services-list'>
              {aboutUs.servicesList.map((servicesListItem) => (
                <li className='border about-us-page_services-list_item' key={servicesListItem.title}>
                  <div className='inner-border about-us-page_services-list_item_content fs-12'>
                    <p className='fs-12 txt-white'>{servicesListItem.title}</p>
                    {servicesListItem.subtitle && (
                      <p className='fs-10 txt-green'>{servicesListItem.subtitle}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        />
        <AppearOnScrollWrapper
          element={<p className='about-us-page_main-text fs-12 txt-grey'>{aboutUs.text2}</p>}
        />
        <AppearOnScrollWrapper
          element={(
            <div className='about-us-page_contact-us'>
              <p className='title uc text-align--center fs-18 txt-white'>{aboutUs.title3}</p>
              <p className='subtitle text-align--center fs-12 txt-white'>{aboutUs.subtitle_3}</p>
              <Button text={aboutUs.btnText2} link="CONTACT_US" />
            </div>
          )}
        />
    </div>
  )
}

export default AboutUsPage
