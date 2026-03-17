import { Pie, PieChart, Label, Cell } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart"

const chartData = [
  { visibility: "public", count: 620, fill: "var(--color-public)" },
  { visibility: "private", count: 180, fill: "var(--color-private)" },
]

const chartConfig = {
  public: {
    label: "Public",
    color: "#1d0fff",
  },
  private: {
    label: "Private",
    color: "#837cff",
  },
}

export default function PieChartAdmin() {
  const total = chartData.reduce((acc, curr) => acc + curr.count, 0)

  return (
    <div className="w-full h-full flex flex-col justify-between py-4">
      <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-h-[250px]">
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={chartData}
            dataKey="count"
            nameKey="visibility"
            innerRadius={80} // Changed from 0 to 80 to allow cornerRadius to show
            outerRadius={100}
            paddingAngle={5}
            cornerRadius={10} // Soft rounded edges
            stroke="none"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={chartConfig[entry.visibility].color} />
            ))}
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                      <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                        {total}
                      </tspan>
                      <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground text-xs font-medium">
                        Visibility
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>

      {/* Custom Split-List Legend */}
      <div className="space-y-3 px-2">
        {chartData.map((item) => (
          <div key={item.visibility} className="flex items-center justify-between border-b border-dashed border-gray-100 pb-2 last:border-0">
            <div className="flex items-center gap-2">
              <div 
                className="h-4 w-4 rounded-full" 
                style={{ backgroundColor: chartConfig[item.visibility].color }}
              />
              <span className="text-sm font-medium text-gray-500">
                {chartConfig[item.visibility].label}
              </span>
            </div>
            <span className="text-sm font-semibold text-gray-500">
              {item.count.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}