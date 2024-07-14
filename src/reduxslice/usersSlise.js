import { createSlice } from '@reduxjs/toolkit'
const initialState={
  value: [
    {
      "password":"admin",
      "email":"admin@gmail.com"
    }
  ],
}
export const mailSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action) => {
        state.value.push(action.payload)
      },
  },
})

export const { addNewUser } = mailSlice.actions

export default mailSlice.reducer

