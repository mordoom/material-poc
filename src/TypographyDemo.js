import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { SectionHeading } from "./App";

export const TypographyDemo = () => (
  <Grid item>
    <SectionHeading>Typography</SectionHeading>
    <Typography data-id="test" variant="h1" gutterBottom>
      h1. Heading
    </Typography>
    <Typography variant="h2" gutterBottom>
      h2. Heading
    </Typography>
    <Typography variant="h3" gutterBottom>
      h3. Heading
    </Typography>
    <Typography variant="h4" gutterBottom>
      h4. Heading
    </Typography>
    <Typography variant="h5" gutterBottom>
      h5. Heading
    </Typography>
    <Typography variant="h6" gutterBottom>
      h6. Heading
    </Typography>
    <Typography variant="body1" gutterBottom>
      Body text
    </Typography>
    <Typography variant="body2" gutterBottom>
      Body text 2
    </Typography>
  </Grid>
);
