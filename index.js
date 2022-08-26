const redux = require('redux'); 
const createStore = redux.createStore;
const CAKE_ORDERED = 'CAKE_ORDERED'

function orderCake(){
    return{
        type:CAKE_ORDERED,
        quantity:1,
    }
}
const initialState ={
    numOfCakes:10,
}
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                numOfCakes: state.numOfCakes-1
            }
            default:return state
    }
}
const store =createStore(reducer); 
console.log('Initial state',store.getState());

const unsubscribe =store.subscribe(()=>console.log('update state',store.getState()))
//run when the state is updated
store.dispatch({
    type:CAKE_ORDERED,
    quantity:1,
}) 
store.dispatch(orderCake())

unsubscribe();
// console.log(store.getState());
store.dispatch(orderCake())
//this will execute but subscribe function will not be executed
// console.log(store.getState())