import React, {useState} from 'react';
//Styles
import './App.scss'
//Components
import {HeadTitle} from "./Component/HeadTitle/HeadTitle";
import {CounterInput} from "./Component/CounterInput/CounterInput";
import {Button} from "./Component/Button/Button";
import {Output} from "./Component/Output/Output";
import {Paragraph} from "./Component/Paragraph/Paragraph";
//Effector
import {fetchLoripsumDataFx, $loripsum} from './effector';
import {useStore} from 'effector-react'

export const App = () => {

	const data = useStore($loripsum)

	const [input, setInput] = useState("1")

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		await fetchLoripsumDataFx(input)
	}

	return (
		<div className="loripsum">
			<HeadTitle
				titleClassName={"loripsum__title"}
				titleText="Tired of boring lorem ipsum?"/>

			<form onSubmit={handleSubmit} className="loripsum__form">
				<CounterInput value={input} onChange={e => setInput(e.target.value)} labelText="Paragraphs:"/>

				<Button
					buttonType="submit"
					buttonText="Generate"
					buttonClassName="loripsum__button"/>
			</form>

			<Output outputClassName="loripsum__output">

				{
					data.length > 0 ?
						data.map((item, index) => {
							return <Paragraph key={index} paragraphClassName="loripsum__paragraph" paragraphContent={item} />
						}) :
							<div>Paraparapam</div>
				}

			</Output>
		</div>
	)
}