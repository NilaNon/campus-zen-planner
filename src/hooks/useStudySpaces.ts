
import { useQuery } from '@tanstack/react-query';
import { fetchStudySpaces } from '@/services/api';

export function useStudySpaces() {
  return useQuery({
    queryKey: ['studySpaces'],
    queryFn: fetchStudySpaces,
  });
}
