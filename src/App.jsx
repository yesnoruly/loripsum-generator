import React, {useState} from 'react';
//Styles
import './App.scss'
//Components
import {Loader} from './Components/Loader';
import {CopyToClipboard} from './Components/CopyToClipboard';
import {InputTNumber} from './Components/InputTNumber';
import {Button} from "./Components/Button";
import {Title} from "./Components/Title";
//Effector
import {getTextContentFx, $textContent, $textContentJoined} from './effector'
import {useStore} from 'effector-react'

export const App = () => {

    const data = useStore($textContent)
    const isLoading = useStore(getTextContentFx.pending)
    const dataJoined = useStore($textContentJoined)

    const [input, setInput] = useState("1")

    const handleSubmit = (evt) => {
        evt.preventDefault();
        getTextContentFx(input);
    }

    return (
        <div className="app loripsum">

            <Title center color={"var(--color-blue-darker)"}>Tired of boring lorem ipsum?</Title>

            <form onSubmit={handleSubmit} className="form loripsum__form">

                <InputTNumber labelText="Paragraphs:"
                              value={input}
                              onChange={e => setInput(e.target.value)}
                              min={1}
                              max={999}

                              color={"var(--color-blue-darker)"}
                />

                <Button type="submit"
                        color="#FFFFFF"
                        hover={"var(--color-blue-lightest)"}
                        active={"var(--color-blue-darker)"}
                        background={"var(--color-blue-medium)"}
                >Generate</Button>
            </form>

            <section className="output loripsum__output">

                <CopyToClipboard data={dataJoined}/>

                {
                    isLoading ?
                        <Loader width="5px" color="var(--color-blue-light)"/>
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
