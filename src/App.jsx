import React, {useState} from 'react';
//Styles
import './App.scss'
//Components
import {Loader} from "./Components/Loader/Loader";
import {CopyToClipboard} from './Components/CopyToClipboard/CopyToClipboard'
//Effector
import {fetchDataFx} from './effector/effect'
import {$data, $dataJoined} from './effector/store'
import {useStore} from 'effector-react'

export const App = () => {

	const data = useStore($data)
	const isLoading = useStore(fetchDataFx.pending)
	const dataJoined = useStore($dataJoined)

	const [input, setInput] = useState("1")

	const handleSubmit = (evt) => {
		evt.preventDefault();
		fetchDataFx(input);
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

			<section className="output loripsum__output">

				<CopyToClipboard data={dataJoined}/>

				{
					isLoading ?
						<Loader className="loripsum__loader"/>
						:
						(
							data.length > 0 ?
								data.map((item, index) => {
									return <p key={index} className="paragraph loripsum__paragraph">{item}</p>
								})
								:
								<p className="empty">😎</p>
					)
				}

			</section>
		</div>
	)
}