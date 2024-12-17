import { LayoutList } from 'lucide-react';
import { PhotoCardList } from '../components/PhotoCardList';

export function Photos() {
   return (
      <div className='flex flex-col gap-7 p-5 rounded-lg border border-zinc-800'>
         <h2 className='flex justify-center items-center gap-4 text-[28px]'>
            <LayoutList size={26} />
            Lista de cartões com foto e texto
         </h2>
         <PhotoCardList />
      </div>
   );
}
