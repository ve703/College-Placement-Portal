import React from "react";
import { Box, Grid, TextField, Button } from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import { useState, useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
  maxHeight: "80vh",
};

const DisplayInfo = () => {
  const dummyDatax = [
    {
      id: 1,
      companyName: "ABC",
      name: "Vishal Chavan",
      BranchName: "ee",
      description: "Description of Item hello bhai",
    },
    {
      id: 2,
      name: "Pranay Meshu",
      companyName: "ABC",
      BranchName: "ee",
      description: "Description of Item 2",
    },
    {
      id: 3,
      name: "Mandar ",
      companyName: "ABC",
      BranchName: "ee",
      description: "Description of Item 3",
    },
    {
      id: 4,
      name: "Chinmay ",
      companyName: "ABC",
      BranchName: "ee",
      description: "Description of Item 4",
    },
    {
      id: 5,
      name: "Tushar ",
      companyName: "ABC",
      BranchName: "ee",
      description: "Description of Item 5",
    },
    {
      id: 6,
      name: "Item 6",
      companyName: "ABC",
      BranchName: "ee",
      description: "Description of Item 6",
    },
    {
      id: 7,
      name: "Item 7",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 7",
    },
    {
      id: 8,
      name: "Item 8",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 8",
    },
    {
      id: 9,
      name: "Item 9",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 9",
    },
    {
      id: 10,
      name: "Item 10",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 11,
      name: "Item 11",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 12,
      name: "Item 12",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 13,
      name: "Item 13",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 13",
    },
    {
      id: 14,
      name: "Item 14",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 15,
      name: "Item 15",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 16,
      name: "Item 16",
      companyName: "ABC",
      BranchName: "ee",
      description: "Description of Item 10",
    },
    {
      id: 17,
      name: "Item 17",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 18,
      name: "Item 18",
      companyName: "ABC",
      BranchName: "ee",
      description: "Description of Item 10",
    },
    {
      id: 19,
      name: "Item 19",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 20,
      name: "Item 19",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 21,
      name: "Item 19",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 22,
      name: "Item 19",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 23,
      name: "Item 19",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 24,
      name: "Item 19",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 25,
      name: "Item 19",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 26,
      name: "Item 19",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 27,
      name: "Item 19",
      companyName: "ABCd",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 28,
      name: "Item 19",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 29,
      name: "Item 19",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 30,
      name: "Item 19",
      companyName: "ABC",
      BranchName: "cs",
      description: "Description of Item 10",
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = useState({});
  const [desc, setDesc] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  let [currentItems, setCurrentItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [student, setStudent] = useState("");
  let size = dummyDatax.length;
  const [dummyData, setDummydata] = useState(dummyDatax);

  const handleOpen = (item, student) => {
    setOpen(true);
    setDesc(item);
    setStudent(student);
  };
  const handleClose = () => setOpen(false);

  const handleSearch = () => {
    const filtered = dummyData.filter((item) =>
      item.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);

    size = currentItems.length;
    // console.log(size);
    setCurrentPage(1);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;

  // Calculate pagination
  const fetchInterviewData = async () => {
    const response = await fetch(
      `http://localhost:5000/api/v1/fetchinterviewdata`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          AuthToken: localStorage.getItem("AuthToken"),
        },
      }
    );
    const r = await response.json();
    console.log(r);
    var temp = [];
    r.interviewdata.map((i, idx) => {
      const obj = {
        id: idx + 1,
        name: i.studentName,
        companyName: i.companyName,
        BranchName: i.branch,
        description: i.experiance,
      };
      temp.push(obj);
    });
    console.log(temp);
    setDummydata(temp);
  };
  useEffect(() => {
    fetchInterviewData();
    setCurrentItems(
      filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    );
    // size=currentItems.length;
    // console.log(size)
  }, [currentPage, filteredData]);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Paper
      sx={{
        border: "0.5 px solid black",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        marginLeft: "50px",
        marginRight: "50px",
        marginBottom: "50px",
      }}
    >
      <Grid container justifyContent="center" sx={{ mt: 5 }}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <h1>Experience section:</h1>
          <TextField
            margin="auto"
            fullWidth
            variant="outlined"
            placeholder="Search by company"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <Button
                  variant="contained"
                  disableElevation
                  onClick={handleSearch}
                >
                  Search
                </Button>
              ),
            }}
          />
          <List
            sx={{
              width: "100%",
              mt: 2,
              minHeight: "500px",
              border: "0.5px solid black",
            }}
          >
            {currentItems.map((item, index) => (
              <Box key={item.id}>
                <ListItem>
                  <Button
                    onClick={() => handleOpen(item.description, item.name)}
                    sx={{ width: "100%" }}
                  >
                    <ListItemText
                      sx={{ height: "25px", alignItems: "center" }}
                      primary={item.companyName}
                      secondary={item.BranchName}
                    />
                  </Button>
                </ListItem>
                <Divider />
              </Box>
            ))}
          </List>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Pagination
              count={Math.ceil(size / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              color="primary"
            />
          </Box>
        </Grid>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {student}
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {desc}
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </Grid>
    </Paper>
  );
};

export default DisplayInfo;
