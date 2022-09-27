import React from 'react'
import { useRecoilValue } from 'recoil'
import { languageState } from "../data/recoil"
import Button from '../components/Button'
import AppearOnScrollWrapper from '../components/animation/AppearOnScrollWrapper'
import { useMediaQuery } from 'react-responsive'

import desktopClip from '../media/ProTech.mp4'
import mobileClip from '../media/ProTech_Mobile.mp4'

const AboutUsPage = () => {
  const lang = useRecoilValue(languageState)
  const isMobileDevice = useMediaQuery({ maxWidth: 640 })
  const { aboutUs } = lang

  return (
    <div className='page about-us-page'>
        <div className='page_header'>
          <video autoPlay muted loop className='page_header_img'>
            <source src={isMobileDevice ? mobileClip : desktopClip} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <AppearOnScrollWrapper
          element={<p className='title uc text-align--center fs-18'>{aboutUs.title2}</p>}
        />
        <AppearOnScrollWrapper
          element={(
            <ul className='about-us-page_services-list'>
              {aboutUs.servicesList.map((servicesListItem) => (
                <li className='about-us-page_services-list_item' key={servicesListItem.title}>
                  <div className='about-us-page_services-list_item_content fs-12'>
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
