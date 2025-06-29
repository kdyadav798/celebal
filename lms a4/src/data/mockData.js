// Mock data with Indian names for the dashboard

export const userData = [
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

export const performanceData = [
  { name: 'Arjun', score: 85 },
  { name: 'Priya', score: 92 },
  { name: 'Rahul', score: 78 },
  { name: 'Neha', score: 88 },
  { name: 'Vikram', score: 95 },
  { name: 'Ananya', score: 82 },
];

export const revenueData = [
  { month: 'Jan', amount: 45000 },
  { month: 'Feb', amount: 52000 },
  { month: 'Mar', amount: 48000 },
  { month: 'Apr', amount: 61000 },
  { month: 'May', amount: 55000 },
  { month: 'Jun', amount: 67000 },
];

export const calendarEvents = [
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

export const kanbanTasks = {
  tasks: {
    'task-1': { id: 'task-1', title: 'Create lesson plan for Class 10', description: 'Prepare mathematics lesson plan for upcoming week', assignee: 'Priya Sharma', priority: 'High', dueDate: '2023-06-20' },
    'task-2': { id: 'task-2', title: 'Grade science assignments', description: 'Review and grade Class 8 science assignments', assignee: 'Rahul Verma', priority: 'Medium', dueDate: '2023-06-18' },
    'task-3': { id: 'task-3', title: 'Update student attendance records', description: 'Enter attendance data for all classes', assignee: 'Ananya Desai', priority: 'Low', dueDate: '2023-06-17' },
    'task-4': { id: 'task-4', title: 'Prepare exam question papers', description: 'Create final exam papers for Class 12', assignee: 'Vikram Malhotra', priority: 'High', dueDate: '2023-06-25' },
    'task-5': { id: 'task-5', title: 'Organize parent-teacher meeting', description: 'Schedule and prepare for quarterly PTM', assignee: 'Neha Gupta', priority: 'Medium', dueDate: '2023-06-30' },
    'task-6': { id: 'task-6', title: 'Update curriculum documents', description: 'Revise curriculum based on new guidelines', assignee: 'Arjun Singh', priority: 'High', dueDate: '2023-06-22' },
    'task-7': { id: 'task-7', title: 'Review new textbook materials', description: 'Evaluate new textbooks for next academic year', assignee: 'Kavita Reddy', priority: 'Medium', dueDate: '2023-06-28' },
    'task-8': { id: 'task-8', title: 'Submit monthly progress report', description: 'Complete and submit department progress report', assignee: 'Rajesh Kumar', priority: 'High', dueDate: '2023-06-15' },
    'task-9': { id: 'task-9', title: 'Update school website content', description: 'Refresh content on school website', assignee: 'Sanjay Joshi', priority: 'Low', dueDate: '2023-06-10' },
  },
  columns: {
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
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

export const statCards = [
  { title: 'Total Students', value: '1,254', subtitle: '+12% from last month' },
  { title: 'Revenue', value: '₹3.2L', subtitle: '+8% from last month' },
  { title: 'Courses', value: '42', subtitle: '+3 new this month' },
  { title: 'Completion Rate', value: '78%', subtitle: '+5% from last month' },
];