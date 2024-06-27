import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    value: "",
  },
  reducers: {
    addMail: (state, action) => {
        state.value = action.payload
      },
  },
})

export const { addMail } = mailSlice.actions

export default mailSlice.reducer