import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  useTheme,
} from '@mui/material';
import {
  TrendingUp,
  People,
  ShoppingCart,
  AttachMoney,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const StatCard = ({ title, value, icon, color, change }) => {
  const theme = useTheme();
  
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography color="textSecondary" gutterBottom variant="body2">
              {title}
            </Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              {value}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: change > 0 ? theme.palette.success.main : theme.palette.error.main,
                mt: 1,
              }}
            >
              {change > 0 ? '+' : ''}{change}% from last month
            </Typography>
          </Box>
          <Box
            sx={
              {
                backgroundColor: color + '20',
                borderRadius: '50%',
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }
            }
          >
            {React.cloneElement(icon, { sx: { color: color, fontSize: 32 } })}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const salesData = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Apr', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'Jun', sales: 2390, revenue: 3800 },
  { name: 'Jul', sales: 3490, revenue: 4300 },
];

const userActivityData = [
  { name: 'Mon', users: 120 },
  { name: 'Tue', users: 150 },
  { name: 'Wed', users: 180 },
  { name: 'Thu', users: 200 },
  { name: 'Fri', users: 170 },
  { name: 'Sat', users: 160 },
  { name: 'Sun', users: 140 },
];

const categoryData = [
  { name: 'Electronics', value: 400, color: '#8884d8' },
  { name: 'Clothing', value: 300, color: '#82ca9d' },
  { name: 'Books', value: 200, color: '#ffc658' },
  { name: 'Home', value: 100, color: '#ff7c7c' },
];

function Dashboard() {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Dashboard Overview
      </Typography>
      
      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Revenue"
            value="$45,231"
            icon={<AttachMoney />}
            color={theme.palette.success.main}
            change={12.5}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Users"
            value="1,234"
            icon={<People />}
            color={theme.palette.primary.main}
            change={8.2}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Orders"
            value="567"
            icon={<ShoppingCart />}
            color={theme.palette.warning.main}
            change={-2.1}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Growth Rate"
            value="23.5%"
            icon={<TrendingUp />}
            color={theme.palette.info.main}
            change={5.7}
          />
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Sales & Revenue Trend
            </Typography>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke={theme.palette.primary.main}
                  strokeWidth={3}
                  dot={{ fill: theme.palette.primary.main, strokeWidth: 2, r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke={theme.palette.secondary.main}
                  strokeWidth={3}
                  dot={{ fill: theme.palette.secondary.main, strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        
        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Sales by Category
            </Typography>
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              User Activity This Week
            </Typography>
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke={theme.palette.primary.main}
                  fill={theme.palette.primary.main}
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;