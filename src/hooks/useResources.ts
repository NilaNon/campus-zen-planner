
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { resourcesApi } from '@/api/apiService';

export function useAcademicResources() {
  return useQuery({
    queryKey: ['academicResources'],
    queryFn: resourcesApi.getAcademicResources,
  });
}

export function useWellnessResources() {
  return useQuery({
    queryKey: ['wellnessResources'],
    queryFn: resourcesApi.getWellnessResources,
  });
}

export function useCommunityResources() {
  return useQuery({
    queryKey: ['communityResources'],
    queryFn: resourcesApi.getCommunityResources,
  });
}

export function useResourceDownload() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: resourcesApi.downloadResource,
    onSuccess: () => {
      // Optionally invalidate related queries if needed
      // queryClient.invalidateQueries({ queryKey: ['resources'] });
    },
  });
}
