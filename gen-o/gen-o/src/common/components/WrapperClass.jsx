import React from 'react';

export default function WrapperClass({ isWrapClass, className, children }) {
	return isWrapClass ? <div className={className || ''}>{children}</div> : children;
}
