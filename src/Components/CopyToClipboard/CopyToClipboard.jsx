import React from 'react';
//Styles
import './CopyToClipboard.scss';
//Icons
import copy from './icon/copy.svg';

export const CopyToClipboard = ({data}) => {

	const handleClick = () => {
		navigator.clipboard.writeText(data)
	}

	return (
		<button onClick={handleClick} className="copytocb">
			<img src={copy} alt="Copy to clipboard"/>
		</button>
	)
}