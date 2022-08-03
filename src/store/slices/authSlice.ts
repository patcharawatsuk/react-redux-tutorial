import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { type } from 'os'

import { signin } from '../../data/users'
import { User } from '../../types'

//create state type
type AuthState = {
    user: User | null;
    loading: boolean;
    error: string;
}

export const initialState: AuthState = {
    user: null,
    loading: false,
    error: '',
}

export const signinAsync = createAsyncThunk(
    'signin',
    async ({ email, password } : {email: string; password: string}, store) => {
        try {
            const user = await signin(email, password)

            return user
        } catch (error) {
            throw error
        }
    }
)

// signinAsync.pending, signinAsync.fulfilled, signinAsync.rejected

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signout: (state) => {
            state.user = null
            state.loading = false
            state.error = ''
        },
    },
    // extraReducers: {
    //     [signinAsync.pending]: (state: AuthState) => {
    //         state.loading = true
    //         state.error = ''
    //     },
    //     [signinAsync.fulfilled]: (state: AuthState, action: any) => {
    //         state.user = action.payload
    //         state.loading = false
    //         state.error = ''
    //     },
    //     [signinAsync.rejected]: (state: AuthState, action: any) => {
    //         state.user = null
    //         state.loading = false
    //         state.error = action.error.message
    //     },
    // },
    extraReducers: (builder) => {
        builder
            .addCase(signinAsync.pending, (state) => {
            state.loading = true
            state.error = ''
        })
            .addCase(signinAsync.fulfilled, (state, action) => {
            state.user = action.payload
            state.loading = false
            state.error = ''
        })
            .addCase(signinAsync.rejected, (state, action) => {
            state.user = null
            state.loading = false
            state.error = action.error.message || ''
        })
    }
})

export const { signout } = authSlice.actions

export const authReducer = authSlice.reducer
