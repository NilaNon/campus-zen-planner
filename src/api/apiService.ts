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
  
  checkInToSpace: async (spaceId: string) => {
    // Mock implementation
    console.log(`User checked in to space ${spaceId}`);
    return { success: true };
  },
};

// Study Groups API
export const studyGroupsApi = {
  getAllGroups: async () => {
    // Mock data
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
  },
  
  getGroupById: async (id: string) => {
    // Mock implementation
    const groups = await studyGroupsApi.getAllGroups();
    return groups.find(group => group.id === id);
  },
  
  createGroup: async (groupData: any) => {
    // Mock implementation
    console.log('Group created:', groupData);
    return { 
      success: true, 
      group: { ...groupData, id: Date.now().toString() } 
    };
  },
  
  joinGroup: async (groupId: string) => {
    // Mock implementation
    console.log(`User joined group ${groupId}`);
    return { success: true };
  }
};

// Planner API
export const plannerApi = {
  getTasks: async () => {
    // Mock data
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
  },
  
  createTask: async (taskData: any) => {
    // Mock implementation
    console.log('Task created:', taskData);
    return { 
      success: true, 
      task: { ...taskData, id: Date.now().toString() } 
    };
  },
  
  updateTask: async (id: string, data: any) => {
    // Mock implementation
    console.log(`Task ${id} updated:`, data);
    return { success: true };
  },
  
  deleteTask: async (id: string) => {
    // Mock implementation
    console.log(`Task ${id} deleted`);
    return { success: true };
  }
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
