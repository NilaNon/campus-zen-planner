
/**
 * Configuration for Django backend connection
 */

// API URL configuration
const API_CONFIG = {
  // Base URL for the Django backend API
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  
  // Timeout for API requests in milliseconds
  TIMEOUT: 10000,
  
  // Authentication endpoints
  AUTH: {
    LOGIN: '/auth/login/',
    REGISTER: '/auth/register/',
    REFRESH_TOKEN: '/auth/token/refresh/',
    FORGOT_PASSWORD: '/auth/password-reset/',
    RESET_PASSWORD: '/auth/password-reset/confirm/',
    VERIFY_EMAIL: '/auth/verify-email/',
  },
  
  // Resource endpoints
  RESOURCES: {
    BASE: '/resources/',
    ACADEMIC: '/resources/academic/',
    WELLNESS: '/resources/wellness/',
    COMMUNITY: '/resources/community/',
  },
  
  // Study spaces endpoints
  STUDY_SPACES: {
    BASE: '/study-spaces/',
    CHECK_IN: '/study-spaces/{id}/check-in/',
    AVAILABILITY: '/study-spaces/availability/',
  },
  
  // Study groups endpoints
  STUDY_GROUPS: {
    BASE: '/study-groups/',
    JOIN: '/study-groups/{id}/join/',
    LEAVE: '/study-groups/{id}/leave/',
    MEMBERS: '/study-groups/{id}/members/',
  },
  
  // User endpoints
  USER: {
    PROFILE: '/users/me/',
    EVENTS: '/users/me/events/',
    WELLNESS: '/users/me/wellness-check/',
  },
  
  // Planner endpoints
  PLANNER: {
    TASKS: '/planner/tasks/',
    EVENTS: '/planner/events/',
  },
};

export default API_CONFIG;

// Helper function to create URL with path parameters
export function createUrl(template: string, params: Record<string, string>) {
  let url = template;
  Object.keys(params).forEach(key => {
    url = url.replace(`{${key}}`, params[key]);
  });
  return url;
}
