import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
  name: 'users',
  initialState: {
    value: [
      {
        "password":"admin",
        "email":"admin@mail.com"
      }
    ],
  },
  reducers: {
    addNewUser: (state, action) => {
        state.value.push(action.payload)
      },
  },
})

export const { addNewUser } = mailSlice.actions

export default mailSlice.reducer

