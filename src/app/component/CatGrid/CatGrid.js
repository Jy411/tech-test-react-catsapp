import React from "react";
import CatCard from "../CatCard/CatCard";
import {Grid} from "@geist-ui/react";

export const CatGrid = (props) => {
  const catData = props.catData;

  return (
      <Grid xs={12} justify="space-evenly" alignItems="center">
        <CatCard
            cat={catData}
            cardColor={catData.background_color}
            imgSrc={catData.image_url}
            catName={catData.name}
            ownerName={catData.owner.name}
            id={catData.id}
        />
      </Grid>
  )
}
