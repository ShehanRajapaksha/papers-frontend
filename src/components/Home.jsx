import CardPlus from './CardPlus';
import data from '../data'

export default function Home(){
    const cards = data.map(item => {
        return(<CardPlus
                    key = {item.id}
                    item = {item}      
          />)
      })

    return(
        <div className="flex item-center justify-center container mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
                {cards}
            </div>            
        </div>
    )  
}