import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ChartBar, User, Users, School } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Avatar } from "@/components/ui/avatar";

const SchoolDashboard = () => {
  const { toast } = useToast();
  
  const teacherAttendance = [
    { id: 1, name: "Rajesh Kumar", subject: "Science", scheduleTime: "9:00 AM - 11:00 AM", status: "Present", checkedIn: "8:45 AM", checkedOut: "11:15 AM" },
    { id: 2, name: "Priya Sharma", subject: "Mathematics", scheduleTime: "1:00 PM - 3:00 PM", status: "Pending", checkedIn: null, checkedOut: null },
    { id: 3, name: "Amit Patel", subject: "Coding", scheduleTime: "11:30 AM - 1:30 PM", status: "Late", checkedIn: "11:45 AM", checkedOut: null }
  ];
  
  const upcomingVisits = [
    { id: 1, teacherName: "Rajesh Kumar", subject: "Science", kit: "Chemistry Explorer", date: "2025-05-08", time: "9:00 AM - 11:00 AM" },
    { id: 2, teacherName: "Priya Sharma", subject: "Mathematics", kit: "Geometry Master", date: "2025-05-09", time: "1:00 PM - 3:00 PM" },
    { id: 3, teacherName: "Amit Patel", subject: "Coding", kit: "Scratch Programming", date: "2025-05-12", time: "11:30 AM - 1:30 PM" },
  ];
  
  const engagementData = [
    { subject: "Science", engagement: 85 },
    { subject: "Maths", engagement: 75 },
    { subject: "Coding", engagement: 90 },
    { subject: "Robotics", engagement: 70 }
  ];
  
  const handleCheckIn = (teacherId: number) => {
    toast({
      title: "Teacher Checked In",
      description: `Successfully recorded check-in for teacher #${teacherId}.`,
    });
  };
  
  const handleCheckOut = (teacherId: number) => {
    toast({
      title: "Teacher Checked Out",
      description: `Successfully recorded check-out for teacher #${teacherId}.`,
    });
  };

  return (
    <DashboardLayout title="School Dashboard" description="Delhi Public School, Noida">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Teacher Attendance</CardTitle>
              <CardDescription>Today's scheduled teachers and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Teacher</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Schedule</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teacherAttendance.map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell className="font-medium">{teacher.name}</TableCell>
                        <TableCell>{teacher.subject}</TableCell>
                        <TableCell>{teacher.scheduleTime}</TableCell>
                        <TableCell>
                          <Badge 
                            className={`
                              ${teacher.status === 'Present' ? 'bg-paata-green hover:bg-green-500' : ''}
                              ${teacher.status === 'Pending' ? 'bg-paata-yellow hover:bg-amber-500' : ''}
                              ${teacher.status === 'Late' ? 'bg-paata-orange hover:bg-orange-500' : ''}
                              ${teacher.status === 'Absent' ? 'bg-red-500 hover:bg-red-600' : ''}
                            `}
                          >
                            {teacher.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          {!teacher.checkedIn ? (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="mr-2"
                              onClick={() => handleCheckIn(teacher.id)}
                            >
                              Check In
                            </Button>
                          ) : !teacher.checkedOut ? (
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleCheckOut(teacher.id)}
                            >
                              Check Out
                            </Button>
                          ) : (
                            <span className="text-sm text-gray-500">
                              Completed
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance Insights</CardTitle>
              <CardDescription>Student engagement by subject</CardDescription>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-3">
                <Avatar className="h-20 w-20">
                  <div className="bg-paata-blue-light h-full w-full rounded-full flex items-center justify-center">
                    <School className="h-10 w-10 text-paata-blue" />
                  </div>
                </Avatar>
              </div>
              <CardTitle>Delhi Public School</CardTitle>
              <CardDescription className="mt-2 flex items-center justify-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Noida, Uttar Pradesh</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-center border-t pt-4">
                <div>
                  <div className="font-bold text-xl">350</div>
                  <div className="text-sm text-gray-500">Students</div>
                </div>
                <div>
                  <div className="font-bold text-xl">15</div>
                  <div className="text-sm text-gray-500">Classes</div>
                </div>
                <div>
                  <div className="font-bold text-xl">8</div>
                  <div className="text-sm text-gray-500">Teachers</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Visits</CardTitle>
              <CardDescription>Scheduled teacher visits this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingVisits.map(visit => (
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
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SchoolDashboard;
