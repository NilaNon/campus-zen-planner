
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userApi } from '@/api/apiService';

export function useCurrentUser() {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: userApi.getCurrentUser,
  });
}

export function useUpcomingEvents() {
  return useQuery({
    queryKey: ['upcomingEvents'],
    queryFn: userApi.getUpcomingEvents,
  });
}

export function useProfileUpdate() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: userApi.updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    },
  });
}

export function useWellnessCheck() {
  return useMutation({
    mutationFn: userApi.recordWellnessCheck,
  });
}
