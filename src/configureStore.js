import sliceDepenseToCutReducer from "./sliceDepenseToCut";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    sliceDepenseToCut: sliceDepenseToCutReducer
  }
});
