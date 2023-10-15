import { configureStore } from "@reduxjs/toolkit";
import patientsReducer from "./patientsSlice";

const store = configureStore({
    reducer: {
        patients: patientsReducer,
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;