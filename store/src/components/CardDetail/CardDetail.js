import React from 'react';
import {NavLink} from 'react-router-dom';

import './CardDetail.scss';
import cardLogo from '../../assets/images/defaultIcecream.svg';
import basketPlus from '../../assets/images/minus.svg';
import basketMinus from '../../assets/images/plus.svg';
import blockedButton from '../../assets/images/block.svg';
import successAnswer from '../../assets/images/success.svg';

export const CardDetail = () => {
    const isAddedToBasket = true
    const defaultDescText = 'Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%.\n' +
        '\n' +
        'Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.';
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
                    <img src={cardLogo} alt='Мороженное' />
                </div>
                <div className='descriptionBlock'>
                    <div className='vendorCode'>
                        SKU: BXD100BLK
                    </div>
                    <div className='cardName'>
                        Snow Tender Ice Cream
                    </div>
                    <div className='cardDescription'>
                        <div className='descWord'>Description:</div>
                        <div className='cardDesc'>{defaultDescText}</div>
                        <div className='cardCostCount'>
                            <div className='cardCost'>$243.00</div>
                            <div className='cardCount'>
                                <img src={basketPlus} alt='Add one to basket' />
                                <div className='basketCount'>1</div>
                                <img src={basketMinus} alt='Remove one from basket' />
                            </div>
                        </div>
                        <div className='addToBasketBlock'>
                            <div className='cardButtonToBasket'>
                                <img src={blockedButton} alt='You need to add atleast three goods!' />
                                Add to cart
                            </div>
                            {isAddedToBasket && <div className='successAlertAddToBasket'>
                                <img src={successAnswer} alt='You need to add atleast three goods!' />
                                Added to cart
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}