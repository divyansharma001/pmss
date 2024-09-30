import React, { useState } from 'react';
import { Button, Box, Typography, Grid, Paper, LinearProgress, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, MenuItem } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';

// Dummy student documents data
const initialDocuments = [
  { id: 1, studentName: 'Aarav Patel', documentType: 'Passport', status: 'Pending', uploadDate: '2024-01-15', file: 'passport_johndoe.pdf' },
  { id: 2, studentName: 'Priya Sharma', documentType: 'ID Card', status: 'Pending', uploadDate: '2024-01-16', file: 'id_janesmith.pdf' },
  { id: 3, studentName: 'Vikram Singh', documentType: 'Transcript', status: 'Approved', uploadDate: '2024-01-10', file: 'transcript_sambrown.pdf' },
  { id: 4, studentName: 'Neha Gupta', documentType: 'Transcript', status: 'Rejected', uploadDate: '2024-01-11', file: 'transcript_emilydavis.pdf' },
  { id: 5, studentName: 'Rahul Mehta', documentType: 'Passport', status: 'Pending', uploadDate: '2024-01-18', file: 'passport_chrisevans.pdf' },
];

// Stats data
const stats = {
  total: initialDocuments.length,
  approved: initialDocuments.filter(doc => doc.status === 'Approved').length,
  rejected: initialDocuments.filter(doc => doc.status === 'Rejected').length,
  pending: initialDocuments.filter(doc => doc.status === 'Pending').length,
};

const DocumentScanningAdmin = () => {
  const [documents, setDocuments] = useState(initialDocuments);
  const [scanningDocumentId, setScanningDocumentId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDocument, setActiveDocument] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const docsPerPage = 3;
  const totalPages = Math.ceil(documents.length / docsPerPage);

  // Simulate scanning process
  const handleScanDocument = (docId) => {
    setScanningDocumentId(docId);

    setTimeout(() => {
      const updatedDocuments = documents.map((doc) =>
        doc.id === docId
          ? {
              ...doc,
              status: Math.random() > 0.5 ? 'Approved' : 'Rejected', // Randomly approve or reject the document
            }
          : doc
      );
      setDocuments(updatedDocuments);
      setScanningDocumentId(null);
    }, 3000); // Simulate a 3-second scanning process
  };

  // Open modal to view document details
  const handleViewDocument = (doc) => {
    setActiveDocument(doc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveDocument(null);
  };

  // Handle pagination
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Filter documents by search term and document type
  const filteredDocuments = documents
    .filter((doc) => {
      if (filterType === 'All') return true;
      return doc.documentType === filterType;
    })
    .filter((doc) => doc.studentName.toLowerCase().includes(searchTerm.toLowerCase()));

  const displayedDocuments = filteredDocuments.slice((currentPage - 1) * docsPerPage, currentPage * docsPerPage);

  return (
    <Box sx={{ padding: '30px', backgroundColor: '#f7f8fa' }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: '20px', fontWeight: 600 }}>
        Admin - Document Scanning & Verification
      </Typography>

      {/* Stats Section */}
      <Grid container spacing={3} sx={{ marginBottom: '20px' }}>
        <Grid item xs={12} md={3}>
          <Paper elevation={4} sx={{ padding: '20px', textAlign: 'center', borderRadius: '15px', background: 'linear-gradient(to right, #56ccf2, #2f80ed)', color: '#fff' }}>
            <Typography variant="h6">Total Documents</Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>{stats.total}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={4} sx={{ padding: '20px', textAlign: 'center', borderRadius: '15px', background: 'linear-gradient(to right, #43e97b, #38f9d7)', color: '#fff' }}>
            <Typography variant="h6">Approved</Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>{stats.approved}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={4} sx={{ padding: '20px', textAlign: 'center', borderRadius: '15px', background: 'linear-gradient(to right, #ff758c, #ff7eb3)', color: '#fff' }}>
            <Typography variant="h6">Rejected</Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>{stats.rejected}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={4} sx={{ padding: '20px', textAlign: 'center', borderRadius: '15px', background: 'linear-gradient(to right, #fddb92, #d1fdff)', color: '#fff' }}>
            <Typography variant="h6">Pending</Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>{stats.pending}</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Search and Filter */}
      <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            variant="outlined"
            label="Search by Student Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ marginRight: 1 }} />,
            }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            select
            label="Filter by Document Type"
            fullWidth
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Passport">Passport</MenuItem>
            <MenuItem value="ID Card">ID Card</MenuItem>
            <MenuItem value="Transcript">Transcript</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      {/* Document List */}
      <TableContainer component={Paper} sx={{ borderRadius: '15px', overflow: 'hidden' }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell><Typography variant="h6">Student Name</Typography></TableCell>
              <TableCell><Typography variant="h6">Document Type</Typography></TableCell>
              <TableCell><Typography variant="h6">Upload Date</Typography></TableCell>
              <TableCell><Typography variant="h6">Status</Typography></TableCell>
              <TableCell><Typography variant="h6">Actions</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedDocuments.map((doc) => (
              <TableRow key={doc.id} hover>
                <TableCell>{doc.studentName}</TableCell>
                <TableCell>{doc.documentType}</TableCell>
                <TableCell>{doc.uploadDate}</TableCell>
                <TableCell>
                  {doc.status === 'Approved' ? (
                    <Typography component="span" color="green">
                      Approved <CheckCircleOutlineIcon sx={{ color: 'green', ml: 1 }} />
                    </Typography>
                  ) : doc.status === 'Rejected' ? (
                    <Typography component="span" color="red">
                      Rejected <HighlightOffIcon sx={{ color: 'red', ml: 1 }} />
                    </Typography>
                  ) : (
                    <Typography component="span" color="orange">
                      Pending
                    </Typography>
                  )}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    sx={{ mr: 1 }}
                    onClick={() => handleViewDocument(doc)}
                    disabled={scanningDocumentId === doc.id}
                  >
                    View
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleScanDocument(doc.id)}
                    disabled={doc.status !== 'Pending' || scanningDocumentId === doc.id}
                  >
                    {scanningDocumentId === doc.id ? 'Scanning...' : 'Scan'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
      </Box>

      {/* Scanning Progress */}
      {scanningDocumentId && (
        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="h6">Scanning in progress...</Typography>
          <LinearProgress />
        </Box>
      )}

      {/* Modal for Document Details */}
      <Modal open={modalOpen} onClose={handleCloseModal} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '10px',
          }}
        >
          <Typography id="modal-title" variant="h6" gutterBottom>
            Document Preview: {activeDocument?.file}
          </Typography>
          <Typography id="modal-description">
            The document <strong>{activeDocument?.file}</strong> was uploaded by <strong>{activeDocument?.studentName}</strong> for {activeDocument?.documentType}.
          </Typography>
          <Typography sx={{ marginTop: '10px' }}>
            Upload Date: <strong>{activeDocument?.uploadDate}</strong>
          </Typography>
          <Typography sx={{ marginTop: '10px' }}>
            Status: <strong>{activeDocument?.status}</strong>
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default DocumentScanningAdmin;
