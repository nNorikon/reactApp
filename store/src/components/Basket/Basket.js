import React, {useEffect} from 'react'
import {useState} from "react";
import {NavLink} from 'react-router-dom';
import {CardOfProduct} from "../CardOfProduct";
import {Bread} from "../Bread";
import './Basket.scss'
import {allGoods} from "../../mock";

export const Basket = ({baskets, setBaskets, userId, basketInfo, setBasketInfo}) => {
    const [getBasketByUser, setGetBasketByUser] = useState(JSON.parse(localStorage.getItem('basket')).find(userBasket => userBasket.userid === userId).basket);

    //Высчитаваем общую стоимость товаров и форматируем
    const [totalCost, setTotalCost] = useState(0);
    const [emptyBasket, setEmptyBasket] = useState(true);
    const getTotalCost = getBasketByUser.reduce((prev,next) => prev + +next.cost.replace(/[^0-9]/g, '')*next.count,0);
    const formattedTotalCost = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    useEffect(() => {
        setTotalCost(getTotalCost);
        getTotalCost == 0 ?  setEmptyBasket(true) : setEmptyBasket(false);
    }, [getBasketByUser]);


    return (
        <>
            <Bread nameOfPage={'Basket'}/>
            <div className='basketWord'>Basket</div>
            <div className='basketBlock'>
                <div className='basketItemsBlock'>
                    {emptyBasket && (
                        <div className='emptyBasket'>
                            Empty basket
                        </div>
                    )}
                    {getBasketByUser.map((object) => (
                        <CardOfProduct
                            key={object.id}
                            object={object}
                            userId={userId}
                            getBasketByUser={getBasketByUser}
                            setGetBasketByUser={setGetBasketByUser}
                        />))}
                </div>
                <div className='itemTotalCost'>
                    <div className='subTotal itemBottomBorder'>
                        <div className='subTotalWord'>Sub total:</div>
                        <div className='totalCostValue'>{formattedTotalCost.format(totalCost)}</div>
                    </div>
                    <button className='checkOutButton'>
                        Check out
                    </button>
                </div>

            </div>

        </>
    )
}