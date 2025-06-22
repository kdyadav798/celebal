import React, { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarColumnsButton,
} from '@mui/x-data-grid';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
} from '@mui/icons-material';

const initialRows = [
  {
    id: 1,
    name: 'Kuldeep',
    email: 'kuldeep@example.com',
    role: 'Admin',
    status: 'Active',
    joinDate: '2023-01-15',
    avatar: 'JD',
  },
  {
    id: 2,
    name: 'Kunal',
    email: 'kunal@example.com',
    role: 'User',
    status: 'Active',
    joinDate: '2023-02-20',
    avatar: 'JS',
  },
  {
    id: 3,
    name: 'Chintu',
    email: 'chintu@example.com',
    role: 'Moderator',
    status: 'Inactive',
    joinDate: '2023-03-10',
    avatar: 'BJ',
  },
  {
    id: 4,
    name: 'Harshit',
    email: 'harshit@example.com',
    role: 'User',
    status: 'Active',
    joinDate: '2023-04-05',
    avatar: 'AB',
  },
  {
    id: 5,
    name: 'Hardik',
    email: 'hardik@example.com',
    role: 'Admin',
    status: 'Active',
    joinDate: '2023-05-12',
    avatar: 'CW',
  },
];

function CustomToolbar({ onAddClick }) {
  return (
    <GridToolbarContainer>
      <Button
        startIcon={<AddIcon />}
        onClick={onAddClick}
        variant="contained"
        size="small"
        sx={{ mr: 1 }}
      >
        Add User
      </Button>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function UserDialog({ open, onClose, user, onSave, mode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'User',
    status: 'Active',
    ...user,
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {mode === 'add' ? 'Add New User' : mode === 'edit' ? 'Edit User' : 'View User'}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            value={formData.name}
            onChange={handleChange('name')}
            fullWidth
            disabled={mode === 'view'}
          />
          <TextField
            label="Email"
            value={formData.email}
            onChange={handleChange('email')}
            fullWidth
            disabled={mode === 'view'}
          />
          <FormControl fullWidth disabled={mode === 'view'}>
            <InputLabel>Role</InputLabel>
            <Select
              value={formData.role}
              onChange={handleChange('role')}
              label="Role"
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Moderator">Moderator</MenuItem>
              <MenuItem value="User">User</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth disabled={mode === 'view'}>
            <InputLabel>Status</InputLabel>
            <Select
              value={formData.status}
              onChange={handleChange('status')}
              label="Status"
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        {mode !== 'view' && (
          <Button onClick={handleSave} variant="contained">
            {mode === 'add' ? 'Add' : 'Save'}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

function Tables() {
  const [rows, setRows] = useState(initialRows);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [dialogMode, setDialogMode] = useState('add');

  const handleAddUser = () => {
    setSelectedUser(null);
    setDialogMode('add');
    setDialogOpen(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setDialogMode('edit');
    setDialogOpen(true);
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setDialogMode('view');
    setDialogOpen(true);
  };

  const handleDeleteUser = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleSaveUser = (userData) => {
    if (dialogMode === 'add') {
      const newUser = {
        ...userData,
        id: Math.max(...rows.map(r => r.id)) + 1,
        joinDate: new Date().toISOString().split('T')[0],
        avatar: userData.name.split(' ').map(n => n[0]).join('').toUpperCase(),
      };
      setRows([...rows, newUser]);
    } else {
      setRows(rows.map(row => row.id === userData.id ? userData : row));
    }
  };

  const columns = useMemo(() => [
    {
      field: 'avatar',
      headerName: '',
      width: 60,
      renderCell: (params) => (
        <Avatar sx={{ width: 32, height: 32, fontSize: '0.875rem' }}>
          {params.value}
        </Avatar>
      ),
      sortable: false,
      filterable: false,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 180,
      editable: false,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 220,
      editable: false,
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === 'Admin' ? 'primary' : params.value === 'Moderator' ? 'secondary' : 'default'}
          size="small"
        />
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === 'Active' ? 'success' : 'error'}
          size="small"
        />
      ),
    },
    {
      field: 'joinDate',
      headerName: 'Join Date',
      width: 120,
      type: 'date',
      valueGetter: (params) => new Date(params.value),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Box>
          <Tooltip title="View">
            <IconButton
              size="small"
              onClick={() => handleViewUser(params.row)}
            >
              <ViewIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton
              size="small"
              onClick={() => handleEditUser(params.row)}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              size="small"
              onClick={() => handleDeleteUser(params.row.id)}
              color="error"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      ),
      sortable: false,
      filterable: false,
    },
  ], [rows]);

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        User Management
      </Typography>
      
      <Paper sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
          components={{
            Toolbar: () => <CustomToolbar onAddClick={handleAddUser} />,
          }}
          sx={{
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
      </Paper>

      <UserDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        user={selectedUser}
        onSave={handleSaveUser}
        mode={dialogMode}
      />
    </Box>
  );
}

export default Tables;