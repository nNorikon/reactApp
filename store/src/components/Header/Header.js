import React from 'react'

import logoSub from "../../assets/images/logo.svg";
import signUp from "../../assets/images/signup.svg";
import cart from "../../assets/images/cart.svg";

import "./Header.scss";

export const Header = () => {
    return (
        <header className='header'>
            <div className='centeredHeader container'>
                <div className='logoBlock'>
                    <img src={logoSub} alt='Justice Cream' />
                </div>
                <div className='signBlock'>
                    <div className='centeredSing'>
                        <img src={signUp} alt='Signup or Signin' />
                        <a href='#'>Sign up</a> / <a href='#'>Sign in</a>
                        <img src={cart} alt='Cart' className='imgCart' />
                        <a href='#'>Cart</a>
                    </div>
                </div>
            </div>
        </header>
    )
}