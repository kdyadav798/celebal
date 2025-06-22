import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardHeader,
  useTheme,
} from '@mui/material';
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from 'recharts';

const salesData = [
  { month: 'Jan', sales: 4000, profit: 2400, expenses: 1600 },
  { month: 'Feb', sales: 3000, profit: 1398, expenses: 1602 },
  { month: 'Mar', sales: 2000, profit: 9800, expenses: 800 },
  { month: 'Apr', sales: 2780, profit: 3908, expenses: 1200 },
  { month: 'May', sales: 1890, profit: 4800, expenses: 1400 },
  { month: 'Jun', sales: 2390, profit: 3800, expenses: 1100 },
  { month: 'Jul', sales: 3490, profit: 4300, expenses: 1300 },
  { month: 'Aug', sales: 4000, profit: 2400, expenses: 1600 },
  { month: 'Sep', sales: 3200, profit: 3200, expenses: 1500 },
  { month: 'Oct', sales: 4100, profit: 4100, expenses: 1700 },
  { month: 'Nov', sales: 3800, profit: 3800, expenses: 1400 },
  { month: 'Dec', sales: 4500, profit: 4500, expenses: 1800 },
];

const categoryData = [
  { name: 'Electronics', value: 400, color: '#8884d8' },
  { name: 'Clothing', value: 300, color: '#82ca9d' },
  { name: 'Books', value: 200, color: '#ffc658' },
  { name: 'Home & Garden', value: 150, color: '#ff7c7c' },
  { name: 'Sports', value: 100, color: '#8dd1e1' },
  { name: 'Toys', value: 80, color: '#d084d0' },
];

const performanceData = [
  { subject: 'Sales', A: 120, B: 110, fullMark: 150 },
  { subject: 'Marketing', A: 98, B: 130, fullMark: 150 },
  { subject: 'Development', A: 86, B: 130, fullMark: 150 },
  { subject: 'Customer Service', A: 99, B: 100, fullMark: 150 },
  { subject: 'Information', A: 85, B: 90, fullMark: 150 },
  { subject: 'Administration', A: 65, B: 85, fullMark: 150 },
];

const scatterData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const trafficData = [
  { name: 'Direct', value: 35, color: '#0088FE' },
  { name: 'Social Media', value: 25, color: '#00C49F' },
  { name: 'Email', value: 20, color: '#FFBB28' },
  { name: 'Referral', value: 15, color: '#FF8042' },
  { name: 'Paid Search', value: 5, color: '#8884D8' },
];

function Charts() {
  const theme = useTheme();
  const [chartType, setChartType] = useState('all');

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  const renderChart = (type, component) => {
    if (chartType === 'all' || chartType === type) {
      return component;
    }
    return null;
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Analytics & Charts
        </Typography>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Chart Type</InputLabel>
          <Select
            value={chartType}
            onChange={handleChartTypeChange}
            label="Chart Type"
          >
            <MenuItem value="all">All Charts</MenuItem>
            <MenuItem value="line">Line Charts</MenuItem>
            <MenuItem value="bar">Bar Charts</MenuItem>
            <MenuItem value="pie">Pie Charts</MenuItem>
            <MenuItem value="area">Area Charts</MenuItem>
            <MenuItem value="radar">Radar Charts</MenuItem>
            <MenuItem value="scatter">Scatter Charts</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        {/* Line Chart */}
        {renderChart('line', (
          <Grid item xs={12} lg={6} key="line">
            <Card>
              <CardHeader title="Sales Trend" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke={theme.palette.primary.main}
                      strokeWidth={3}
                      dot={{ fill: theme.palette.primary.main, strokeWidth: 2, r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="profit"
                      stroke={theme.palette.secondary.main}
                      strokeWidth={3}
                      dot={{ fill: theme.palette.secondary.main, strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Bar Chart */}
        {renderChart('bar', (
          <Grid item xs={12} lg={6} key="bar">
            <Card>
              <CardHeader title="Monthly Revenue" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill={theme.palette.primary.main} />
                    <Bar dataKey="expenses" fill={theme.palette.error.main} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Pie Chart */}
        {renderChart('pie', (
          <Grid item xs={12} lg={6} key="pie">
            <Card>
              <CardHeader title="Sales by Category" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Area Chart */}
        {renderChart('area', (
          <Grid item xs={12} lg={6} key="area">
            <Card>
              <CardHeader title="Traffic Sources" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={trafficData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {trafficData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Radar Chart */}
        {renderChart('radar', (
          <Grid item xs={12} lg={6} key="radar">
            <Card>
              <CardHeader title="Performance Metrics" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={performanceData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar
                      name="Team A"
                      dataKey="A"
                      stroke={theme.palette.primary.main}
                      fill={theme.palette.primary.main}
                      fillOpacity={0.3}
                    />
                    <Radar
                      name="Team B"
                      dataKey="B"
                      stroke={theme.palette.secondary.main}
                      fill={theme.palette.secondary.main}
                      fillOpacity={0.3}
                    />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Scatter Chart */}
        {renderChart('scatter', (
          <Grid item xs={12} lg={6} key="scatter">
            <Card>
              <CardHeader title="Performance vs Investment" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart data={scatterData}>
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="investment" unit="k" />
                    <YAxis type="number" dataKey="y" name="performance" unit="%" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter
                      name="Projects"
                      data={scatterData}
                      fill={theme.palette.primary.main}
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Composed Chart */}
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Combined Analytics" />
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="expenses"
                    fill={theme.palette.error.light}
                    stroke={theme.palette.error.main}
                  />
                  <Bar dataKey="profit" barSize={20} fill={theme.palette.success.main} />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke={theme.palette.primary.main}
                    strokeWidth={3}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Charts;