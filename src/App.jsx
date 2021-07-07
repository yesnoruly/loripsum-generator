import React from 'react';
//Styles
import './App.scss'
//Components
import {HeadTitle} from "./Component/HeadTitle/HeadTitle";
import {Form} from './Component/Form/Form'
import {Output} from "./Component/Output/Output";
import {Paragraph} from "./Component/Paragraph/Paragraph";
import {Empty} from "./Component/Empty/Empty";
import {Loader} from "./Component/Loader/Loader";
import {CopyToClipboard} from './Component/CopyToClipboard/CopyToClipboard'
//Effector
import {$loripsum, fetchLoripsumDataFx, $joinedLoripsum} from './effector';
import {useStore} from 'effector-react'

export const App = () => {

	const loripsum = useStore($loripsum)
	const isLoading = useStore(fetchLoripsumDataFx.pending)
	const joinedLoripsum = useStore($joinedLoripsum)

	return (
		<div className="app loripsum">
			<HeadTitle
				className={"loripsum__title"}
				titleText="Tired of boring lorem ipsum?"/>

			<Form/>

			<Output className="loripsum__output">

				<CopyToClipboard deps={fetchLoripsumDataFx} data={joinedLoripsum}/>

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
								<Empty emptyContent="😎"/>
						)
				}

			</Output>
		</div>
	)
}