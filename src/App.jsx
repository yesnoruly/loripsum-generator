import React, {useState} from 'react';
//Styles
import './App.scss'
//Components
import {Output} from "./Component/Output/Output";
import {Paragraph} from "./Component/Paragraph/Paragraph";
import {Loader} from "./Component/Loader/Loader";
import {CopyToClipboard} from './Component/CopyToClipboard/CopyToClipboard'
//Effector
import {$loripsum, fetchLoripsumDataFx, $joinedLoripsum} from './effector';
import {useStore} from 'effector-react'

export const App = () => {

	const loripsum = useStore($loripsum)
	const isLoading = useStore(fetchLoripsumDataFx.pending)
	const joinedLoripsum = useStore($joinedLoripsum)

	const [input, setInput] = useState("1")

	const handleSubmit = (evt) => {
		evt.preventDefault();
		fetchLoripsumDataFx(input);
	}

	return (
		<div className="app loripsum">

			<h2 className="title loripsum__title">Tired of boring lorem ipsum?</h2>

			<form onSubmit={handleSubmit} className="form loripsum__form">

				<label className="counter-label" htmlFor="counter-input">Paragraphs:</label>
				<input className="counter-input"
					   min="1"
					   max="999"
					   step="1"
					   type="number"
					   id="counter-input"
					   onChange={e => setInput(e.target.value)}
					   value={input}
				/>

				<button className="generate loripsum__button" type="submit">Generate</button>
			</form>

			<Output className="loripsum__output">

				<CopyToClipboard data={joinedLoripsum}/>

				{
					isLoading ?
						<Loader className="loripsum__loader"/>
						:
						(
							loripsum.length > 0 ?
								loripsum.map((item, index) => {
									return <Paragraph key={index}
													  className="loripsum__paragraph"
													  paragraphContent={item}/>
								})
								:
								<p className="empty">😎</p>
					)
				}

			</Output>
		</div>
	)
}