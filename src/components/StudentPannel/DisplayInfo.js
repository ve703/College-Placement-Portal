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
  const dummyData = [
    {
      id: 1,
      name: "Vishal Chavan",
      BranchName: "ee",
      description: "Description of Item hello bhai",
    },
    {
      id: 2,
      name: "Pranay Meshu",
      BranchName: "ee",
      description: "Description of Item 2",
    },
    {
      id: 3,
      name: "Mandar ",
      BranchName: "ee",
      description: "Description of Item 3",
    },
    {
      id: 4,
      name: "Chinmay ",
      BranchName: "ee",
      description: "Description of Item 4",
    },
    {
      id: 5,
      name: "Tushar ",
      BranchName: "ee",
      description: "Description of Item 5",
    },
    {
      id: 6,
      name: "Item 6",
      BranchName: "ee",
      description: "Description of Item 6",
    },
    {
      id: 7,
      name: "Item 7",
      BranchName: "cs",
      description: "Description of Item 7",
    },
    {
      id: 8,
      name: "Item 8",
      BranchName: "cs",
      description: "Description of Item 8",
    },
    {
      id: 9,
      name: "Item 9",
      BranchName: "cs",
      description: "Description of Item 9",
    },
    {
      id: 10,
      name: "Item 10",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 11,
      name: "Item 11",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 12,
      name: "Item 12",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 13,
      name: "Item 13",
      BranchName: "cs",
      description: "Description of Item 13",
    },
    {
      id: 14,
      name: "Item 14",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 15,
      name: "Item 15",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 16,
      name: "Item 16",
      BranchName: "ee",
      description: "Description of Item 10",
    },
    {
      id: 17,
      name: "Item 17",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 18,
      name: "Item 18",
      BranchName: "ee",
      description: "Description of Item 10",
    },
    {
      id: 19,
      name: "Item 19",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 20,
      name: "Item 19",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 21,
      name: "Item 19",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 22,
      name: "Item 19",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 23,
      name: "Item 19",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 24,
      name: "Item 19",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 25,
      name: "Item 19",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 26,
      name: "Item 19",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 27,
      name: "Item 19",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 28,
      name: "Item 19",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 29,
      name: "Item 19",
      BranchName: "cs",
      description: "Description of Item 10",
    },
    {
      id: 30,
      name: "Item 19",
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
  let size = dummyData.length;

  const handleOpen = (item) => {
    setOpen(true);
    setDesc(item);
  };
  const handleClose = () => setOpen(false);

  const handleSearch = () => {
    const filtered = dummyData.filter((item) =>
      item.BranchName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);

    size = currentItems.length;
    // console.log(size);
    setCurrentPage(1);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;

  // Calculate pagination

  useEffect(() => {
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
    <Grid sx={{ border: 1, height: 650, m: 10 }}>
      <h1>Experience section:</h1>

      <Grid>
        <Grid item sx={{ width: 600, ml: 40 }}>
          <TextField
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
                  onClick={() => {
                    handleSearch();
                  }}
                >
                  Search
                </Button>
              ),
            }}
          />
        </Grid>
      </Grid>

      <Grid sx={{ border: 1, height: 420, ml: 30, mt: 3, width: 800 }}>
        <List
          sx={{ width: "100%", maxWidth: 860, bgcolor: "background.paper" }}
        >
          {currentItems.map((item, index) => (
            <Box key={item.id}>
              <Grid sx={{ ml: 35, height: 30 }} key={index}>
                <Button
                  key={index}
                  sx={{ height: 30 }}
                  onClick={() => {
                    handleOpen(item.description);
                  }}
                >
                  {item.name}
                  <div
                    style={{
                      borderLeft: "1px solid black",
                      height: "100%",
                      margin: "0 10px",
                    }}
                  />
                  <Typography variant="body2">{item.BranchName}</Typography>
                </Button>

                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      timeout: 500,
                    },
                  }}
                  // sx={{margin:500}}
                >
                  <Fade in={open}>
                    <Box sx={style}>
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        My Experience:
                      </Typography>
                      <Typography
                        id="transition-modal-description"
                        sx={{ mt: 2 }}
                      >
                        {desc}
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
              </Grid>
              <Divider />
            </Box>
          ))}
        </List>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mr: 10 }}>
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
  );
};

export default DisplayInfo;
