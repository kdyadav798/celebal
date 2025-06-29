# React Admin Dashboard

A modern, responsive admin dashboard built with React, Material-UI, and various other libraries to provide a comprehensive administrative interface.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Customizable Themes**: Choose between Light, Dark, Indigo, and Teal themes
- **Interactive Dashboard**: View key metrics and performance data
- **Data Tables**: Sortable and filterable tables with pagination
- **Calendar**: Full-featured calendar with event management
- **Kanban Board**: Drag-and-drop task management
- **Indian Names**: Sample data featuring Indian names throughout the application

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling
- **Material-UI**: React component library implementing Google's Material Design
- **React Router**: Declarative routing for React applications
- **Recharts**: Composable charting library for React
- **FullCalendar**: Full-sized drag & drop event calendar
- **React Beautiful DND**: Beautiful and accessible drag and drop for lists
- **Formik & Yup**: Form handling and validation

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
   or with legacy peer dependencies (if needed):
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── assets/         # Static assets like images
├── components/     # Reusable UI components
├── contexts/       # React contexts for state management
├── data/           # Mock data and constants
├── layouts/        # Layout components
├── pages/          # Page components
└── theme/          # Theme configuration
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run lint` - Run ESLint to check for code issues
- `npm run preview` - Preview the production build locally

## License

This project is licensed under the MIT License.
