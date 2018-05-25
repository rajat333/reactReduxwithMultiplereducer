import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterButton from '../component/CounterButton/CounterButton';
import CounterPrint from '../component/CounterPrint/CounterPrint';
import Store from '../component/Store/Store';
import * as actionTypes from '../store/action';
// import fetchCategories from '../store/intializeaction';
class Counter extends Component{
    
    componentWillMount(){
        // var count = [1,2,3,4,5,6,7,8,9]
        // this.props.dispatch(fetchCategories())
    }

    render(){
        return (
            <div className="Counter container">
             <CounterPrint counter={this.props.counter} />            
             <CounterButton label="ADD" clicked={ this.props.onAddNumber } />
             <CounterButton label="SUBTRACT" clicked={ this.props.onSubNumber } />
             <CounterButton label="Multiply" clicked={ this.props.onMulNumber } />
             <CounterButton label="Modulus" clicked={ this.props.onModNumber } />
             <CounterButton label="Divide" clicked={ this.props.onDivNumber } />
             <Store result={this.props.result } count={this.props.counter } label="Add To Store" clicked={ this.props.onAddToStore } />
             </div>
        )
    }
}

const mapStateToProps= (state)=>{
    console.log("..storeresult..",state)
    return {
        counter: state.ctr.counter,
        result: state.res.result,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
    // 
    onAddNumber: ()=> dispatch({ type: actionTypes.ADD_NUMBER }),
    onSubNumber: ()=> dispatch({ type: actionTypes.SUB_NUMBER }),
    onMulNumber: ()=> dispatch({ type: actionTypes.MUL_NUMBER, }),
    onDivNumber: ()=> dispatch({ type: actionTypes.DIV_NUMBER }),
    onModNumber: ()=> dispatch({ type: actionTypes.MOD_NUMBER }),
    onAddToStore: (count)=> dispatch({ type: actionTypes.ADD_TO_STORE, value:count })    
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);