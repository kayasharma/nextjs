import React, { useState } from "react";
import {
  Box,
  Typography,
  Drawer,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ColorOptions from "../utils/ColorOptions";

const ThemeCustomizer = ({ mode, setMode, primaryColor, setPrimaryColor }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box className="tw-flex tw-justify-end tw-mb-4">
      <IconButton
        onClick={toggleDrawer(true)}
        className="tw-bg-white tw-shadow-md hover:tw-bg-gray-100 tw-transition-colors"
        sx={{ borderRadius: "50%", p: 1 }}
      >
        <SettingsIcon sx={{ color: primaryColor }} />
      </IconButton>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
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
              value="Default"
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
            <RadioGroup
              row
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
              />
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
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {ColorOptions.map((color) => (
                <Box
                  key={color.value}
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: color.value,
                    cursor: "pointer",
                    borderRadius: 1,
                    border:
                      primaryColor === color.value ? "2px solid #000" : "none",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                  onClick={() => setPrimaryColor(color.value)}
                />
              ))}
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
              <FormControlLabel
                value="Boxed"
                control={<Radio />}
                label="Boxed"
              />
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
              <FormControlLabel
                value="Fixed"
                control={<Radio />}
                label="Fixed"
              />
              <FormControlLabel
                value="Static"
                control={<Radio />}
                label="Static"
              />
              <FormControlLabel
                value="Hidden"
                control={<Radio />}
                label="Hidden"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Drawer>
    </Box>
  );
};

export default ThemeCustomizer;
