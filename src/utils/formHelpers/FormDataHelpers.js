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
    return {
      username: payload.email,
      password: payload.password,
    }
  }

  static profileUpdateFields = () => {
    return [
      {
        name: 'fullName',
        type: 'text',
        labelText: 'Full Name',
      },
      {
        name: 'email',
        type: 'email',
        labelText: 'Email',
      },
      {
        name: 'nhsId',
        type: 'text',
        labelText: 'NHS Number',
      },
      {
        name: 'dob',
        type: 'date',
        labelText: 'Date of Birth',
      }
    ]
  };
  static buildUpdatePatientProfileRequestPayload = (payload) => {
    return {
      first_name: payload?.fullName,
      patient_profile: {
        nhs_id: payload?.nhsId,
        dob: payload?.dob
      }
    }
  };

  static passwordChangeFields = () => {
    return [
      {
        name: "oldPassword",
        labelText: "Old Password",
        type: "password",
      },
      {
        name: "newPassword",
        labelText: "New Password",
        type: "password",
      },
      {
        name: "confirmNewPassword",
        labelText: "Confirm New Password",
        type: "password",
      },
    ]
  };
  static buildChangePasswordRequestPayload = (payload) => {
    return {
      old_password: payload?.oldPassword,
      new_password: payload?.newPassword,
      confirm_new_password: payload?.confirmNewPassword,
    }
  };


  static medicalHistoryFields = () => {
    return [
      {
        name: "drugName",
        labelText: "Drug Name",
        type: "text",
        breakLine: true
      },
    ]
  };
  static buildMedicalHistoryRequestPayload = (payload) => {
    return {
      drug_name: payload?.drugName,
    }
  };
};
