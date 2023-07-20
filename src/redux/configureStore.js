import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({

  reducer: {
    hope: hopeReducer,
  },
})

export default store;