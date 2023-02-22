// const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";


const store = configureStore({
  reducer: rootReducer,
})