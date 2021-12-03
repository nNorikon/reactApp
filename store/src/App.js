import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Main} from "./components/Main";
import {BrowserRouter} from "react-router-dom";
import {allGoods} from "./mock";
import {useEffect} from "react";


function App() {

    useEffect(() => {
        localStorage.setItem('objectGoods', JSON.stringify(allGoods));
    }, []);
    return (
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
