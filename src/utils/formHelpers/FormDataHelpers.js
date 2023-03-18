export default class FormDataHelpers {
  static signUpInputFields = () => {
    return [
      {
        name: 'fullName',
        labelText: 'Full Name',
        type: 'text',
        show: true,
      },
      {
        name: 'email',
        labelText: 'Email',
        type: 'email',
        show: true,
      },
      {
        name: 'password',
        labelText: 'password',
        type: 'password',
        show: true,
      },
      {
        name: 'confirmPassword',
        labelText: 'Confirm Password',
        type: 'password',
        show: true,
      },
      {
        name: 'dob',
        labelText: 'Date of Birth',
        type: 'date',
        show: true,
      },
      {
        name: 'nhsId',
        labelText: 'NHS Number',
        type: 'text',
        show: true,
      },
      {
        name: 'address',
        show: false,
      },
      {
        name: 'gender',
        labelText: 'Gender',
        show: false,
      },
    ];
  };

  static buildSignUpRequestPayload = (payload) => {
    // console.log(payload);
    return {
      username: payload.email,
      password: payload.password,
      first_name: payload.fullName,
      patient_profile: {
        nhs_id: payload.nhsId,
        gender: payload.gender,
        dob: payload.dob,
        address: payload.address
      }
    }
  }

  static loginInputFields = () => {
    return [
      {
        name: "email",
        labelText: "Email",
        type: "email",
      },
      {
        name: "password",
        labelText: "Password",
        type: "password",
      },
    ]
  }

  static buildLoginRequestPayload = (payload) => {
    // console.log(payload);
    return {
      username: payload.email,
      password: payload.password,
    }
  }
};
