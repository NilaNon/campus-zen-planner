
/**
 * API service for communicating with the Django backend
 */

// Base API URL - update this to your Django server URL when deployed
const API_URL = 'http://localhost:8000/api';

// Fetch study spaces from the backend
export const fetchStudySpaces = async () => {
  try {
    const response = await fetch(`${API_URL}/study-spaces/`);
    if (!response.ok) {
      throw new Error('Failed to fetch study spaces');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching study spaces:', error);
    throw error;
  }
};

// Fetch study groups from the backend
export const fetchStudyGroups = async () => {
  try {
    const response = await fetch(`${API_URL}/study-groups/`);
    if (!response.ok) {
      throw new Error('Failed to fetch study groups');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching study groups:', error);
    throw error;
  }
};

// Fetch academic resources from the backend
export const fetchResources = async () => {
  try {
    const response = await fetch(`${API_URL}/resources/`);
    if (!response.ok) {
      throw new Error('Failed to fetch resources');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching resources:', error);
    throw error;
  }
};

// Reserve a study space
export const reserveStudySpace = async (spaceId: number, userId: number) => {
  try {
    const response = await fetch(`${API_URL}/study-spaces/${spaceId}/reserve/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: userId }),
    });
    if (!response.ok) {
      throw new Error('Failed to reserve study space');
    }
    return await response.json();
  } catch (error) {
    console.error('Error reserving study space:', error);
    throw error;
  }
};

// Join a study group
export const joinStudyGroup = async (groupId: number, userId: number) => {
  try {
    const response = await fetch(`${API_URL}/study-groups/${groupId}/join/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: userId }),
    });
    if (!response.ok) {
      throw new Error('Failed to join study group');
    }
    return await response.json();
  } catch (error) {
    console.error('Error joining study group:', error);
    throw error;
  }
};
