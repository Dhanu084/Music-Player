import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar';

class App extends React.Component{
  constructor(){
    super();
        this.state = {
            products : [{
                title : 'Asus',
                price : 25000,
                Quantity : 1,
                img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSOkvXvXU_-qkZXnrZvBXrph8jQtvO26VPmpdgkNVegkXh_XEC',
                id : 1
            },
            {
                title : 'OnePlus',
                price : 25000,
                Quantity : 1,
                img : 'https://i.ytimg.com/vi/ac9oixJxVpE/maxresdefault.jpg',
                id : 2
            },{
                title : 'Samsung',
                price:85000,
                Quantity : 1,
                img:'https://static.hub.91mobiles.com/wp-content/uploads/2020/01/Galaxy-S11-Plus.jpg',
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
  handleIncreaseQuantity = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);
    
    products[index].Quantity+=1;

    this.setState({
        products : products
    })
  }
  handleDecreaseQuantity = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].Quantity !== 0)
    products[index].Quantity-=1;

    this.setState({
        products : products
    })
  }
  handleDeleteProduct = (id) =>{
    const {products} = this.state;
    
    const items = products.filter((item) => item.id!==id);
    this.setState({
        products : items 
    })
  }

  getCount = () =>{
    const {products} = this.state
    let sum = 0;
    products.forEach((product) => {
        sum+=product.Quantity
    })
    return sum;
  }

  getTotalCost = () =>{
    const {products} = this.state;
    let total = 0;
    products.forEach((product) => {
        total+=product.price * product.Quantity;
    })
    return total
  }
  render(){
    const {products} = this.state
    //console.log({products});
    return (
    <div className="App">
    <Navbar
    count = {this.getCount()}
     />
    <Cart
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct} 
    />
    <div style = {{padding : 10 , fontSize : 20}}>
      Total Cost : {this.getTotalCost()}
    </div>
    </div>
    );
  }
}

export default App;
