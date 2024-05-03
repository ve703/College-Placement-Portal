export const mockAdminData = {
  horiChartSettings: {
    xAxis: [
      {
        label: "Package (Lakhs)",
      },
    ],
    width: 700,
    height: 550,
  },

  horiChartData: [
    {
      package: 63,
      company: "Google",
    },
    {
      package: 55,
      company: "Amazon",
    },
    {
      package: 45,
      company: "JP Morgan",
    },
    {
      package: 44,
      company: "DE Shaw",
    },
    {
      package: 36,
      company: "Morgan Stanley",
    },
    {
      package: 30,
      company: "Texas",
    },
    {
      package: 26,
      company: "VISA",
    },
    {
      package: 20,
      company: "Deustche Bank",
    },
  ],

  simpleBarData: [
    {
      name: "CS",
      unplaced: 10,
      placed: 61,
    },
    {
      name: "IT",
      unplaced: 9,
      placed: 58,
    },
    {
      name: "EXTC",
      unplaced: 17,
      placed: 45,
    },
    {
      name: "ETRX",
      unplaced: 18,
      placed: 48,
    },
    {
      name: "ELEC",
      unplaced: 15,
      placed: 55,
    },
    {
      name: "MECH",
      unplaced: 26,
      placed: 40,
    },
    {
      name: "PROD",
      unplaced: 34,
      placed: 38,
    },
  ],

  data: [
    { name: "No. of students placed", students: 256 },
    { name: "No. of students not placed", students: 168 },
  ],

  getFillColor: (index) => {
    const colors = ["#8884d8", "#82ca9d", "#EA4335"];
    return colors[index % colors.length];
  },
};

export default mockAdminData;
