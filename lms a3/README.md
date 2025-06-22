# React Admin Dashboard

A modern, responsive admin dashboard built with React, Material-UI, and various interactive components including customizable themes, data tables, charts, calendar, and Kanban board.

## Features

### 🎨 **Customizable Themes**
- Light and Dark mode
- Multiple color schemes (Blue Ocean, Nature Green, Royal Purple)
- Persistent theme selection
- Smooth theme transitions

### 📊 **Interactive Charts**
- Line charts for trend analysis
- Bar charts for comparative data
- Pie charts for category breakdown
- Area charts for filled data visualization
- Radar charts for performance metrics
- Scatter plots for correlation analysis
- Composed charts combining multiple chart types

### 📋 **Advanced Data Tables**
- Sortable and filterable columns
- Pagination with customizable page sizes
- Row selection with checkboxes
- Inline editing capabilities
- Export functionality
- CRUD operations (Create, Read, Update, Delete)
- Custom cell renderers

### 📅 **Calendar Management**
- Monthly, weekly, daily, and agenda views
- Drag-and-drop event creation
- Event categorization with color coding
- Event editing and deletion
- Today's events sidebar
- Upcoming events preview

### 📌 **Kanban Board**
- Drag-and-drop task management
- Multiple columns (To Do, In Progress, Review, Done)
- Task prioritization (High, Medium, Low)
- Assignee management
- Due date tracking
- Task creation and editing

### ⚙️ **Settings & Preferences**
- Profile management
- Notification preferences
- Privacy and security settings
- Language and timezone configuration
- Date format and currency settings

### 📱 **Responsive Design**
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Collapsible sidebar navigation

## Technology Stack

- **Frontend Framework**: React 18
- **UI Library**: Material-UI (MUI) v5
- **Routing**: React Router v6
- **Charts**: Recharts
- **Calendar**: React Big Calendar
- **Drag & Drop**: React Beautiful DnD
- **Date Handling**: Moment.js & date-fns
- **Data Grid**: MUI X Data Grid
- **Icons**: Material Icons

## Installation

1. **Clone or download the project**
   ```bash
   cd react-admin-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   └── Layout/
│       └── Layout.js          # Main layout with sidebar and header
├── contexts/
│   └── ThemeContext.js        # Theme management context
├── pages/
│   ├── Dashboard.js           # Main dashboard with overview
│   ├── Tables.js              # Data table management
│   ├── Charts.js              # Various chart types
│   ├── Calendar.js            # Calendar and event management
│   ├── Kanban.js              # Kanban board for task management
│   └── Settings.js            # User settings and preferences
├── App.js                     # Main app component
├── App.css                    # Global styles
├── index.js                   # App entry point
└── index.css                  # Base styles
```

## Key Features Explained

### Theme System
The app includes a comprehensive theme system with:
- **Light Theme**: Clean, bright interface
- **Dark Theme**: Easy on the eyes for low-light environments
- **Color Variants**: Blue, Green, and Purple themes
- **Persistent Storage**: Theme preference saved in localStorage

### Dashboard Overview
- **Statistics Cards**: Key metrics with trend indicators
- **Interactive Charts**: Real-time data visualization
- **Responsive Grid**: Adapts to different screen sizes

### Data Management
- **Advanced Filtering**: Search and filter across all columns
- **Bulk Operations**: Select multiple rows for batch actions
- **Export Options**: Download data in various formats
- **Real-time Updates**: Instant UI updates on data changes

### Calendar Features
- **Multiple Views**: Switch between month, week, day, and agenda
- **Event Management**: Create, edit, and delete events
- **Color Coding**: Different colors for event types
- **Responsive Design**: Works seamlessly on mobile devices

### Kanban Workflow
- **Visual Task Management**: See project progress at a glance
- **Drag & Drop**: Intuitive task movement between columns
- **Priority System**: Visual priority indicators
- **Team Collaboration**: Assign tasks to team members

## Customization

### Adding New Themes
1. Open `src/contexts/ThemeContext.js`
2. Create a new theme object using Material-UI's `createTheme`
3. Add it to the `themes` object
4. The theme will automatically appear in the settings

### Adding New Chart Types
1. Import the chart component from Recharts
2. Add it to the `Charts.js` page
3. Include sample data and configuration

### Extending the Data Table
1. Modify the columns array in `Tables.js`
2. Add new fields to the data structure
3. Implement custom cell renderers if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- **Code Splitting**: Automatic code splitting with React.lazy
- **Memoization**: React.memo for expensive components
- **Virtual Scrolling**: Efficient rendering of large datasets
- **Lazy Loading**: Components loaded on demand

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ using React and Material-UI**