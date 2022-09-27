import React from 'react'
import { useRecoilValue } from 'recoil'
import { languageState } from "../data/recoil"
import { Link } from 'react-router-dom'
import AppearOnScrollWrapper from '../components/animation/AppearOnScrollWrapper'

const ServicesPage = () => {
  const lang = useRecoilValue(languageState)
  const { services } = lang
  return (
    <div className='page services-page'>
      <AppearOnScrollWrapper element={(
        <ul className='services-page_nav'>
          {services.list.map((service) => (
            <Link to={`/services/${service.id}`} key={service.title}>
              <li className='services-page_nav_nav-item inner-border fs-11 green-shadow-hover'>
                <span>
                  <span>
                    {service.title}
                  </span>
                </span>
              </li>
            </Link>
          ))}
        </ul>
      )} />
    </div>
  )
}

export default ServicesPage
