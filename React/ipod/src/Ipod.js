import React from'react';
import './ipod.css'
import ZingTouch from 'zingtouch';
import 'font-awesome/css/font-awesome.min.css';

class Ipod extends React.Component{
    state=[];
    constructor(){
        super();
        this.state={
            "display":["Coverflow","Music","Games","Settings"],//the initial contents in the state
            "current-item":""
        }
    }

    setColor =()=>{//function which sets the background color of the all the elements of the state to white
        
        let div = document.getElementById('Coverflow');
        div.style.backgroundColor='white';
        div.style.color="black";

        div = document.getElementById('Music');
        div.style.backgroundColor='white';
        div.style.color="black";

        div = document.getElementById('Games');
        div.style.backgroundColor='white';
        div.style.color="black";

        div = document.getElementById('Settings');
        div.style.backgroundColor='white';
        div.style.color="black";
    }

    handleScroll = () => {//function to handle the rotational listener
        //console.log("clicked");
        let angle = 0
        const target = document.getElementById('menu');
        //console.log(target.innerText);
        const region = new ZingTouch.Region(target);
        region.bind(target, 'rotate', (e) =>{
          //console.log("scroll ", angle);
          angle += e.detail.distanceFromLast;
          //console.log(angle);

          if(Math.abs(angle)>0 && Math.abs(angle) < 15){
            // let scrollDir = angle > 0 ? 1 : -1;
            // angle = 0;
            // console.log(scrollDir);
            this.setColor();
            let div = document.getElementById('Coverflow');
                div.style.backgroundColor='blue';
                div.style.color="white";
        }
          if(Math.abs(angle) > 15 && Math.abs(angle)<30){
            // let scrollDir = angle > 0 ? 1 : -1;
            // angle = 0;
            // console.log(scrollDir);
            this.setColor();
            let div = document.getElementById('Music');
                div.style.backgroundColor='blue';
                div.style.color="white";
            }
            
            if(Math.abs(angle) > 30 && Math.abs(angle)<45){
                // let scrollDir = angle > 0 ? 1 : -1;
                // angle = 0;
                // console.log(scrollDir);
                this.setColor();
                let div = document.getElementById('Games');
                    div.style.backgroundColor='blue';
                    div.style.color="white";
            }
            if(Math.abs(angle) >=45 && Math.abs(angle)<60){
                // let scrollDir = angle > 0 ? 1 : -1;
                // angle = 0;
                // console.log(scrollDir);
                this.setColor();
                let div = document.getElementById('Settings');
                    div.style.backgroundColor='blue';
                    div.style.color="white";
                    
            }
            
        });

    }
    
    homeScreen =() =>{//this function is called when the menu icon is clicked and we have to return to the main home page
        let current = document.getElementsByClassName('flash');
        
        let currentScreen="";

        for(currentScreen of current){
            if(currentScreen.style.visibility=="visible"){
                break;
            }
        }
        //console.log(currentScreen);
        currentScreen.style.visibility = "hidden";//sets the visibility of the current screen as hidden
        currentScreen.style.height="0";
        currentScreen.style.width="0";

        let home = document.getElementById('display');//and makes the visibility of the home screen visible
        home.style.visibility="visible";
        home.style.height="50%";
        home.style.width="95%";
        home.style.borderTopLeftRadius="5%";
        home.style.borderTopRightRadius="5%";
        home.style.marginTop="1%"
    }
    


    changeScreen = (e) =>{//function called when any option is clicked

        let home = document.getElementById('display');
        home.style.visibility="hidden";
        home.style.height="0";
        home.style.width="0";
        let screen = document.getElementById(e.innerHTML+'-screen');
        // console.log(screen);
        // console.log(e.innerHTML+'-screen');
        let img = document.createElement('img');//dynamicall create a div element
        
        if(e.innerHTML==='Music'){//based on the selected choice display pictures
            img.src='data:image/jpeg;base64,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'
        }
        else if(e.innerHTML==='Games'){
            img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGXF5CsSi5YB6Gsw_9zLnBJDk8AHos9SnZPga70UmAjHZ_gSqC&usqp=CAU'
        }
        else if(e.innerHTML==='Settings'){
            img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_FO3M7zTWZAHZbRvqBAdjRxtP4Pkse69wUOcqxJUs7jKWVF5s&usqp=CAU'
        }
        else{
            img.src='data:image/jpeg;base64,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'
        }
        img.id="title";//adding style elements to the dynamically created div
        img.style.height="50%";
        img.style.width="50%";
        img.style.marginTop="20%"
        img.style.marginLeft="24%"
        screen.appendChild(img);

        //style to make the selected page visible and the home page hidden
        screen.style.alignmentBaseline="center"
        screen.style.visibility="visible";
        screen.style.height="50%";
        screen.style.width="95%" ;
        screen.style.borderTopLeftRadius="10%";
        screen.style.borderTopRightRadius="10%";
        screen.style.margin="auto";
    }


    optionClick =() =>{//function used to get the selected element from the home screen
        let elements = document.getElementsByClassName('screen-elements');
        //console.log(elements);
        let e;
        for(e of elements){
            if(e.style.backgroundColor=="blue"){
                console.log(e.innerHTML);
                break;
            }
        }
        
        this.changeScreen(e);
        
    }
    
    render(){
        const options = this.state.display;
        return(
            <div className="Ipod">
                <div className="screen" id="display">
                    {
                        options.map((item,index) =>(
                            
                            <div className="screen-elements" id={item} key={index}>
                                {item}
                            </div>
                        ))
                    }
                </div>
                {/* individual divs for different options */}
                <div id="Coverflow-screen" className="flash">

                </div>
                <div id="Music-screen" className="flash">

                </div>
                <div id="Games-screen" className="flash">

                </div>
                <div id="Settings-screen" className="flash">

                </div>

                <div id="menu" className="controls" onClick={this.handleScroll}>
                    <button id="menu-button" className="buttons" onClick={this.homeScreen}>Menu</button>
                    {/* forward icon */}
                    <i className="fa fa-forward"></i>
                    {/* backward icon */}
                    <i className="fa fa-backward"></i>
                    {/* play icon */}
                    <i className="fa fa-play"></i>
                    {/* pause icon */}
                    <i className="fa fa-pause"></i>

                    <div className="Outer">
                        <button className="Inner" onClick={this.optionClick}></button>
                    </div>

                </div>

            </div>
        );
    }
}



export default Ipod;