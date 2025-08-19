import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; // for api call 
import axios from "axios";

// get all user data api call
export const getUser = createAsyncThunk("getUser", async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data;   // 👈 axios already gives JSON in .data
    } catch (error) {
        console.log("error: " + error);
        return error;
    }
});
// POST call
export const addUser = createAsyncThunk("users/add", async (newUser) => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
  return res.data;
});

export const userDetail = createSlice({
    name: 'userDetail',
    initialState: {  // can be directly define here
        users: [],
        loading: false,
        error: null
    },
    // to get user data from the api request to the getUser array of our state
    extraReducers: (builder) => {   // extraReducer are used for API calls and stuff
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // .addCase(addUser.fulfilled, (state,action)=>{
            //     state.users.push(action.payload);
            // })
    }
})
export default userDetail.reducer;// for store purpose