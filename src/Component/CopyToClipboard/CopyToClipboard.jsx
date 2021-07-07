import React, {useState} from 'react';
//Styles
import './CopyToClipboard.scss';
//Icons
import copy from './icon/copy.svg'

export const CopyToClipboard = ({handleClick}) => {

	return (
		<button onClick={handleClick} className="copytocb"><img src={copy} alt="to clipboard"/></button>
	)
}