
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { User, MapPin } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface ProfileCardProps {
  name: string;
  location: string;
  subjects: string[];
  stats: {
    schools: number;
    sessions: number;
    rating: number;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, location, subjects, stats }) => {
  return (
    <Card>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-3">
          <Avatar className="h-20 w-20">
            <div className="bg-paata-blue-light h-full w-full rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-paata-blue" />
            </div>
          </Avatar>
        </div>
        <CardTitle>{name}</CardTitle>
        <div className="flex justify-center gap-2 mt-1">
          {subjects.map((subject, index) => (
            <Badge 
              key={index} 
              className={`bg-${index === 0 ? 'paata-blue' : index === 1 ? 'paata-green' : 'paata-orange'}`}
            >
              {subject}
            </Badge>
          ))}
        </div>
        <CardDescription className="mt-2 flex items-center justify-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-center border-t pt-4">
          <div>
            <div className="font-bold text-xl">{stats.schools}</div>
            <div className="text-sm text-gray-500">Schools</div>
          </div>
          <div>
            <div className="font-bold text-xl">{stats.sessions}</div>
            <div className="text-sm text-gray-500">Sessions</div>
          </div>
          <div>
            <div className="font-bold text-xl">{stats.rating}</div>
            <div className="text-sm text-gray-500">Rating</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
