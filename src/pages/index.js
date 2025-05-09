"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  CircularProgress,
  useTheme,
  Drawer,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  AppBar,
  Toolbar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { PieChart, BarChart } from "@mui/x-charts";

import SettingsIcon from "@mui/icons-material/Settings";

// Data definitions (unchanged)
const revenueData = [
  { month: "Jan", 2020: -10, 2021: 15, 2022: 20 },
  { month: "Feb", 2020: 5, 2021: -5, 2022: 10 },
  { month: "Mar", 2020: -15, 2021: 25, 2022: 30 },
  { month: "Apr", 2020: 0, 2021: 10, 2022: 15 },
  { month: "May", 2020: -5, 2021: 5, 2022: 20 },
  { month: "Jun", 2020: 10, 2021: 0, 2022: 10 },
  { month: "Jul", 2020: -10, 2021: 15, 2022: 25 },
];

const spendingData = [
  { category: "Housing", value: 1200 },
  { category: "Food", value: 450 },
  { category: "Transport", value: 200 },
  { category: "Entertainment", value: 150 },
  { category: "Utilities", value: 180 },
  { category: "Other", value: 300 },
];
// Define RecentTransactions FIRST
const RecentTransactions = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
        Recent Transactions
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ borderRadius: 2, boxShadow: theme.shadows[2] }}
      >
        {/* Your existing table code */}
      </TableContainer>
    </Box>
  );
};

// THEN define TransactionsAndGrowth
const TransactionsAndGrowth = () => {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <RecentTransactions /> {/* Now properly defined */}
        </Grid>
        <Grid item xs={12} md={4}>
          <GrowthIndicator />
        </Grid>
      </Grid>
    </Paper>
  );
};
const transactions = [
  {
    date: "May 5, 2023",
    description: "Grocery Store",
    category: "Food",
    amount: -125.75,
  },
  {
    date: "May 3, 2023",
    description: "Salary Deposit",
    category: "Income",
    amount: 3500.0,
  },
  {
    date: "May 1, 2023",
    description: "Electric Bill",
    category: "Utilities",
    amount: -85.2,
  },
  {
    date: "Apr 28, 2023",
    description: "Online Shopping",
    category: "Shopping",
    amount: -64.99,
  },
  {
    date: "Apr 25, 2023",
    description: "Restaurant",
    category: "Dining",
    amount: -42.5,
  },
];

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

// Updated GrowthIndicator (unchanged)
const GrowthIndicator = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        growth
      </Typography>
      <Box sx={{ position: "relative", display: "inline-flex", my: 3 }}>
        <CircularProgress
          variant="determinate"
          value={78}
          size={140}
          thickness={6}
          sx={{ color: theme.palette.primary.main }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" component="div" color="text.primary">
            78%
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          2022: $32.5K
        </Typography>
        <Typography variant="body2" color="text.secondary">
          2021: $41.2K
        </Typography>
      </Box>
    </Box>
  );
};

// Updated ProfileReport (now using @mui/x-charts)
const ProfileReport = () => {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, height: "100%", boxShadow: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Profile Report
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Box>
          <Typography variant="body2" color="text.secondary">
            Year 2021
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            $41.2K
          </Typography>
        </Box>
        <Box textAlign="right">
          <Typography variant="body2" color="text.secondary">
            Growth
          </Typography>
          <Typography
            variant="h5"
            color="success.main"
            sx={{ fontWeight: 600 }}
          >
            ↑ 68.2%
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: 300 }}>
        <BarChart
          series={[
            { data: chartData.map((item) => item.desktop), label: "Desktop" },
            { data: chartData.map((item) => item.mobile), label: "Mobile" },
          ]}
          xAxis={[
            {
              data: chartData.map((item) => item.month),
              scaleType: "band",
              tickFormatter: (value) => value.slice(0, 3),
            },
          ]}
          height={300}
          colors={["#3B82F6", "#EF4444"]}
        />
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Showing total visitors for the last 6 months
      </Typography>
    </Paper>
  );
};

// Updated SpendingByCategory (using @mui/x-charts PieChart)
const SpendingByCategory = () => {
  return (
    <Paper sx={{ p: 3, borderRadius: 3, height: "100%", boxShadow: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Spending by Category
      </Typography>
      <Box sx={{ height: 320, display: "flex", justifyContent: "center" }}>
        <PieChart
          series={[
            {
              data: spendingData.map((item, index) => ({
                id: index,
                value: item.value,
                label: item.category,
              })),
              innerRadius: 40,
              outerRadius: 120,
            },
          ]}
          width={400}
          height={300}
        />
      </Box>
    </Paper>
  );
};

const ThemeCustomizer = ({ mode, setMode, primaryColor, setPrimaryColor }) => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3, width: 300 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Theme Customizer
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 3 }}>
        Customize & Preview in Real Time
      </Typography>

      <FormControl component="fieldset" sx={{ mb: 3 }}>
        <FormLabel component="legend" sx={{ fontWeight: 600, mb: 1 }}>
          Skin
        </FormLabel>
        <RadioGroup
          row
          value={
            theme.palette.background.paper === theme.palette.background.default
              ? "Default"
              : "Bordered"
          }
          onChange={(e) => {
            // Add logic to change skin if needed
          }}
        >
          <FormControlLabel
            value="Default"
            control={<Radio />}
            label="Default"
          />
          <FormControlLabel
            value="Bordered"
            control={<Radio />}
            label="Bordered"
          />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset" sx={{ mb: 3 }}>
        <FormLabel component="legend" sx={{ fontWeight: 600, mb: 1 }}>
          Mode
        </FormLabel>
        <RadioGroup row value={mode} onChange={(e) => setMode(e.target.value)}>
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
          <FormControlLabel
            value="semi-dark"
            control={<Radio />}
            label="Semi Dark"
          />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset" sx={{ mb: 3 }}>
        <FormLabel component="legend" sx={{ fontWeight: 600, mb: 1 }}>
          Primary Color
        </FormLabel>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#F2994A",
              cursor: "pointer",
              borderRadius: 1,
              border: primaryColor === "#F2994A" ? "2px solid #000" : "none",
            }}
            onClick={() => setPrimaryColor("#F2994A")}
          />
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#6B7280",
              cursor: "pointer",
              borderRadius: 1,
              border: primaryColor === "#6B7280" ? "2px solid #000" : "none",
            }}
            onClick={() => setPrimaryColor("#6B7280")}
          />
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#34C759",
              cursor: "pointer",
              borderRadius: 1,
              border: primaryColor === "#34C759" ? "2px solid #000" : "none",
            }}
            onClick={() => setPrimaryColor("#34C759")}
          />
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#EF4444",
              cursor: "pointer",
              borderRadius: 1,
              border: primaryColor === "#EF4444" ? "2px solid #000" : "none",
            }}
            onClick={() => setPrimaryColor("#EF4444")}
          />
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#3B82F6",
              cursor: "pointer",
              borderRadius: 1,
              border: primaryColor === "#3B82F6" ? "2px solid #000" : "none",
            }}
            onClick={() => setPrimaryColor("#3B82F6")}
          />
        </Box>
      </FormControl>

      <FormControl component="fieldset" sx={{ mb: 3 }}>
        <FormLabel component="legend" sx={{ fontWeight: 600, mb: 1 }}>
          Content Width
        </FormLabel>
        <RadioGroup
          row
          value="Full"
          onChange={(e) => {
            // Add logic to change content width if needed
          }}
        >
          <FormControlLabel value="Full" control={<Radio />} label="Full" />
          <FormControlLabel value="Boxed" control={<Radio />} label="Boxed" />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend" sx={{ fontWeight: 600, mb: 1 }}>
          AppBar Type
        </FormLabel>
        <RadioGroup
          row
          value="Fixed"
          onChange={(e) => {
            // Add logic to change app bar type if needed
          }}
        >
          <FormControlLabel value="Fixed" control={<Radio />} label="Fixed" />
          <FormControlLabel value="Static" control={<Radio />} label="Static" />
          <FormControlLabel value="Hidden" control={<Radio />} label="Hidden" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default function Home({ mode, setMode, primaryColor, setPrimaryColor }) {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <AppBar position="static" sx={{ mb: 5 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            Finance Dashboard
          </Typography>
          <Button color="inherit">Overview</Button>
          <Button color="inherit">Reports</Button>
          <Button color="inherit">Transactions</Button>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: { xs: 3, md: 5 } }}>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <ThemeCustomizer
            mode={mode}
            setMode={setMode}
            primaryColor={primaryColor}
            setPrimaryColor={setPrimaryColor}
          />
        </Drawer>

        <Grid container spacing={5} sx={{ mb: 5 }}>
          <Grid item xs={12} md={8}>
            <ProfileReport />
          </Grid>
          <Grid item xs={12} md={4}>
            <SpendingByCategory />
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid item xs={12}>
            <TransactionsAndGrowth />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
