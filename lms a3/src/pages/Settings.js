import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Button,
  TextField,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Palette as PaletteIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  Person as PersonIcon,
  Save as SaveIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
} from '@mui/icons-material';
import { useThemeContext } from '../contexts/ThemeContext';

function Settings() {
  const { themeName, changeTheme, availableThemes } = useThemeContext();
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      sms: false,
      marketing: true,
    },
    privacy: {
      profileVisible: true,
      activityTracking: false,
      dataSharing: false,
    },
    preferences: {
      language: 'en',
      timezone: 'UTC',
      dateFormat: 'MM/DD/YYYY',
      currency: 'USD',
    },
    profile: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      bio: 'Full-stack developer with 5+ years of experience',
    },
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSettingChange = (category, setting) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value,
      },
    }));
  };

  const handleSaveSettings = () => {
    // Here you would typically save to backend
    setSnackbarOpen(true);
  };

  const themeDisplayNames = {
    light: 'Light',
    dark: 'Dark',
    blue: 'Blue Ocean',
    green: 'Nature Green',
    purple: 'Royal Purple',
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Settings & Preferences
      </Typography>

      <Grid container spacing={3}>
        {/* Theme Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              avatar={<PaletteIcon />}
              title="Theme & Appearance"
              subheader="Customize the look and feel"
            />
            <CardContent>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Theme</InputLabel>
                <Select
                  value={themeName}
                  onChange={(e) => changeTheme(e.target.value)}
                  label="Theme"
                >
                  {availableThemes.map((theme) => (
                    <MenuItem key={theme} value={theme}>
                      <Box display="flex" alignItems="center" gap={1}>
                        {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                        {themeDisplayNames[theme] || theme}
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              
              <Typography variant="subtitle2" gutterBottom>
                Theme Preview
              </Typography>
              <Box display="flex" gap={1} mb={2}>
                {availableThemes.map((theme) => (
                  <Chip
                    key={theme}
                    label={themeDisplayNames[theme] || theme}
                    onClick={() => changeTheme(theme)}
                    color={themeName === theme ? 'primary' : 'default'}
                    variant={themeName === theme ? 'filled' : 'outlined'}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Profile Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              avatar={<PersonIcon />}
              title="Profile Information"
              subheader="Update your personal details"
            />
            <CardContent>
              <Box display="flex" alignItems="center" mb={3}>
                <Avatar sx={{ width: 64, height: 64, mr: 2, fontSize: '1.5rem' }}>
                  {settings.profile.name.split(' ').map(n => n[0]).join('')}
                </Avatar>
                <Button variant="outlined" size="small">
                  Change Photo
                </Button>
              </Box>
              
              <TextField
                label="Full Name"
                value={settings.profile.name}
                onChange={handleSettingChange('profile', 'name')}
                fullWidth
                sx={{ mb: 2 }}
              />
              
              <TextField
                label="Email"
                value={settings.profile.email}
                onChange={handleSettingChange('profile', 'email')}
                fullWidth
                sx={{ mb: 2 }}
              />
              
              <TextField
                label="Phone"
                value={settings.profile.phone}
                onChange={handleSettingChange('profile', 'phone')}
                fullWidth
                sx={{ mb: 2 }}
              />
              
              <TextField
                label="Bio"
                value={settings.profile.bio}
                onChange={handleSettingChange('profile', 'bio')}
                fullWidth
                multiline
                rows={3}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Notification Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              avatar={<NotificationsIcon />}
              title="Notifications"
              subheader="Manage your notification preferences"
            />
            <CardContent>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Email Notifications"
                    secondary="Receive updates via email"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      checked={settings.notifications.email}
                      onChange={handleSettingChange('notifications', 'email')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                
                <ListItem>
                  <ListItemText
                    primary="Push Notifications"
                    secondary="Browser push notifications"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      checked={settings.notifications.push}
                      onChange={handleSettingChange('notifications', 'push')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                
                <ListItem>
                  <ListItemText
                    primary="SMS Notifications"
                    secondary="Text message alerts"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      checked={settings.notifications.sms}
                      onChange={handleSettingChange('notifications', 'sms')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                
                <ListItem>
                  <ListItemText
                    primary="Marketing Emails"
                    secondary="Product updates and offers"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      checked={settings.notifications.marketing}
                      onChange={handleSettingChange('notifications', 'marketing')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Privacy Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              avatar={<SecurityIcon />}
              title="Privacy & Security"
              subheader="Control your privacy settings"
            />
            <CardContent>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Profile Visibility"
                    secondary="Make your profile visible to others"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      checked={settings.privacy.profileVisible}
                      onChange={handleSettingChange('privacy', 'profileVisible')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                
                <ListItem>
                  <ListItemText
                    primary="Activity Tracking"
                    secondary="Allow tracking for analytics"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      checked={settings.privacy.activityTracking}
                      onChange={handleSettingChange('privacy', 'activityTracking')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                
                <ListItem>
                  <ListItemText
                    primary="Data Sharing"
                    secondary="Share data with third parties"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      checked={settings.privacy.dataSharing}
                      onChange={handleSettingChange('privacy', 'dataSharing')}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* General Preferences */}
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title="General Preferences"
              subheader="Language, timezone, and format settings"
            />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth>
                    <InputLabel>Language</InputLabel>
                    <Select
                      value={settings.preferences.language}
                      onChange={handleSettingChange('preferences', 'language')}
                      label="Language"
                    >
                      <MenuItem value="en">English</MenuItem>
                      <MenuItem value="es">Español</MenuItem>
                      <MenuItem value="fr">Français</MenuItem>
                      <MenuItem value="de">Deutsch</MenuItem>
                      <MenuItem value="zh">中文</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth>
                    <InputLabel>Timezone</InputLabel>
                    <Select
                      value={settings.preferences.timezone}
                      onChange={handleSettingChange('preferences', 'timezone')}
                      label="Timezone"
                    >
                      <MenuItem value="UTC">UTC</MenuItem>
                      <MenuItem value="EST">Eastern Time</MenuItem>
                      <MenuItem value="PST">Pacific Time</MenuItem>
                      <MenuItem value="GMT">Greenwich Mean Time</MenuItem>
                      <MenuItem value="JST">Japan Standard Time</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth>
                    <InputLabel>Date Format</InputLabel>
                    <Select
                      value={settings.preferences.dateFormat}
                      onChange={handleSettingChange('preferences', 'dateFormat')}
                      label="Date Format"
                    >
                      <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
                      <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
                      <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
                      <MenuItem value="DD-MM-YYYY">DD-MM-YYYY</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth>
                    <InputLabel>Currency</InputLabel>
                    <Select
                      value={settings.preferences.currency}
                      onChange={handleSettingChange('preferences', 'currency')}
                      label="Currency"
                    >
                      <MenuItem value="USD">USD ($)</MenuItem>
                      <MenuItem value="EUR">EUR (€)</MenuItem>
                      <MenuItem value="GBP">GBP (£)</MenuItem>
                      <MenuItem value="JPY">JPY (¥)</MenuItem>
                      <MenuItem value="CAD">CAD (C$)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Save Button */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              size="large"
              startIcon={<SaveIcon />}
              onClick={handleSaveSettings}
            >
              Save All Settings
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity="success" onClose={() => setSnackbarOpen(false)}>
          Settings saved successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Settings;