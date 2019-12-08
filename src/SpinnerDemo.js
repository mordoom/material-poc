import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { SectionHeading } from "./App";

export const SpinnerDemo = () => (
  <Grid item>
    <SectionHeading>Spinner</SectionHeading>
    <CircularProgress size={64} />
  </Grid>
);
