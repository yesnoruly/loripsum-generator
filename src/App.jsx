import React from 'react';
//Styles
import './App.scss'
//Components
import {HeadTitle} from "./Component/HeadTitle/HeadTitle";
import {Form} from './Component/Form/Form'
import {Output} from "./Component/Output/Output";
import {Paragraph} from "./Component/Paragraph/Paragraph";
import {Empty} from "./Component/helpers/Empty/Empty";
//Effector
import {$loripsum} from './effector';
import {useStore} from 'effector-react'

export const App = () => {

	const data = useStore($loripsum) //subscribe to our store and return its current value with auto-update

	return (
		<div className="app loripsum">
			<HeadTitle
				titleClassName={"loripsum__title"}
				titleText="Tired of boring lorem ipsum?"/>

			<Form />

			<Output outputClassName="loripsum__output">

				{data.length > 0 ? //render incoming data
					data.map((item, index) => {
						return <Paragraph key={index}
										  paragraphClassName="loripsum__paragraph"
										  paragraphContent={item}
						/>
					})
					:
					<Empty emptyContent="..."/>
				}

			</Output>
		</div>
	)
}