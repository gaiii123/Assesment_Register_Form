export const validateStepOne = (data) => {
  const errors = {};

  if (!data.fullname) {
    errors.fullname = 'Full Name is required';
  }

  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Email is invalid';
  }


  return errors;
};

export const validateStepTwo = (data) => {
  const errors = {};

  if (!data.password) {
    errors.password = 'Password is required';
  } else if (data.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is required';
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};
