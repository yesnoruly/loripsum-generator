import React, {useState, useEffect} from 'react';
//Styles
import './CopyToClipboard.scss';
//Icons
import copy from './icon/copy.svg';
import check from './icon/check.svg';

export const CopyToClipboard = ({data, deps}) => {

	const [active, setActive] = useState(false)

	const handleClick = () => {
		setActive(true)
		navigator.clipboard.writeText(data)
	}

	useEffect(() => {
		setInterval(() => {
			setActive(false)
		}, 2000)
	}, [setActive])

	return (
		<button onClick={handleClick} className="copytocb">
			<img src={active ? check : copy} alt="to clipboard"/>
		</button>
	)
}