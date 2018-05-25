import React, { Component } from 'react';
// import * as actionTypes from '../../store/action';
class Store extends Component{

    // constructor(props){
    //     super(props);
    // }
    componentWillMount(){
        var count= [1,2,3,4,5,6,7,89];
        this.props.clicked(count);
    }

    onStoreHandler(){
        console.log("...OnStoreHandler...");
        var count = this.props.count;
        this.props.clicked(count);
    }

    render(){
        return(
            <div className="Store">
            in store {this.props.count }
              <button onClick={ ()=> this.onStoreHandler() }>{ this.props.label }</button>  
              <ul> 
              { this.props.result.map( res=>(
                 <li key={res}> {res}</li>
               ) )}
             </ul>
              </div>
        )
    }
}

export default  Store;