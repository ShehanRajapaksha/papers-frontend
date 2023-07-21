import CardMini from './CardMini';
import data from '../data'
import { useState } from 'react';

export default function PapersView(){
    const [id,setId] = useState('')
    const cards = data.map(item => {
        return(<CardMini
                    key = {item.id}
                    item = {item}      
          />)
      })

    return(
        <div className="flex item-center justify-center min-h-screen container mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {cards}
            </div>            
        </div>
    )  
}