import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
  Rectangle,
} from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { BarChart as BarChartJS } from "@mui/x-charts/BarChart";
import mockAdminData from "./mockData";
import { Button } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import { message } from "antd";

const valueFormatter = (value) => `${value} Lakhs`;

const AdminDashboard = () => {
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
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { getFillColor, horiChartSettings } = mockAdminData;
  const [horiChartData, sethoriChartData] = useState([]);
  const [simpleBarData, setSimpleBarData] = useState([]);
  const [simpleBarData2, setSimpleBarData2] = useState([]);
  const [data, setplacedData] = useState([
    { name: "No. of students placed", students: 0 },
    { name: "No. of students not placed", students: 0 },
  ]);
  const fetchBtechData = async () => {
    const response = await fetch(
      "http://localhost:5000/api/v1/fetchbtechdata",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          AuthToken: localStorage.getItem("AuthToken"),
        },
      }
    );
    const response2 = await fetch(
      "http://localhost:5000/api/v1/fetchmtechdata",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          AuthToken: localStorage.getItem("AuthToken"),
        },
      }
    );
    const r2 = await response2.json();
    const r = await response.json();
    var c = [];
    var d = [];
    var x = [
      { name: "No. of students placed", students: 0 },
      { name: "No. of students not placed", students: 0 },
    ];
    r2.mtechdatabybranch.map((i) => {
      const tempy = {
        name: i.name,
        placed: i.placed.length,
        unplaced: i.unplaced.length,
      };
      x[0].students = x[0].students + i.placed.length;
      x[1].students = x[1].students + i.unplaced.length;
      d.push(tempy);
    });
    setSimpleBarData2(d);
    r.btechdatabybranch.map((i) => {
      const tempx = {
        name: i.name,
        placed: i.placed.length,
        unplaced: i.unplaced.length,
      };
      x[0].students = x[0].students + i.placed.length;
      x[1].students = x[1].students + i.unplaced.length;
      c.push(tempx);
    });
    setSimpleBarData(c);
    setplacedData(x);
  };
  const handleReset = async () => {
    const response = await fetch("http://localhost:5000/api/v1//reset", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        AuthToken: localStorage.getItem("AuthToken"),
      },
    });
    const r = await response.json();
    console.log(r);
    if (r.msgType == "success") {
      message.success(r.msg);
    } else {
      message.warning("Error");
    }
    window.location.reload();
  };
  const fetchJobs = async () => {
    const response = await fetch("http://localhost:5000/api/v1/fetchjobdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        AuthToken: localStorage.getItem("AuthToken"),
      },
    });
    const r = await response.json();
    console.log(r);
    var b = [];
    r.jobData.map((i) => {
      const temp = {
        package: i.ctc,
        company: i.CompanyName,
      };
      b.push(temp);
    });
    var sortedData = b.sort((p1, p2) =>
      p1.package < p2.package ? 1 : p1.package > p2.package ? -1 : 0
    );
    if (sortedData.length >= 5) {
      const slicedArray = sortedData.slice(0, 5);
      sethoriChartData(slicedArray);
    } else {
      sethoriChartData(sortedData);
    }
  };
  useEffect(() => {
    fetchBtechData();
    fetchJobs();
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        {/* Pie Chart */}
        <div style={{ flex: 1, marginRight: "10px", textAlign: "center" }}>
          <h1 style={{ color: "green" }}>VJTI Placement Status</h1>
          <h3>No. of Students placed Data</h3>
          <PieChart width={800} height={400} style={{ margin: "auto" }}>
            <Tooltip />
            <Pie
              data={data}
              dataKey="students"
              outerRadius={150}
              innerRadius={70}
              fill="#8884d8"
              label={({ name, students }) => `${name}: ${students}`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getFillColor(index)} />
              ))}
            </Pie>
          </PieChart>
        </div>

        {/* Horizontal Chart */}
        <div style={{ flex: 1, marginLeft: "10px", textAlign: "center" }}>
          <BarChartJS
            dataset={horiChartData}
            yAxis={[{ scaleType: "band", dataKey: "company" }]}
            series={[{ dataKey: "package", label: "Package", valueFormatter }]}
            layout="horizontal"
            {...horiChartSettings}
          />
        </div>
      </div>

      {/* Bar Chart */}
      <div style={{ textAlign: "center", margin: "auto 10%" }}>
        <ResponsiveContainer width="100%" height={400}>
          B.Tech Placement Data:
          <BarChart
            data={simpleBarData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="placed"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="unplaced"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <br />
      <br />
      <div style={{ textAlign: "center", margin: "auto 10%" }}>
        <ResponsiveContainer width="100%" height={400}>
          Masters Placement Data:
          <BarChart
            data={simpleBarData2}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="placed"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="unplaced"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
        <br />
        <br />
        <Button onClick={handleOpen} variant="outlined">
          Reset data
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Do you want to reset the data? It is recommended to download and
              save data for current batch
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Button
                variant="outlined"
                startIcon={<WarningIcon />}
                component="label"
                onClick={handleReset}
              >
                Reset Data for current Batch
              </Button>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default AdminDashboard;
