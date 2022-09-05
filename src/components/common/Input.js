import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const InputTextField = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    color: "#40241a",
  },
  "& .MuiInputLabel-root": {
    color: "#40241a",
  },
}));

const DisplayTextField = styled(TextField)(() => ({
  "& .Mui-disabled": {
    color: "#9c786c !important",
    "& .Mui-disabled": {
      textFillColor: "#3e2723",
    },
  },
}));

export const InputText = ({ label, value, onChange }) => {
  return (
    <InputTextField
      label={label}
      id="outlined-start-adornment"
      sx={{ m: 1, width: "25ch" }}
      InputProps={{
        startAdornment: <InputAdornment position="start">NT$</InputAdornment>,
      }}
      value={value}
      onChange={onChange}
    />
  );
};

export const DisplayText = ({ label, value }) => {
  return (
    <DisplayTextField
      disabled
      label={label}
      id="standard-start-adornment"
      sx={{ m: 1, mt: { xs: 1, sm: 3 }, width: "25ch" }}
      InputProps={{
        startAdornment: <InputAdornment position="start">NT$</InputAdornment>,
      }}
      variant="standard"
      value={value}
    />
  );
};
