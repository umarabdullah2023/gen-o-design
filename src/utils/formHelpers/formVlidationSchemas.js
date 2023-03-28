import * as Yup from 'yup';


const emailSchema = Yup.string().nullable().email('Invalid email').required('Please enter a valid email');
const passwordSchema = (message) => Yup.string()
  .nullable()
  .min(8, 'Password must be atleast 8 charactars')
  .required(message);

const confirmPasswordSchema = (password) =>
  Yup.string()
    .nullable()
    .required('Confirm Password is Required')
    .oneOf([Yup.ref(password)], 'Passwords must match');


export const profileSchema = () => {
  return Yup.object().shape({
    fullName: Yup.string().nullable().required('Full Name is a required field'),
    email: emailSchema,
    dob: Yup.date().nullable().required('Date of Birth is required field'),
    nhsId: Yup.number()
      .typeError('NHS Number must be a numbers.')
      .positive("NHS Number should ne positive.")
      .nullable()
      .required('NHS Number is a required field')
      .test('len', 'NHS Number must be exactly 10 digits', val => val && val.toString().length === 10),
  });
}
export const signUpSchema = () => {

  return Yup.object().shape({
    address: Yup.string().nullable().required('Address is a required field'),
    password: passwordSchema('Password is Required'),
    confirmPassword: confirmPasswordSchema('password'),
    gender: Yup.string().nullable().required('Gender is required'),
    terms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
  }).concat(profileSchema());
}

export const loginSchema = () => {
  return Yup.object().shape({
    email: emailSchema,
    password: passwordSchema('Password is required'),
  });
}

export const passwordChangeSchema = () => {

  return Yup.object().shape({
    oldPassword: passwordSchema('Password is required'),
    newPassword: passwordSchema('New Password is required'),
    confirmNewPassword: confirmPasswordSchema('newPassword'),
  });
}


export const medicalHistoryFormSchema = () => {

  return Yup.object().shape({
    drugName: Yup.string().nullable().required('Address is a required field').max(100),
  });
}
