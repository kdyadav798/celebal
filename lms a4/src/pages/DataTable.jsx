import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, InputAdornment } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';

// Sample data with Indian names
const rows = [
  { id: 1, name: 'Arjun Sharma', email: 'arjun.sharma@example.com', role: 'Admin', status: 'Active', lastLogin: '2023-06-15' },
  { id: 2, name: 'Priya Patel', email: 'priya.patel@example.com', role: 'User', status: 'Active', lastLogin: '2023-06-14' },
  { id: 3, name: 'Rahul Singh', email: 'rahul.singh@example.com', role: 'User', status: 'Inactive', lastLogin: '2023-05-28' },
  { id: 4, name: 'Neha Gupta', email: 'neha.gupta@example.com', role: 'Editor', status: 'Active', lastLogin: '2023-06-12' },
  { id: 5, name: 'Vikram Malhotra', email: 'vikram.malhotra@example.com', role: 'Admin', status: 'Active', lastLogin: '2023-06-15' },
  { id: 6, name: 'Ananya Desai', email: 'ananya.desai@example.com', role: 'User', status: 'Active', lastLogin: '2023-06-10' },
  { id: 7, name: 'Rajesh Kumar', email: 'rajesh.kumar@example.com', role: 'User', status: 'Inactive', lastLogin: '2023-05-20' },
  { id: 8, name: 'Kavita Reddy', email: 'kavita.reddy@example.com', role: 'Editor', status: 'Active', lastLogin: '2023-06-11' },
  { id: 9, name: 'Sanjay Joshi', email: 'sanjay.joshi@example.com', role: 'User', status: 'Active', lastLogin: '2023-06-13' },
  { id: 10, name: 'Meera Iyer', email: 'meera.iyer@example.com', role: 'User', status: 'Active', lastLogin: '2023-06-09' },
  { id: 11, name: 'Aditya Nair', email: 'aditya.nair@example.com', role: 'Editor', status: 'Active', lastLogin: '2023-06-14' },
  { id: 12, name: 'Pooja Mehta', email: 'pooja.mehta@example.com', role: 'User', status: 'Inactive', lastLogin: '2023-05-30' },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'role', headerName: 'Role', width: 120 },
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 120,
    renderCell: (params) => (
      <Box
        sx={{
          backgroundColor: params.value === 'Active' ? '#e6f7ed' : '#fbe9e7',
          color: params.value === 'Active' ? '#00a86b' : '#d84315',
          borderRadius: '16px',
          padding: '5px 12px',
          display: 'inline-block',
          fontWeight: 'medium',
          fontSize: '0.75rem',
        }}
      >
        {params.value}
      </Box>
    ),
  },
  { field: 'lastLogin', headerName: 'Last Login', width: 150 },
];

const DataTable = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredRows, setFilteredRows] = useState(rows);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);
    
    const filtered = rows.filter((row) => {
      return Object.values(row).some((field) => 
        String(field).toLowerCase().includes(value)
      );
    });
    
    setFilteredRows(filtered);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'medium', mb: 4 }}>
        User Management
      </Typography>
      
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search users..."
          value={searchText}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ maxWidth: 500 }}
        />
      </Box>
      
      <Paper sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: false,
            },
          }}
          sx={{
            '& .MuiDataGrid-cell:hover': {
              cursor: 'pointer',
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default DataTable;