import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Grid
} from "@material-ui/core";
import React from "react";
import { SectionHeading } from "./App";

const SelectOptions = ({ options }) => (
  <Select color="secondary" native>
    {options.map(({label, value}) => <option key={label} value={value}>{label}</option>)}
  </Select>
);

const SelectField = ({label, options}) => (
  <FormControl variant="filled" fullWidth>
    <InputLabel color="secondary">{label}</InputLabel>
    <SelectOptions options={options} />
  </FormControl>
);

const options = [
  { label: "Ten", value: 10 },
  { label: "Twenty", value: 20 },
  { label: "Thirty", value: 30 }
];

export const FormControlDemos = () => (
  <>
    <Grid item>
      <SectionHeading>Checkbox</SectionHeading>
      <Checkbox color="primary" />
    </Grid>
    <Grid item>
      <SectionHeading>Radio button</SectionHeading>
      <RadioGroup defaultValue="yes">
        <FormControlLabel
          value="yes"
          control={<Radio color="primary" />}
          label="Yes"
        />
        <FormControlLabel
          value="no"
          control={<Radio color="primary" />}
          label="No"
        />
      </RadioGroup>
    </Grid>
    <Grid item>
      <SectionHeading>Select box</SectionHeading>
      <SelectField label="Age" options={options}/>
    </Grid>
    <Grid item>
      <SectionHeading>TextField</SectionHeading>
      <TextField
        id="filled-secondary"
        label="Text field"
        variant="filled"
        color="secondary"
      />
    </Grid>
    <Grid item>
      <SectionHeading>TextArea</SectionHeading>
      <TextField
        id="filled-secondary"
        multiline
        rows="4"
        label="Text area"
        variant="filled"
        color="secondary"
      />
    </Grid>
  </>
);
