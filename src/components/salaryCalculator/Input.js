import { styled, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const InputText = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    color: "#40241a",
  },
  "& .MuiInputLabel-root": {
    color: "#40241a",
  },
}));

const DisplayText = styled(TextField)(() => ({
  "& .Mui-disabled": {
    color: "#9c786c !important",
    "& .Mui-disabled": {
      textFillColor: "#3e2723",
    },
  },
}));

export const theme = createTheme({
  palette: {
    primary: {
      light: "#6a4f4b",
      main: "#3e2723",
      dark: "#1b0000",
      contrastText: "#fff",
    },
  },
});

export const Input = ({ label, value, onChange }) => {
  return (
    <InputText
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

export const Display = ({ label, value }) => {
  return (
    <DisplayText
      disabled
      label={label}
      id="standard-start-adornment"
      sx={{ m: 1, mt: 3, width: "25ch" }}
      InputProps={{
        inputMode: "numeric",
        pattern: "[0-9]*",
        startAdornment: <InputAdornment position="start">NT$</InputAdornment>,
      }}
      variant="standard"
      value={value}
    />
  );
};
