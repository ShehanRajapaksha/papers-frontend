import React,{ useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const ViewPaper=()=>{
   

      const [page, setPage] = useState(1);
      const canvasRef = useRef(null);
    
      const { pdfDocument, pdfPage } = usePdf({
        file: 'Report-Group10.pdf',
        page,
        canvasRef,
        scale:1
      });

    return(

            <div class="max-w-screen-lg mx-auto max-h-screen ">

                


                <main class="mt-10 whitespace-normal bg-white">

                <div class="mb-4 md:mb-0 w-full mx-auto relative">
                    <div class="px-4 lg:px-4 py-8">
                    <h2 class="text-4xl font-semibold text-gray-800 leading-tight pb-3">
                        Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
                    </h2>
                    <a 
                        href="#"
                        class="py-2 text-green-700 inline-flex items-center justify-center mb-2 hover:text-green-500"
                    >
                        Cryptocurrency
                    </a>
                    <div className="flex items-center justify-center">
                         <hr className="w-80 border-1 border-gray-500" />
                    </div>
                    </div>

                
                </div>
                <div className="mb-4 md:mb-0 w-full mx-auto relative mt-16   justify-center items-center  ">
                    {!pdfDocument && <span>Loading...</span>}
                    <div className=' flex justify-center items-center'>
                    <canvas ref={canvasRef} className='border-2 border-black shadow-md p-2 relative z-0  ' />
                    </div>
                    
                    {Boolean(pdfDocument && (pdfDocument.numPages)!==1) && (
                      
                        <nav>
                        <div className="flex items-center gap-8 justify-center z-10 ">
                        <IconButton
                            size="sm"
                            variant="outlined"
                            color="blue-gray"
                            disabled={page === 1} 
                            onClick={() => setPage(page - 1)}
                        >
                            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                        </IconButton>
                        <Typography color="gray" className="font-normal">
                            Page <strong className="text-blue-gray-900">{page}</strong> of{" "}
                            <strong className="text-blue-gray-900">{pdfDocument.numPages}</strong>
                        </Typography>
                        <IconButton
                            size="sm"
                            variant="outlined"
                            color="blue-gray"
                            onClick={() => setPage(page + 1)}
                            disabled={page === pdfDocument.numPages}
                        >
                            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                        </IconButton>
                        </div>
                        </nav>
                    
                    )}
                </div>
            
                </main>

                
                        
                
            </div>
    )  
}

export default ViewPaper