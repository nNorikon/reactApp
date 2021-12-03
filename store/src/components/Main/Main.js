import React from "react";
import './Main.scss';
import {Allgoods} from "../Allgoods";
import {Route, Routes} from "react-router-dom";
import {Basket} from "../Basket";

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