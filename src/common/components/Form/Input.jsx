import React from "react";
import _ from 'lodash';

export const InputField = ({formik, name, labelText, type}) => (
  <div className='input-field-wrapper'>
    <label htmlFor={name} className='form-label'>
      {labelText}
    </label>
    <input
      className='input-field'
      id={name}
      name={name}
      type={type}
      onChange={formik.handleChange}
      value={formik.values[name]}
    />
    {
      formik && formik.touched[name] && formik.errors[name] && (
        <>
          {
            _.isArray(formik.errors[name]) ? (
              <>
                {formik.errors[name]?.map((error) => (
                  <p className='error-field' key={error}>
                    {error}
                  </p>
                ))}
              </>
            ) : (
              <p className='error-field'>{formik.errors[name]}</p>
            )
          }
        </>
      )
    }

  </div>
);

export const InputFieldTextArea = ({formik, name, labelText, type}) => (
  <div className='input-field-wrapper'>
    <label htmlFor="address" className='form-label'>
      {labelText}
    </label>
    <textarea
      className='input-field'
      id={name}
      name={name}
      type={type}
      onChange={formik.handleChange}
      value={formik.values[name]}></textarea>
    {
      formik && formik.touched[name] && formik.errors[name] && (
        <>
          {
            _.isArray(formik.errors[name]) ? (
              <>
                {formik.errors[name]?.map((error) => (
                  <p className='error-field' key={error}>
                    {error}
                  </p>
                ))}
              </>
            ) : (
              <p className='error-field'>{formik.errors[name]}</p>
            )
          }
        </>
      )
    }
  </div>
);
