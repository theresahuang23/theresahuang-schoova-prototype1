// Mock data for the dashboard
export const mockDailyStudyData = [
  { date: 'Oct 9', minutes: 45 },
  { date: 'Oct 10', minutes: 60 },
  { date: 'Oct 11', minutes: 55 },
  { date: 'Oct 12', minutes: 75 },
  { date: 'Oct 13', minutes: 90 },
  { date: 'Oct 14', minutes: 80 },
  { date: 'Oct 15', minutes: 65 },
];

export const mockTasksByCategory = [
  { category: 'Biology', tasks: 8 },
  { category: 'Research', tasks: 5 },
  { category: 'Volunteering', tasks: 3 },
  { category: 'Personal', tasks: 6 },
  { category: 'Admin', tasks: 2 },
];

export const mockWorkBreakRatio = [
  { name: 'Study', value: 65, color: '#6366f1' },
  { name: 'Breaks', value: 35, color: '#10b981' },
];

export const mockStreakData = {
  current: 12,
  allTimeBest: 47,
  nextMilestone: 15,
  lastActivityDate: '2025-10-15',
};

export const mockKPIs = {
  today: {
    studyMinutes: 65,
    tasksCompleted: 4,
    breaksTaken: 3,
    focusScore: 82,
  },
  sevenDays: {
    studyMinutes: 470,
    tasksCompleted: 28,
    breaksTaken: 21,
    focusScore: 78,
  },
  thirtyDays: {
    studyMinutes: 1890,
    tasksCompleted: 112,
    breaksTaken: 85,
    focusScore: 75,
  },
};

export const mockRecommendations = [
  {
    id: 1,
    title: 'Add a 30-minute walk before dinner',
    rationale: 'You\'ve been studying for 65 minutes today. A short walk can help reset your mind and improve focus for evening tasks. You mentioned enjoying evening strolls.',
    expectedImpact: 'Improved focus (+15%), better mood, and reduced eye strain',
    category: 'wellness',
    timeSlot: '5:30 PM - 6:00 PM',
  },
  {
    id: 2,
    title: 'Shift your morning study block earlier',
    rationale: 'Your data shows peak productivity between 7-9 AM. Currently, you start at 8:30 AM. Moving to 7:00 AM aligns with your natural energy peak.',
    expectedImpact: 'Increased productivity (+20%), better task completion rate',
    category: 'schedule',
    timeSlot: '7:00 AM - 9:00 AM',
  },
  {
    id: 3,
    title: 'Take a 5-minute break every 25 minutes',
    rationale: 'Your focus score has been declining over the past week (78→75). Implementing the Pomodoro technique can help maintain concentration and prevent burnout.',
    expectedImpact: 'Sustained focus, reduced fatigue, better long-term retention',
    category: 'focus',
    timeSlot: 'During study sessions',
  },
];

export const mockPlannedBlocks = [
  {
    id: 'block-1',
    title: 'Morning Study Session',
    startTime: '7:00 AM',
    endTime: '9:00 AM',
    category: 'study',
    status: 'scheduled',
  },
  {
    id: 'block-2',
    title: 'Lab Work',
    startTime: '10:00 AM',
    endTime: '12:30 PM',
    category: 'work',
    status: 'scheduled',
  },
  {
    id: 'block-3',
    title: 'Lunch Break',
    startTime: '12:30 PM',
    endTime: '1:30 PM',
    category: 'break',
    status: 'scheduled',
  },
];
