import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{

    constructor(){
        super();
            this.state = {
                products : [{
                    title : 'Asus',
                    price : 25000,
                    Quantity : 1,
                    img : '',
                    id : 1
                },
                {
                    title : 'OnePlus',
                    price : 25000,
                    Quantity : 1,
                    img : '',
                    id : 2
                },{
                    title : 'Samsung',
                    price:85000,
                    Quantity : 1,
                    img:'',
                    id : 3
                }
            ]
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
            if(prevState.Quantity===0) return;
            return {
                Quantity : prevState.Quantity-1
            }
        })
    }
    render () {
        const { products } = this.state;
        return (
            <div className="cart">
                { products.map((product)=>{
                    return (
                    <CartItem 
                        product={product} 
                        key={product.id} />)
                }) }
            </div>
            
        );
    }
}

export default Cart;