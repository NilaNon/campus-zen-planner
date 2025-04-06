
import axios from 'axios';

// Base URL for the Django backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// Create axios instance with common configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercept requests to add authentication token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// API service functions for resources
export const resourcesApi = {
  getAcademicResources: () => apiClient.get('/resources/academic/'),
  getWellnessResources: () => apiClient.get('/resources/wellness/'),
  getCommunityResources: () => apiClient.get('/resources/community/'),
  downloadResource: (resourceId: string) => apiClient.get(`/resources/${resourceId}/download/`),
};

// API service functions for study spaces
export const studySpacesApi = {
  getAllSpaces: () => apiClient.get('/study-spaces/'),
  getSpaceById: (id: string) => apiClient.get(`/study-spaces/${id}/`),
  checkInToSpace: (id: string) => apiClient.post(`/study-spaces/${id}/check-in/`),
};

// API service functions for study groups
export const studyGroupsApi = {
  getAllGroups: () => apiClient.get('/study-groups/'),
  getGroupById: (id: string) => apiClient.get(`/study-groups/${id}/`),
  createGroup: (data: any) => apiClient.post('/study-groups/', data),
  joinGroup: (id: string) => apiClient.post(`/study-groups/${id}/join/`),
};

// API service functions for user data
export const userApi = {
  getCurrentUser: () => apiClient.get('/users/me/'),
  updateProfile: (data: any) => apiClient.patch('/users/me/', data),
  getUpcomingEvents: () => apiClient.get('/users/me/events/'),
  recordWellnessCheck: (data: any) => apiClient.post('/users/me/wellness-check/', data),
};

// API service functions for planner
export const plannerApi = {
  getTasks: () => apiClient.get('/planner/tasks/'),
  createTask: (data: any) => apiClient.post('/planner/tasks/', data),
  updateTask: (id: string, data: any) => apiClient.patch(`/planner/tasks/${id}/`, data),
  deleteTask: (id: string) => apiClient.delete(`/planner/tasks/${id}/`),
};

export default apiClient;
