import {configureStore} from '@reduxjs/toolkit'
import UserReducer from '../redux/UserReducer'


const Store=configureStore({
    reducer:{
        currentUser:UserReducer,
    }
})

export default Store;