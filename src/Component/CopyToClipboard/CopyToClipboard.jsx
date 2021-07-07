import React from 'react';
//Styles
import './CopyToClipboard.scss';
//Icons
import copy from './icon/copy.svg'

export const CopyToClipboard = () => {
	return (
		<button className="copytocb"><img src={copy} alt="to clipboard"/></button>
	)
}