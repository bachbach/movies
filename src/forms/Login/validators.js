export default (values) => {
  const errors = {};

  if (!values.email) errors.email = "Required";

  if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "You must supply a valid email address";
  }

  if (values.password.length < 5) {
    errors.password = "Passwords must be at least 5 characters";
  }

  return errors;
}