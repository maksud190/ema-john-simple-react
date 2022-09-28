import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {price, name, seller, img, ratings} = props.product;

    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product'>
                <h4>Name: {name}</h4>
                <h5>Price: ${price}</h5>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='cart-btn'><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> Add to Cart</button>

            
        </div>
        
    );
};

export default Product;