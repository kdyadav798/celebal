import React, { useState } from 'react';
import { Box, Typography, Paper, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Menu, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// Sample data with Indian names
const initialColumns = {
  'column-1': {
    id: 'column-1',
    title: 'To Do',
    taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
  },
  'column-2': {
    id: 'column-2',
    title: 'In Progress',
    taskIds: ['task-5', 'task-6'],
  },
  'column-3': {
    id: 'column-3',
    title: 'Review',
    taskIds: ['task-7'],
  },
  'column-4': {
    id: 'column-4',
    title: 'Completed',
    taskIds: ['task-8', 'task-9'],
  },
};

const initialTasks = {
  'task-1': { id: 'task-1', title: 'Create lesson plan for Class 10', description: 'Prepare mathematics lesson plan for upcoming week', assignee: 'Priya Sharma', priority: 'High', dueDate: '2023-06-20' },
  'task-2': { id: 'task-2', title: 'Grade science assignments', description: 'Review and grade Class 8 science assignments', assignee: 'Rahul Verma', priority: 'Medium', dueDate: '2023-06-18' },
  'task-3': { id: 'task-3', title: 'Update student attendance records', description: 'Enter attendance data for all classes', assignee: 'Ananya Desai', priority: 'Low', dueDate: '2023-06-17' },
  'task-4': { id: 'task-4', title: 'Prepare exam question papers', description: 'Create final exam papers for Class 12', assignee: 'Vikram Malhotra', priority: 'High', dueDate: '2023-06-25' },
  'task-5': { id: 'task-5', title: 'Organize parent-teacher meeting', description: 'Schedule and prepare for quarterly PTM', assignee: 'Neha Gupta', priority: 'Medium', dueDate: '2023-06-30' },
  'task-6': { id: 'task-6', title: 'Update curriculum documents', description: 'Revise curriculum based on new guidelines', assignee: 'Arjun Singh', priority: 'High', dueDate: '2023-06-22' },
  'task-7': { id: 'task-7', title: 'Review new textbook materials', description: 'Evaluate new textbooks for next academic year', assignee: 'Kavita Reddy', priority: 'Medium', dueDate: '2023-06-28' },
  'task-8': { id: 'task-8', title: 'Submit monthly progress report', description: 'Complete and submit department progress report', assignee: 'Rajesh Kumar', priority: 'High', dueDate: '2023-06-15' },
  'task-9': { id: 'task-9', title: 'Update school website content', description: 'Refresh content on school website', assignee: 'Sanjay Joshi', priority: 'Low', dueDate: '2023-06-10' },
};

const initialColumnOrder = ['column-1', 'column-2', 'column-3', 'column-4'];

const priorityColors = {
  High: '#f44336',
  Medium: '#ff9800',
  Low: '#4caf50',
};

const Kanban = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [tasks, setTasks] = useState(initialTasks);
  const [columnOrder, setColumnOrder] = useState(initialColumnOrder);
  const [openTaskDialog, setOpenTaskDialog] = useState(false);
  const [openColumnDialog, setOpenColumnDialog] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  const [taskFormData, setTaskFormData] = useState({
    title: '',
    description: '',
    assignee: '',
    priority: 'Medium',
    dueDate: '',
    columnId: ''
  });
  
  // Menu state
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [currentColumnId, setCurrentColumnId] = useState(null);
  const [columnMenuAnchorEl, setColumnMenuAnchorEl] = useState(null);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    // If there's no destination or if the item was dropped back to its original position
    if (!destination || 
        (destination.droppableId === source.droppableId && 
         destination.index === source.index)) {
      return;
    }

    // If dragging columns
    if (type === 'column') {
      const newColumnOrder = Array.from(columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setColumnOrder(newColumnOrder);
      return;
    }

    // If dragging tasks
    const startColumn = columns[source.droppableId];
    const finishColumn = columns[destination.droppableId];

    // If moving within the same column
    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
      return;
    }

    // Moving from one column to another
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinishColumn = {
      ...finishColumn,
      taskIds: finishTaskIds,
    };

    setColumns({
      ...columns,
      [newStartColumn.id]: newStartColumn,
      [newFinishColumn.id]: newFinishColumn,
    });
  };

  const handleOpenTaskMenu = (event, taskId, columnId) => {
    setMenuAnchorEl(event.currentTarget);
    setCurrentTaskId(taskId);
    setCurrentColumnId(columnId);
  };

  const handleCloseTaskMenu = () => {
    setMenuAnchorEl(null);
    setCurrentTaskId(null);
  };

  const handleOpenColumnMenu = (event, columnId) => {
    setColumnMenuAnchorEl(event.currentTarget);
    setCurrentColumnId(columnId);
  };

  const handleCloseColumnMenu = () => {
    setColumnMenuAnchorEl(null);
    setCurrentColumnId(null);
  };

  const handleAddTask = (columnId) => {
    setTaskFormData({
      title: '',
      description: '',
      assignee: '',
      priority: 'Medium',
      dueDate: '',
      columnId: columnId
    });
    setCurrentTask(null);
    setOpenTaskDialog(true);
  };

  const handleEditTask = () => {
    const task = tasks[currentTaskId];
    setTaskFormData({
      ...task,
      columnId: currentColumnId
    });
    setCurrentTask(task);
    setOpenTaskDialog(true);
    handleCloseTaskMenu();
  };

  const handleDeleteTask = () => {
    // Create a copy of tasks without the deleted task
    const newTasks = { ...tasks };
    delete newTasks[currentTaskId];
    
    // Remove the task from its column
    const column = columns[currentColumnId];
    const newTaskIds = column.taskIds.filter(id => id !== currentTaskId);
    
    const newColumn = {
      ...column,
      taskIds: newTaskIds
    };
    
    setColumns({
      ...columns,
      [currentColumnId]: newColumn
    });
    
    setTasks(newTasks);
    handleCloseTaskMenu();
  };

  const handleTaskFormChange = (e) => {
    const { name, value } = e.target;
    setTaskFormData({
      ...taskFormData,
      [name]: value
    });
  };

  const handleSaveTask = () => {
    if (!taskFormData.title) return;
    
    if (currentTask) {
      // Update existing task
      setTasks({
        ...tasks,
        [currentTask.id]: {
          ...currentTask,
          title: taskFormData.title,
          description: taskFormData.description,
          assignee: taskFormData.assignee,
          priority: taskFormData.priority,
          dueDate: taskFormData.dueDate
        }
      });
    } else {
      // Create new task
      const newTaskId = `task-${Date.now()}`;
      const newTask = {
        id: newTaskId,
        title: taskFormData.title,
        description: taskFormData.description,
        assignee: taskFormData.assignee,
        priority: taskFormData.priority,
        dueDate: taskFormData.dueDate
      };
      
      // Add task to tasks object
      setTasks({
        ...tasks,
        [newTaskId]: newTask
      });
      
      // Add task to column
      const column = columns[taskFormData.columnId];
      const newTaskIds = [...column.taskIds, newTaskId];
      
      setColumns({
        ...columns,
        [taskFormData.columnId]: {
          ...column,
          taskIds: newTaskIds
        }
      });
    }
    
    setOpenTaskDialog(false);
  };

  const handleAddColumn = () => {
    setNewColumnTitle('');
    setOpenColumnDialog(true);
  };

  const handleSaveColumn = () => {
    if (!newColumnTitle) return;
    
    const newColumnId = `column-${Date.now()}`;
    const newColumn = {
      id: newColumnId,
      title: newColumnTitle,
      taskIds: []
    };
    
    setColumns({
      ...columns,
      [newColumnId]: newColumn
    });
    
    setColumnOrder([...columnOrder, newColumnId]);
    setOpenColumnDialog(false);
  };

  const handleEditColumn = () => {
    setNewColumnTitle(columns[currentColumnId].title);
    setOpenColumnDialog(true);
    handleCloseColumnMenu();
  };

  const handleUpdateColumn = () => {
    if (!newColumnTitle) return;
    
    setColumns({
      ...columns,
      [currentColumnId]: {
        ...columns[currentColumnId],
        title: newColumnTitle
      }
    });
    
    setOpenColumnDialog(false);
  };

  const handleDeleteColumn = () => {
    // Get all tasks in this column
    const column = columns[currentColumnId];
    const taskIdsToDelete = column.taskIds;
    
    // Create a copy of tasks without the deleted tasks
    const newTasks = { ...tasks };
    taskIdsToDelete.forEach(taskId => {
      delete newTasks[taskId];
    });
    
    // Create a copy of columns without the deleted column
    const newColumns = { ...columns };
    delete newColumns[currentColumnId];
    
    // Remove column from columnOrder
    const newColumnOrder = columnOrder.filter(id => id !== currentColumnId);
    
    setTasks(newTasks);
    setColumns(newColumns);
    setColumnOrder(newColumnOrder);
    handleCloseColumnMenu();
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'medium' }}>
          Task Board
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          onClick={handleAddColumn}
        >
          Add Column
        </Button>
      </Box>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {(provided) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{ display: 'flex', overflowX: 'auto', pb: 2, minHeight: 'calc(100vh - 180px)' }}
            >
              {columnOrder.map((columnId, index) => {
                const column = columns[columnId];
                const columnTasks = column.taskIds.map(taskId => tasks[taskId]);
                
                return (
                  <Draggable key={column.id} draggableId={column.id} index={index}>
                    {(provided) => (
                      <Paper
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        sx={{ 
                          width: 300, 
                          minHeight: 500, 
                          mx: 1, 
                          display: 'flex', 
                          flexDirection: 'column',
                          borderRadius: 2,
                        }}
                      >
                        <Box
                          {...provided.dragHandleProps}
                          sx={{ 
                            p: 2, 
                            backgroundColor: 'primary.main', 
                            color: 'white',
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <Typography variant="h6">{column.title}</Typography>
                          <Box>
                            <IconButton 
                              size="small" 
                              sx={{ color: 'white' }}
                              onClick={(e) => handleOpenColumnMenu(e, column.id)}
                            >
                              <MoreVertIcon />
                            </IconButton>
                          </Box>
                        </Box>
                        
                        <Droppable droppableId={column.id} type="task">
                          {(provided, snapshot) => (
                            <Box
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              sx={{ 
                                p: 2, 
                                flexGrow: 1,
                                backgroundColor: snapshot.isDraggingOver ? 'action.hover' : 'background.paper',
                                transition: 'background-color 0.2s ease',
                                minHeight: 100
                              }}
                            >
                              {columnTasks.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                  {(provided, snapshot) => (
                                    <Paper
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                      elevation={snapshot.isDragging ? 6 : 1}
                                      sx={{ 
                                        p: 2, 
                                        mb: 2, 
                                        borderRadius: 1,
                                        borderLeft: `4px solid ${priorityColors[task.priority]}`,
                                        backgroundColor: snapshot.isDragging ? 'background.default' : 'white',
                                        position: 'relative'
                                      }}
                                    >
                                      <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                                        <IconButton 
                                          size="small"
                                          onClick={(e) => handleOpenTaskMenu(e, task.id, column.id)}
                                        >
                                          <MoreVertIcon fontSize="small" />
                                        </IconButton>
                                      </Box>
                                      
                                      <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 1, pr: 4 }}>
                                        {task.title}
                                      </Typography>
                                      
                                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        {task.description}
                                      </Typography>
                                      
                                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                          <Box
                                            sx={{
                                              backgroundColor: priorityColors[task.priority],
                                              color: 'white',
                                              borderRadius: '4px',
                                              px: 1,
                                              py: 0.5,
                                              fontSize: '0.75rem',
                                              fontWeight: 'medium',
                                            }}
                                          >
                                            {task.priority}
                                          </Box>
                                        </Box>
                                        
                                        <Typography variant="caption" color="text.secondary">
                                          Due: {task.dueDate}
                                        </Typography>
                                      </Box>
                                      
                                      <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
                                        Assignee: {task.assignee}
                                      </Typography>
                                    </Paper>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </Box>
                          )}
                        </Droppable>
                        
                        <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                          <Button 
                            fullWidth 
                            startIcon={<AddIcon />}
                            onClick={() => handleAddTask(column.id)}
                          >
                            Add Task
                          </Button>
                        </Box>
                      </Paper>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>

      {/* Task Menu */}
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleCloseTaskMenu}
      >
        <MenuItem onClick={handleEditTask}>
          <EditIcon fontSize="small" sx={{ mr: 1 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDeleteTask}>
          <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
          Delete
        </MenuItem>
      </Menu>

      {/* Column Menu */}
      <Menu
        anchorEl={columnMenuAnchorEl}
        open={Boolean(columnMenuAnchorEl)}
        onClose={handleCloseColumnMenu}
      >
        <MenuItem onClick={handleEditColumn}>
          <EditIcon fontSize="small" sx={{ mr: 1 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDeleteColumn}>
          <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
          Delete
        </MenuItem>
      </Menu>

      {/* Task Dialog */}
      <Dialog open={openTaskDialog} onClose={() => setOpenTaskDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {currentTask ? 'Edit Task' : 'Add New Task'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label="Task Title"
              name="title"
              value={taskFormData.title}
              onChange={handleTaskFormChange}
              fullWidth
              required
            />
            
            <TextField
              label="Description"
              name="description"
              value={taskFormData.description}
              onChange={handleTaskFormChange}
              fullWidth
              multiline
              rows={3}
            />
            
            <TextField
              label="Assignee"
              name="assignee"
              value={taskFormData.assignee}
              onChange={handleTaskFormChange}
              fullWidth
            />
            
            <FormControl fullWidth>
              <InputLabel>Priority</InputLabel>
              <Select
                name="priority"
                value={taskFormData.priority}
                onChange={handleTaskFormChange}
                label="Priority"
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </Select>
            </FormControl>
            
            <TextField
              label="Due Date"
              name="dueDate"
              type="date"
              value={taskFormData.dueDate}
              onChange={handleTaskFormChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenTaskDialog(false)}>Cancel</Button>
          <Button onClick={handleSaveTask} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Column Dialog */}
      <Dialog open={openColumnDialog} onClose={() => setOpenColumnDialog(false)}>
        <DialogTitle>
          {currentColumnId && columns[currentColumnId] ? 'Edit Column' : 'Add New Column'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Column Title"
            fullWidth
            value={newColumnTitle}
            onChange={(e) => setNewColumnTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenColumnDialog(false)}>Cancel</Button>
          <Button 
            onClick={currentColumnId && columns[currentColumnId] ? handleUpdateColumn : handleSaveColumn} 
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Kanban;