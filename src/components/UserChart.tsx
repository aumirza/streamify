import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMemo } from "react";

const chartconfig = {
  totalUsers: {
    label: "Total Users",
    color: "hsl(var(--chart-1))",
  },
  activeUsers: {
    label: "Active Users",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function UserChart({
  data,
}: {
  data: {
    month: string;
    activeUsers: string;
    totalUsers: string;
  }[];
}) {
  const chartData = useMemo(
    () =>
      data.map((d) => ({
        month: d.month,
        activeUsers: Number(d.activeUsers),
        totalUsers: Number(d.totalUsers),
      })),
    [data]
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Users Data</CardTitle>
        <CardDescription>
          Showing total and active users over last year
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartconfig} className="">
          <LineChart accessibilityLayer data={chartData}>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              stroke={chartconfig.activeUsers.color}
              dot={{ fill: chartconfig.activeUsers.color }}
              type="monotone"
              dataKey="activeUsers"
            />
            <Line
              stroke={chartconfig.totalUsers.color}
              dot={{ fill: chartconfig.totalUsers.color }}
              type="monotone"
              dataKey="totalUsers"
            />
            <CartesianGrid vertical={false} />
            <ChartLegend content={<ChartLegendContent />} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
