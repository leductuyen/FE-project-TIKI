import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import userApi from '../../api/user';
export const signin = createAsyncThunk(
    'user/sign',
    async (payload) => {
        const data = await userApi.register(payload);
        console.log(payload)
        localStorage.setItem('access_token', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user));
        return data.user;
    }
)
const userSlice = createSlice({
    name: 'user',
    initialState:{
        current:{}, // thong tin user
        settings:{}
    },
    reducers:{},
    extraReducers : (state,action) =>{
        state.current= action.payload
    }
});

const {reducer} = userSlice;
export default reducer;
