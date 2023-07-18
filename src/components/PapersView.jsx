
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
       <h1>Hi</h1>
    )  
}