import React from "react"
import { useRecoilValue } from 'recoil'
import { languageState } from "../data/recoil"
import QuestionItem from "./QuestionItem"
import AppearOnScrollWrapper from "./animation/AppearOnScrollWrapper"
import SlideOnScrollWrapper from "./animation/SlideOnScrollWrapper"

const QuestionsAndAnswers = ({ headerAlign = "center" }) => {
  const lang = useRecoilValue(languageState)
  const { qa } = lang

  return (
    <section className="section section_qa pd--4">
      <SlideOnScrollWrapper
        element={<h2 className={`title fs-30 uc text-align--${headerAlign}`}>{qa.title}</h2>}
      />
      <div className="section_qa_content">
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
