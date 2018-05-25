import  React, { Component } from 'react';

export default class CounterPrint extends Component{

    render(){
        return (
            <div className="CounterPrint">
             <h2>Value is: {this.props.counter } </h2>   
            </div>
        )
    }
}