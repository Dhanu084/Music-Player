import React from 'react';

const CartItem = (props) =>{

    //render(){
        //console.log(props);
        const {title,price,Quantity} = props.product;
        const { product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style ={styles.image} src = {product.img} />
                </div>

                <div className="right-block">
                    <div style={ {fontSize : 25} }>{title}</div>
                    <div style={ {color:"#777"} }>{price}</div>
                    <div style={ {color:"#777"} }>Quantity:{Quantity}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase"
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1828/1828817.svg" 
                        onClick={() => onIncreaseQuantity(product)} />


                        <img alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/463/463700.svg"
                        onClick={ () => onDecreaseQuantity(product) } />

                        <img alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1214/1214926.svg"
                        onClick={() => onDeleteProduct(product.id) } />

                    </div>
                </div>
            </div>
        );
    //}
}

const styles = {
    image : {
        height : '80%',
        width : 170,
        borderRadius : 4,
        background:'#ccc',
        background : 'cover'
    }
}

export default CartItem;