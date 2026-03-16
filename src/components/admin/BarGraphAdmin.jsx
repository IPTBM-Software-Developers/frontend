import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart"

const chartData = [
  { type: "Patent", count: 120 },
  { type: "Utility Model", count: 80 },
  { type: "Trademark", count: 250 },
  
]

const chartConfig = {
  count: {
    label: "Technologies",
    color: "#1d0fff", // Matches your primary blue
  },
}

export default function BarGraphAdmin() {
  return (
    <ChartContainer config={chartConfig} className="h-[250px] w-full">
      <BarChart data={chartData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-muted" />
        <XAxis
          dataKey="type"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          fontSize={12}
        />
        <YAxis 
          tickLine={false} 
          axisLine={false} 
          fontSize={12}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar 
          dataKey="count" 
          fill="var(--color-count)" 
          radius={8} // Rounds the top of the bars to match your UI
        />
      </BarChart>
    </ChartContainer>
  )
}