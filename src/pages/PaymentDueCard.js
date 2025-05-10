import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import {
  AttachMoney as MoneyIcon,
  ErrorOutline as WarningIcon,
  Savings as SavingsIcon,
} from "@mui/icons-material";

const PaymentDueCard = ({ sidebarOpen }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: { xs: "100%", md: sidebarOpen ? "calc(50% - 150px)" : "50%" },
        height: 480,
        borderRadius: 1,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          p: sidebarOpen ? 2 : 3,
        }}
      >
        {/* Header Section */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Payment Due
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            $0.00
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You informed of this week compared to last week
          </Typography>
        </Box>

        {/* Chart Section */}
        <Box sx={{ flex: 1, minHeight: 200, mb: 2 }}>
          <LineChart
            xAxis={[
              {
                data: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                scaleType: "band",
              },
            ]}
            series={[
              {
                data: [30, 30, 30, 30, 50, 30, 30],
                color: "#F2994A",
                showMark: false,
              },
            ]}
            height={200}
            margin={{
              top: 10,
              bottom: 30,
              left: sidebarOpen ? 20 : 30,
              right: 10,
            }}
          />
        </Box>

        {/* Metrics Box */}
        <Card
          variant="outlined"
          sx={{
            borderRadius: 2,
            p: sidebarOpen ? 1 : 2,
            borderColor: "divider",
            boxShadow: "none",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: sidebarOpen ? 1 : 2,
            }}
          >
            {/* Vendor Payments Due */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                minWidth: 0, // Prevent overflow
              }}
            >
              <MoneyIcon
                sx={{
                  color: "#F9A8D4",
                  fontSize: 20,
                  mr: sidebarOpen ? 1 : 1.5,
                  bgcolor: "rgba(249, 168, 212, 0.1)",
                  p: 0.5,
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="caption" color="text.secondary" noWrap>
                  Vendor Payments
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  $100,000.00
                </Typography>
              </Box>
            </Box>

            <Divider orientation="vertical" flexItem />

            {/* Overdue */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                minWidth: 0,
              }}
            >
              <WarningIcon
                sx={{
                  color: "#F9A8D4",
                  fontSize: 20,
                  mr: sidebarOpen ? 1 : 1.5,
                  bgcolor: "rgba(249, 168, 212, 0.1)",
                  p: 0.5,
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="caption" color="text.secondary" noWrap>
                  Overdue
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  $0.00
                </Typography>
              </Box>
            </Box>

            <Divider orientation="vertical" flexItem />

            {/* Ontime Payment Savings */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                minWidth: 0,
              }}
            >
              <SavingsIcon
                sx={{
                  color: "#4ADE80",
                  fontSize: 20,
                  mr: sidebarOpen ? 1 : 1.5,
                  bgcolor: "rgba(74, 222, 128, 0.1)",
                  p: 0.5,
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="caption" color="text.secondary" noWrap>
                  Savings
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  $0
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </CardContent>
    </Card>
  );
};

export default PaymentDueCard;
