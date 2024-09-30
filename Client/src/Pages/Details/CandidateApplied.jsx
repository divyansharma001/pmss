import React, { useState } from "react";
import {
  Button, Box, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField,
  Checkbox, Modal
} from "@mui/material";
import { Bar, Doughnut } from "react-chartjs-2";
import 'chart.js/auto';
import { CSVLink } from "react-csv";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { IconButton } from "@mui/material";

// Dummy candidate data
const initialCandidates = [
  { id: 1, name: "Aarav Patel", course: "B.Tech", status: "Pending", details: "More info about Aarav" },
  { id: 2, name: "Priya Sharma", course: "MBA", status: "Pending", details: "More info about Priya" },
  { id: 3, name: "Vikram Singh", course: "B.Sc", status: "Approved", details: "More info about Vikram" },
  { id: 4, name: "Neha Gupta", course: "BBA", status: "Declined", details: "More info about Neha" },
  { id: 5, name: "Rahul Mehta", course: "BBA", status: "Approved", details: "More info about Rahul" },
  { id: 6, name: "Aisha Khan", course: "MBA", status: "Pending", details: "More info about Aisha" },
];

// Dummy recent activities
const initialActivities = [
  { id: 1, action: 'Approved', candidate: 'Aarav Patel', time: '10:00 AM' },
  { id: 2, action: 'Declined', candidate: 'Priya Sharma', time: '11:00 AM' },
  { id: 3, action: 'Approved', candidate: 'Vikram Singh', time: '1:00 PM' },
];

// Statistics data for charts
const statsData = {
  labels: ['2023', '2024'],
  datasets: [
    {
      label: 'Applications',
      backgroundColor: '#36A2EB',
      data: [120, 200],
    },
    {
      label: 'Approved',
      backgroundColor: '#4CAF50',
      data: [60, 150],
    },
    {
      label: 'Declined',
      backgroundColor: '#F44336',
      data: [20, 30],
    }
  ],
};

const courseDistributionData = {
  labels: ['B.Tech', 'MBA', 'B.Sc', 'BBA'],
  datasets: [
    {
      label: 'Course Distribution',
      data: [100, 80, 50, 70],
      backgroundColor: ['#42A5F5', '#66BB6A', '#FFCA28', '#FF7043'],
    },
  ],
};

const AdminDashboard = () => {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [activities, setActivities] = useState(initialActivities);
  const [comments, setComments] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCandidate, setActiveCandidate] = useState(null);

  const totalCandidates = candidates.length;
  const approvedCandidates = candidates.filter(c => c.status === 'Approved').length;
  const declinedCandidates = candidates.filter(c => c.status === 'Declined').length;
  const pendingCandidates = candidates.filter(c => c.status === 'Pending').length;
  const acceptanceRate = ((approvedCandidates / totalCandidates) * 100).toFixed(2);
  const rejectionRate = ((declinedCandidates / totalCandidates) * 100).toFixed(2);

  // Filter and search candidates
  const filteredCandidates = candidates.filter((candidate) =>
    (candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) || candidate.course.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedStatus === "All" || candidate.status === selectedStatus)
  );

  const handleCommentChange = (id, value) => {
    setComments({
      ...comments,
      [id]: value,
    });
  };

  const handleAction = (id, action) => {
    const updatedCandidates = candidates.map((candidate) =>
      candidate.id === id ? { ...candidate, status: action === 'approve' ? 'Approved' : 'Declined' } : candidate
    );
    setCandidates(updatedCandidates);

    // Log the action in recent activities
    setActivities([...activities, {
      id: activities.length + 1,
      action: action === 'approve' ? 'Approved' : 'Declined',
      candidate: candidates.find(c => c.id === id).name,
      time: new Date().toLocaleTimeString(),
    }]);
  };

  const handleModalOpen = (candidate) => {
    setActiveCandidate(candidate);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setActiveCandidate(null);
  };

  return (
    <Box sx={{ padding: "30px", backgroundColor: "#f7f8fa" }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: "20px", fontWeight: 600 }}>
        Candidate Applications
      </Typography>

      {/* Stats Boxes */}
      <Grid container spacing={3} sx={{ marginBottom: "20px" }}>
        <Grid item xs={12} md={3}>
          <Paper elevation={4} sx={{ padding: "20px", textAlign: "center", borderRadius: "15px", background: 'linear-gradient(to right, #56ccf2, #2f80ed)', color: "#fff" }}>
            <Typography variant="h6">Total Candidates</Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>{totalCandidates}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={4} sx={{ padding: "20px", textAlign: "center", borderRadius: "15px", background: 'linear-gradient(to right, #43e97b, #38f9d7)', color: "#fff" }}>
            <Typography variant="h6">Applied</Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>{approvedCandidates}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={4} sx={{ padding: "20px", textAlign: "center", borderRadius: "15px", background: 'linear-gradient(to right, #ff758c, #ff7eb3)', color: "#fff" }}>
            <Typography variant="h6">Approved</Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>{declinedCandidates}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={4} sx={{ padding: "20px", textAlign: "center", borderRadius: "15px", background: 'linear-gradient(to right, #fddb92, #d1fdff)', color: "#fff" }}>
            <Typography variant="h6">Declined</Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>{pendingCandidates}</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Additional Stats */}
      <Grid container spacing={3} sx={{ marginBottom: "20px" }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ padding: "20px", textAlign: "center", borderRadius: "15px", background: '#e0f7fa' }}>
            <Typography variant="h6">Acceptance Rate</Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>{acceptanceRate}%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ padding: "20px", textAlign: "center", borderRadius: "15px", background: '#ffebee' }}>
            <Typography variant="h6">Rejection Rate</Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>{rejectionRate}%</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Course Distribution Chart */}
      <div className="flex">
      <Box sx={{ marginBottom: "20px",width:"400px" }}>
        <Typography variant="h6" gutterBottom>
          Course Distribution
        </Typography>
        <Doughnut
          data={courseDistributionData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'bottom' },
            },
          }}
        />
      </Box>
      <Box sx={{ marginLeft: "50px",marginTop:"30px", width: "600px" }}>
        <Typography variant="h6" gutterBottom>

          Additional Stats
        </Typography>

        <Bar
          data={{
            labels: ['B.Tech', 'MBA', 'B.Sc', 'BBA'],

            datasets: [

              {
                label: 'Total Candidates',
                data: [100, 80, 50, 70],

                backgroundColor: ['#42A5F5', '#66BB6A', '#FFCA28', '#FF7043'],
              },
            ],
          }}
          options={{

            responsive: true,

            plugins: {

              legend: { position: 'top' },

            },
          }}
        />

      </Box>
      </div>

      {/* Recent Activities */}
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Recent Activities
        </Typography>
        <Paper elevation={3} sx={{ padding: "20px", borderRadius: "15px" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><Typography variant="h6">Action</Typography></TableCell>
                  <TableCell><Typography variant="h6">Candidate</Typography></TableCell>
                  <TableCell><Typography variant="h6">Time</Typography></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {activities.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell>{activity.action}</TableCell>
                    <TableCell>{activity.candidate}</TableCell>
                    <TableCell>{activity.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      {/* Candidates Table */}
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Candidates Applied
        </Typography>
        <TableContainer component={Paper} sx={{ borderRadius: "15px", overflow: "hidden" }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
              <TableRow>
                <TableCell />
                <TableCell><Typography variant="h6">Name</Typography></TableCell>
                <TableCell><Typography variant="h6">Course</Typography></TableCell>
                <TableCell><Typography variant="h6">Status</Typography></TableCell>
                <TableCell><Typography variant="h6">Actions</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCandidates.map((candidate) => (
                <TableRow key={candidate.id} hover>
                  <TableCell>
                    <Checkbox
                      checked={selectedCandidates.includes(candidate.id)}
                      onChange={() => handleSelectCandidate(candidate.id)}
                    />
                  </TableCell>
                  <TableCell>{candidate.name}</TableCell>
                  <TableCell>{candidate.course}</TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        color:
                          candidate.status === "Approved" ? "#4CAF50" :
                          candidate.status === "Declined" ? "#F44336" : "#FF9800"
                      }}
                    >
                      {candidate.status}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      color="info"
                      onClick={() => handleModalOpen(candidate)}
                      sx={{ marginRight: 1 }}
                    >
                      <InfoIcon />
                    </IconButton>
                    <IconButton
                      color="success"
                      onClick={() => handleAction(candidate.id, 'approve')}
                      sx={{ marginRight: 1 }}
                    >
                      <CheckIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleAction(candidate.id, 'decline')}
                      sx={{ marginRight: 1 }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <input
                      type="text"
                      placeholder="Add comment"
                      value={comments[candidate.id] || ''}
                      onChange={(e) => handleCommentChange(candidate.id, e.target.value)}
                      style={{
                        padding: "5px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        marginLeft: "10px"
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Stats Chart */}
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Application Statistics (Comparison with Last Year)
        </Typography>
        <Bar
          data={statsData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
            },
          }}
        />
      </Box>

      {/* Modal for Candidate Details */}
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            borderRadius: "10px"
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Candidate Details
          </Typography>
          {activeCandidate && (
            <Box sx={{ marginTop: 2 }}>
              <Typography><strong>Name:</strong> {activeCandidate.name}</Typography>
              <Typography><strong>Course:</strong> {activeCandidate.course}</Typography>
              <Typography><strong>Status:</strong> {activeCandidate.status}</Typography>
              <Typography><strong>Details:</strong> {activeCandidate.details}</Typography>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default AdminDashboard;

