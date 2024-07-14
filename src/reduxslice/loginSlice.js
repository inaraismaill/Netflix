import { createSlice } from '@reduxjs/toolkit'
const initialState={
  value: true,
}
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    isLogin: (state, action) => {
        state.value = action.payload
      },
  },
})

export const { isLogin } = loginSlice.actions

export default loginSlice.reducer