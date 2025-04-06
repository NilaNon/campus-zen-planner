
// Configuration for Django backend API

export const API_BASE_URL = 'http://localhost:8000/api';

export const API_ENDPOINTS = {
  // Study spaces endpoints
  STUDY_SPACES: `${API_BASE_URL}/study-spaces/`,
  STUDY_SPACE_BY_ID: (id: string) => `${API_BASE_URL}/study-spaces/${id}/`,
  STUDY_SPACE_CHECK_IN: (id: string) => `${API_BASE_URL}/study-spaces/${id}/check-in/`,
  
  // User endpoints
  CURRENT_USER: `${API_BASE_URL}/users/me/`,
  USER_EVENTS: `${API_BASE_URL}/users/events/`,
  UPDATE_PROFILE: `${API_BASE_URL}/users/update-profile/`,
  WELLNESS_CHECK: `${API_BASE_URL}/users/wellness-check/`,
  
  // Resources endpoints
  ACADEMIC_RESOURCES: `${API_BASE_URL}/resources/academic/`,
  WELLNESS_RESOURCES: `${API_BASE_URL}/resources/wellness/`,
  COMMUNITY_RESOURCES: `${API_BASE_URL}/resources/community/`,
  RESOURCE_DOWNLOAD: (id: string) => `${API_BASE_URL}/resources/${id}/download/`,
};
