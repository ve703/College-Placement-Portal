import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Input as BaseInput } from "@mui/base/Input";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import { message } from "antd";

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
      sx={{ width: "200%", fontSize: "1.8rem", padding: "12px" }}
    />
  );
});

const Info = () => {
  const [inputs, setInputs] = useState({
    name: "",
    companyName: "",
    branch: "",
    cpi: "",
    // date:'',
    experiance: "",
    drivelink: "",
  });

  const hendleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/v1//addinterview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        AuthToken: localStorage.getItem("AuthToken"),
      },
      body: JSON.stringify(inputs),
    });
    const r = await response.json();
    if (r.msgType == "success") {
      message.success(r.msg);
    } else {
      message.warning("error");
    }
    // console.log(inputs);
  };

  return (
    <Paper elevation={3} sx={{ p: 2, maxWidth: 400, mx: "auto", mt: 10 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <h1>Add Your Experience:</h1>
        </Box>

        <TextField
          fullWidth
          name="companyName"
          value={inputs.companyName}
          onChange={hendleChange}
          label="Company Name"
          id="CompanyName"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          name="name"
          value={inputs.name}
          onChange={hendleChange}
          label="Student Name"
          id="StudentName"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          type={"text"}
          value={inputs.branch}
          name="branch"
          onChange={hendleChange}
          label="Branch"
          id="Branch"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          type={"text"}
          name="cpi"
          value={inputs.cpi}
          onChange={hendleChange}
          label="CPI"
          id="Cpi"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          type={"text"}
          name="drivelink"
          value={inputs.drivelink}
          onChange={hendleChange}
          label="Drive Link"
          id="Cpi"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          name="experiance"
          type={"text"}
          onChange={hendleChange}
          value={inputs.experiance}
          label="Experience"
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />

        <Box sx={{ textAlign: "center" }}>
          <Button type="submit" variant="outlined" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

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

export default Info;
