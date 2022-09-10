import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../media/service_4.png"
import ua from "../data/_ua"
import AppearOnScrollWrapper from '../components/animation/AppearOnScrollWrapper'

const ServicesPage = () => {
  const { services } = ua
  return (
    <div className='page services-page'>
      <AppearOnScrollWrapper element={(
        <ul className='services-page_nav'>
          {services.list.map((service) => (
            <Link to={`/services/${service.id}`} key={service.title}>
              <li className='border sliding-border'>
                <div className='services-page_nav_nav-item inner-border fs-11'>
                  <span>
                    <span>
                      {service.title}
                    </span>
                  </span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )} />
      <img src={img1} alt="background" />
    </div>
  )
}

export default ServicesPage
