import React from "react";
import {Route, Routes} from "react-router-dom";

import {Allgoods} from "../Allgoods";
import {Basket} from "../Basket";

import './Main.scss';

export const Main = () => {
    return (
        <main className='container main'>
            <Routes>
                <Route path='/' element={<Allgoods />} />
                <Route path='/basket/' element={<Basket />} />
                <Route path='/product/:id' element={<Basket />} />
            </Routes>

        </main>
    )
}