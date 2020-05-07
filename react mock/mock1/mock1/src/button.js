import React from 'react';

import './index.css';

class Button extends React.Component {
    state={
        hovered:false
    }
    handleHover = () =>{
        const {hovered} = this.state
        if(hovered==false)
        this.setState({hovered:true})
        else this.setState({hovered:false})

        
    }
  render(){
    
    const {hovered} = this.state;
    const {position} = this.props;
    console.log(hovered);
    console.log(position);
    return (
        <div>
            <div id="button" >
                <button onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>Press</button>
            </div>


            <div  className={`${hovered? position.position:'tool'}`}>
                {console.log(position.position)}
                Don't press {`${position.position}`}
            </div>
        </div>
        
    );
  }
}

export default Button;
