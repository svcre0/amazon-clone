
import './Product.css';
import ShoppingContext from '../Context/shopping/shoppingContext';
import React, { useContext } from 'react';

const ProductDetails = ({ id, image, title, rating, price }) => {
    const shoppingContext = useContext(ShoppingContext);

    const {addToBasket} = shoppingContext;

    const addToBasketHandler = () => {
        addToBasket({item: {id, image, title, rating, price}})
        }
        
    return (
        <div className='product' key={id}>
            <img src={image} alt={title} />
            <div className='product-info'></div>
            <p>{title}</p>
            <div className='product-rating'>
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
            </div>
            <p className='product-price'>{price}</p>
            <div>
                <button className='product-button'  onClick={addToBasketHandler}>
                    Add to basket
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;

