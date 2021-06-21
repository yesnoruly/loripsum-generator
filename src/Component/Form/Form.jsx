import React, {useState} from 'react';
//Components
import {CounterInput} from "../CounterInput/CounterInput";
import {Button} from "../Button/Button";
//Styles
import './Form.scss';
import '../../App.scss';
//Effector
import {fetchLoripsumDataFx} from "../../effector";

export const Form = ({}) => {

	const [input, setInput] = useState("1")

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		await fetchLoripsumDataFx(input) //when submitting send a request to the API
	}

	return (
		<form onSubmit={handleSubmit} className="form loripsum__form">
			<CounterInput value={input} onChange={e => setInput(e.target.value)} labelText="Paragraphs:"/>

			<Button
				buttonType="submit"
				buttonText="Generate"
				className="loripsum__button"/>
		</form>
	)
}