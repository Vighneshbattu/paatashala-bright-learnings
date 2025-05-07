
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import TeacherAttendanceCard from '@/components/dashboard/school/TeacherAttendanceCard';
import PerformanceCard from '@/components/dashboard/school/PerformanceCard';
import SchoolInfoCard from '@/components/dashboard/school/SchoolInfoCard';
import UpcomingVisits from '@/components/dashboard/school/UpcomingVisits';

const SchoolDashboard = () => {
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

  return (
    <DashboardLayout title="School Dashboard" description="Delhi Public School, Noida">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <TeacherAttendanceCard teacherAttendance={teacherAttendance} />
          <PerformanceCard engagementData={engagementData} />
        </div>
        
        <div className="space-y-6">
          <SchoolInfoCard 
            name="Delhi Public School"
            location="Noida, Uttar Pradesh"
            studentCount={350}
            classCount={15}
            teacherCount={8}
          />
          <UpcomingVisits visits={upcomingVisits} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SchoolDashboard;
