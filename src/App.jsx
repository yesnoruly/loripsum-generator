import React from 'react';
//Styles
import './App.scss'
//Components
import {HeadTitle} from "./Component/HeadTitle/HeadTitle";

export const App = () => {

    return (
        <div className="app">
            <HeadTitle titleClassName={"app__title"}/>
        </div>
    )
}