import { Pie, PieChart, Label } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "../../components/ui/chart"

const chartData = [
  { visibility: "public", count: 620, fill: "var(--color-public)" },
  { visibility: "private", count: 180, fill: "var(--color-private)" },
]

const chartConfig = {
  public: {
    label: "Public",
    color: "#1d0fff", // Your primary blue
  },
  private: {
    label: "Private",
    color: "#837cff", // Professional slate gray
  },
}

export default function PieChartAdmin() {
  return (
    <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-h-[250px]">
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={chartData}
          dataKey="count"
          nameKey="visibility"
          innerRadius={0}
          outerRadius={80}
          paddingAngle={0}
          cornerRadius={8}
          stroke="none"
        />
        <ChartLegend content={<ChartLegendContent />} className="mt-2" />
      </PieChart>
    </ChartContainer>
  )
}