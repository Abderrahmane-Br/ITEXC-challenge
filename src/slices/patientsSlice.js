import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://6526fd03917d673fd76d4f95.mockapi.io/appointments/Patients";

export const fetchPatients = createAsyncThunk(url, async () => {
    let res = await fetch(url);
    res = await res.json();
    return res;
});



const patientsSlice = createSlice({
    name: "patients",
    initialState: {
        list: [],
        isLoading: true
    },

    reducers: {},
    extraReducers: {
        [fetchPatients.fulfilled]: (state, action) => {
            state.list = action.payload,
                state.isLoading = false
        }
    }
});

export default patientsSlice.reducer;