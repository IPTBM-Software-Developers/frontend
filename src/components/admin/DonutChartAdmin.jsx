import { Pie, PieChart, Label } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart"

const chartData = [
  { agency: "ipophil", visitors: 750, fill: "var(--color-ipophil)" },
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
    <div className="w-full">
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
            innerRadius={80}
            outerRadius={100}
            paddingAngle={5}
            cornerRadius={10}
            stroke="none"
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                      <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                        {totalTechnologies.toLocaleString()}
                      </tspan>
                      <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 28} className="fill-muted-foreground text-xs font-medium">
                        Technologies
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>

      {/* --- CUSTOM LIST DESIGN --- */}
      <div className="mt-6 space-y-3 px-2">
        {chartData.map((item) => (
          <div key={item.agency} className="flex items-center justify-between border-b border-dashed border-gray-100 pb-2 last:border-0">
            <div className="flex items-center gap-2">
              {/* Colored Dot */}
              <div 
                className="h-4 w-4 rounded-full" 
                style={{ backgroundColor: chartConfig[item.agency].color }}
              />
              <span className="text-sm font-medium text-gray-500">
                {chartConfig[item.agency].label}
              </span>
            </div>
            {/* Total on the Right */}
            <span className="text-sm font-semibold text-gray-500">
              {item.visitors.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}