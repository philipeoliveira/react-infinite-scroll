import { PhotoProps } from '../types/photo';

export function PhotoCard({ id, title, thumbnailUrl }: PhotoProps) {
   return (
      <div className='flex gap-4 items-center bg-zinc-900 rounded-lg p-6'>
         <img src={thumbnailUrl} alt={`Imagem ${title}`} className='w-20 rounded-full' />
         <div className='flex flex-col gap-2'>
            <h3>
               <span className='font-medium'>Código:</span> {id}
            </h3>
            <p>
               <span className='font-medium'>Título:</span> {title}
            </p>
         </div>
      </div>
   );
}
