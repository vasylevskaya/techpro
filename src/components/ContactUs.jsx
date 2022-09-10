import React from 'react'
import ua from '../data/_ua'
import ContactUsItem from './ContectUsItem'
import SlideOnScrollWrapper from './animation/SlideOnScrollWrapper'

const ContactUs = ({ headerAlign = "center" }) => {
  const { contacts } = ua
  return (
    <SlideOnScrollWrapper element={(
      <section className='section_contacts pd--5'>
        <h2 className={`title fs-20 uc text-align--${headerAlign}`}>{contacts.title}</h2>
        <div className='section_contacts_container'>
          {contacts.list.map((dataObject) => <ContactUsItem key={dataObject.title} dataObject={dataObject} />)}
        </div>
      </section>
    )} />
  )
}

export default ContactUs
