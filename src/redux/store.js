import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../app/reduxSlice/feedSlice";

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === "development";

export default configureStore({
  reducer: {
    feed: feedReducer
  }
})
