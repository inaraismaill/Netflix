import { createSlice } from '@reduxjs/toolkit'
const initialState={
  value:""
}
export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    addMail: (state, action) => {
        state.value = action.payload
      },
  },
})

export const { addMail } = mailSlice.actions

export default mailSlice.reducer