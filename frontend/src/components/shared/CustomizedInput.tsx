import { TextField } from "@mui/material";
import React from "react";
type Props = {
  name: string;
  type: string;
  label: string;
};

const CustomizedInput = (props: Props) => {
  return (
    <TextField
      InputLabelProps={{ style: { color: "white" } }}
      name={props.name}
      type={props.type}
      InputProps={{style:{width:'400px' ,borderRadius:10 ,fontSize:20 ,color:'white' }}}
      label={props.label}
    />
  );
};

export default CustomizedInput;
