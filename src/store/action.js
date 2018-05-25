export const ADD_NUMBER = "ADD_NUMBER";
export const SUB_NUMBER = "SUB_NUMBER";
export const MUL_NUMBER = "MUL_NUMBER";
export const DIV_NUMBER = "DIV_NUMBER";
export const MOD_NUMBER = "MOD_NUMBER";
export const ADD_TO_STORE = "ADD_TO_STORE";
export const REMOVE_FROM_STORE = "REMOVE_FROM_STORE";

export const fetchCategories = (dispatch,action)=>{
     var count = [1,2,3,4,5,6,7,8,9];
     dispatch({ type: ADD_TO_STORE, count: count });
}
// export const DIV_NUMBER = "DIV_NUMBER";