
import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Visit {
  id: number;
  teacherName: string;
  subject: string;
  kit: string;
  date: string;
  time: string;
}

interface UpcomingVisitsProps {
  visits: Visit[];
}

const UpcomingVisits: React.FC<UpcomingVisitsProps> = ({ visits }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Visits</CardTitle>
        <CardDescription>Scheduled teacher visits this week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {visits.map(visit => (
            <div key={visit.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-paata-blue-light p-2 rounded-full">
                  <User className="h-4 w-4 text-paata-blue" />
                </div>
                <div>
                  <div className="font-medium">{visit.teacherName}</div>
                  <div className="text-xs text-gray-500">{visit.subject}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-gray-500" />
                  <span>{visit.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-gray-500" />
                  <span>{visit.time}</span>
                </div>
              </div>
              
              <div className="mt-2 bg-paata-green-light text-paata-green text-xs py-1 px-2 rounded inline-flex items-center gap-1">
                <div className="h-2 w-2 bg-paata-green rounded-full"></div>
                <span>Kit: {visit.kit}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">View All Scheduled Visits</Button>
      </CardFooter>
    </Card>
  );
};

export default UpcomingVisits;
