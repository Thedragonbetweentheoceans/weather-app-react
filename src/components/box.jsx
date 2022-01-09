import React, { Component } from 'react'
class Box extends React.Component {
    render() { 
        return (
        <div className='box'>
            <h4>{this.props.box.name}</h4>
            <ul>
                
                <li>Region: {this.props.box.region}</li>
                <li>Country: {this.props.box.country}</li>
                <li><b>Temperature: {this.props.box.temp_c} Celsius</b> ({this.props.box.temp_f} Farenheit)</li>
                <li><b>Feels like: {this.props.box.feelslike_c} Celsius</b> ({this.props.box.feelslike_f} Farenheit)</li>
                <li><b>Humidity: {this.props.box.humidity}</b></li>
                <li>Wind: {this.props.box.wind_kph} KPH ({this.props.box.wind_mph} MPH)</li>
            </ul>
            <p><b>To wear:</b></p>
            <p>{this.props.box.toWear}</p>
        </div>);
    }
}
 
export default Box;