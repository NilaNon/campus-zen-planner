
import { useQuery } from '@tanstack/react-query';
import { fetchResources } from '@/services/api';

export function useResources() {
  return useQuery({
    queryKey: ['resources'],
    queryFn: fetchResources,
  });
}
