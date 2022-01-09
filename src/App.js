import React, { Component } from 'react';
import Header from './components/header';
import Content from './components/content';
class App extends React.Component {
  state = {
    boxes:[]
  }

  addBox =()=>{

    const x = document.getElementById("textareaAdd").value;
    console.log(x)
    // const link = "http://api.weatherapi.com/v1/current.json?key=07d498f96e924499848201152220901&q=" + x + "&aqi=no";
    const request = new XMLHttpRequest();
    request.open("GET", link)
    request.send();
    request.onload = ()=>{
        if(request.status === 200)
        {
            const data = JSON.parse(request.response)

            if(data.current.temp_c<5){
              var x = "Something very thick and definitely not shorts";
            }
            else if(data.current.temp_c>=5 && data.current.temp_c<15){
              var x = "It's still cold so a jacket would work";
            }

            else if(data.current.temp_c>=15 && data.current.temp_c<25){
              var x = "Now we talk! You can easily take off your jacket and dress up with what you like";
            }

            else if(data.current.temp_c>=25){
              var x = "Shorts,  skirt, whatever you like because it's nice outside";
            }
            let toState = {
              name: data.location.name,
              region:data.location.region,
              country:data.location.country,
              temp_c:data.current.temp_c,
              temp_f:data.current.temp_f,
              wind_mph:data.current.wind_mph,
              wind_kph:data.current.wind_kph,
              humidity:data.current.humidity,
              feelslike_c:data.current.feelslike_c,
              feelslike_f:data.current.feelslike_f,
              toWear:x
            }

            const val=[...this.state.boxes,toState];
            this.setState({
              boxes:val
            });

            console.log(this.state)

            document.getElementById("error").style.display="none";
        }
        else{
            console.log("error");
            document.getElementById("error").style.display="block";
        }
    }
  }
  render() { 
    return (
      <React.Fragment>
        <Header addBox={this.addBox}/>

        <Content boxes={this.state.boxes}/>

      </React.Fragment>
    );
  }
}
 
export default App;