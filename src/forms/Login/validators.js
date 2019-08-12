export default (values) => {
  const errors = {};

  if(!values.email) {
    errors.email = "Required"
  }

  if (!values.password) {
    errors.password = "Required"
  }

  if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please provie a valid email address"
  }

  return errors;
}