import {createSlice, current} from "@reduxjs/toolkit";

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    catArr: [],
    likedCats: [],
    dataLoaded: false,
  },
  reducers: {
    addLikeCat: (state, action) => {
      state.likedCats.push(action.payload);
    },
    removeLikeCat: (state, action) => {
      const itemToRemoveIndex = state.likedCats.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (itemToRemoveIndex !== -1) {
        state.likedCats.splice(itemToRemoveIndex, 1);
      }
    },
    storeCat: (state, action) => {
      state.catArr.push(action.payload);
    },
    updateSplash: (state, action) => {
      state.dataLoaded = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { addLikeCat, removeLikeCat, storeCat, updateSplash } = feedSlice.actions

export default feedSlice.reducer
