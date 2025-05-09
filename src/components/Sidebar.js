import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  AccountBalance as AccountBalanceIcon,
  Receipt as ReceiptIcon,
  CreditCard as CreditCardIcon,
  Savings as SavingsIcon,
  Settings as SettingsIcon,
  PieChart as PieChartIcon,
  SwapHoriz as TransferIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material";

// Sidebar component
const Sidebar = ({ isSidebarOpen, setSidebarOpen, primaryColor }) => {
  const theme = useTheme();
  const drawerWidth = isSidebarOpen ? 260 : 70;

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: theme.palette.background.paper,
          transition: "width 0.3s ease",
          borderRight: `1px solid ${theme.palette.divider}`,
          boxShadow: theme.shadows[2],
        },
      }}
    >
      <Box
        sx={{
          p: isSidebarOpen ? 3 : 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: isSidebarOpen ? "space-between" : "center",
        }}
      >
        {isSidebarOpen && (
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
            }}
          >
            FinancePro
          </Typography>
        )}
        <IconButton onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <ChevronLeftIcon sx={{ color: theme.palette.text.primary }} />
          ) : (
            <ChevronRightIcon sx={{ color: theme.palette.text.primary }} />
          )}
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: theme.palette.divider, mx: 2 }} />
      <List sx={{ pt: 2 }}>
        {[
          { text: "Dashboard", icon: <DashboardIcon /> },
          { text: "Accounts", icon: <AccountBalanceIcon /> },
          { text: "Transactions", icon: <ReceiptIcon /> },
          { text: "Cards", icon: <CreditCardIcon /> },
          { text: "Transfers", icon: <TransferIcon /> },
          { text: "Budget", icon: <PieChartIcon /> },
          { text: "Investments", icon: <SavingsIcon /> },
        ].map((item, index) => (
          <ListItem
            button
            key={item.text}
            selected={index === 0}
            sx={{
              mx: 2,
              borderRadius: 2,
              mb: 1,
              py: 1.5,
              transition: "all 0.2s ease",
              "&:hover": {
                bgcolor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
                transform: "translateX(5px)",
              },
              "&.Mui-selected": {
                bgcolor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                "&:hover": {
                  bgcolor: theme.palette.primary.dark,
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                color:
                  index === 0
                    ? theme.palette.primary.contrastText
                    : theme.palette.text.primary,
                minWidth: 40,
              }}
            >
              {item.icon}
            </ListItemIcon>
            {isSidebarOpen && (
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: index === 0 ? 600 : 500,
                }}
              />
            )}
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: theme.palette.divider, mx: 2, my: 1 }} />
      <List>
        <ListItem
          button
          sx={{
            mx: 2,
            borderRadius: 2,
            py: 1.5,
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: theme.palette.primary.light,
              color: theme.palette.primary.contrastText,
              transform: "translateX(5px)",
            },
          }}
        >
          <ListItemIcon
            sx={{ color: theme.palette.text.primary, minWidth: 40 }}
          >
            <SettingsIcon />
          </ListItemIcon>
          {isSidebarOpen && (
            <ListItemText
              primary="Settings"
              primaryTypographyProps={{ fontWeight: 500 }}
            />
          )}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
