import React from "react";

import './CardOfProduct.scss';
import removeButton from '../../assets/images/removeButton.svg'


export const CardOfProduct = ({object, userId, getBasketByUser, setGetBasketByUser, setBasketInfo}) => {

    const removeItem = (removableItemById) => {
        const newUserBasketAfterRemoveItem = getBasketByUser.filter((item) => +item.id !== +removableItemById);
        setBasketInfo(newUserBasketAfterRemoveItem.length);
        const getBasketTable = JSON.parse(localStorage.getItem('baskets'));
        const changedBasketTable = getBasketTable.map((userObject) => {
            if (userObject.userid === userId) {
                return {...userObject, basket: newUserBasketAfterRemoveItem};
            }
        });

        localStorage.setItem('baskets' ,JSON.stringify(changedBasketTable));
        return setGetBasketByUser(newUserBasketAfterRemoveItem);
    }

    return (
        <>
            <div className='itemBlock itemBottomBorder'>
                <div className='imgBlock'>
                    <img src={object.img}/>
                </div>
                <div className='preOrderItemInfo'>
                    <div>
                        <div className='itemName'>{object.name}</div>
                        <div className='itemCount'>{object.count} pcs.</div>
                    </div>
                    <div className='costRemoveBlock'>
                        <div className='itemCost'>{object.cost}</div>
                        <button className='removeItem' onClick={() => removeItem(object.id)}>
                            <img src={removeButton} alt='Remove item' />
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}