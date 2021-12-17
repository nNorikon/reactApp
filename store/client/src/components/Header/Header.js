import React from 'react'
import {NavLink, useLocation} from 'react-router-dom';

import logoSub from "../../assets/images/logo.svg";
import signUp from "../../assets/images/signup.svg";
import cart from "../../assets/images/cart.svg";
import {signUpInputs, signInInputs} from "../../mock";

import "./Header.scss";
import {ModalSign} from "../ModalSign";



export const Header = ({basketInfo, users, setUsers, viewModal, setViewModal, isAuth, setIsAuth, setUserId, setBasketInfo}) => {

    const location = useLocation();
    const handleOpen = (state) => setViewModal(state);
    const handleLogOut = () => {
        setIsAuth(false);
        setBasketInfo(0);
        setUserId(0);
        localStorage.setItem('userId', '0');
        localStorage.setItem('isAuth', 'false');
    }

    return (
        <>
            {viewModal === 'signin' && <ModalSign
                idAuth={isAuth}
                setIsAuth={setIsAuth}
                users={users}
                viewModal={viewModal}
                setViewModal={setViewModal}
                setUserId={setUserId}
                inputs={signInInputs}
                labelModal='Log in to your account'
                label='Do you already have an account?'
                url='signup'
                textUrl="Sign up"
                setBasketInfo={setBasketInfo}
            />}
            {viewModal === 'signup' && <ModalSign
                users={users}
                setUsers={setUsers}
                viewModal={viewModal}
                setViewModal={setViewModal}
                labelModal='Create an account'
                inputs={signUpInputs}
                label='No account?'
                url='signin'
                textUrl='Sign in'
            />}
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
                            {isAuth && (
                                <button onClick={() => handleLogOut()}>Log out</button>
                            )}
                            {!isAuth && (
                                <div>
                                    <button onClick={() => handleOpen('signup')}>Sign up</button> /
                                    <button onClick={() => handleOpen('signin')}>Sign in</button>
                                </div>
                            )}
                            <div className='basketBlock'>
                                <div className='basketInfo'>{basketInfo}</div>
                                <img src={cart} alt='Cart' className='imgCart'/>
                            </div>
                            {!isAuth && (
                                <NavLink to={location.pathname} onClick={() => handleOpen('signup')}>Cart</NavLink>
                            )}
                            {isAuth && (
                                <NavLink to='/basket'>Cart</NavLink>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}