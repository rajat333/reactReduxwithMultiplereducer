import React, { Component } from 'react';
// import './CounterButton.css';

export default class CounterButton extends Component{
        // constructor(props){
        //     super(props);
        // }
        onButtonClick(){
             console.log("....onbuttonclick...");
             this.props.addno(1) ;
        }

        render(){
            return(
                <div className="CounterButton" style={ { display:"inline-block" , margin: "20px 20px 20px 20px" }  }>
                   <button className="btn btn-primary" onClick={this.props.clicked }> { this.props.label }</button>                     
                </div>
            );
        }

}