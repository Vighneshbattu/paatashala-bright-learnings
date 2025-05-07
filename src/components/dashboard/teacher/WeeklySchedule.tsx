
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, School } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ScheduleSession {
  id: number;
  schoolName: string;
  time: string;
  kit: string;
  status: string;
}

interface WeeklyScheduleProps {
  activeDay: string;
  setActiveDay: (day: string) => void;
  weekDays: {id: string; name: string}[];
  scheduleData: {
    [key: string]: ScheduleSession[];
  };
}

const WeeklySchedule: React.FC<WeeklyScheduleProps> = ({ 
  activeDay, 
  setActiveDay, 
  weekDays, 
  scheduleData 
}) => {
  const { toast } = useToast();

  const handleStatusChange = (id: number, status: string) => {
    toast({
      title: "Delivery Status Updated",
      description: `Session status changed to ${status}.`,
    });
  };

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle>Weekly Schedule</CardTitle>
        <CardDescription>Your teaching timetable for this week</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
          <TabsList className="w-full mb-4">
            {weekDays.map((day) => (
              <TabsTrigger key={day.id} value={day.id} className="flex-1">
                {day.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.entries(scheduleData).map(([day, sessions]) => (
            <TabsContent key={day} value={day}>
              <div className="space-y-4">
                {sessions.length > 0 ? (
                  sessions.map(session => (
                    <div key={session.id} className="flex flex-col md:flex-row md:items-center p-4 border rounded-lg border-gray-200 hover:bg-gray-50 transition-colors">
                      <div className="flex-1 mb-3 md:mb-0">
                        <div className="flex items-center gap-2 mb-1">
                          <School className="h-5 w-5 text-paata-blue" />
                          <h3 className="font-semibold text-lg">{session.schoolName}</h3>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{session.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-4 w-4 bg-paata-green-light rounded-full flex items-center justify-center">
                              <div className="h-2 w-2 bg-paata-green rounded-full"></div>
                            </div>
                            <span>Kit: {session.kit}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Select defaultValue={session.status} onValueChange={(value) => handleStatusChange(session.id, value)}>
                          <SelectTrigger className="w-[130px]">
                            <SelectValue placeholder="Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Delivered">Delivered</SelectItem>
                            <SelectItem value="Pending">Pending</SelectItem>
                            <SelectItem value="Rescheduled">Rescheduled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>No sessions scheduled for this day.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default WeeklySchedule;
