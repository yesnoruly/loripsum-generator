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
                content="Tired of boring lorem ipsum?"
            />

            <form onSubmit={handleSubmit} className="loripsum__form">
                <CounterInput
                    inputType="number"
                    labelText="Paragraph:"
                    min={1}
                    step={1}
                />

                <Button
                    buttonType="submit"
                    buttonText="Generate"
                    buttonClassName="loripsum__button"
                />
            </form>

            <Output outputClassName="loripsum__output">
                <Paragraph
                    paragraphContent="Loripsum fish text fish text more stuff"
                    paragraphClassName="loripsum__paragraph"
                />

                <Paragraph
                    paragraphContent="Loripsum fish text fish text more stuff"
                    paragraphClassName="loripsum__paragraph"
                />

                <Paragraph
                    paragraphContent="Loripsum fish text fish text more stuff"
                    paragraphClassName="loripsum__paragraph"
                />


            </Output>
        </div>
    )
}