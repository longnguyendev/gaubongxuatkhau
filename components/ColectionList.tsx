import * as React from "react";

import Box from "@mui/joy/Box";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ColectionCard, { ColectionCardProps } from "./ColectionCard";

export interface ColectionsProps {
  colections: ColectionCardProps[];
}

export default function ColectionList({ colections }: ColectionsProps) {
  return (
    <>
      <Grid container spacing={4} marginTop={"50px"} marginBottom={"50px"}>
        {colections.map((colection) => (
          <Grid key={colection.id} item xs={12} md={4}>
            <ColectionCard {...colection} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
