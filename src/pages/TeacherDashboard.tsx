
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import WeeklySchedule from '@/components/dashboard/teacher/WeeklySchedule';
import StudentFeedback from '@/components/dashboard/teacher/StudentFeedback';
import ProfileCard from '@/components/dashboard/teacher/ProfileCard';
import KitChecklist from '@/components/dashboard/teacher/KitChecklist';
import { 
  weekDays, 
  scheduleData, 
  kitChecklistItems, 
  feedbackData, 
  teacherProfile 
} from '@/components/dashboard/teacher/data';

const TeacherDashboard: React.FC = () => {
  const [activeDay, setActiveDay] = useState<string>("monday");

  return (
    <DashboardLayout title="Teacher Dashboard" description="Welcome back, Rajesh!">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <WeeklySchedule 
            activeDay={activeDay}
            setActiveDay={setActiveDay}
            weekDays={weekDays}
            scheduleData={scheduleData}
          />
          <StudentFeedback feedbackData={feedbackData} />
        </div>
        
        <div className="space-y-6">
          <ProfileCard
            name={teacherProfile.name}
            location={teacherProfile.location}
            subjects={teacherProfile.subjects}
            stats={teacherProfile.stats}
          />
          <KitChecklist initialKits={kitChecklistItems} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
