import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo } from "react";

interface ITopData {
  data: {
    songName: string;
    artist: string;
    streams: number;
  }[];
}

function toCamelCase(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

export function TopStreamedSongs({ data }: ITopData) {
  const chartConfig = useMemo(
    () =>
      data.reduce((prev: ChartConfig, valueKey, index) => {
        return {
          ...prev,
          [toCamelCase(valueKey.songName)]: {
            label: valueKey.songName,
            color: `hsl(var(--chart-${(index % 5) + 1}))`,
          },
        };
      }, {}) satisfies ChartConfig,
    [data]
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Most Streamed Song</CardTitle>
        <CardDescription>Since last month</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="songName"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              hide
              // tickFormatter={(value) => chartConfig[value as keyof typeof chartConfig]?.label}
            />
            <XAxis dataKey="streams" type="number" />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar
              name="Streams"
              fill="hsl(var(--chart-1))"
              dataKey="streams"
              layout="vertical"
              radius={5}
            >
              <LabelList
                dataKey="songName"
                position="insideLeft"
                offset={8}
                className="fill-[--color-white]"
                fontSize={12}
              />
              <LabelList
                dataKey="streams"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
