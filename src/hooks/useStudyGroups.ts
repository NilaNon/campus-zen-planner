
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { studyGroupsApi } from '@/api/apiService';

export function useStudyGroups() {
  return useQuery({
    queryKey: ['studyGroups'],
    queryFn: studyGroupsApi.getAllGroups,
  });
}

export function useStudyGroup(id: string) {
  return useQuery({
    queryKey: ['studyGroup', id],
    queryFn: () => studyGroupsApi.getGroupById(id),
    enabled: !!id,
  });
}

export function useCreateStudyGroup() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: studyGroupsApi.createGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['studyGroups'] });
    },
  });
}

export function useJoinStudyGroup() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: studyGroupsApi.joinGroup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['studyGroups'] });
    },
  });
}
