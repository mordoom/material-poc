import {
  Box,
  Card,
  CardContent,
  ThemeProvider,
  Typography,
  CssBaseline,
  Grid
} from "@material-ui/core";
import React from "react";
import "./App.css";
import { theme } from "./theme";
import { TypographyDemo } from "./TypographyDemo";
import { AccordionDemo } from "./AccordionDemo";
import { ButtonDemos } from "./ButtonDemos";
import { FormControlDemos } from "./FormControlDemos";
import { SpinnerDemo } from "./SpinnerDemo";

export const SectionHeading = ({ children }) => (
  <Typography variant="h5" gutterBottom>
    {children}
  </Typography>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box display="flex" justifyContent="center">
      <Card>
        <CardContent>
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            spacing={5}
          >
            <TypographyDemo />
            <AccordionDemo />
            <ButtonDemos />
            <FormControlDemos />
            <SpinnerDemo />
          </Grid>
        </CardContent>
      </Card>
    </Box>
  </ThemeProvider>
);

export default App;
