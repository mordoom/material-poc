import { Button, Grid } from "@material-ui/core";
import React from "react";
import { SectionHeading } from "./App";

export const ButtonDemos = () => (
  <Grid item>
    <SectionHeading>Primary Button</SectionHeading>
    <Button color="primary" variant="contained">
      Select plan
    </Button>
  </Grid>
);
