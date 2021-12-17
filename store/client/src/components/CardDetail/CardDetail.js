import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Bread} from "../Bread";

import './CardDetail.scss';
import basketMinus from '../../assets/images/minus.svg';
import basketPlus from '../../assets/images/plus.svg';
import blockedButton from '../../assets/images/block.svg';
import successAnswer from '../../assets/images/success.svg';
import waitingRing from '../../assets/images/waiting.svg';

export const CardDetail = ({allProducts, baskets, userId, isAuth, setViewModal, setBasketInfo}) => {
    const [isAddedToBasket, setIsAddedToBasket] = useState(false);
    const {productId} = useParams();
    const [count, setCount] = useState(1);
    const [isError, setIsError] = useState(false);
    const productInfo = allProducts.find(product => product.id == productId);
    const getBasket = JSON.parse(localStorage.getItem('baskets'));
    const [getBasketByUser, setGetBasketByUser] = useState([]);

    useEffect(() => {
        if(isAuth){
            if (getBasket && !Object.keys(getBasketByUser).length) {
                const userBasket = getBasket.find(userBasket => userBasket.userid === userId);
                setGetBasketByUser(userBasket)
            }
        }
    }, [getBasket, isAddedToBasket]);


    const counter = (param) => {
        if (param === 'plus') {
            setCount(count + 1);
        } else if (param === 'minus') {
            if (count > 1) setCount(count - 1);
        }
    }

    const clickOnButton = () => {
        if (isAuth) {
            if (!Object.keys(getBasketByUser).length) {
                localStorage.setItem('baskets', JSON.stringify([{
                    userid: userId,
                    basket: [{
                        id: productInfo.id,
                        img: productInfo.img,
                        name: productInfo.name,
                        cost: productInfo.cost,
                        art: productInfo.art,
                        desc: productInfo.desc,
                        count: count,
                    }]
                }]));
                setBasketInfo(1)
            } else {
                const selectedProduct = getBasketByUser.basket.find(el => {
                    return el.id == productId
                });
                if (selectedProduct) {
                    selectedProduct.count += count;
                    const newAllBaskets = getBasket.map((userBasket) => {
                        if (userId == userBasket.userid) {
                            const newBasket = userBasket.basket.map((elementOfBasket) => {
                                if (elementOfBasket.id == productId) {
                                    return selectedProduct;
                                }
                                return elementOfBasket
                            })
                            return {...userBasket, basket: newBasket}
                        }
                        return userBasket
                    });
                    localStorage.setItem('baskets', JSON.stringify(newAllBaskets));
                    setIsAddedToBasket(true)

                } else {
                    const getLengthElementsInBasket = getBasketByUser.basket.length;
                    if (getLengthElementsInBasket < 3) {
                        productInfo['count'] = count;
                        const newAllBaskets = getBasket.filter((elem) => {
                            if (userId !== elem.userid) {
                                return {elem}
                            }
                        });

                        localStorage.setItem('baskets', JSON.stringify([...newAllBaskets, {
                            userid: userId,
                            basket: [...getBasketByUser.basket, productInfo]
                        }]));
                        setBasketInfo((prevState) => prevState + 1)
                        setIsAddedToBasket(true);
                    } else {
                        setIsError(true);
                    }
                }


            }
        } else {
            setViewModal('signin');
        }
    }

    const authorizedAddButton = () => {
        return (
            <button onClick={() => clickOnButton(productInfo, count)}
                    className='cardButtonToBasket'>
                {!isAuth && (<img className='loadingButton' src={blockedButton} alt='You need to add atleast three goods!'/>)}
                <a href='#'>Add to cart</a>
            </button>
        )
    }

    const addedButton = () => {
        return (
            <button className='cardButtonToBasket'>
                <img className='spinWaitingImage' src={waitingRing} alt='Success!'/>
            </button>
        )
    }

    return (
        <>
            <Bread key={0} nameOfPage={'Product card'}/>
            <div className='cardMainInfo container'>
                <div className='logoBlock'>
                    <img src={productInfo?.img} alt='Мороженное'/>
                </div>
                <div className='descriptionBlock'>
                    <div className='vendorCode'>
                        SKU: {productInfo?.art}
                    </div>
                    <div className='cardName'>
                        {productInfo?.name}
                    </div>
                    <div className='cardDescription'>
                        <div className='descWord'>Description:</div>
                        <div className='cardDesc'>{productInfo?.desc}</div>
                        <div className='cardCostCount'>
                            <div className='cardCost'>{productInfo?.cost}</div>
                            <div className='cardCount'>
                                <img onClick={() => counter('minus')} src={basketMinus} alt='Remove one from basket'/>
                                <div className='basketCount'>{count}</div>
                                <img onClick={() => counter('plus')} src={basketPlus} alt='Add one to basket'/>
                            </div>
                        </div>
                        <div className='addToBasketBlock'>

                            {isAddedToBasket ? addedButton() : authorizedAddButton()}
                            {isAddedToBasket && (
                                <div className='successAlertAddToBasket'>
                                    <img src={successAnswer} alt='You need to add atleast three goods!'/>
                                    Added to cart
                                </div>
                            )}
                            {isError && (
                                <div className='moreThreeErrorBlock'>
                                    You can add no more then three different goods
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}