import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
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
  useTheme,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialData = {
  tasks: {
    'task-1': {
      id: 'task-1',
      title: 'Design Homepage',
      description: 'Create wireframes and mockups for the new homepage',
      priority: 'high',
      assignee: 'John Doe',
      dueDate: '2024-01-20',
    },
    'task-2': {
      id: 'task-2',
      title: 'API Integration',
      description: 'Integrate payment gateway API',
      priority: 'medium',
      assignee: 'Jane Smith',
      dueDate: '2024-01-25',
    },
    'task-3': {
      id: 'task-3',
      title: 'User Testing',
      description: 'Conduct usability testing with 10 users',
      priority: 'low',
      assignee: 'Bob Johnson',
      dueDate: '2024-01-30',
    },
    'task-4': {
      id: 'task-4',
      title: 'Database Optimization',
      description: 'Optimize database queries for better performance',
      priority: 'high',
      assignee: 'Alice Brown',
      dueDate: '2024-01-22',
    },
    'task-5': {
      id: 'task-5',
      title: 'Mobile Responsive',
      description: 'Make the application mobile responsive',
      priority: 'medium',
      assignee: 'Charlie Wilson',
      dueDate: '2024-01-28',
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-3'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Review',
      taskIds: ['task-4'],
    },
    'column-4': {
      id: 'column-4',
      title: 'Done',
      taskIds: ['task-5'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

const priorityColors = {
  high: '#f44336',
  medium: '#ff9800',
  low: '#4caf50',
};

function TaskCard({ task, index }) {
  const theme = useTheme();
  
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{
            mb: 1,
            cursor: 'pointer',
            transform: snapshot.isDragging ? 'rotate(5deg)' : 'none',
            boxShadow: snapshot.isDragging ? theme.shadows[8] : theme.shadows[1],
            '&:hover': {
              boxShadow: theme.shadows[4],
            },
          }}
        >
          <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
            <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
              <Typography variant="subtitle1" fontWeight="bold">
                {task.title}
              </Typography>
              <Chip
                label={task.priority}
                size="small"
                sx={{
                  backgroundColor: priorityColors[task.priority],
                  color: 'white',
                  fontSize: '0.7rem',
                }}
              />
            </Box>
            <Typography variant="body2" color="textSecondary" mb={2}>
              {task.description}
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" alignItems="center">
                <Avatar sx={{ width: 24, height: 24, mr: 1, fontSize: '0.75rem' }}>
                  {task.assignee.split(' ').map(n => n[0]).join('')}
                </Avatar>
                <Typography variant="caption" color="textSecondary">
                  {task.assignee}
                </Typography>
              </Box>
              <Typography variant="caption" color="textSecondary">
                {new Date(task.dueDate).toLocaleDateString()}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
}

function Column({ column, tasks }) {
  const theme = useTheme();
  
  return (
    <Paper sx={{ p: 2, minHeight: 500, width: 300 }}>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        {column.title}
        <Chip
          label={tasks.length}
          size="small"
          sx={{ ml: 1, backgroundColor: theme.palette.primary.main, color: 'white' }}
        />
      </Typography>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{
              minHeight: 400,
              backgroundColor: snapshot.isDraggingOver ? theme.palette.action.hover : 'transparent',
              borderRadius: 1,
              p: 1,
              transition: 'background-color 0.2s ease',
            }}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Paper>
  );
}

function TaskDialog({ open, onClose, task, onSave, mode }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    assignee: '',
    dueDate: new Date().toISOString().split('T')[0],
    ...task,
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
        {mode === 'add' ? 'Add New Task' : 'Edit Task'}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Title"
            value={formData.title}
            onChange={handleChange('title')}
            fullWidth
          />
          <TextField
            label="Description"
            value={formData.description}
            onChange={handleChange('description')}
            fullWidth
            multiline
            rows={3}
          />
          <FormControl fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select
              value={formData.priority}
              onChange={handleChange('priority')}
              label="Priority"
            >
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="low">Low</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Assignee"
            value={formData.assignee}
            onChange={handleChange('assignee')}
            fullWidth
          />
          <TextField
            label="Due Date"
            type="date"
            value={formData.dueDate}
            onChange={handleChange('dueDate')}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">
          {mode === 'add' ? 'Add' : 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function Kanban() {
  const [data, setData] = useState(initialData);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [dialogMode, setDialogMode] = useState('add');

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newData);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setData(newData);
  };

  const handleAddTask = () => {
    setSelectedTask(null);
    setDialogMode('add');
    setDialogOpen(true);
  };

  const handleSaveTask = (taskData) => {
    if (dialogMode === 'add') {
      const newTaskId = `task-${Date.now()}`;
      const newTask = {
        ...taskData,
        id: newTaskId,
      };
      
      const newData = {
        ...data,
        tasks: {
          ...data.tasks,
          [newTaskId]: newTask,
        },
        columns: {
          ...data.columns,
          'column-1': {
            ...data.columns['column-1'],
            taskIds: [...data.columns['column-1'].taskIds, newTaskId],
          },
        },
      };
      
      setData(newData);
    }
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Project Kanban Board
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddTask}
        >
          Add Task
        </Button>
      </Box>

      <DragDropContext onDragEnd={onDragEnd}>
        <Box display="flex" gap={2} overflow="auto" pb={2}>
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

            return (
              <Column key={column.id} column={column} tasks={tasks} />
            );
          })}
        </Box>
      </DragDropContext>

      <TaskDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        task={selectedTask}
        onSave={handleSaveTask}
        mode={dialogMode}
      />
    </Box>
  );
}

export default Kanban;