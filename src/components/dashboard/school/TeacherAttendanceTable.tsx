
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

interface TeacherAttendanceProps {
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

const TeacherAttendanceTable: React.FC<TeacherAttendanceProps> = ({ teacherAttendance }) => {
  const { toast } = useToast();
  
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
  );
};

export default TeacherAttendanceTable;
