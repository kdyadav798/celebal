import React, { useState, useCallback } from 'react';
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
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme,
} from '@mui/material';
import {
  Add as AddIcon,
  Event as EventIcon,
  Today as TodayIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const initialEvents = [
  {
    id: 1,
    title: 'Team Meeting',
    start: new Date(2024, 0, 15, 10, 0),
    end: new Date(2024, 0, 15, 11, 0),
    type: 'meeting',
    description: 'Weekly team sync meeting',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: new Date(2024, 0, 20, 9, 0),
    end: new Date(2024, 0, 20, 17, 0),
    type: 'deadline',
    description: 'Final submission for Q1 project',
  },
  {
    id: 3,
    title: 'Client Presentation',
    start: new Date(2024, 0, 25, 14, 0),
    end: new Date(2024, 0, 25, 15, 30),
    type: 'presentation',
    description: 'Quarterly review with client',
  },
  {
    id: 4,
    title: 'Training Session',
    start: new Date(2024, 0, 18, 13, 0),
    end: new Date(2024, 0, 18, 16, 0),
    type: 'training',
    description: 'React advanced concepts training',
  },
];

const eventTypes = {
  meeting: { color: '#1976d2', label: 'Meeting' },
  deadline: { color: '#d32f2f', label: 'Deadline' },
  presentation: { color: '#388e3c', label: 'Presentation' },
  training: { color: '#f57c00', label: 'Training' },
  other: { color: '#7b1fa2', label: 'Other' },
};

function EventDialog({ open, onClose, event, onSave, onDelete, mode }) {
  const [formData, setFormData] = useState({
    title: '',
    start: new Date(),
    end: new Date(),
    type: 'meeting',
    description: '',
    ...event,
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleDateChange = (field) => (event) => {
    setFormData({ ...formData, [field]: new Date(event.target.value) });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleDelete = () => {
    onDelete(formData.id);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {mode === 'add' ? 'Add New Event' : mode === 'edit' ? 'Edit Event' : 'Event Details'}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Title"
            value={formData.title}
            onChange={handleChange('title')}
            fullWidth
            disabled={mode === 'view'}
          />
          <TextField
            label="Description"
            value={formData.description}
            onChange={handleChange('description')}
            fullWidth
            multiline
            rows={3}
            disabled={mode === 'view'}
          />
          <FormControl fullWidth disabled={mode === 'view'}>
            <InputLabel>Type</InputLabel>
            <Select
              value={formData.type}
              onChange={handleChange('type')}
              label="Type"
            >
              {Object.entries(eventTypes).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                  <Chip
                    label={value.label}
                    size="small"
                    sx={{ backgroundColor: value.color, color: 'white' }}
                  />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Start Date & Time"
            type="datetime-local"
            value={moment(formData.start).format('YYYY-MM-DDTHH:mm')}
            onChange={handleDateChange('start')}
            fullWidth
            disabled={mode === 'view'}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="End Date & Time"
            type="datetime-local"
            value={moment(formData.end).format('YYYY-MM-DDTHH:mm')}
            onChange={handleDateChange('end')}
            fullWidth
            disabled={mode === 'view'}
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        {mode === 'edit' && (
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        )}
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

function CalendarPage() {
  const theme = useTheme();
  const [events, setEvents] = useState(initialEvents);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [dialogMode, setDialogMode] = useState('add');
  const [view, setView] = useState('month');
  const [date, setDate] = useState(new Date());

  const handleSelectSlot = useCallback(({ start, end }) => {
    setSelectedEvent({ start, end });
    setDialogMode('add');
    setDialogOpen(true);
  }, []);

  const handleSelectEvent = useCallback((event) => {
    setSelectedEvent(event);
    setDialogMode('edit');
    setDialogOpen(true);
  }, []);

  const handleSaveEvent = (eventData) => {
    if (dialogMode === 'add') {
      const newEvent = {
        ...eventData,
        id: Math.max(...events.map(e => e.id)) + 1,
      };
      setEvents([...events, newEvent]);
    } else {
      setEvents(events.map(event => event.id === eventData.id ? eventData : event));
    }
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const eventStyleGetter = (event) => {
    const backgroundColor = eventTypes[event.type]?.color || '#1976d2';
    return {
      style: {
        backgroundColor,
        borderRadius: '4px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block',
      },
    };
  };

  const upcomingEvents = events
    .filter(event => moment(event.start).isAfter(moment()))
    .sort((a, b) => moment(a.start).diff(moment(b.start)))
    .slice(0, 5);

  const todayEvents = events.filter(event => 
    moment(event.start).isSame(moment(), 'day')
  );

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Calendar & Events
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setSelectedEvent(null);
            setDialogMode('add');
            setDialogOpen(true);
          }}
        >
          Add Event
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={9}>
          <Paper sx={{ p: 2, height: 600 }}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '100%' }}
              onSelectEvent={handleSelectEvent}
              onSelectSlot={handleSelectSlot}
              selectable
              view={view}
              onView={setView}
              date={date}
              onNavigate={setDate}
              eventPropGetter={eventStyleGetter}
              popup
              views={['month', 'week', 'day', 'agenda']}
            />
          </Paper>
        </Grid>
        
        <Grid item xs={12} lg={3}>
          <Grid container spacing={2}>
            {/* Today's Events */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <TodayIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                    <Typography variant="h6">Today's Events</Typography>
                  </Box>
                  {todayEvents.length > 0 ? (
                    <List dense>
                      {todayEvents.map((event) => (
                        <ListItem key={event.id} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <EventIcon sx={{ color: eventTypes[event.type]?.color }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={event.title}
                            secondary={moment(event.start).format('HH:mm')}
                          />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography color="textSecondary">No events today</Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
            
            {/* Upcoming Events */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <ScheduleIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
                    <Typography variant="h6">Upcoming Events</Typography>
                  </Box>
                  {upcomingEvents.length > 0 ? (
                    <List dense>
                      {upcomingEvents.map((event) => (
                        <ListItem key={event.id} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <EventIcon sx={{ color: eventTypes[event.type]?.color }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={event.title}
                            secondary={moment(event.start).format('MMM DD, HH:mm')}
                          />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography color="textSecondary">No upcoming events</Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
            
            {/* Event Types Legend */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" mb={2}>Event Types</Typography>
                  <Box display="flex" flexDirection="column" gap={1}>
                    {Object.entries(eventTypes).map(([key, value]) => (
                      <Chip
                        key={key}
                        label={value.label}
                        size="small"
                        sx={{
                          backgroundColor: value.color,
                          color: 'white',
                          justifyContent: 'flex-start',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <EventDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        event={selectedEvent}
        onSave={handleSaveEvent}
        onDelete={handleDeleteEvent}
        mode={dialogMode}
      />
    </Box>
  );
}

export default CalendarPage;