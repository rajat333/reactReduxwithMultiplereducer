import * as actionTypes from '../action';

const intialState = {
    // counter:0,
    result:[],
}
 const  storereducer = (state= intialState, action) => {
    console.log("....storereducer....",state);    
    switch(action.type){
             
            case actionTypes.ADD_TO_STORE:
            console.log("...in reducer addtostore",state,action); 
            var m = Math.random();
                return {
                    ...state,
                    counter: state.counter,
                    result: state.result.concat(action.value)
                
                }     
            default:
                // console.log("...in reducer4"); 
                return state;    
        }

}

export default storereducer;