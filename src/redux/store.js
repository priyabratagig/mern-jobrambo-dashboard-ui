import { configureStore } from "@reduxjs/toolkit";
import chartsSlice from "./chartsSlice";
import userSlice from "./userSlice";
import applicationsSlice from "./applicationsSlice";
import jobsSlice from "./jobsSlice";

const store = configureStore({
    reducer: {
        charts: chartsSlice,
        user: userSlice,
        applications: applicationsSlice,
        jobs: jobsSlice
    }
})

export default store
export const dispatch = store.dispatch