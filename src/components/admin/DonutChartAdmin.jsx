import { Pie, PieChart, Label } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "../../components/ui/chart"

const chartData = [
  { agency: "ipophil", visitors: 450, fill: "var(--color-ipophil)" },
  { agency: "library", visitors: 350, fill: "var(--color-library)" },
]

const chartConfig = {
  ipophil: {
    label: "IPOPHIL",
    color: "#837cff",
  },
  library: {
    label: "National Library",
    color: "#1d0fff",
  },
}

export default function DonutChartAdmin() {
  const totalTechnologies = chartData.reduce((acc, curr) => acc + curr.visitors, 0)

  return (
    <ChartContainer 
      config={chartConfig} 
      className="mx-auto aspect-square w-full max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={chartData}
          dataKey="visitors"
          nameKey="agency"
          innerRadius={80}     // Adjust based on how thick you want the ring
          outerRadius={100}
          paddingAngle={4}    // Creates the "broken" gap between segments
          cornerRadius={40}    // Rounds the ends of the segments like your reference
          stroke="none"        // Removes the default white border
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-4xl font-bold">
                      {totalTechnologies.toLocaleString()}
                    </tspan>
                    <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 28} className="fill-muted-foreground text-sm font-medium">
                      Technologies
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </Pie>
        <ChartLegend 
          content={<ChartLegendContent />} 
          className="mt-4 flex-wrap gap-4" 
        />
      </PieChart>
    </ChartContainer>
  )
}