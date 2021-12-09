import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";

import {allGoods} from "./mock";
import './App.css';

function App() {

    const [allProducts, setAllProducts] = useState(JSON.parse(localStorage.getItem('objectGoods')) || []);
    const [baskets, setBaskets] = useState(JSON.parse(localStorage.getItem('basket')) || []);
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    const [userId, setUserId] = useState(0);
    const [basketInfo, setBasketInfo] = useState(0);
    const [open, setOpen] = useState(false);
    const [viewModal, setViewModal] = useState('signup');

    useEffect(() => {
        localStorage.setItem('objectGoods', JSON.stringify(allGoods));
    }, []);

    // useEffect(() => {
    //     if(baskets.length) {
    //         const getBasketForSetter = baskets.find(user => user.userid == userId).basket.length;
    //         setBasketInfo(getBasketForSetter);
    //     }
    // }, [baskets, basketInfo]);

    return (
        <BrowserRouter>
            <Header
                basketInfo={basketInfo}
                users={users}
                setUsers={setUsers}
                open={open}
                setOpen={setOpen}
                viewModal={viewModal}
                setViewModal={setViewModal}
            />
            <Main
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                baskets={baskets}
                setBaskets={setBaskets}
                userId={userId}
                basketInfo={basketInfo}
                setBasketInfo={setBasketInfo}
            />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
