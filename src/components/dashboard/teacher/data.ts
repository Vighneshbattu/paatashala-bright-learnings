
export const weekDays = [
  { id: "monday", name: "Monday" },
  { id: "tuesday", name: "Tuesday" },
  { id: "wednesday", name: "Wednesday" },
  { id: "thursday", name: "Thursday" },
  { id: "friday", name: "Friday" },
];

export const scheduleData = {
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

export const kitChecklistItems = [
  { id: "chemistry", name: "Chemistry Kit", checked: false },
  { id: "coding", name: "Coding Kit", checked: false },
  { id: "math", name: "Mathematics Kit", checked: false },
  { id: "science", name: "Science Kit", checked: false },
  { id: "robotics", name: "Robotics Kit", checked: false },
  { id: "electronics", name: "Electronics Kit", checked: false },
  { id: "physics", name: "Physics Kit", checked: false },
  { id: "biology", name: "Biology Kit", checked: false }
];

export const feedbackData = [
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

export const teacherProfile = {
  name: "Rajesh Kumar",
  location: "Delhi Region",
  subjects: ["Science", "Mathematics", "Coding"],
  stats: {
    schools: 12,
    sessions: 87,
    rating: 4.8
  }
};
