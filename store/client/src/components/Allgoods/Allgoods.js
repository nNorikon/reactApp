import React from 'react'

import {Cart} from "../Cart";

import './Allgoods.scss'
import heart from "../../assets/images/heart.svg";


export const Allgoods = ({allProducts}) => {

    return (
        <>
            <div className='slogan'>
                I<img src={heart} alt='I love icecream'/>ICE CREAM
            </div>
            {allProducts && (
                <div className='allGoods'>
                    {allProducts?.map((good) => (
                        <Cart
                            key={good.id}
                            id={good.id}
                            name={good.name}
                            cost={good.cost}
                            img={good.img}
                        />
                    ))}
                </div>
            )}
        </>
    )
}