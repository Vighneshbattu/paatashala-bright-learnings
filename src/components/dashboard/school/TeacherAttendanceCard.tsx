
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TeacherAttendanceTable from './TeacherAttendanceTable';

interface TeacherAttendanceCardProps {
  teacherAttendance: {
    id: number;
    name: string;
    subject: string;
    scheduleTime: string;
    status: string;
    checkedIn: string | null;
    checkedOut: string | null;
  }[];
}

const TeacherAttendanceCard: React.FC<TeacherAttendanceCardProps> = ({ teacherAttendance }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Teacher Attendance</CardTitle>
        <CardDescription>Today's scheduled teachers and their status</CardDescription>
      </CardHeader>
      <CardContent>
        <TeacherAttendanceTable teacherAttendance={teacherAttendance} />
      </CardContent>
    </Card>
  );
};

export default TeacherAttendanceCard;
