import React from 'react'
import { Form, Formik } from 'formik'
import validate from './validators'

const Login = ({ login, ...rest }) => {
  const intialValues = { email: "", password: "" }

  const handleSubmit = async (values, { setSubmitting }) => {
    await login(values)
    setSubmitting(false)
    rest.history.push('/')
  }

  return (
    <Formik
      initialValues={intialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {props => (
        <Form>
          <label htmlFor="email">Email</label>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Enter your account email"
              value={props.values.email}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              style={{
                borderColor:
                  props.errors.email && props.touched.email && "red"
              }}
            />
            {props.errors.email && props.touched.email && (
              <div style={{ color: "red" }}>{props.errors.email}</div>
            )}
          </div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Enter your account password"
              value={props.values.password}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              style={{
                borderColor:
                  props.errors.password && props.touched.password && "red"
              }}
            />
            {props.errors.password && props.touched.password && (
              <div style={{ color: "red" }}>{props.errors.password}</div>
            )}
          </div>
          <input
            type="submit"
            value="Submit"
            disabled={props.isSubmitting}
          />
          <input
            type="reset"
            value="Reset"
            onClick={props.handleReset}
            disabled={!props.dirty || props.isSubmitting}
          />
        </Form>
      )}
    </Formik>
  )
}

export default Login