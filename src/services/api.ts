
import { API_ENDPOINTS } from '@/config/djangoConfig';

// Study Spaces API
export const fetchStudySpaces = async () => {
  // For development, we'll use mock data
  const response = await fetch(API_ENDPOINTS.STUDY_SPACES);
  if (!response.ok) {
    throw new Error('Failed to fetch study spaces');
  }
  return response.json();
};

// Resources API
export const fetchResources = async (category: string) => {
  let endpoint;
  switch(category) {
    case 'academic':
      endpoint = API_ENDPOINTS.ACADEMIC_RESOURCES;
      break;
    case 'wellness':
      endpoint = API_ENDPOINTS.WELLNESS_RESOURCES;
      break;
    case 'community':
      endpoint = API_ENDPOINTS.COMMUNITY_RESOURCES;
      break;
    default:
      endpoint = API_ENDPOINTS.ACADEMIC_RESOURCES;
  }
  
  // For development, we'll use mock data
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${category} resources`);
  }
  return response.json();
};

// Study Groups API
export const fetchStudyGroups = async () => {
  // For development, we'll use mock data
  // Eventually, this would be a fetch call to the backend
  return [
    {
      id: '1',
      name: 'Database Systems Study Group',
      subject: 'Computer Science',
      members: 4,
      maxMembers: 6,
      meetingTime: 'Tuesdays, 15:00 - 17:00',
      location: 'Library Study Room 2',
      description: 'Group for CS students studying database systems.'
    },
    {
      id: '2',
      name: 'Organic Chemistry Group',
      subject: 'Chemistry',
      members: 5,
      maxMembers: 8,
      meetingTime: 'Wednesdays, 16:00 - 18:00',
      location: 'Science Building, Room 104',
      description: 'Study group for organic chemistry students.'
    },
    {
      id: '3',
      name: 'Literature Review Group',
      subject: 'English',
      members: 3,
      maxMembers: 5,
      meetingTime: 'Fridays, 14:00 - 16:00',
      location: 'Humanities Building, Room 203',
      description: 'Group focused on literary analysis and essay writing.'
    }
  ];
};

// User Events API
export const fetchUserEvents = async () => {
  // For development, we'll use mock data
  return [
    {
      id: '1',
      title: 'Database Study Group',
      type: 'group',
      date: 'Today',
      time: '15:00 - 17:00',
      location: 'Library Study Room 2',
      participants: 4
    },
    {
      id: '2',
      title: 'Essay Deadline: Literature Review',
      type: 'deadline',
      date: 'Tomorrow',
      time: '23:59',
      course: 'ENG201'
    },
    {
      id: '3',
      title: 'Mathematics Revision',
      type: 'personal',
      date: 'Wed, 8 Apr',
      time: '14:00 - 16:00',
      location: 'Humanities Quiet Room'
    }
  ];
};

// Planner tasks API
export const fetchTasks = async () => {
  // For development, we'll use mock data
  return [
    {
      id: '1',
      title: 'Complete Research Paper',
      description: 'Finish writing the research paper for Biology class',
      due: '2025-04-10T23:59:00',
      priority: 'high',
      completed: false,
      course: 'BIO301'
    },
    {
      id: '2',
      title: 'Math Assignment',
      description: 'Complete problems 1-20 in Chapter 5',
      due: '2025-04-08T23:59:00',
      priority: 'medium',
      completed: false,
      course: 'MATH202'
    },
    {
      id: '3',
      title: 'Group Project Meeting',
      description: 'Meet with group to discuss project progress',
      due: '2025-04-07T15:00:00',
      priority: 'medium',
      completed: true,
      course: 'CS401'
    }
  ];
};
