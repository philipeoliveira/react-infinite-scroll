import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PhotoProps } from '../types/photo';

const LIMIT_PER_PAGE = 50;
const page = 1;

const fetchPhotos = async () => {
   const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${LIMIT_PER_PAGE}`
   );
   const data: PhotoProps[] = response.data;
   return data;
};

export function usePhotosApi() {
   const query = useQuery({
      queryKey: ['photos'],
      queryFn: fetchPhotos,
      retry: 1,
   });

   return query;
}
