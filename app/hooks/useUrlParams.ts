// hooks/useUrlParams.ts
import { useSearchParams } from 'next/navigation';

export const useUrlParams = () => {
  const searchParams = useSearchParams();
  const nameFromUrl = searchParams.get('name') || '';
  const guests = parseInt(searchParams.get('guests') || '1', 10);
  return { nameFromUrl, guests };
};
