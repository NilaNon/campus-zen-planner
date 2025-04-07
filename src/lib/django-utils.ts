
// Utility functions for working with Django data

/**
 * Convert dates from Django format to JavaScript Date objects
 */
export function parseDjangoDate(dateString: string): Date {
  return new Date(dateString);
}

/**
 * Format data for sending to Django API
 */
export function formatForDjango(data: any): any {
  // Make a copy to avoid modifying the original
  const formattedData = { ...data };
  
  // Convert JavaScript Date objects to ISO strings for Django
  Object.keys(formattedData).forEach(key => {
    if (formattedData[key] instanceof Date) {
      formattedData[key] = formattedData[key].toISOString();
    }
  });
  
  return formattedData;
}

/**
 * Create form data for file uploads to Django
 */
export function createFormDataForDjango(data: any, files?: Record<string, File>): FormData {
  const formData = new FormData();
  
  // Add regular data fields
  Object.keys(data).forEach(key => {
    if (data[key] !== undefined && data[key] !== null) {
      // Convert objects/arrays to JSON strings
      if (typeof data[key] === 'object' && !(data[key] instanceof Date) && !(data[key] instanceof File)) {
        formData.append(key, JSON.stringify(data[key]));
      } else if (data[key] instanceof Date) {
        formData.append(key, data[key].toISOString());
      } else {
        formData.append(key, data[key].toString());
      }
    }
  });
  
  // Add files
  if (files) {
    Object.keys(files).forEach(key => {
      formData.append(key, files[key]);
    });
  }
  
  return formData;
}

/**
 * Parse Django error responses
 */
export function parseDjangoErrors(error: any): Record<string, string[]> {
  if (error.response && error.response.data) {
    return error.response.data;
  }
  return { non_field_errors: ['An unexpected error occurred'] };
}
