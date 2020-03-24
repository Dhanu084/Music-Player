import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            title : 'Asus',
            price : 25000,
            Quantity : 1,
            img : ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () =>{
        console.log(this.state);
    }
    render(){
        const {title,price,Quantity} = this.state;
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
                        onClick={this.increaseQuantity} />


                        <img alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/463/463700.svg" />

                        <img alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1214/1214926.svg" />

                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        background:'#ccc'
    }
}

export default CartItem;