import React from 'react'
import {NavLink} from 'react-router-dom';

import logoSub from "../../assets/images/logo.svg";
import signUp from "../../assets/images/signup.svg";
import cart from "../../assets/images/cart.svg";

import "./Header.scss";
import {ModalSign} from "../ModalSign";

export const Header = ({basketInfo, users, setUsers, open, setOpen, viewModal, setViewModal}) => {
    const handleOpen = () => setOpen(true);
    return (
        <>
            <ModalSign
                open={open}
                setOpen={setOpen}
                users={users}
                setUsers={setUsers}
                viewModal={viewModal}
                setViewModal={setViewModal}
            />
            <header className='header'>
                <div className='centeredHeader container'>
                    <div className='logoBlock'>
                        <NavLink to='/'>
                            <img src={logoSub} alt='Justice Cream'/>
                        </NavLink>
                    </div>
                    <div className='signBlock'>
                        <div className='centeredSing'>
                            <img src={signUp} alt='Signup or Signin'/>
                            <button onClick={() => handleOpen('Sign up')}>Sign up</button> /
                            <button onClick={() => handleOpen('Sign in')}>Sign in</button>
                            <div className='basketBlock'>
                                <div className='basketInfo'>{basketInfo}</div>
                                <img src={cart} alt='Cart' className='imgCart'/>
                            </div>
                            <NavLink to='/basket'>Cart</NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}