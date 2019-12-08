import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Grid
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { SectionHeading } from "./App";

const Accordion = ({ heading, children }) => (
  <ExpansionPanel>
    <ExpansionPanelSummary expandIcon={<AddIcon color="error" />}>
      <Typography>{heading}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>{children}</Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

export const AccordionDemo = () => (
  <Grid item>
    <SectionHeading>Accordion</SectionHeading>
    <Accordion heading="Accordion">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Accordion>
  </Grid>
);
