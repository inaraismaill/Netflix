import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    value: true,
  },
  reducers: {
    isLogin: (state, action) => {
        state.value = action.payload
      },
  },
})

export const { isLogin } = loginSlice.actions

export default loginSlice.reducer