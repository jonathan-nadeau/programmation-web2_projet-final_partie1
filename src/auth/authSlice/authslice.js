import {createSlice} from '@reduxjs/toolkit'
import reducers from './reducers'

const initialState = {
    user: null 
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: reducers    
});

export const {setUser, resetUser} = authSlice.actions;
export default authSlice.reducer;