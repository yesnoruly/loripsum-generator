import React, {useState} from 'react';
//Styles
import './App.scss'
//Components
import {Loader} from './Components/Loader/Loader';
import {CopyToClipboard} from './Components/CopyToClipboard/CopyToClipboard';
import {InputTNumber} from './Components/InputTNumber/InputTNumber'
//Effector
import {getTextContentFx, $textContent, $textContentJoined} from './effector'
import {useStore} from 'effector-react'

export const App = () => {

    const textContent = useStore($textContent)
    const isLoading = useStore(getTextContentFx.pending)
    const textContentJoined = useStore($textContentJoined)

    const [input, setInput] = useState("1")

    const handleSubmit = (evt) => {
        evt.preventDefault();
        getTextContentFx(input);
    }

    return (
        <div className="app loripsum">

            <h2 className="title loripsum__title">Tired of boring lorem ipsum?</h2>

            <form onSubmit={handleSubmit} className="form loripsum__form">

                <InputTNumber labelText="Paragraphs:"
                              value={input}
                              onChange={e => setInput(e.target.value)}
                              min={1}
                              max={999}
                />

                <button className="generate loripsum__button" type="submit">Generate</button>
            </form>

            <section className="output loripsum__output">

                <CopyToClipboard data={textContentJoined}/>

                {
                    isLoading ?
                        <Loader className="loripsum__loader"/>
                        :
                        (
                            textContent.length > 0 ?
                                textContent.map((item, index) => {
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