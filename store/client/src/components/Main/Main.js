import React from "react";
import {Route, Routes} from "react-router-dom";

import {Allgoods} from "../Allgoods";
import {Basket} from "../Basket";
import {CardDetail} from "../CardDetail";

import './Main.scss';

export const Main = ({allProducts, setAllProducts, baskets, setBaskets, userId, basketInfo, setBasketInfo, isAuth, setViewModal}) => {

    return (
        <main className='container main'>

            <Routes>
                <Route path='/' element={<Allgoods allProducts={allProducts} />} />
                <Route path='/basket/' element={
                    isAuth ? (
                        <Basket
                            baskets={baskets}
                            setBaskets={setBaskets}
                            userId={userId}
                            basketInfo={basketInfo}
                            setBasketInfo={setBasketInfo}
                            isAuth={isAuth}
                        />
                    ) : (
                            <Allgoods
                                allProducts={allProducts}
                            />
                        )
                }/>
                <Route path='/product/:productId' element={
                    <CardDetail
                        isAuth={isAuth}
                        allProducts={allProducts}
                        setAllProducts={setAllProducts}
                        baskets={baskets}
                        setBaskets={setBaskets}
                        userId={userId}
                        basketInfo={basketInfo}
                        setBasketInfo={setBasketInfo}
                        setViewModal={setViewModal}
                    />
                }/>
            </Routes>

        </main>
    )
}