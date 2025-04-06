
/**
 * Utility functions for working with Django backend responses
 */

// Converts Django-style snake_case to JavaScript camelCase
export function toCamelCase(str: string): string {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace('-', '').replace('_', '')
  );
}

// Recursively transforms objects with snake_case keys to camelCase
export function transformKeysToCamelCase(obj: any): any {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(transformKeysToCamelCase);
  }

  return Object.keys(obj).reduce((acc: any, key: string) => {
    const camelKey = toCamelCase(key);
    acc[camelKey] = transformKeysToCamelCase(obj[key]);
    return acc;
  }, {});
}

// Format date from Django backend (YYYY-MM-DD) to readable format
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// Format time from Django backend (HH:MM:SS) to readable format
export function formatTime(timeString: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    hour: 'numeric', 
    minute: 'numeric',
    hour12: true
  };
  
  // Create a dummy date and set the time
  const date = new Date();
  const [hours, minutes] = timeString.split(':').map(Number);
  date.setHours(hours, minutes);
  
  return date.toLocaleTimeString(undefined, options);
}

// Helper to handle Django pagination
export function extractPaginationData(response: any) {
  if (!response || !response.data) {
    return {
      results: [],
      count: 0,
      next: null,
      previous: null
    };
  }

  const { count, next, previous, results } = response.data;
  return {
    results: results ? transformKeysToCamelCase(results) : [],
    count: count || 0,
    next,
    previous
  };
}

// Format Django validation errors
export function formatValidationErrors(error: any): Record<string, string> {
  if (!error.response || !error.response.data) {
    return { _error: 'An unknown error occurred' };
  }

  return transformKeysToCamelCase(error.response.data);
}
