import React from 'react';
import './Bread.scss'
import {NavLink} from "react-router-dom";

export const Bread = ({nameOfPage}) => {
    return (
        <>
            <div className='cardInfo container'>
                <div className='breadcrumbs'>
                    <div className='mainLink'>
                        <NavLink to='/'>Main page</NavLink> /
                    </div>
                    <div className='currentLink'>
                        {nameOfPage}
                    </div>
                </div>
            </div>
        </>
    )
}