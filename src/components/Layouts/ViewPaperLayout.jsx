import React from 'react'
import Header from '../Header'
import ViewPaper from '../ViewPaper'
import Footer from '../Footer'
import data from '../../data'



const ViewPaperLayout = ()=>{
    return(
    <div className='min-h-screen flex flex-col' >
        <header>
            <Header/>
        </header>
        <div className='flex-grow p-2'>
            <ViewPaper PaperData={data[0]}/>
        </div>
        <hr/>
       <Footer/>
    </div>
    
    )
}

export default ViewPaperLayout