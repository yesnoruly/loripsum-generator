import React from 'react';
//Styles
import './Loader.scss';

export const Loader = ({className}) => {
	return (
		<span className={`loader ${className || ""}`}> </span>
	)
}