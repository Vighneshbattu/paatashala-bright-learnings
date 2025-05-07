
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Bell, ChartBar, Star } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const StudentDashboard = () => {
  const { toast } = useToast();
  const [doubtMessage, setDoubtMessage] = useState('');

  const progressData = [
    { name: 'Completed', value: 70, color: '#4CD964' },
    { name: 'Remaining', value: 30, color: '#E5E7EB' },
  ];

  const upcomingSessions = [
    { id: 1, title: 'Chemistry Basics', date: '2025-05-10', time: '10:00 AM', tutor: 'Ms. Anjali Sharma' },
    { id: 2, title: 'Coding with Scratch', date: '2025-05-12', time: '2:30 PM', tutor: 'Mr. Rahul Verma' },
    { id: 3, title: 'Mathematics: Algebra', date: '2025-05-15', time: '11:00 AM', tutor: 'Ms. Priya Patel' },
  ];

  const announcements = [
    { id: 1, title: 'Holiday Notice', content: 'School will be closed on May 20th for maintenance.', date: '2025-05-05' },
    { id: 2, title: 'Science Exhibition', content: 'Annual science exhibition scheduled for May 25th. Bring your projects!', date: '2025-05-03' },
  ];

  const handleDoubtSubmission = () => {
    if (doubtMessage.trim()) {
      toast({
        title: "Doubt Submitted",
        description: "Your question has been sent to your teacher.",
      });
      setDoubtMessage('');
    }
  };

  return (
    <DashboardLayout title="Student Dashboard" description="Welcome back, Aisha!">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle>Progress Overview</CardTitle>
              <CardDescription>Your learning journey so far</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center">
                <ChartContainer className="w-full h-full" config={{
                  completed: { color: "#4CD964" },
                  remaining: { color: "#E5E7EB" },
                }}>
                  <PieChart>
                    <Pie
                      data={progressData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {progressData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip 
                      content={
                        <ChartTooltipContent nameKey="name" labelKey="value" />
                      } 
                    />
                  </PieChart>
                </ChartContainer>
              </div>
              <div className="flex justify-center gap-8 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-paata-green"></div>
                  <span>70% Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                  <span>30% Remaining</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="upcoming" className="mb-6">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="upcoming" className="flex-1">Upcoming Sessions</TabsTrigger>
              <TabsTrigger value="announcements" className="flex-1">Announcements</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Learning Sessions</CardTitle>
                  <CardDescription>Your scheduled lessons for this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingSessions.map(session => (
                      <div key={session.id} className="flex items-center p-4 border rounded-lg border-gray-200 hover:bg-gray-50 transition-colors">
                        <div className="p-3 rounded-full bg-paata-blue-light mr-4">
                          <Calendar className="h-6 w-6 text-paata-blue" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{session.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{session.date} at {session.time}</span>
                            </div>
                            <div>
                              <span>Tutor: {session.tutor}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Join Session</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="announcements">
              <Card>
                <CardHeader>
                  <CardTitle>School Announcements</CardTitle>
                  <CardDescription>Important notices from your school</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {announcements.map(announcement => (
                      <div key={announcement.id} className="p-4 border rounded-lg border-gray-200 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-lg">{announcement.title}</h3>
                          <span className="text-sm text-gray-500">{announcement.date}</span>
                        </div>
                        <p className="text-gray-600">{announcement.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ask a Doubt</CardTitle>
              <CardDescription>Your teachers will respond soon</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="Type your question here..." 
                value={doubtMessage}
                onChange={(e) => setDoubtMessage(e.target.value)}
                className="min-h-[120px]"
              />
            </CardContent>
            <CardFooter>
              <div className="flex justify-between w-full">
                <Button variant="outline" size="sm">
                  Upload Image
                </Button>
                <Button onClick={handleDoubtSubmission}>
                  Send Question
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rate Last Session</CardTitle>
              <CardDescription>How was your learning experience?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Teaching Clarity</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className="h-5 w-5 fill-paata-yellow text-paata-yellow cursor-pointer" 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Interaction Quality</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-5 w-5 ${star <= 4 ? "fill-paata-yellow text-paata-yellow" : "text-gray-300"} cursor-pointer`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Concept Understanding</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-5 w-5 ${star <= 3 ? "fill-paata-yellow text-paata-yellow" : "text-gray-300"} cursor-pointer`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <Textarea placeholder="Additional feedback (optional)" className="min-h-[80px]" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit Rating</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
