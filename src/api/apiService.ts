
// API service for making API calls to the backend

// Study Spaces API
export const studySpacesApi = {
  getAllSpaces: async () => {
    // Mock data for now
    return [
      {
        id: '1',
        name: 'Library Quiet Zone',
        location: 'Main Library, 2nd Floor',
        available: true,
        type: 'individual',
        openUntil: '20:00',
        occupancy: 12,
        capacity: 30,
      },
      {
        id: '2',
        name: 'Humanities Study Room',
        location: 'Humanities Building, Room 105',
        available: true,
        type: 'group',
        openUntil: '18:00',
        occupancy: 3,
        capacity: 8,
      },
      {
        id: '3',
        name: 'Science Center Lab',
        location: 'Science Center, Room 203',
        available: false,
        type: 'individual',
        openUntil: '22:00',
        occupancy: 25,
        capacity: 25,
      },
    ];
  },
  
  getSpaceById: async (id: string) => {
    // Mock implementation
    const spaces = await studySpacesApi.getAllSpaces();
    return spaces.find(space => space.id === id);
  },
  
  checkInToSpace: async (spaceId: string, userId: string) => {
    // Mock implementation
    console.log(`User ${userId} checked in to space ${spaceId}`);
    return { success: true };
  },
};

// User API
export const userApi = {
  getCurrentUser: async () => {
    // Mock data
    return {
      id: '1',
      name: 'Tshegofatso',
      email: 'tshego@example.com',
      major: 'Computer Science',
      year: 3,
    };
  },
  
  getUpcomingEvents: async () => {
    // Mock data
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
  },
  
  updateProfile: async (profileData: any) => {
    // Mock implementation
    console.log('Profile updated:', profileData);
    return { success: true, user: { ...profileData, id: '1' } };
  },
  
  recordWellnessCheck: async (wellnessData: any) => {
    // Mock implementation
    console.log('Wellness check recorded:', wellnessData);
    return { success: true };
  },
};

// Resources API
export const resourcesApi = {
  getAcademicResources: async () => {
    // Mock data
    return [
      {
        id: '1',
        title: 'Research Paper Guide',
        type: 'document',
        category: 'academic',
        downloadUrl: '#',
        location: 'Online Library'
      },
      {
        id: '2',
        title: 'Statistics Formula Sheet',
        type: 'document',
        category: 'academic',
        downloadUrl: '#',
        location: 'Math Department'
      },
      {
        id: '3',
        title: 'Programming Tutorials',
        type: 'video',
        category: 'academic',
        downloadUrl: '#',
        location: 'Computer Science Lab'
      },
    ];
  },
  
  getWellnessResources: async () => {
    // Mock data
    return [
      {
        id: '4',
        title: 'Stress Management Guide',
        type: 'document',
        category: 'wellness',
        downloadUrl: '#',
        location: 'Student Health Center'
      },
      {
        id: '5',
        title: 'Meditation Sessions',
        type: 'event',
        category: 'wellness',
        downloadUrl: '#',
        location: 'Wellness Center'
      },
      {
        id: '6',
        title: 'Mental Health Resources',
        type: 'link',
        category: 'wellness',
        downloadUrl: '#',
        location: 'Student Services'
      },
    ];
  },
  
  getCommunityResources: async () => {
    // Mock data
    return [
      {
        id: '7',
        title: 'Campus Club Directory',
        type: 'document',
        category: 'community',
        downloadUrl: '#',
        location: 'Student Union'
      },
      {
        id: '8',
        title: 'Community Service Opportunities',
        type: 'link',
        category: 'community',
        downloadUrl: '#',
        location: 'Community Outreach Center'
      },
      {
        id: '9',
        title: 'Peer Mentoring Program',
        type: 'event',
        category: 'community',
        downloadUrl: '#',
        location: 'Student Success Center'
      },
    ];
  },
  
  downloadResource: async (resourceId: string) => {
    // Mock implementation
    console.log(`Resource ${resourceId} downloaded`);
    return { success: true };
  },
};
