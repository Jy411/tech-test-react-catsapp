import React, {useState} from "react";
import {Grid, Spacer} from "@geist-ui/react";

import SplashScreen from "../splashPage/SplashScreen";
import {CatGrid} from "../../component/CatGrid/CatGrid";
import {LikedCats} from "../../component/LikedCats/LikedCats";

import {useSelector} from "react-redux";

import "./feedStyle.css";

const Feed = () => {
  const [pageNum, setPageNum] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const catArr = useSelector(state => state.feed.catArr);
  const dataLoaded = useSelector(state => state.feed.dataLoaded);

  const pageSelect = (num) => {
    setPageNum(num);
    setActivePage(num);
  }


  let btn1, btn2;
  if (activePage === 1) {
    btn1 = "activeBtn feedBtnText"
    btn2 = "feedBtn feedBtnText"
  } else {
    btn1 = "feedBtn feedBtnText"
    btn2 = "activeBtn feedBtnText";
  }

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
              <button className={btn1}
                      onClick={() => pageSelect(1)}>All cats</button>
              <Spacer x={1}/>
              <button className={btn2}
                      onClick={() => pageSelect(2)}>Liked</button>
            </div>
          </Grid>
          {pageNum === 1 && catArr.map((item) => {return (<CatGrid catData={item}/>)})}
          {pageNum === 2 && <LikedCats />}
        </Grid.Container>
      )
    }
}

export default Feed;

