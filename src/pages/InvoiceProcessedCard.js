import * as React from "react";
import Stack from "@mui/material/Stack";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset, valueFormatter } from "../dataset/weather";
import { Card, CardContent, Typography } from "@mui/material";

function TickParamsSelector({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
}) {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      sx={{ width: "100%" }}
    >
      {/* Add controls here if needed, e.g., dropdowns for tick placement */}
    </Stack>
  );
}

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
      width: 60,
    },
  ],
  series: [{ dataKey: "seoul", label: "Seoul rainfall", valueFormatter }],
  height: 200, // Reduced height for smaller chart
  width: 400, // Added width for smaller chart
};

export default function TickPlacementBars() {
  const [tickPlacement, setTickPlacement] = React.useState("middle");
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState("middle");

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <Card sx={{ maxWidth: 450, width: "100%", boxShadow: 3, p: 2, m: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            INVOICE PROCESSED
          </Typography>
          <TickParamsSelector
            tickPlacement={tickPlacement}
            tickLabelPlacement={tickLabelPlacement}
            setTickPlacement={setTickPlacement}
            setTickLabelPlacement={setTickLabelPlacement}
          />
          <BarChart
            dataset={dataset}
            xAxis={[{ dataKey: "month", tickPlacement, tickLabelPlacement }]}
            {...chartSetting}
          />
        </CardContent>
      </Card>
    </div>
  );
}
