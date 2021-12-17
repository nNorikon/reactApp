import React from 'react'
import './Cart.scss'
import {NavLink} from "react-router-dom";

export const Cart = ({ img, cost, name, id }) => {
    return (
        <div className='cartMain'>
            <div className='cartImage'>
                <NavLink to={`/product/${id}`}>
                    <img src={img} alt={name} />
                </NavLink>
            </div>
            <div className='cartDescription'>
                <div className='centeredDescription'>
                    <div className='cartDescriptionName'>
                        <NavLink to={`/product/${id}`}>{name}</NavLink>
                    </div>
                    <div className='cartDescriptionCost'>{cost}</div>
                </div>
            </div>
        </div>
    )
}
