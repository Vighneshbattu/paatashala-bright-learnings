
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

interface PerformanceChartProps {
  engagementData: {
    subject: string;
    engagement: number;
  }[];
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ engagementData }) => {
  return (
    <div className="h-80">
      <ChartContainer config={{
        science: { color: "#1C9CF6" },
        maths: { color: "#4CD964" },
        coding: { color: "#FF9500" },
        robotics: { color: "#9C64FF" },
      }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={engagementData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis domain={[0, 100]} label={{ value: 'Engagement %', angle: -90, position: 'insideLeft' }} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="engagement" fill="#1C9CF6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default PerformanceChart;
