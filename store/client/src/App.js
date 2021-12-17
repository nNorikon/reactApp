import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import axios from 'axios'
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";

import {allGoods, usedApiUrl} from "./mock";
import './App.css';

function App() {

    const getBaskets = JSON.parse(localStorage.getItem('baskets'));

    const [allProducts, setAllProducts] = useState([]);
    const [baskets, setBaskets] = useState(JSON.parse(localStorage.getItem('baskets')) || []);
    const [users, setUsers] = useState({});
    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')) || false);
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('userId')) || 0);
    const [basketInfo, setBasketInfo] = useState(0);
    const [open, setOpen] = useState(false);
    const [viewModal, setViewModal] = useState();


    useEffect(() => {
        const apiUrlProducts = `${usedApiUrl}/products`;
        axios.get(apiUrlProducts).then((res) => {
            setAllProducts(res.data.products)
        });

    }, []);

    useEffect(()=> {
        const apiUrlUsers = `${usedApiUrl}/users`;
        axios.get(apiUrlUsers).then((res) => {
            setUsers(res.data.users[0])
        });
    }, [viewModal])

    useEffect(() => {
        // if (isAuth) {
        //     const apiUrl = `${usedApiUrl}/basket`;
        //     axios.get(apiUrl).then((res) => {
        //         setBaskets(res.data.basket)
        //     });
        // }
    }, [isAuth])



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
