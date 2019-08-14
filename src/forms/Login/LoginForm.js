import React from 'react'
import { Form, Formik } from 'formik'
import cx from 'classnames'
import validate from './validators'
import { PrimaryButton, SecondaryButton } from 'components/Button'
import './LoginForm.scss'

const Login = ({ login, ...rest }) => {
  const intialValues = { email: "", password: "" }

  const handleSubmit = async (values, { setSubmitting }) => {
    await login(values)
    setSubmitting(false)
    rest.history.push('/')
  }

  const inputClass = (props, field) => cx({
    "input": true,
    "input__error": props.errors[field] && props.touched[field]
  })

  return (
    <div className="login-form__container">
      <Formik
        initialValues={intialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {props => (
          <Form className="login-form">
            <div className="login-form__form-group">
              <label className="label" className="label" htmlFor="email">Email</label>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your account email"
                  value={props.values.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={inputClass(props, "email")}
                />
                <div className="error">{props.errors.email}</div>
              </div>
            </div>
            <div className="login-form__form-group">
              <label className="label" htmlFor="password">Password</label>
              <div>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your account password"
                  value={props.values.password}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={inputClass(props, "password")}
                />
                <div className="error">{props.errors.password}</div>
              </div>
            </div>
            <div className="login-form__buttons-group">
              <PrimaryButton
                type="submit"
                value="Submit"
                disabled={props.isSubmitting}
              >
                Sumbit
              </PrimaryButton>
              <SecondaryButton
                type="button"
                value="Reset"
                onClick={props.handleReset}
                disabled={!props.dirty || props.isSubmitting}
              >
                Reset
              </SecondaryButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login