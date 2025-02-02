import { useMemo, useState } from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const chartConfig = {
  subscriptions: {
    label: "Subscriptions",
    color: "hsl(var(--chart-1))",
  },
  advertisements: {
    label: "Advertisements",
    color: "hsl(var(--chart-2))",
  },
  inAppPurchases: {
    label: "In-App Purchases",
    color: "hsl(var(--chart-3))",
  },
  donations: {
    label: "Donations",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

interface RevenueData {
  subscriptions: string;
  advertisements: string;
  inAppPurchases: string;
  donations: string;
}

interface RevenueChartProps {
  data: {
    currentMonth: RevenueData;
    currentQuarter: RevenueData;
  };
}

export default function RevenueChart({ data }: RevenueChartProps) {
  const [timeFrame, setTimeFrame] = useState("currentMonth");

  const timeFrameData = useMemo(
    () => data[timeFrame as keyof typeof data],
    [timeFrame, data]
  );

  const chartData = useMemo(() => {
    return Object.keys(timeFrameData).map((key) => ({
      source: key,
      revenue: parseInt(
        timeFrameData[key as keyof typeof timeFrameData].toString()
      ),
      fill: `var(--color-${key})`,
    }));
  }, [timeFrameData]);

  const totalRevenue = useMemo(() => {
    return Object.values(timeFrameData).reduce(
      (acc: number, curr) => acc + parseInt(curr),
      0
    );
  }, [timeFrameData]);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Revenue Distribution Data</CardTitle>
        <div className="w-1/3 min-w-fit">
          <Select value={timeFrame} onValueChange={setTimeFrame}>
            <SelectTrigger>
              <SelectValue placeholder="Select a time frame" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="currentMonth">This Month</SelectItem>
              <SelectItem value="currentQuarter">This Quarter</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="revenue"
              nameKey="source"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-2xl font-bold fill-foreground"
                        >
                          {totalRevenue.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Revenue
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            <ChartLegend content={<ChartLegendContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        {/* <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="w-4 h-4" />
        </div> */}
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the current{" "}
          {timeFrame === "currentMonth" ? "month" : "quarter"}
        </div>
      </CardFooter>
    </Card>
  );
}
