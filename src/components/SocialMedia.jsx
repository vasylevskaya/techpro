import React from "react"

import ua from "../data/_ua"
import { LINKS } from '../data/data'
import insta1 from "../media/insta1.png"
import insta2 from "../media/insta2.png"
import insta3 from "../media/insta3.png"

const SocialMedia = () => {
  const { socials } = ua
  return (
    <section className="section section_socials pd--5">
      <h2 className='title fs-20 uc text-align--center'>{socials.title}</h2>
      <div className='section_socials_links fs-14 txt-white'>
      <div className='instagram'> </div>
        <a className='section_socials_links_link' href={LINKS.INSTAGRAM}>Instagram</a>
        <span className="slash">/</span>
        <div className='facebook'> </div>
        <a className='section_socials_links_link' href={LINKS.FACEBOOK}>Facebook</a>
      </div>
      <div className='section_socials_images_border border'>
        <div className='section_socials_images inner-border'>
          <div className='section_socials_images_img-wrapper border'>
            <img className='section_socials_images_img-wrapper_img border' src={insta1} alt="insta-1" />
            <div className="icon-heart"></div>
          </div>
          <div className='section_socials_images_img-wrapper border'>
            <img className='section_socials_images_img-wrapper_img border' src={insta2} alt="insta-2" />
            <div className="icon-heart"></div>
          </div>
          <div className='section_socials_images_img-wrapper border'>
            <img className='section_socials_images_img-wrapper_img border' src={insta3} alt="insta-3" />
            <div className="icon-heart"></div>
          </div>
          <div className="icon-gear"></div>
        </div>
      </div>
    </section>
  )
}

export default SocialMedia
