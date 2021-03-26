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
      // console.log('addLikeCat')
      // console.log(action.payload)
      state.likedCats.push(action.payload);
      // console.log(current(state.likedCats))
    },
    removeLikeCat: (state, action) =>{
      // console.log('removeLikeCat')
      // console.log(action.payload)
      state.likedCats = state.likedCats.filter(cat => cat.id !== action.payload.id);
      // console.log((state.likedCats))
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
