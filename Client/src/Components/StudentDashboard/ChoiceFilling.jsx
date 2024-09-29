import React, { useState } from "react";
import Select from "react-select";
import { Pie } from "react-chartjs-2";
import { Button, Box, Card, CardContent, Typography, Grid, LinearProgress, Paper } from "@mui/material";
import 'chart.js/auto'; // Import Chart.js for proper chart rendering

// Dummy College Data
const colleges = [
    { value: "IIT Delhi", label: "IIT Delhi", seatsAvailable: 100, seatsFilled: 80, locked: false },
    { value: "IIT Bombay", label: "IIT Bombay", seatsAvailable: 120, seatsFilled: 90, locked: true },
    { value: "NIT Trichy", label: "NIT Trichy", seatsAvailable: 80, seatsFilled: 60, locked: false },
    { value: "IIT Kanpur", label: "IIT Kanpur", seatsAvailable: 90, seatsFilled: 70, locked: false },
    { value: "IIT Kharagpur", label: "IIT Kharagpur", seatsAvailable: 110, seatsFilled: 85, locked: false },
    { value: "IIT Madras", label: "IIT Madras", seatsAvailable: 95, seatsFilled: 75, locked: false },
    { value: "IIT Roorkee", label: "IIT Roorkee", seatsAvailable: 100, seatsFilled: 80, locked: false },
    { value: "NIT Surathkal", label: "NIT Surathkal", seatsAvailable: 70, seatsFilled: 50, locked: false },
    { value: "NIT Warangal", label: "NIT Warangal", seatsAvailable: 85, seatsFilled: 65, locked: false },
    { value: "BITS Pilani", label: "BITS Pilani", seatsAvailable: 150, seatsFilled: 120, locked: false },
    { value: "IIIT Hyderabad", label: "IIIT Hyderabad", seatsAvailable: 60, seatsFilled: 45, locked: false },
    { value: "NIT Calicut", label: "NIT Calicut", seatsAvailable: 75, seatsFilled: 55, locked: false },
    { value: "NIT Durgapur", label: "NIT Durgapur", seatsAvailable: 80, seatsFilled: 60, locked: false },
    { value: "IISc Bangalore", label: "IISc Bangalore", seatsAvailable: 50, seatsFilled: 40, locked: false },
    { value: "VIT Vellore", label: "VIT Vellore", seatsAvailable: 200, seatsFilled: 180, locked: false },
    { value: "SRM University", label: "SRM University", seatsAvailable: 150, seatsFilled: 130, locked: false },
    { value: "Thapar University", label: "Thapar University", seatsAvailable: 90, seatsFilled: 70, locked: false },
    { value: "Manipal University", label: "Manipal University", seatsAvailable: 120, seatsFilled: 100, locked: false },
    { value: "LPU Punjab", label: "Lovely Professional University", seatsAvailable: 300, seatsFilled: 250, locked: false },
    { value: "Amity University", label: "Amity University", seatsAvailable: 200, seatsFilled: 160, locked: false },
    { value: "Shiv Nadar University", label: "Shiv Nadar University", seatsAvailable: 80, seatsFilled: 60, locked: false },
    { value: "KREA University", label: "KREA University", seatsAvailable: 50, seatsFilled: 30, locked: false },
    { value: "Ashoka University", label: "Ashoka University", seatsAvailable: 40, seatsFilled: 25, locked: false },
    { value: "Nirma University", label: "Nirma University", seatsAvailable: 100, seatsFilled: 80, locked: false },
    { value: "PDPU Gandhinagar", label: "PDPU Gandhinagar", seatsAvailable: 70, seatsFilled: 50, locked: false },
    { value: "SASTRA University", label: "SASTRA University", seatsAvailable: 90, seatsFilled: 70, locked: false },
    { value: "BIT Mesra", label: "BIT Mesra", seatsAvailable: 80, seatsFilled: 60, locked: false },
    { value: "NIT Jamshedpur", label: "NIT Jamshedpur", seatsAvailable: 75, seatsFilled: 55, locked: false },
    { value: "NIT Silchar", label: "NIT Silchar", seatsAvailable: 60, seatsFilled: 40, locked: false },
    { value: "NIT Agartala", label: "NIT Agartala", seatsAvailable: 70, seatsFilled: 50, locked: false },
    { value: "NIT Hamirpur", label: "NIT Hamirpur", seatsAvailable: 65, seatsFilled: 45, locked: false },
    { value: "NIT Srinagar", label: "NIT Srinagar", seatsAvailable: 50, seatsFilled: 30, locked: false },
    { value: "IIIT Bangalore", label: "IIIT Bangalore", seatsAvailable: 40, seatsFilled: 30, locked: false },
  ];
  


// Progress Data (For Pie Chart)
const getProgressData = (filled, unfilled, locked) => ({
  labels: ["Filled Choices", "Unfilled Choices", "Locked Choices"],
  datasets: [
    {
      data: [filled, unfilled, locked],
      backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
    },
  ],
});

const ChoiceFilling = () => {
  const [choices, setChoices] = useState([]);

  const handleAddChoice = (selected) => {
    const selectedCollege = colleges.find((college) => college.value === selected.value);
    if (!choices.includes(selectedCollege)) {
      setChoices([...choices, selectedCollege]);
    }
  };

  const filledChoices = choices.length;
  const lockedChoices = choices.filter((choice) => choice.locked).length;
  const unfilledChoices = colleges.length - filledChoices;

  const progressData = getProgressData(filledChoices, unfilledChoices, lockedChoices);

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        College Choice Filling
      </Typography>

      {/* Top Stats Section */}
      <Grid container spacing={3} sx={{ marginBottom: "20px" }}>
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              textAlign: "center",
              borderRadius: "15px",
              backgroundColor: "#e3f2fd",
            }}
          >
            <Typography variant="h6">Available Choices</Typography>
            <Typography variant="h4">{colleges.length}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              textAlign: "center",
              borderRadius: "15px",
              backgroundColor: "#c8e6c9",
            }}
          >
            <Typography variant="h6">Filled Choices</Typography>
            <Typography variant="h4">{filledChoices}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              textAlign: "center",
              borderRadius: "15px",
              backgroundColor: "#fff9c4",
            }}
          >
            <Typography variant="h6">Unfilled Choices</Typography>
            <Typography variant="h4">{unfilledChoices}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              textAlign: "center",
              borderRadius: "15px",
              backgroundColor: "#ffccbc",
            }}
          >
            <Typography variant="h6">Locked Status</Typography>
            <Typography variant="h4">{lockedChoices}</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Searchable Dropdown for Colleges */}
      <Box sx={{ marginBottom: "20px" }}>
        <Select
          options={colleges.map((college) => ({ value: college.value, label: college.label }))}
          onChange={handleAddChoice}
          placeholder="Search and add colleges..."
        />
      </Box>

      {/* Progress and College Stats Section */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
            <Typography variant="h6">Your Selected Colleges</Typography>
            <Box>
              {choices.length === 0 ? (
                <Typography variant="body1">No choices selected yet.</Typography>
              ) : (
                choices.map((college, index) => (
                  <Card key={index} sx={{ mb: 2 }}>
                    <CardContent>
                      <Typography variant="h6">{college.label}</Typography>
                      <Typography variant="body2">
                        Seats Available: {college.seatsAvailable - college.seatsFilled}/{college.seatsAvailable}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={(college.seatsFilled / college.seatsAvailable) * 100}
                        sx={{ height: 10, mt: 1 }}
                      />
                      {college.locked && (
                        <Typography variant="body2" color="error">
                          Status: Locked
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                ))
              )}
            </Box>
          </Box>
        </Grid>

        {/* Pie Chart for Progress */}
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
            <Typography variant="h6">Progress Tracker</Typography>
            <Pie data={progressData} />
          </Box>
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert("Choices Submitted!")}
          disabled={choices.length === 0}
          sx={{ padding: "10px 30px", fontSize: "16px", borderRadius: "25px" }}
        >
          Submit Choices
        </Button>
      </Box>
    </Box>
  );
};

export default ChoiceFilling;
