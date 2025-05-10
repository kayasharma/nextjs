"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
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
} from "@mui/material";
import InvoiceProcessedCard from "./InvoiceProcessedCard";
import { PieChart } from "@mui/x-charts";
import SettingsIcon from "@mui/icons-material/Settings";
import PaymentDueCard from "./PaymentDueCard";
import Tooltip from "@mui/material/Tooltip";
// Data for SpendingByCategory
const spendingData = [
  { category: "Housing", value: 1200 },
  { category: "Food", value: 450 },
  { category: "Transport", value: 200 },
  { category: "Entertainment", value: 150 },
  { category: "Utilities", value: 180 },
  { category: "Other", value: 300 },
];

// SpendingByCategory component
const SpendingByCategory = () => {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 1,
        height: "80%",
        boxShadow: 3,
        width: { xs: "100%", md: "50%" },
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Spending by Category
      </Typography>
      <Box sx={{ height: 300, display: "flex", justifyContent: "center" }}>
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

// ThemeCustomizer component
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
        position: "relative", // Ensure the parent Box can contain absolutely positioned children
      }}
    >
      <AppBar position="static" sx={{ mb: 0 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            Finance Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Settings button in right corner below navbar */}
      <Box
        sx={{
          position: "absolute", // Keep the original positioning
          top: 64, // Keep the original top value
          right: 0, // Keep the original right value
          px: { xs: 3, md: 5 }, // Keep the original padding
          zIndex: 10, // Keep the original zIndex
        }}
      >
        <Tooltip title="Customize Theme" arrow>
          <IconButton
            color="primary"
            onClick={toggleDrawer(true)}
            sx={{
              mr: "-60px", // Keep the original margin-right
              mt: "250px", // Keep the original margin-top
              backgroundColor: primaryColor || theme.palette.primary.main, // Use the theme's primary color or selected primaryColor
              color: theme.palette.getContrastText(
                primaryColor || theme.palette.primary.main
              ), // Ensure icon color contrasts with the background
              boxShadow: theme.shadows[4], // Keep the subtle shadow for a floating effect
              borderRadius: "4px", // Box shape with slightly rounded corners for a modern look
              width: 48, // Keep the width
              height: 48, // Keep the height
              transition: "all 0.3s ease", // Smooth transition for hover effects
              "&:hover": {
                backgroundColor: theme.palette.augmentColor({
                  color: { main: primaryColor || theme.palette.primary.main },
                }).dark, // Darken on hover
                transform: "scale(1.1)", // Slight scale animation on hover
                boxShadow: theme.shadows[6], // Increase shadow on hover
              },
            }}
          >
            <SettingsIcon sx={{ fontSize: 24 }} /> {/* Keep the icon size */}
          </IconButton>
        </Tooltip>
      </Box>

      <Box sx={{ p: { xs: 3, md: 5 } }}>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <ThemeCustomizer
            mode={mode}
            setMode={setMode}
            primaryColor={primaryColor}
            setPrimaryColor={setPrimaryColor}
          />
        </Drawer>

        {/* First row with SpendingByCategory and PaymentDueCard */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 7,
            mb: 7,
            pr: { xs: 0, md: 5 }, // Add right padding to avoid overlap with the settings icon
          }}
        >
          <SpendingByCategory />
          <PaymentDueCard sidebarOpen={false} />
        </Box>

        {/* InvoiceProcessedCard */}
        <Box
          sx={{
            width: { xs: "100%", md: "calc(50% + 50%)" },
            maxWidth: { md: "calc(50% + 50% + 24px)" },
          }}
        >
          <InvoiceProcessedCard />
        </Box>
      </Box>
    </Box>
  );
}
