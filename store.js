import { configureStore } from '@reduxjs/toolkit'
import emailReducer from './src/reduxslice/mailSlice'
import usersReducer from './src/reduxslice/usersSlise'
import loginReducer from './src/reduxslice/loginSlice'

export default configureStore({
  reducer: {
    email:emailReducer,
    users:usersReducer,
    login:loginReducer
  },
})