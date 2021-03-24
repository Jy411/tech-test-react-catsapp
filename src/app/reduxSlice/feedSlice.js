import {createSlice, current} from "@reduxjs/toolkit";

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    catName: "",
    catAge: 0,
    catBio: "",
    catImgUrl: "",
    bgColor: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    ownerAddress: "",
    catArr: [],
    likedCats: [],
    dataLoaded: false,
  },
  reducers: {
    storeDetail: (state, action) => {
      state.catName = action.payload.name;
      state.catAge = action.payload.age;
      state.catBio = action.payload.description;
      state.catImgUrl = action.payload.image_url;
      state.bgColor = action.payload.background_color;
      state.ownerName = action.payload.owner.name;
      state.ownerPhone = action.payload.owner.phone;
      state.ownerEmail = action.payload.owner.email;
      state.ownerAddress = action.payload.owner.address;
    },
    addLikeCat: (state, action) => {
      state.likedCats.push(action.payload);
    },
    storeCat: (state, action) => {
      state.catArr.push(action.payload);
      console.log(current(state.catArr));
    },
    updateSplash: (state, action) => {
      console.log('action.payload');
      console.log(action.payload);
      state.dataLoaded = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { storeDetail, addLikeCat, storeCat, updateSplash } = feedSlice.actions

export default feedSlice.reducer
