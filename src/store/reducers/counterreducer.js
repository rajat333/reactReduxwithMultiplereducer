import * as actionTypes from '../action';

const intialState = {
    counter:0,
    // result:[],
}
 const  counterreducer = (state= intialState, action) => {
        // console.log("...in reducer",state,action); 
        switch(action.type){
            
            case actionTypes.ADD_NUMBER:
                // console.log("...In add no reducer..");
                  return {
                      ...state,
                      counter: state.counter + 1
                  }

            case actionTypes.SUB_NUMBER:
            // console.log("...in reducer1"); 
                return {
                    ...state,
                    counter: state.counter - 1
                }      

            case actionTypes.MUL_NUMBER:
            console.log("...in reducer2....",state,action); 
                return {
                    ...state,
                    counter: state.counter * 2
                }

            case actionTypes.DIV_NUMBER:
            // console.log("...in reducer3"); 
                return {
                    ...state,
                    counter: state.counter / 2,
                }
            
            case actionTypes.MOD_NUMBER:
            // console.log("...in reducer3"); 
                return {
                    ...state,
                    counter: state.counter % 2,
                }        
            default:
                // console.log("...in reducer4"); 
                return state;    
        }

}

export default counterreducer;