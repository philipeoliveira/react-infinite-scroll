import { usePhotosApi } from '../services/usePhotosApi';
import { PhotoCard } from './PhotoCard';

export function PhotoCardList() {
   const { data, isLoading, isError, error } = usePhotosApi();

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
      <div className='grid grid-cols-3 gap-3'>
         {data &&
            data.map((photo) => (
               <PhotoCard
                  key={photo.id}
                  id={photo.id}
                  title={photo.title}
                  thumbnailUrl={photo.thumbnailUrl}
               />
            ))}
      </div>
   );
}
