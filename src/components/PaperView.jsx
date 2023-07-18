import React,{ useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import CardMain from './Card';
import data from '../data';

const ViewPaper=({PaperData})=>{
    const{grade,subject,year,category,marking}=PaperData
   

      const [page, setPage] = useState(1);
      const canvasRef = useRef(null);
    
      const { pdfDocument, pdfPage } = usePdf({
        file: 'Report-Group10.pdf',
        page,
        canvasRef,
        scale:1
      });

    return(

            <div class="max-w-screen-lg mx-auto  ">

                


                <main class="mt-10 whitespace-normal bg-white">

                <div class="mb-4 md:mb-0 w-full mx-auto relative">
                    <div class="px-4 lg:px-4 py-8">
                    <h2 class=" font-bold text-gray-800 leading-tight pb-3 text-5xl ">
                       {year} Grade {grade} {subject} Paper
                    </h2>
                    <div className='flex flex-row'>
                        {marking && (
                        <span className="py-1  px-2 inline-flex items-center justify-center mb-2 border-green-400 border-2 bg-light-green-100 text-green-400 font-semibold rounded-md shadow-sm hover:bg-green-200 transition-colors text-xs ">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            >
                            <circle cx="10" cy="10" r="5" />
                            </svg>
                            Marking 
                        </span>
                        )}
                        <span className="mx-4 py-1 px-2 inline-flex items-center justify-center mb-2 border-gray-400 border-2 bg-gray-100 text-gray-600 font-semibold rounded-md shadow-sm hover:bg-gray-200 transition-colors text-xs">
                            {/* {category} */} Advanced Level
                        </span>
                    </div>
                                
                    <div className="flex items-center justify-center pt-4">
                         <hr className="w-80 border-1 border-gray-500" />
                    </div>
                    </div>

                
                </div>
                <div className="mb-4 md:mb-0 w-full mx-auto relative mt-16   justify-center items-center ">
                    {!pdfDocument && <span>Loading...</span>}
                    <div className=' flex justify-center items-center'>
                    <canvas ref={canvasRef} className='border-2 border-black shadow-md p-2 relative z-0  ' />
                    </div>
                    
                    {Boolean(pdfDocument && (pdfDocument.numPages)!==1) && (
                      
                        <nav>
                        <div className="flex items-center gap-8 justify-center z-10 p-3 ">
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
                    <div className='flex justify-center -mt-4'>
                    <h2 class="text-3xl font-semibold text-gray-800 leading-tight pt-36 px-6">
                        Download Paper and Marking
                       
                    </h2>
                    </div>
                  
                    <div className=' flex  justify-center '>
                        <svg
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 240 100"
                            width="240"
                            height="100"
                            >
                            <path
                                style={{ fill: '#59C41C' }}
                                d="M230.134,94.282H35.993c-3.528,0-6.389-2.86-6.389-6.389V46.56c0-3.528,2.86-6.389,6.389-6.389 h194.141c3.529,0,6.389,2.86,6.389,6.389v41.334C236.523,91.422,233.663,94.282,230.134,94.282z"
                            />
                            <path
                                style={{ fill: '#FFFFFF' }}
                                d="M178.501,85.869V48.584c0-2.488,2.017-4.505,4.505-4.505h45.16c2.488,0,4.505,2.017,4.505,4.505 v37.284c0,2.488-2.017,4.505-4.505,4.505h-45.16C180.518,90.373,178.501,88.356,178.501,85.869z"
                            />
                            <g>
                                <polyline
                                style={{
                                    fill: 'none',
                                    stroke: '#59C41C',
                                    strokeWidth: 4,
                                    strokeLinejoin: 'round',
                                    strokeMiterlimit: 10,
                                }}
                                points="216.327,60.576 210.956,66.032 205.585,71.489 200.215,66.032 194.844,60.576"
                                />
                                <polyline
                                style={{
                                    fill: 'none',
                                    stroke: '#59C41C',
                                    strokeWidth: 4,
                                    strokeLinejoin: 'round',
                                    strokeMiterlimit: 10,
                                }}
                                points="216.946,71.489 216.946,79.712 194.225,79.712 194.225,71.489"
                                />
                                <line
                                style={{
                                    fill: 'none',
                                    stroke: '#59C41C',
                                    strokeWidth: 4,
                                    strokeLinejoin: 'round',
                                    strokeMiterlimit: 10,
                                }}
                                x1="205.585"
                                y1="71.489"
                                x2="205.585"
                                y2="50.576"
                                />
                            </g>
                            <text
                                transform="matrix(1 0 0 1 43.5405 66.1528)"
                                style={{ fill: '#FFFFFF', fontFamily: 'MontserratRoman-ExtraBold', fontSize: '18.5012px' }}
                            >
                                DOWNLOAD
                            </text>
                            <text
                                transform="matrix(1 0 0 1 75.5405 84.0083)"
                                style={{ fill: '#FFFFFF', fontFamily: 'MontserratRoman-SemiBold', fontSize: '17.8635px' }}
                            >
                                Paper
                            </text>
                        </svg>
                        <svg
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 240 100"
                            width="240"
                            height="100"
                            >
                            <path
                                style={{ fill: '#59C41C' }}
                                d="M230.134,94.282H35.993c-3.528,0-6.389-2.86-6.389-6.389V46.56c0-3.528,2.86-6.389,6.389-6.389 h194.141c3.529,0,6.389,2.86,6.389,6.389v41.334C236.523,91.422,233.663,94.282,230.134,94.282z"
                            />
                            <path
                                style={{ fill: '#FFFFFF' }}
                                d="M178.501,85.869V48.584c0-2.488,2.017-4.505,4.505-4.505h45.16c2.488,0,4.505,2.017,4.505,4.505 v37.284c0,2.488-2.017,4.505-4.505,4.505h-45.16C180.518,90.373,178.501,88.356,178.501,85.869z"
                            />
                            <g>
                                <polyline
                                style={{
                                    fill: 'none',
                                    stroke: '#59C41C',
                                    strokeWidth: 4,
                                    strokeLinejoin: 'round',
                                    strokeMiterlimit: 10,
                                }}
                                points="216.327,60.576 210.956,66.032 205.585,71.489 200.215,66.032 194.844,60.576"
                                />
                                <polyline
                                style={{
                                    fill: 'none',
                                    stroke: '#59C41C',
                                    strokeWidth: 4,
                                    strokeLinejoin: 'round',
                                    strokeMiterlimit: 10,
                                }}
                                points="216.946,71.489 216.946,79.712 194.225,79.712 194.225,71.489"
                                />
                                <line
                                style={{
                                    fill: 'none',
                                    stroke: '#59C41C',
                                    strokeWidth: 4,
                                    strokeLinejoin: 'round',
                                    strokeMiterlimit: 10,
                                }}
                                x1="205.585"
                                y1="71.489"
                                x2="205.585"
                                y2="50.576"
                                />
                            </g>
                            <text
                                transform="matrix(1 0 0 1 43.5405 66.1528)"
                                style={{ fill: '#FFFFFF', fontFamily: 'MontserratRoman-ExtraBold', fontSize: '18.5012px' }}
                            >
                                DOWNLOAD
                            </text>
                            <text
                                transform="matrix(1 0 0 1 65.5405 82.0083)"
                                style={{ fill: '#FFFFFF', fontFamily: 'MontserratRoman-SemiBold', fontSize: '17.5012px' }}
                            >
                                Marking
                            </text>
                        </svg>
                    
                 </div>
                </div>
               
                <div className="flex items-center justify-center px-10 ">
                         <hr className="border-1   border-gray-500 " />
                </div>
                <h2 class="text-3xl font-semibold text-gray-800 leading-tight pt-36 px-6">
                        You may also want to look at ...
                        <hr className='bg-gray-500'/>
                    </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">

                    <div className="bg-white shadow-md rounded-lg p-4">
                        <CardMain item={data[0]}/>
                    </div>

    
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <CardMain item={data[0]}/>
                    </div>

                
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <CardMain item={data[0]}/>
                    </div>
                </div>

               
                </main>
               
            
                

                        
                
            </div>
    )  
}

export default ViewPaper
