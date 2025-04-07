
// API service for the Campus Zen Planner

// Base URL for Django backend
const API_BASE_URL = 'http://localhost:8000/api';

// Auth endpoints
export const authApi = {
  login: async (email: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
      throw new Error('Login failed');
    }
    
    return response.json();
  },
  
  register: async (userData: { name: string, email: string, password: string }) => {
    const response = await fetch(`${API_BASE_URL}/auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      throw new Error('Registration failed');
    }
    
    return response.json();
  },
  
  logout: async () => {
    const response = await fetch(`${API_BASE_URL}/auth/logout/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    
    if (!response.ok) {
      throw new Error('Logout failed');
    }
    
    localStorage.removeItem('token');
    return true;
  }
};

// Fetch study spaces
export const fetchStudySpaces = async () => {
  const response = await fetch(`${API_BASE_URL}/study-spaces/`);
  if (!response.ok) {
    throw new Error('Failed to fetch study spaces');
  }
  return response.json();
};

// Fetch study groups
export const fetchStudyGroups = async () => {
  const response = await fetch(`${API_BASE_URL}/study-groups/`);
  if (!response.ok) {
    throw new Error('Failed to fetch study groups');
  }
  return response.json();
};

// Fetch resources
export const fetchResources = async () => {
  const response = await fetch(`${API_BASE_URL}/resources/`);
  if (!response.ok) {
    throw new Error('Failed to fetch resources');
  }
  return response.json();
};

// Fetch events for planner
export const fetchEvents = async () => {
  const response = await fetch(`${API_BASE_URL}/events/`);
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  return response.json();
};

// Add other API endpoints as needed
