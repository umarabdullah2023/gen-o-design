import React from 'react';
import WrapperClass from './WrapperClass';
import {CircularProgress} from "@mui/material";

export default function Button({
                                 btnType = 'primary',
                                 className,
                                 isTypeSubmit,
                                 onClick,
                                 isWrapClass,
                                 wrapperClassName = '',
                                 text,
                                 isLoading,
                                 disabled,
                                 disableOpacity,
                               }) {

  return (
    <WrapperClass isWrapClass={isWrapClass || false} className={wrapperClassName}>
      <button
        className={`btn btn-${btnType} ${className} ${disabled ? 'disabled' : ''} ${
          disableOpacity ? 'disable-opacity' : ''
        }`}
        type={isTypeSubmit ? 'submit' : undefined}
        onClick={disabled ? undefined : onClick}>
        {isLoading ? (
          <div className='button-loader'>{
            <CircularProgress sx={{color: 'white'}} size={20} thickness={4}/>}</div>
        ) : (
          <>{text}</>
        )}
      </button>
    </WrapperClass>
  );
}
