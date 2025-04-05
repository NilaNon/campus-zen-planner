
import { useQuery } from '@tanstack/react-query';
import { fetchStudyGroups } from '@/services/api';

export function useStudyGroups() {
  return useQuery({
    queryKey: ['studyGroups'],
    queryFn: fetchStudyGroups,
  });
}
