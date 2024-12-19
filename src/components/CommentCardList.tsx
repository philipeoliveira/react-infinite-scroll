import { useCommentsApi } from '../services/useCommentsApi';
import { CommentCard } from './CommentCard';

export function CommentCardList() {
   const { data, isLoading, isError, error } = useCommentsApi();

   if (isLoading) return <p className='text-center'>Carregando...</p>;
   if (isError) {
      console.log(`Erro: ${error.message}`);
      return (
         <div className='text-center'>
            <p>Não foi possível se conectar com a API.</p>
            <p>Tente novamente mais tarde.</p>
         </div>
      );
   }

   return (
      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5'>
         {data &&
            data.map(({ id, name, email, body }) => (
               <CommentCard key={id} id={id} name={name} email={email} body={body} />
            ))}
      </div>
   );
}
