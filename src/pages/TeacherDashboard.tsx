
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Calendar, Clock, MapPin, ChartBar, Star, User, Schools } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TeacherDashboard = () => {
  const { toast } = useToast();
  const [activeDay, setActiveDay] = useState<string>("monday");
  
  const weekDays = [
    { id: "monday", name: "Monday" },
    { id: "tuesday", name: "Tuesday" },
    { id: "wednesday", name: "Wednesday" },
    { id: "thursday", name: "Thursday" },
    { id: "friday", name: "Friday" },
  ];

  const scheduleData = {
    monday: [
      { id: 1, schoolName: "Greenfield Public School", time: "9:00 AM - 11:00 AM", kit: "Chemistry Basics", status: "Pending" },
      { id: 2, schoolName: "St. Mary's High School", time: "1:00 PM - 3:00 PM", kit: "Coding Fundamentals", status: "Pending" }
    ],
    tuesday: [
      { id: 3, schoolName: "New Horizon School", time: "10:00 AM - 12:00 PM", kit: "Math Explorer", status: "Pending" }
    ],
    wednesday: [
      { id: 4, schoolName: "Sunshine Elementary", time: "9:30 AM - 11:30 AM", kit: "Science Discoveries", status: "Pending" },
      { id: 5, schoolName: "Wisdom Academy", time: "2:00 PM - 4:00 PM", kit: "Robotics Starter", status: "Pending" }
    ],
    thursday: [
      { id: 6, schoolName: "Bright Minds School", time: "11:00 AM - 1:00 PM", kit: "Electronics Lab", status: "Pending" }
    ],
    friday: [
      { id: 7, schoolName: "Knowledge International", time: "9:00 AM - 11:00 AM", kit: "Physics Explorer", status: "Pending" },
      { id: 8, schoolName: "Excellence Academy", time: "1:30 PM - 3:30 PM", kit: "Biology Basics", status: "Pending" }
    ]
  };

  const kitChecklistItems = [
    { id: "chemistry", name: "Chemistry Kit", checked: false },
    { id: "coding", name: "Coding Kit", checked: false },
    { id: "math", name: "Mathematics Kit", checked: false },
    { id: "science", name: "Science Kit", checked: false },
    { id: "robotics", name: "Robotics Kit", checked: false },
    { id: "electronics", name: "Electronics Kit", checked: false },
    { id: "physics", name: "Physics Kit", checked: false },
    { id: "biology", name: "Biology Kit", checked: false }
  ];
  
  const [kits, setKits] = useState(kitChecklistItems);
  
  const feedbackData = [
    {
      id: 1,
      studentName: "Aisha Khan",
      schoolName: "Greenfield Public School",
      date: "2025-05-03",
      clarity: 5,
      interaction: 4,
      understanding: 5,
      comment: "Very helpful and made complex concepts easy to understand."
    },
    {
      id: 2,
      studentName: "Rahul Verma",
      schoolName: "St. Mary's High School",
      date: "2025-05-02",
      clarity: 4,
      interaction: 5,
      understanding: 4,
      comment: "Engaging teaching style. Would like more practical examples."
    }
  ];
  
  const handleKitToggle = (id: string) => {
    setKits(kits.map(kit => 
      kit.id === id ? { ...kit, checked: !kit.checked } : kit
    ));
    
    toast({
      title: "Kit Status Updated",
      description: "Your kit checklist has been updated.",
    });
  };
  
  const handleStatusChange = (id: number, status: string) => {
    toast({
      title: "Delivery Status Updated",
      description: `Session status changed to ${status}.`,
    });
  };

  return (
    <DashboardLayout title="Teacher Dashboard" description="Welcome back, Rajesh!">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
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
                                <Schools className="h-5 w-5 text-paata-blue" />
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

          <Card>
            <CardHeader>
              <CardTitle>Student Feedback</CardTitle>
              <CardDescription>Recent ratings and comments from your students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {feedbackData.map(feedback => (
                  <div key={feedback.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <div className="bg-paata-purple-light h-full w-full rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-paata-purple" />
                          </div>
                        </Avatar>
                        <div>
                          <div className="font-medium">{feedback.studentName}</div>
                          <div className="text-sm text-gray-500">{feedback.schoolName}</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">{feedback.date}</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-3">
                      <div>
                        <div className="text-sm font-medium mb-1">Teaching Clarity</div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-4 w-4 ${star <= feedback.clarity ? "fill-paata-yellow text-paata-yellow" : "text-gray-300"}`} 
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium mb-1">Interaction</div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-4 w-4 ${star <= feedback.interaction ? "fill-paata-yellow text-paata-yellow" : "text-gray-300"}`} 
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium mb-1">Understanding</div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-4 w-4 ${star <= feedback.understanding ? "fill-paata-yellow text-paata-yellow" : "text-gray-300"}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {feedback.comment && (
                      <div className="text-gray-600 text-sm italic">
                        "{feedback.comment}"
                      </div>
                    )}
                  </div>
                ))}
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
                    <User className="h-10 w-10 text-paata-blue" />
                  </div>
                </Avatar>
              </div>
              <CardTitle>Rajesh Kumar</CardTitle>
              <div className="flex justify-center gap-2 mt-1">
                <Badge className="bg-paata-blue">Science</Badge>
                <Badge className="bg-paata-green">Mathematics</Badge>
                <Badge className="bg-paata-orange">Coding</Badge>
              </div>
              <CardDescription className="mt-2 flex items-center justify-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Delhi Region</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-center border-t pt-4">
                <div>
                  <div className="font-bold text-xl">12</div>
                  <div className="text-sm text-gray-500">Schools</div>
                </div>
                <div>
                  <div className="font-bold text-xl">87</div>
                  <div className="text-sm text-gray-500">Sessions</div>
                </div>
                <div>
                  <div className="font-bold text-xl">4.8</div>
                  <div className="text-sm text-gray-500">Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Kit Checklist</CardTitle>
              <CardDescription>Kits to pick up for your school visits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {kits.map(kit => (
                  <div 
                    key={kit.id} 
                    className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50"
                  >
                    <Checkbox 
                      id={kit.id} 
                      checked={kit.checked}
                      onCheckedChange={() => handleKitToggle(kit.id)}
                    />
                    <label 
                      htmlFor={kit.id} 
                      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${kit.checked ? 'line-through text-gray-500' : ''}`}
                    >
                      {kit.name}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => {
                setKits(kits.map(kit => ({ ...kit, checked: false })));
                toast({
                  title: "Checklist Reset",
                  description: "All items have been reset.",
                });
              }}>
                Reset Checklist
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
