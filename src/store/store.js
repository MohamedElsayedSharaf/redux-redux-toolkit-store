import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')
import cakeReducer from '../features/cake/cakeSlice'
import tortaReducer from '../features/torta/tortaSlice'
import userReducer from '../features/user/userSlice'

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        torta: tortaReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
export default store