
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
        <div className="grid grid-cols-auto gap-x-0 gap-y-5">
            {cards}
        </div>
    )  
}