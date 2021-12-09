import React from "react";
import {Route, Routes} from "react-router-dom";

import {Allgoods} from "../Allgoods";
import {Basket} from "../Basket";
import {CardDetail} from "../CardDetail";

import './Main.scss';

export const Main = ({allProducts, setAllProducts, baskets, setBaskets, userId, basketInfo, setBasketInfo, users, }) => {

    return (
        <main className='container main'>

            <Routes>
                <Route path='/' element={<Allgoods />} />
                <Route path='/basket/' element={
                    <Basket
                        baskets={baskets}
                        setBaskets={setBaskets}
                        userId={userId}
                        basketInfo={basketInfo}
                        setBasketInfo={setBasketInfo}
                    />} />
                <Route path='/product/:productId' element={
                    <CardDetail
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        baskets={baskets}
                        setBaskets={setBaskets}
                        userId={userId}
                        basketInfo={basketInfo}
                        setBasketInfo={setBasketInfo}
                    />} />
            </Routes>

        </main>
    )
}