import React from 'react';

class CartItem extends React.Component{

    render(){
        console.log(this.props);
        const {title,price,Quantity} = this.props.product;
        const { product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProdcut} = this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style ={styles.image} />
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
                        onClick={() => onDeleteProdcut(product.id) } />

                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image : {
        height : 110,
        width : 170,
        borderRadius : 4,
        background:'#ccc'
    }
}

export default CartItem;