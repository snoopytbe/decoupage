import updateDateReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    updateDate: updateDateReducer
  }
});
