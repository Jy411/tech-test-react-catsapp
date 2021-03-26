import React, {useState} from "react";
import {Grid, Spacer} from "@geist-ui/react";

import SplashScreen from "../splashPage/SplashScreen";
import {CatGrid} from "../../component/CatGrid/CatGrid";
import {LikedCats} from "../../component/LikedCats/LikedCats";

import {useSelector} from "react-redux";

import "./feedStyle.css";

import "classnames";

const Feed = () => {
  const classNames = require('classnames');
  const [activePage, setActivePage] = useState(1);

  // Redux Selectors
  const catArr = useSelector(state => state.feed.catArr);
  const dataLoaded = useSelector(state => state.feed.dataLoaded);

  const pageSelect = (num) => {
    setActivePage(num);
  }

  let allCatsBtnClass = classNames({
    "activeBtn": activePage === 1,
    "feedBtn": activePage === 2,
    "feedBtnText": true
  });

  let likedCatsBtnClass = classNames({
    "feedBtn": activePage === 1,
    "activeBtn": activePage === 2,
    "feedBtnText": true
  });

  if (!dataLoaded) {
    return <SplashScreen />
  } else {
    return (
        <Grid.Container justify="center" alignItems="center">
          <Grid xs={24} justify="center" alignItems="center">
            <p className="feedHeader defaultFont">Catsat</p>
          </Grid>
          <Grid xs={14} justify="center" alignItems="center">
            <p className="feedSubtitle defaultFont">Look after cute cats for strangers for free.</p>
          </Grid>
          <Grid xs={18} justify="center" alignItems="center">
            <div className="btnGroup">
              <button className={allCatsBtnClass}
                      onClick={() => pageSelect(1)}>All cats</button>
              <Spacer x={1}/>
              <button className={likedCatsBtnClass}
                      onClick={() => pageSelect(2)}>Liked</button>
            </div>
          </Grid>
          {activePage === 1 && catArr.map((item) => {return (<CatGrid catData={item}/>)})}
          {activePage === 2 && <LikedCats />}
        </Grid.Container>
      )
    }
}

export default Feed;

