import React from 'react';
//Styles
import './App.scss'
//Components
import {HeadTitle} from "./Component/HeadTitle/HeadTitle";
import {CounterInput} from "./Component/CounterInput/CounterInput";
import {Button} from "./Component/Button/Button";
import {Output} from "./Component/Output/Output";
import {Paragraph} from "./Component/Paragraph/Paragraph";

export const App = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="loripsum">
            <HeadTitle
                titleClassName={"loripsum__title"}
                titleText="Tired of boring lorem ipsum?"/>

            <form onSubmit={handleSubmit} className="loripsum__form">
                <CounterInput labelText="Paragraphs:"/>

                <Button
                    buttonType="submit"
                    buttonText="Generate"
                    buttonClassName="loripsum__button"/>
            </form>

            <Output outputClassName="loripsum__output">

                <Paragraph
                    paragraphContent="Loriore st fishtupsum fish texLoriore st fishtupsumLoriore st fishtupsumLoriore st fishtupsum text mff"
                    paragraphClassName="loripsum__paragraph"/>

                <Paragraph
                    paragraphContent="Loripish text more  text more sum fistextsum fistextLoripish fsh tuff"
                    paragraphClassName="loripsum__paragraph"/>

                <Paragraph
                    paragraphContent="Loe sturipsum fish text fish text morff"
                    paragraphClassName="loripsum__paragraph"/>

            </Output>
        </div>
    )
}