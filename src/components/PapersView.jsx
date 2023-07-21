import CardMain from './Card';
import data from '../data'

export default function PapersView(){
    const cards = data.map(item => {
        return(<CardMain
                    key = {item.id}
                    item = {item}      
          />)
      })

    return(
        <div className="flex item-center justify-center min-h-screen container mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {cards}
            </div>            
        </div>
    )  
}