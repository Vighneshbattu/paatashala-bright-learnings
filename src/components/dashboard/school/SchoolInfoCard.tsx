
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { School } from 'lucide-react';
import { MapPin } from 'lucide-react';

interface SchoolInfoCardProps {
  name: string;
  location: string;
  studentCount: number;
  classCount: number;
  teacherCount: number;
}

const SchoolInfoCard: React.FC<SchoolInfoCardProps> = ({ 
  name, 
  location, 
  studentCount, 
  classCount, 
  teacherCount 
}) => {
  return (
    <Card>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-3">
          <Avatar className="h-20 w-20">
            <div className="bg-paata-blue-light h-full w-full rounded-full flex items-center justify-center">
              <School className="h-10 w-10 text-paata-blue" />
            </div>
          </Avatar>
        </div>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="mt-2 flex items-center justify-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-center border-t pt-4">
          <div>
            <div className="font-bold text-xl">{studentCount}</div>
            <div className="text-sm text-gray-500">Students</div>
          </div>
          <div>
            <div className="font-bold text-xl">{classCount}</div>
            <div className="text-sm text-gray-500">Classes</div>
          </div>
          <div>
            <div className="font-bold text-xl">{teacherCount}</div>
            <div className="text-sm text-gray-500">Teachers</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SchoolInfoCard;
