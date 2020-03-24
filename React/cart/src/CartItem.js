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
        // this.increaseQuantity = this.increaseQuantity.bind(this); - if we don't use arrow function use this to pass "this" to the function
    }
    increaseQuantity = () =>{
        
        //inherited from react.component, which tells react to render the changes in state variables
        // this.setState({//method 1 - object form
        //     Quantity : this.state.Quantity+=1
        // })

        this.setState((prevState) => {//method2 function form - when previous state is required
            return{
                Quantity : prevState.Quantity+1
            }
        })
    }

    decreaseQuantity =() =>{
        this.setState((prevState) => {
            return {
                Quantity : prevState.Quantity-1
            }
        })
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
                        src="https://image.flaticon.com/icons/svg/463/463700.svg"
                        onClick={ this.decreaseQuantity } />

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