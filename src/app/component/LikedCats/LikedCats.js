import React from "react";
import {Grid} from "@geist-ui/react";

import "./LikedCats.css";
import {useSelector} from "react-redux";
import {CatGrid} from "../CatGrid/CatGrid";

export const LikedCats = (props) => {
  const likedCatArr = useSelector(state => state.feed.likedCats);

  return (
      <>
        {
          likedCatArr.length === 0 ?
              <Grid xs={12} justify="center" alignItems="center">
                <p className="textStyle">You haven’t liked any cats, you monster.</p>
              </Grid>
              :
              likedCatArr.map((cat) => {
                return (
                    <CatGrid catData={cat}/>
                )
              })
        }
      </>
  )
}
