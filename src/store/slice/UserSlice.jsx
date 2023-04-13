import { createSlice} from '@reduxjs/toolkit'
import {removeAllUsers} from '../actions'

const userSlice = createSlice({
    name :'user',
    initialState: [],

    // if action is required to be handle by one reducer, use reducer 
    reducers : {
        addUser(state, action) {
            state.push(action.payload)
            // console.log(action.payload, 'action.payload');
        },
        removeUser(state, action) {

            // console.log('call removeUser', action.payload);
            let index = state.indexOf(action.payload)
            state.splice(index, 1)

            // state.splice(action.payload, 1)
        },
        // removeAllUsers(state, action) {
        //     return []
        // }
    },

    // if action is supposed  to be handled by multiple reducers the use extraReducers
    
    extraReducers(builder) {
        // builder.addCase(userSlice.actions.removeAllUsers, () =>{
        //     return []
        // })
        // if the slice of removeAllUsers will be deleted the use createAction
        // now its not dependent on any slice 
        builder.addCase(removeAllUsers, () =>{
            return []
        })
    }
})

export default userSlice.reducer;
export const {addUser, removeUser} = userSlice.actions