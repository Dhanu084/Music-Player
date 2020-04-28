import React from'react';
import './ipod.css'
import ZingTouch from 'zingtouch';

class Ipod extends React.Component{
    state=[];
    constructor(){
        super();
        this.state=["songs","albums","artists","music"]
    }
    getState =() =>{
        return this.state;
    }

    setColor =()=>{
        
        let div = document.getElementById('songs');
        div.style.backgroundColor='white';
        div.style.color="black";
        div = document.getElementById('albums');
        div.style.backgroundColor='white';
        div.style.color="black";
        div = document.getElementById('artists');
        div.style.backgroundColor='white';
        div.style.color="black";
        div = document.getElementById('music');
        div.style.backgroundColor='white';
        div.style.color="black";
    }

    handleScroll = () => {
        //console.log("clicked");
        let angle = 0
        const target = document.getElementById('menu');
        //console.log(target.innerText);
        const region = new ZingTouch.Region(target);
        region.bind(target, 'rotate', function(e) {
          //console.log("scroll ", angle);
          angle += e.detail.distanceFromLast;
          //console.log(angle);
          if(Math.abs(angle) > 50){
            // let scrollDir = angle > 0 ? 1 : -1;
            // angle = 0;
            // console.log(scrollDir);
            setColor();
            let div = document.getElementById('albums');
                div.style.backgroundColor='blue';
                div.style.color="white";
            }
        });

    }
           
    
    
    render(){
        const options = this.state;
        console.log(options);
        return(
            <div className="Ipod">
                <div className="screen">
                    {
                        options.map((item,index) =>(
                            <div className="screen-elements" id={item}> {item}</div>
                        ))
                    }
                </div>
                
                <div id="menu" className="controls" onClick={this.handleScroll}>
                    <div className="Outer">
                        <button className="Inner">Menu</button>
                    </div>
                </div>
            </div>
        );
    }
}



export default Ipod;