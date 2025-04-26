"use client";

import { ArrowUpFromLine } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { skill: "React", data: 250 },
  { skill: "Next.js", data: 200 },
  { skill: "Framer Motion", data: 200 },
  { skill: "Tailwind CSS", data: 300 },
  { skill: "TypyeScript", data: 230 },
  { skill: "JavaScript", data: 250 },
  { skill: "MongoDB", data: 220 },
  { skill: "SQL", data: 250 },
];

const chartConfig = {
  data: {
    label: "Frontend",
    color: "hsl(var(--chart-1))",
    icon: ArrowUpFromLine,
  },
} satisfies ChartConfig;

export function SkillWave() {
  return (
    <section className="mt-20 w-full space-y-8">
      <p className="text-center">Skills and Technologies I Master</p>
      <ChartContainer
        config={chartConfig}
        className="mx-auto max-h-[300px] w-full aspect-square"
      >
        <RadarChart
          data={chartData}
          margin={{
            top: -40,
            bottom: -10,
          }}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <PolarAngleAxis dataKey="skill" />
          <PolarGrid />
          <Radar dataKey="data" fill="var(--color-data)" fillOpacity={0.6} />
        </RadarChart>
      </ChartContainer>
    </section>
  );
}
