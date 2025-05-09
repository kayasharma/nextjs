import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = ({ children, mode, setMode, primaryColor, setPrimaryColor }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: "background.default",
          minHeight: "100vh",
          transition: "margin-left 0.3s ease",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
