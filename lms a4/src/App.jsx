import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeProvider';
import LoadingScreen from './components/LoadingScreen';

// Layouts
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'));

// Pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const DataTable = lazy(() => import('./pages/DataTable'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Kanban = lazy(() => import('./pages/Kanban'));
const Settings = lazy(() => import('./pages/Settings'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen message="Loading application..." />}>
          <Routes>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Navigate to="/" replace />} />
              <Route path="table" element={<DataTable />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="kanban" element={<Kanban />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
