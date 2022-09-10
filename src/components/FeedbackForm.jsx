import React from "react"
import * as yup from "yup"
import emailjs from '@emailjs/browser'
import { Formik, Form, Field } from 'formik'
import { feedbackFormData } from "../data/feedback"
import { EMAIL_CONFIG } from "../data/data"
import ua from "../data/_ua"
import AppearOnScrollWrapper from "./animation/AppearOnScrollWrapper"

const FeedbackForm = () => {
  const { feedback } = ua

  return (
    <Formik
      initialValues={feedbackFormData.initialValues}
      validationSchema={yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup.string().required(),
        town: yup.string().required(),
        service: yup.array().required().min(1),
        comment: yup.string().required()
      })}
      onSubmit={async (values, formikContext) => {
        const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAIL_CONFIG
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#feedback-form", PUBLIC_KEY)
          .then(
            () => alert('Your email was sent successfully!'),
            (error) => alert(error.text)
          )
          formikContext.setSubmitting(false)
      }}
    >
      {(formikContext) => (
        <Form className="feedback-form" id="feedback-form">
          {feedbackFormData.inputs.map((input) => (
              <AppearOnScrollWrapper
                key={input.name}
                element={(
                  <div className={`border ${formikContext.errors[input.name] && formikContext.touched[input.name] && "error"}`}>
                    {input.type !== "checkbox" ? (
                        <Field
                          type={input.type}
                          name={input.name}
                          className="feedback-form_input inner-border fs-12"
                          placeholder={input.placeholder}
                        />
                      ) : (
                        <div className="feedback-form_input inner-border fs-12 checkbox">
                          <label className="checkbox_title">{input.placeholder}</label>
                          <div className="checkbox_options">
                            {input.options.map((option) => (
                              <label key={option} className="checkbox_options_label">
                                <Field
                                  type="checkbox"
                                  className="checkbox_options_label_checkbox"
                                  name={input.name}
                                  value={option}
                                />
                                {option}
                              </label>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                )}
              />
            ))}
            <button
              type="submit"
              className="button-primary sliding-border"
              disabled={formikContext.isSubmitting}
            >
              <div className="button-primary_container">
                <span>
                  <span className="button-primary_container_text">{ feedback.btnText }</span>
                </span>
              </div>
            </button>
        </Form>
      )}
    </Formik>
  )
}

export default FeedbackForm
