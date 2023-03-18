import React from 'react';
import WrapperClass from './WrapperClass';

export default function Image({ path, className = '', showWrapper = false, wrapperClassName = '' }) {
	const getAbsolutePath = (path) => import.meta.env.PUBLIC_URL || '' + '/' + path;

	const imagePath = getAbsolutePath(path);
	return (
		<WrapperClass isWrapClass={showWrapper} className={wrapperClassName}>
			<img src={imagePath} alt='' className={'img-fluid ' + className}></img>
		</WrapperClass>
	);
}
