import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';


const authSlice = createSlice(
    {
        name: 'auth',
        initialState: {
            user: { name: null, email: null },
            token: null,
            isLoggedIn: false,
            isRefreshing: false,
        },
        extraredusers: {},
    }
);

export const authReducer = authSlice.reducer


   

