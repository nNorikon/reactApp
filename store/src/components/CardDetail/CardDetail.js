import React, {useState} from 'react';
import {NavLink, useParams, BrowzerRouter} from 'react-router-dom';

import './CardDetail.scss';
import cardLogo from '../../assets/images/defaultIcecream.svg';
import basketMinus from '../../assets/images/minus.svg';
import basketPlus from '../../assets/images/plus.svg';
import blockedButton from '../../assets/images/block.svg';
import successAnswer from '../../assets/images/success.svg';
import waitingRing from '../../assets/images/waiting.svg';

export const CardDetail = ({allProducts, setAllProducts, baskets, setBaskets}) => {
    const isAddedToBasket = false;
    const {productId} = useParams();
    const [count, setCount] = useState(1);
    const [isError, setIsError] = useState(false);
    const productInfo = allProducts.find(product => product.id == productId);

    //Temp
    const isUser = true; //Существует ли пользователь
    const userId = 0;

    const counter = (param) => {
        if (param === 'plus') {
            setCount(count + 1);
        } else if (param === 'minus') {
            if (count > 1) setCount(count - 1);
        }
    }


    const clickOnButtom = (infoOfGood, countOfGood) => {
        const getBasket = JSON.parse(localStorage.getItem('basket'));
        !getBasket && localStorage.setItem('basket', JSON.stringify([{
            userid: 0,
            basket: []
        }]));

        if (isUser) {

            const getBasketByUser = JSON.parse(localStorage.getItem('basket')).find(userBasket => userBasket.userid === userId);
            const getLengthElementsInBasket = getBasketByUser.basket.length;

            if (getLengthElementsInBasket < 3) {

                const selectedProduct = getBasketByUser.basket.find(el => el.id == productId);
                if (selectedProduct) {
                    // selectedProduct.count = selectedProduct.count + count;

                } else {
                    productInfo['count'] = count;
                    localStorage.setItem('basket', JSON.stringify([...baskets, {
                        userid: userId,
                        basket: [...getBasketByUser.basket, productInfo]
                    }]));
                }


            } else {
                setIsError(true);
            }
        } else {
            //Вызов окна регистрации/авторизации
        }

        // const countOfGoodOfUser = JSON.parse(localStorage.getItem(email));
        // if (countOfGoodOfUser.length < 3) {
        //     infoOfGood['count'] = countOfGood;
        //     localStorage.setItem('email', JSON.stringify([infoOfGood]));
        // }
        // else {
        //     setIsError(true);
        // }
    }

    return (
        <>
            <div className='cardInfo container'>
                <div className='breadcrumbs'>
                    <div className='mainLink'>
                        <NavLink to='/'>Main page</NavLink> /
                    </div>
                    <div className='currentLink'>
                        Product card
                    </div>
                </div>
            </div>
            <div className='cardMainInfo container'>
                <div className='logoBlock'>
                    <img src={productInfo.img} alt='Мороженное'/>
                </div>
                <div className='descriptionBlock'>
                    <div className='vendorCode'>
                        SKU: {productInfo.art}
                    </div>
                    <div className='cardName'>
                        {productInfo.name}
                    </div>
                    <div className='cardDescription'>
                        <div className='descWord'>Description:</div>
                        <div className='cardDesc'>{productInfo.desc}</div>
                        <div className='cardCostCount'>
                            <div className='cardCost'>{productInfo.cost}</div>
                            <div className='cardCount'>
                                <img onClick={() => counter('minus')} src={basketMinus} alt='Remove one from basket'/>
                                <div className='basketCount'>{count}</div>
                                <img onClick={() => counter('plus')} src={basketPlus} alt='Add one to basket'/>
                            </div>
                        </div>
                        <div className='addToBasketBlock'>

                            {isError && (<div className='moreThreeErrorBlock'>Вы можете добавить не более трех разных
                                товаров</div>)}
                            {isAddedToBasket ?
                                (
                                    <button className='cardButtonToBasket'>
                                        <img className='spinWaitingImage' src={waitingRing} alt='Success!'/>
                                    </button>
                                )
                                :
                                (
                                    <button onClick={() => clickOnButtom(productInfo, count)}
                                            className='cardButtonToBasket'>
                                        <img className='loadingButton' src={blockedButton}
                                             alt='You need to add atleast three goods!'/>
                                        <a href='#'>Add to cart</a>
                                    </button>
                                )
                            }
                            {isAddedToBasket && (
                                <button className='successAlertAddToBasket'>
                                    <img src={successAnswer} alt='You need to add atleast three goods!'/>
                                    Added to cart
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}