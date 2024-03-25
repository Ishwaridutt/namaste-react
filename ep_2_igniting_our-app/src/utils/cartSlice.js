import { createSlice, current } from "@reduxjs/toolkit";


// click => dispact(Action) => reducer(function) => update in store
// selector => subscribe to the store

// Actions: kind of API to communicate with redux stores
// Reducers: 


const cartSlice =  createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // vanialla(older) redux => DON'T MUTATE STATE, 
            // how we used to do => clone current state and update it and return new state
            // const newState = {...state}
            // newState.items.push(action.payload)
            // return newState;
            // ---------------------------------
            // RTK => either mutate exisiting state or return a new state
            // in redux toolkit => we have to mutate the state
            // redux uses immer behind the scene to handle by itself
            state.items.push(action.payload);
        },
        clearCart: (state) => {
            // this will not work because you are not modifying/mutating the state, 
            // you are changing reference of state varible locally inside function not the reference which was passed to function 
            // since return is not required so immer checks for difference of the passed state reference
            // state = [];

            console.log('clear cart reducer:', state);
            console.log('clear cart reducer:', current(state));
            state.items = [];
            // RTK => either mutate exisiting state or return a new state
            // return { items: [] }
        },
        removeItem: (state, action) => {
            // improve this reducer later
            state.items.pop();
        }
    }
});

console.log('cartSlice====>', cartSlice);

// export actions and reducer
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer ;





