import React from "react"
import ua from "../data/_ua"
import QuestionItem from "./QuestionItem"
import qaImage from "../media/placeholder2.png"
import AppearOnScrollWrapper from "./animation/AppearOnScrollWrapper"
import SlideOnScrollWrapper from "./animation/SlideOnScrollWrapper"

const QuestionsAndAnswers = ({ headerAlign = "center" }) => {
  const { qa } = ua
  return (
    <section className="section section_qa pd--4">
      <SlideOnScrollWrapper
        element={<h2 className={`title fs-20 uc text-align--${headerAlign}`}>{qa.title}</h2>}
      />
      <div className="section_qa_content">
        <img src={qaImage} alt="qa" className="section_qa_content_img" />
        <div className='section_qa_content_questions'>
          {qa.questions.map((question) => (
            <AppearOnScrollWrapper
              key={question.title}
              element={<QuestionItem question={question} />}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuestionsAndAnswers
