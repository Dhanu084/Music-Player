import React from 'react';
import Button from './button'
import './index.css';

class App extends React.Component {
  state={position:"bottom"}
  handlePosition =() =>{
    this.setState({position:document.getElementById('position').value})
  }
  render(){
    
    return (
      <div className="App">
          <div>
            <select id="position"defaultValue={this.state.position} onChange={this.handlePosition}>
              
              <option value="bottom">bottom</option>
              <option value="top">top</option>
              <option value="left">left</option>
              <option value="right">right</option>
            </select>
          </div>
          
          
          <Button position = {this.state} /> 
          
          
          
      </div>
    );
  }
}

export default App;
