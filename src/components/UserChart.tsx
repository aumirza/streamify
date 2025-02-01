import { Line, LineChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

import { TrendingUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
              fill="var(--color-totalUsers)"
              type="monotone"
              dataKey="activeUsers"
            ></Line>
            <Line
              fill="var(--color-activeUsers)"
              type="monotone"
              dataKey="totalUsers"
            ></Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex items-start w-full gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="w-4 h-4" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
