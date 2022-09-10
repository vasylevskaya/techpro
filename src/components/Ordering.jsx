import React from "react"
import ua from "../data/_ua"
import Button from "./Button"

const Ordering = () => {
  const { ordering } = ua
  return (
    <section className="section section_ordering pd--4">
      <h2 className='title fs-20 uc text-align--left'>{ordering.title}</h2>
      <div className='section_ordering_content '>
        <div className='section_ordering_content_text-container txt-white fs-11'>
          <div>{ordering.text1}</div>
          <ul>
            <p>{ordering.text2}</p>
            {ordering.list2.map(p => <li key={p}>{p}</li>)}
          </ul>
          <div>
            {ordering.list3.map(p => <p key={p}>{p}</p>)}
          </div>
        </div>
      </div>
      <Button text={ordering.btnText} link="CONTACT_US" />
    </section>
  )
}

export default Ordering
