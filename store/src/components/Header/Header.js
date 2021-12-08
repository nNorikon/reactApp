import React from 'react'
import {NavLink} from 'react-router-dom';

import logoSub from "../../assets/images/logo.svg";
import signUp from "../../assets/images/signup.svg";
import cart from "../../assets/images/cart.svg";

import "./Header.scss";

export const Header = ({basketInfo}) => {
    return (
        <header className='header'>
            <div className='centeredHeader container'>
                <div className='logoBlock'>
                    <NavLink to='/'>
                        <img src={logoSub} alt='Justice Cream' />
                    </NavLink>
                </div>
                <div className='signBlock'>
                    <div className='centeredSing'>
                        <img src={signUp} alt='Signup or Signin' />
                        <a href='#'>Sign up</a> / <a href='#'>Sign in</a>
                        <div className='basketBlock'>
                            <div className='basketInfo'>{basketInfo}</div>
                            <img src={cart} alt='Cart' className='imgCart' />
                        </div>
                        <a href='#'>Cart</a>
                    </div>
                </div>
            </div>
        </header>
    )
}