import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { CommentProps } from '../types/comment';

const LIMIT_PER_PAGE = 50;
const page = 1;

const fetchComments = async () => {
   const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${LIMIT_PER_PAGE}`
   );
   const data: CommentProps[] = response.data;
   return data;
};

export function useCommentsApi() {
   const query = useQuery({
      queryKey: ['comments'],
      queryFn: fetchComments,
      retry: 1,
   });

   return query;
}
