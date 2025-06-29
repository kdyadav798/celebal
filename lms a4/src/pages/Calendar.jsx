import React, { useState } from 'react';
import { Box, Typography, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import AddIcon from '@mui/icons-material/Add';

// Sample events with Indian names and contexts
const initialEvents = [
  {
    id: '1',
    title: 'Mathematics Exam',
    start: '2023-06-15T10:00:00',
    end: '2023-06-15T12:00:00',
    backgroundColor: '#4caf50',
    borderColor: '#4caf50',
    extendedProps: {
      description: 'Final examination for Class 10 students',
      location: 'Room 101',
      instructor: 'Dr. Sharma'
    }
  },
  {
    id: '2',
    title: 'Science Workshop',
    start: '2023-06-17T14:00:00',
    end: '2023-06-17T16:30:00',
    backgroundColor: '#2196f3',
    borderColor: '#2196f3',
    extendedProps: {
      description: 'Hands-on workshop on physics experiments',
      location: 'Science Lab',
      instructor: 'Prof. Gupta'
    }
  },
  {
    id: '3',
    title: 'Parent-Teacher Meeting',
    start: '2023-06-20T09:00:00',
    end: '2023-06-20T17:00:00',
    backgroundColor: '#ff9800',
    borderColor: '#ff9800',
    extendedProps: {
      description: 'Quarterly meeting with parents',
      location: 'Main Hall',
      instructor: 'All Faculty'
    }
  },
  {
    id: '4',
    title: 'Computer Science Project',
    start: '2023-06-22T13:00:00',
    end: '2023-06-22T15:00:00',
    backgroundColor: '#9c27b0',
    borderColor: '#9c27b0',
    extendedProps: {
      description: 'Final project presentations',
      location: 'Computer Lab',
      instructor: 'Mrs. Desai'
    }
  },
  {
    id: '5',
    title: 'Annual Sports Day',
    start: '2023-06-25',
    end: '2023-06-26',
    allDay: true,
    backgroundColor: '#f44336',
    borderColor: '#f44336',
    extendedProps: {
      description: 'Annual inter-house sports competition',
      location: 'School Grounds',
      instructor: 'Mr. Singh (Sports Director)'
    }
  }
];

const eventColors = [
  { name: 'Green', value: '#4caf50' },
  { name: 'Blue', value: '#2196f3' },
  { name: 'Orange', value: '#ff9800' },
  { name: 'Purple', value: '#9c27b0' },
  { name: 'Red', value: '#f44336' }
];

const Calendar = () => {
  const [events, setEvents] = useState(initialEvents);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventDetails, setEventDetails] = useState({
    title: '',
    start: '',
    end: '',
    allDay: false,
    backgroundColor: '#4caf50',
    borderColor: '#4caf50',
    extendedProps: {
      description: '',
      location: '',
      instructor: ''
    }
  });

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    const event = clickInfo.event;
    setEventDetails({
      id: event.id,
      title: event.title,
      start: event.startStr,
      end: event.endStr,
      allDay: event.allDay,
      backgroundColor: event.backgroundColor,
      borderColor: event.backgroundColor,
      extendedProps: {
        description: event.extendedProps.description || '',
        location: event.extendedProps.location || '',
        instructor: event.extendedProps.instructor || ''
      }
    });
    setOpenDialog(true);
  };

  const handleDateSelect = (selectInfo) => {
    setSelectedEvent(null);
    setEventDetails({
      title: '',
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
      backgroundColor: '#4caf50',
      borderColor: '#4caf50',
      extendedProps: {
        description: '',
        location: '',
        instructor: ''
      }
    });
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedEvent(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setEventDetails({
        ...eventDetails,
        [parent]: {
          ...eventDetails[parent],
          [child]: value
        }
      });
    } else if (name === 'backgroundColor') {
      setEventDetails({
        ...eventDetails,
        backgroundColor: value,
        borderColor: value
      });
    } else {
      setEventDetails({
        ...eventDetails,
        [name]: value
      });
    }
  };

  const handleSaveEvent = () => {
    if (selectedEvent) {
      // Update existing event
      setEvents(events.map(event => 
        event.id === eventDetails.id ? eventDetails : event
      ));
    } else {
      // Add new event
      const newEvent = {
        ...eventDetails,
        id: String(Date.now())
      };
      setEvents([...events, newEvent]);
    }
    setOpenDialog(false);
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setEvents(events.filter(event => event.id !== eventDetails.id));
    }
    setOpenDialog(false);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'medium' }}>
          Academic Calendar
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          onClick={() => {
            setSelectedEvent(null);
            setEventDetails({
              title: '',
              start: new Date().toISOString(),
              end: new Date(Date.now() + 3600000).toISOString(),
              allDay: false,
              backgroundColor: '#4caf50',
              borderColor: '#4caf50',
              extendedProps: {
                description: '',
                location: '',
                instructor: ''
              }
            });
            setOpenDialog(true);
          }}
        >
          Add Event
        </Button>
      </Box>

      <Paper sx={{ p: 2, height: 'calc(100vh - 180px)' }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          events={events}
          select={handleDateSelect}
          eventClick={handleEventClick}
          height="100%"
        />
      </Paper>

      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {selectedEvent ? 'Edit Event' : 'Add New Event'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label="Event Title"
              name="title"
              value={eventDetails.title}
              onChange={handleInputChange}
              fullWidth
              required
            />

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Start Date & Time"
                name="start"
                type="datetime-local"
                value={eventDetails.start ? eventDetails.start.slice(0, 16) : ''}
                onChange={handleInputChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                label="End Date & Time"
                name="end"
                type="datetime-local"
                value={eventDetails.end ? eventDetails.end.slice(0, 16) : ''}
                onChange={handleInputChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <FormControl fullWidth>
              <InputLabel>Event Color</InputLabel>
              <Select
                name="backgroundColor"
                value={eventDetails.backgroundColor}
                onChange={handleInputChange}
                label="Event Color"
              >
                {eventColors.map((color) => (
                  <MenuItem key={color.value} value={color.value}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box 
                        sx={{ 
                          width: 20, 
                          height: 20, 
                          borderRadius: '50%', 
                          backgroundColor: color.value 
                        }} 
                      />
                      {color.name}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Description"
              name="extendedProps.description"
              value={eventDetails.extendedProps.description}
              onChange={handleInputChange}
              fullWidth
              multiline
              rows={3}
            />

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Location"
                name="extendedProps.location"
                value={eventDetails.extendedProps.location}
                onChange={handleInputChange}
                fullWidth
              />

              <TextField
                label="Instructor"
                name="extendedProps.instructor"
                value={eventDetails.extendedProps.instructor}
                onChange={handleInputChange}
                fullWidth
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          {selectedEvent && (
            <Button onClick={handleDeleteEvent} color="error">
              Delete
            </Button>
          )}
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleSaveEvent} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calendar;