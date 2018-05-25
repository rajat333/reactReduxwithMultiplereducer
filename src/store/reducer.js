// import * as actionTypes from './action';
import counterreducer from './reducers/counterreducer';
import storereducer from './reducers/storereducer';
import { combineReducers } from 'redux';

export default combineReducers({
   ctr: counterreducer,
    res: storereducer
})

// const intialState = {
//     counter:0,
//     result:[],
// }
//  const  reducer = (state= intialState, action) => {
//         // console.log("...in reducer",state,action); 
//         switch(action.type){
            
//             case actionTypes.ADD_NUMBER:
//                 // console.log("...In add no reducer..");
//                   return {
//                       ...state,
//                       counter: state.counter + 1
//                   }

//             case actionTypes.SUB_NUMBER:
//             // console.log("...in reducer1"); 
//                 return {
//                     ...state,
//                     counter: state.counter - 1
//                 }      

//             case actionTypes.MUL_NUMBER:
//             // console.log("...in reducer2"); 
//                 return {
//                     ...state,
//                     counter: state.counter * 2
//                 }

//             case actionTypes.DIV_NUMBER:
//             // console.log("...in reducer3"); 
//                 return {
//                     ...state,
//                     counter: state.counter / 2,
//                 }
            
//             case actionTypes.MOD_NUMBER:
//             // console.log("...in reducer3"); 
//                 return {
//                     ...state,
//                     counter: state.counter % 2,
//                 }    
//             case actionTypes.ADD_TO_STORE:
//             console.log("...in reducer addtostore",action); 
//             var m = Math.random();
//                 return {
//                     ...state,
//                     counter: state.counter,
//                     result: state.result.concat(action.count)
                
//                 }     
//             default:
//                 // console.log("...in reducer4"); 
//                 return state;    
//         }

// }

// export default reducer;