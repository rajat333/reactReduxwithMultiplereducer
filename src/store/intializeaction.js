import * as actionTypes from './action';


const fetchCategories = (dispatch,action)=>{
    var count = [1,2,3,4,5,6,7,8,9];
    dispatch({ type: actionTypes.ADD_TO_STORE, count: count });
}

export default fetchCategories;