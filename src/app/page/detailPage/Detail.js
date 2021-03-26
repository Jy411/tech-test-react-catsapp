import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import "./detailStyle.css";
import {Link, useParams} from "react-router-dom";
import {addLikeCat, removeLikeCat} from "../../reduxSlice/feedSlice";

const Detail = () => {
  const dispatch = useDispatch();
  const likedCatArr = useSelector(state => state.feed.likedCats);
  const catArr = useSelector(state => state.feed.catArr)
  const [cat, setCat] = useState({
    "id": 0,
    "name": "Jeremiah",
    "age": 21,
    "description": "This grumpy cat started following me back home while I was taking a walk. It won't leave me now. Please help.",
    "image_url": "https://cataas.com/cat/6010b5d147d128001b7bbb8c",
    "background_color": "#f37171",
    "owner": {
      "name": "Anonymous",
      "phone": "07711223344",
      "email": "deborah@email.com",
      "address": "Keltan House, 115 Mare St, London, E8 4RT"
    }
  });
  let { catId } = useParams();

  useEffect(() => {
    catArr.map((cat) => {
      if (cat.id === parseInt(catId)) {
        console.log(cat);
        setCat(cat);
      }
    })
  }, [])

  const addRemoveLikeCat = (cat) => {
    if (likedCatArr.includes(cat))
      dispatch(removeLikeCat(cat));
    else
      dispatch(addLikeCat(cat));
  }

  return (
      <div className="container" style={{backgroundColor: cat.background_color}}>
        <div className="imageContainer">
          <img
              src={cat.image_url}
              className="catImage"
              alt="meow meow missing"
          />
          <Link to={{pathname:"/", state: {dataLoaded: true}}}>
            <svg className="closeIcon" width="36" height="36" viewBox="0 0 36 36" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="white"/>
              <path d="M23 13L13 23" stroke="#143154" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 13L23 23" stroke="#143154" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="catDetailContainer">
          <div className="nameAgeContainer">
            <span className="name">{cat.name}</span>
            <span className="age">{cat.age} years old</span>
          </div>
          <div className="likeBtn">
            <svg onClick={() => addRemoveLikeCat(cat)} width="112" height="36" viewBox="0 0 112 36" fill={likedCatArr.includes(cat) ? "#F46D5C" : "none"} xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="white"/>
              <rect width="112" height="36" rx="18" fill="white"/>
              <path d="M41.3666 12.8417C40.941 12.4158 40.4356 12.078 39.8794 11.8476C39.3232 11.6171 38.727 11.4985 38.1249 11.4985C37.5229 11.4985 36.9267 11.6171 36.3705 11.8476C35.8143 12.078 35.3089 12.4158 34.8833 12.8417L33.9999 13.725L33.1166 12.8417C32.2569 11.9819 31.0908 11.4989 29.8749 11.4989C28.6591 11.4989 27.493 11.9819 26.6333 12.8417C25.7735 13.7014 25.2905 14.8675 25.2905 16.0833C25.2905 17.2992 25.7735 18.4653 26.6333 19.325L27.5166 20.2083L33.9999 26.6917L40.4833 20.2083L41.3666 19.325C41.7924 18.8994 42.1302 18.394 42.3607 17.8378C42.5912 17.2816 42.7098 16.6854 42.7098 16.0833C42.7098 15.4813 42.5912 14.8851 42.3607 14.3289C42.1302 13.7727 41.7924 13.2673 41.3666 12.8417V12.8417Z" stroke="#F46D5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M53.2071 23V11.672H55.9591V20.616H60.3431V23H53.2071ZM64.3329 12.488C64.3329 12.6907 64.2903 12.8827 64.2049 13.064C64.1303 13.2347 64.0236 13.384 63.8849 13.512C63.7569 13.64 63.5969 13.7413 63.4049 13.816C63.2236 13.8907 63.0316 13.928 62.8289 13.928C62.4023 13.928 62.0449 13.7893 61.7569 13.512C61.4689 13.224 61.3249 12.8827 61.3249 12.488C61.3249 12.296 61.3623 12.1147 61.4369 11.944C61.5116 11.7627 61.6183 11.608 61.7569 11.48C61.8956 11.352 62.0556 11.2507 62.2369 11.176C62.4183 11.0907 62.6156 11.048 62.8289 11.048C63.0316 11.048 63.2236 11.0853 63.4049 11.16C63.5969 11.2347 63.7569 11.336 63.8849 11.464C64.0236 11.592 64.1303 11.7467 64.2049 11.928C64.2903 12.0987 64.3329 12.2853 64.3329 12.488ZM61.5169 23V15.032H64.1409V23H61.5169ZM74.7793 23H71.5313L68.9233 19.176H68.8753V23H66.2353V10.904H68.8753V18.264H68.9233L71.4673 15.032H74.6513L71.5793 18.632L74.7793 23ZM80.9417 18.104C80.9417 17.688 80.8084 17.3307 80.5417 17.032C80.2857 16.7333 79.8964 16.584 79.3737 16.584C79.1177 16.584 78.883 16.6267 78.6697 16.712C78.4564 16.7867 78.2697 16.8933 78.1097 17.032C77.9497 17.1707 77.8217 17.336 77.7257 17.528C77.6297 17.7093 77.5764 17.9013 77.5657 18.104H80.9417ZM83.3577 19.112C83.3577 19.2187 83.3577 19.3253 83.3577 19.432C83.3577 19.5387 83.3524 19.64 83.3417 19.736H77.5657C77.587 19.96 77.651 20.1627 77.7577 20.344C77.875 20.5253 78.019 20.6853 78.1897 20.824C78.371 20.952 78.5684 21.0533 78.7817 21.128C79.0057 21.2027 79.235 21.24 79.4697 21.24C79.8857 21.24 80.2377 21.1653 80.5257 21.016C80.8137 20.856 81.0484 20.6533 81.2297 20.408L83.0537 21.56C82.6804 22.104 82.1844 22.5253 81.5657 22.824C80.9577 23.112 80.2484 23.256 79.4377 23.256C78.8404 23.256 78.275 23.1653 77.7417 22.984C77.2084 22.792 76.739 22.52 76.3337 22.168C75.939 21.8053 75.6244 21.3627 75.3897 20.84C75.1657 20.3173 75.0537 19.72 75.0537 19.048C75.0537 18.3973 75.1657 17.8107 75.3897 17.288C75.6137 16.7547 75.9177 16.3067 76.3017 15.944C76.6857 15.5707 77.139 15.2827 77.6617 15.08C78.1844 14.8773 78.7497 14.776 79.3577 14.776C79.9444 14.776 80.483 14.8773 80.9737 15.08C81.4644 15.272 81.8857 15.5547 82.2377 15.928C82.5897 16.3013 82.8617 16.7547 83.0537 17.288C83.2564 17.8213 83.3577 18.4293 83.3577 19.112Z" fill="#F46D5C"/>
            </svg>
          </div>
        </div>
        <div className="catBioContainer">
          <div className="catBio">
            <span>{cat.description}</span>
          </div>
        </div>
        <div className="ownerBioContainer">
          <span className="ownerName">Owned By {cat.owner.name}</span>
          <div className="ownerBio">
            <div className="bioCol1">
              <span>Phone</span>
              <span>Email</span>
              <span>Location</span>
            </div>
            <div className="bioCol2">
              <span className="altFont">{cat.owner.phone}</span>
              <span className="altFont">{cat.owner.email}</span>
              <span className="altFont">{cat.owner.address}</span>
            </div>
          </div>
        </div>
      </div>
  );


}

export default Detail;