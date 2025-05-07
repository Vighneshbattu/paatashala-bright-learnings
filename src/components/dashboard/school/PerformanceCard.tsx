
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PerformanceChart from './PerformanceChart';

interface PerformanceCardProps {
  engagementData: {
    subject: string;
    engagement: number;
  }[];
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({ engagementData }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Insights</CardTitle>
        <CardDescription>Student engagement by subject</CardDescription>
      </CardHeader>
      <CardContent>
        <PerformanceChart engagementData={engagementData} />
      </CardContent>
    </Card>
  );
};

export default PerformanceCard;
