import React from "react"
import ua from "../data/_ua"
import FeedbackForm from "./FeedbackForm"
import formImage from "../media/placeholder1.png"
import SlideOnScrollWrapper from "./animation/SlideOnScrollWrapper"
import AppearOnScrollWrapper from "./animation/AppearOnScrollWrapper"

const Feedback = ({ headerAlign = "center" }) => {
  const { feedback } = ua
  return (
    <section className='section_feedback pd--5'>
      <SlideOnScrollWrapper
        element={<h2 className={`title fs-20 uc text-align--${headerAlign}`}>{feedback.title}</h2>}
      />
      <div className='section_feedback_container'>
        <div className='section_feedback_container_img-wrapper border'>
          <AppearOnScrollWrapper
            element={<img className='section_feedback_container_img-wrapper_img' src={formImage} alt="formImg" />}
          />
        </div>
        <FeedbackForm />
      </div>
    </section>
  )
}

export default Feedback
