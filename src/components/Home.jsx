import CardPlus from './CardMini';
import data from '../data'
import CardMain from './Card';

export default function Home(){
    // const cards = data.map(item => {
    //     return(<CardPlus
    //                 key = {item.id}
    //                 item = {item}      
    //       />)
    //   })

    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CardMain/>
            <CardMain/>
            <CardMain/>

        </div>
    )  
}