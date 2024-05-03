// import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Input as BaseInput } from "@mui/base/Input";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";

// import pic1 from "./img/background1.jpg"

const Input = React.forwardRef(function CustomInput(props, ref) {
  return (
    <BaseInput
      slots={{
        root: RootDiv,
        input: "input",
        textarea: TextareaElement,
      }}
      {...props}
      ref={ref}
      sx={{ width: "200%", fontSize: "1.5rem", padding: "12px" }}
    />
  );
});

function App() {
  const navigate = useNavigate();
  return (
    <>
      {localStorage.getItem("AuthToken") &&
      localStorage.getItem("userType") == 0 ? (
        <Box
          sx={{
            height: 400,
            width: 600,
            mx: 50,
            my: 20,
            alignItems: "left",
            alignContent: "left",
          }}
        >
          <Box
            sx={{
              height: "100%",
              m: 1,
            }}
          >
            <h1>ADD Your Experiance:</h1>
            <TextField
              fullWidth
              label="Company Name"
              id="CompanyName"
              sx={{ mb: 2 }}
            />
            <TextField fullWidth label="Branch" id="Branch" sx={{ mb: 2 }} />
            <TextField fullWidth label="CPI" id="Cpi" sx={{ mb: 2 }} />
            <Box sx={{ alignItems: "left", marginLeft: "-330px" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ mb: 2 }}>
                <DatePicker sx={{ mb: 2, alignSelf: "flex-start" }} />
              </LocalizationProvider>
            </Box>
            <Input
              aria-label="Experiance"
              multiline
              placeholder="Your Experiance"
            />
          </Box>
        </Box>
      ) : (
        <>{navigate("/login")}</>
      )}
    </>
  );
}

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const RootDiv = styled("div")`
  display: flex;
  max-width: 100%;
`;

const TextareaElement = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 8px 12px;
  border-radius: 8px 8px 0 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[500] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

export default App;
