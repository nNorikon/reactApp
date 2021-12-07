import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";

import {allGoods} from "./mock";
import './App.css';

function App() {
    const [allProducts, setAllProducts] = useState(JSON.parse(localStorage.getItem('objectGoods')) || []);
    const [baskets, setBaskets] = useState(JSON.parse(localStorage.getItem('baskets')) || []);
    useEffect(() => {
        localStorage.setItem('objectGoods', JSON.stringify(allGoods));
    }, []);
    return (
        <BrowserRouter>
            <Header />
            <Main
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                baskets={baskets}
                setBaskets={setBaskets}
            />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
