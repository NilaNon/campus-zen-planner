
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { studySpacesApi } from '@/api/apiService';

export function useStudySpaces() {
  return useQuery({
    queryKey: ['studySpaces'],
    queryFn: studySpacesApi.getAllSpaces,
  });
}

export function useStudySpace(id: string) {
  return useQuery({
    queryKey: ['studySpace', id],
    queryFn: () => studySpacesApi.getSpaceById(id),
    enabled: !!id,
  });
}

export function useSpaceCheckIn() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (spaceId: string) => studySpacesApi.checkInToSpace(spaceId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['studySpaces'] });
    },
  });
}
