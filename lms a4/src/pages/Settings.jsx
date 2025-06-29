import React from 'react';
import { Box, Typography, Paper, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Divider, useTheme } from '@mui/material';
import { useThemeContext } from '../theme/ThemeProvider';

const Settings = () => {
  const theme = useTheme();
  const { currentTheme, setTheme } = useThemeContext();

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const ThemePreview = ({ themeName, color, selected }) => (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        cursor: 'pointer',
        border: selected ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
        '&:hover': {
          boxShadow: 6,
        },
      }}
      onClick={() => setTheme(themeName)}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Radio
          checked={selected}
          onChange={handleThemeChange}
          value={themeName}
          name="theme-radio"
          sx={{ p: 0.5, mr: 1 }}
        />
        <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
          {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
        </Typography>
      </Box>
      <Box
        sx={{
          height: 100,
          backgroundColor: color,
          borderRadius: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: themeName === 'dark' ? 'white' : 'inherit',
        }}
      >
        <Typography variant="body2">{themeName.charAt(0).toUpperCase() + themeName.slice(1)} Theme</Typography>
      </Box>
    </Paper>
  );

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'medium', mb: 4 }}>
        Settings
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Theme Settings
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <FormControl component="fieldset">
          <FormLabel component="legend" sx={{ mb: 2 }}>
            Choose Theme
          </FormLabel>
          <RadioGroup
            aria-label="theme"
            name="theme-radio-group"
            value={currentTheme}
            onChange={handleThemeChange}
            sx={{ display: 'none' }} // Hide the actual radio group as we're using custom UI
          >
            <FormControlLabel value="light" control={<Radio />} label="Light" />
            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
            <FormControlLabel value="indigo" control={<Radio />} label="Indigo" />
            <FormControlLabel value="teal" control={<Radio />} label="Teal" />
          </RadioGroup>
        </FormControl>

        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6} md={3}>
            <ThemePreview themeName="light" color="#f5f5f5" selected={currentTheme === 'light'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ThemePreview themeName="dark" color="#121212" selected={currentTheme === 'dark'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ThemePreview themeName="indigo" color="#3f51b5" selected={currentTheme === 'indigo'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ThemePreview themeName="teal" color="#009688" selected={currentTheme === 'teal'} />
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          About
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'medium' }}>
            Admin Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Version 1.0.0
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'medium' }}>
            Description
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A comprehensive admin dashboard with customizable themes, data tables, charts, calendar, and Kanban board.
            Built with React and Material-UI for a responsive and modern user interface.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Settings;