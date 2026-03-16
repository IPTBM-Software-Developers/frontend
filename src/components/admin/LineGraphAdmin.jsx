import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent, 
  ChartLegend, 
  ChartLegendContent 
} from "../../components/ui/chart";

const chartData = [
  { month: "January", filed: 40, registered: 20, expired: 5, withdrawn: 2 },
  { month: "February", filed: 55, registered: 25, expired: 8, withdrawn: 4 },
  { month: "March", filed: 48, registered: 30, expired: 10, withdrawn: 3 },
  { month: "April", filed: 60, registered: 35, expired: 12, withdrawn: 5 },
  { month: "May", filed: 75, registered: 40, expired: 15, withdrawn: 6 },
  { month: "June", filed: 85, registered: 45, expired: 10, withdrawn: 8 },
  { month: "July", filed: 90, registered: 50, expired: 12, withdrawn: 7 },
  { month: "August", filed: 80, registered: 55, expired: 18, withdrawn: 9 },
  { month: "September", filed: 70, registered: 60, expired: 20, withdrawn: 10 },
  { month: "October", filed: 65, registered: 58, expired: 22, withdrawn: 5 },
  { month: "November", filed: 50, registered: 55, expired: 25, withdrawn: 4 },
  { month: "December", filed: 45, registered: 50, expired: 30, withdrawn: 3 },
];

const chartConfig = {
  filed: { 
    label: "Filed",   
    color: "#0f7fff"      // Your Primary (kept for consistency)
  },
  registered: { 
    label: "Registered", 
    color: "#1d0fff"      // Deep Teal (Professional & Trustworthy)
  },
  expired: { 
    label: "Expired", 
    color: "#dc3545"      // Burnt Sienna (Clear warning without being neon red)
  },
  withdrawn: { 
    label: "Withdrawn", 
    color: "#a70fff"     // Slate Gray (Neutralizes the other colors)
  },
};

export default function LineGraphAdmin() {
  return (
    <ChartContainer config={chartConfig} className="w-full h-full">
      <AreaChart 
        data={chartData} 
        margin={{ left: -20, right: 12, top: 20, bottom: 0 }}
      >
        <defs>
          {Object.keys(chartConfig).map((key) => (
            <linearGradient key={key} id={`fill${key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={chartConfig[key].color} stopOpacity={0.3}/>
              <stop offset="95%" stopColor={chartConfig[key].color} stopOpacity={0}/>
            </linearGradient>
          ))}
        </defs>

        <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-muted/50" />
        
        {/* Y Axis - Shows the values on the left */}
        <YAxis 
          tickLine={false} 
          axisLine={false} 
          tickMargin={8} 
          fontSize={12}
          className="fill-muted-foreground"
        />

        <XAxis 
          dataKey="month" 
          tickLine={false} 
          axisLine={false} 
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)} 
        />

        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        
        {/* Legend - Displays the 4 categories at the top */}
        <ChartLegend content={<ChartLegendContent />} />

        {Object.keys(chartConfig).map((key) => (
          <Area
            key={key}
            dataKey={key}
            type="monotone"
            stroke={chartConfig[key].color}
            strokeWidth={2}
            fill={`url(#fill${key})`}
            dot={false}
          />
        ))}
      </AreaChart>
    </ChartContainer>
  );
}