import React from 'react';
//Styles
import './App.scss'
//Components
import {HeadTitle} from "./Component/HeadTitle/HeadTitle";
import {Form} from './Component/Form/Form'
import {Output} from "./Component/Output/Output";
import {Paragraph} from "./Component/Paragraph/Paragraph";
import {Empty} from "./Component/Empty/Empty";
//Effector
import {$loripsum} from './effector';
import {useStore} from 'effector-react'

export const App = () => {

	//subscribe to our store for communication with react
	const data = useStore($loripsum)

	return (
		<div className="app loripsum">
			<HeadTitle
				className={"loripsum__title"}
				titleText="Tired of boring lorem ipsum?"/>

			<Form />

			<Output className="loripsum__output">

				{data.length > 0 ? //render incoming data
					data.map((item, index) => {
						return <Paragraph key={index} className="loripsum__paragraph" paragraphContent={item}/>
					})
					:
					<Empty emptyContent="😎"/>
				}

			</Output>
		</div>
	)
}