import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar';
import * as firebase from 'firebase';
class App extends React.Component{
  constructor(){
    super();
      this.state = {
        products:[],
        loading : true 
      }
      this.db = firebase.firestore();
    // this.increaseQuantity = this.increaseQuantity.bind(this); - if we don't use arrow function use this to pass "this" to the function
  }

  componentDidMount(){
      // firebase
      // .firestore()
      // .collection('products')
      // .get()
      // .then((snapshot)=>{
      //   snapshot.docs.map((doc) => {
      //     console.log(doc.data());
      //   });

      //   const products = snapshot.docs.map((doc) => {
      //     const data = doc.data();
      //     data['id'] = doc.id
      //     return doc.data();
      //   })

      //   this.setState({
      //     products : products,
      //     loading : false
      //   })
      // })

      this.db
      .collection('products')
      .onSnapshot((snapshot)=>{
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          //console.log(data);
          return data ;
        })

        this.setState({
          products : products,
          loading : false
        })
      })
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
    
    // products[index].Quantity+=1;

    
    console.log(products[index].title);
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
      Quantity : products[index].Quantity+1
    }).then(()=>{
      console.log("Document updated");
    }).catch((err) =>{
      console.log(err);
    })
    this.setState({
        products : products
    })
  }
  handleDecreaseQuantity = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);
   
    const dbRef = this.db.collection('products').doc(products[index].id);
    dbRef.update({
      Quantity : products[index].Quantity - 1
    }).then(()=>{
      console.log("product updated");
    }).catch((err)=>{
      console.log(err);
    })

    this.setState({
        products : products
    })
  }
  handleDeleteProduct = (id) =>{
    const {products} = this.state;
    
    // const items = products.filter((item) => item.id!==id);
    const dbRef = this.db.collection('products').doc(id);
    dbRef.delete()
    .then(()=>{
      console.log("Document deleted");
    })
    .catch((err) => {
      console.log(err);
    })
    this.setState({
        products : products 
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

  addProduct = () =>{
      this.db.collection('products')
      .add({
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQixo4A5dI6UNAC_nVvMsWntO8pkuG-e-HFSYia37mMcKRKoCjg',
        price:105000,
        Quantity:1,
        title:'iphone XI'
      })
      .then((docRef) =>{
          console.log(docRef);
      }).catch((err)=>{
        console.log(err);
      });
  }

  render(){
    const {products , loading} = this.state
    //console.log({products});
    return (
    <div className="App">
    <Navbar
    count = {this.getCount()}
     />
     <button onClick={this.addProduct}> Add product </button>
    <Cart
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct} 
    />
    { loading &&  <h1> Loading Products </h1>}
    <div style = {{padding : 10 , fontSize : 20}}>
      Total Cost : {this.getTotalCost()}
    </div>
    </div>
    );
  }
}

export default App;
