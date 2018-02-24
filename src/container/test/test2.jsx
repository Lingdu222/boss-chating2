import React,{ Component } from "react";
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

//两个装换函数
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
class Tests extends Component{
    render(){
        return(
            <div>

            </div>
        )
    }
} 