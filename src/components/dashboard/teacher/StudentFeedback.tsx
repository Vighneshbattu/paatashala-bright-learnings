
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { User, Star } from 'lucide-react';

interface FeedbackItem {
  id: number;
  studentName: string;
  schoolName: string;
  date: string;
  clarity: number;
  interaction: number;
  understanding: number;
  comment?: string;
}

interface StudentFeedbackProps {
  feedbackData: FeedbackItem[];
}

const StudentFeedback: React.FC<StudentFeedbackProps> = ({ feedbackData }) => {
  return (
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
  );
};

export default StudentFeedback;
