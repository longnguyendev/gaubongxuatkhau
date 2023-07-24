import * as React from "react";
import Label from "../components/Label";
import TitlePage from "../components/TitlePage";
import { Grid } from "@mui/material";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <>
      <TitlePage
        title="BabyStreet Shop"
        description="We’ve picked few topics we’re pretty sure you’ll ❤ to read about. Check back often and enjoy."
      />
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </>
  );
}
