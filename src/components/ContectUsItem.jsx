import React from 'react'

const ContactUsItem = ({ dataObject }) => (
  <div className='border sliding-border'>
    <span>
      <span>
        <a className='section_contacts_container_contact-item inner-border' href={dataObject.href}>
          <div className={`section_contacts_container_contact-item_icon ${dataObject.icon}`}> </div>
          <p className='section_contacts_container_contact-item_title'>{dataObject.title}</p>
          {dataObject.content.map((p) => (
            <p key={p} className='section_contacts_container_contact-item_text'>{p}</p>
          ))}
        </a>
      </span>
    </span>
  </div>
)

export default ContactUsItem
