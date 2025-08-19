import { configureStore } from "@reduxjs/toolkit";
// import reducer here
import userDetail  from "../features/userDataSlice";  // whenever we use export default then we dont have to include curly brackets
export const store = configureStore({
    reducer:{    // in reducer we can export multiple reducer
        app: userDetail,
    }
})