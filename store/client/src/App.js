import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";

import {allGoods} from "./mock";
import './App.css';

function App() {
    const getBaskets = JSON.parse(localStorage.getItem('baskets'));

    const [allProducts, setAllProducts] = useState(JSON.parse(localStorage.getItem('objectGoods')) || []);
    const [baskets, setBaskets] = useState(getBaskets || []);
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')) || false);
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('userId')) || 0);
    const [basketInfo, setBasketInfo] = useState(0);
    const [open, setOpen] = useState(false);
    const [viewModal, setViewModal] = useState();


    useEffect(() => {
        localStorage.setItem('objectGoods', JSON.stringify(allGoods));
    }, []);

    const isUserBasket = !!getBaskets;

    useEffect(() => {
        if(isUserBasket) {
            if (isAuth) {
                const getBasketForSetter = baskets.find(user => user.userid === userId).basket.length;
                setBasketInfo(getBasketForSetter);
            } else {
                setBasketInfo(0)
            }
        }
    }, [baskets, isAuth]);

    return (
        <BrowserRouter>
            <Header
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                basketInfo={basketInfo}
                users={users}
                setUserId={setUserId}
                setUsers={setUsers}
                open={open}
                setOpen={setOpen}
                viewModal={viewModal}
                setViewModal={setViewModal}
                setBasketInfo={setBasketInfo}
            />
            <Main
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
            <Footer />
        </BrowserRouter>
    );
}

export default App;
