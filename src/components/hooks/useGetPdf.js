import  { useState,useEffect } from "react";

export const useGetPdf = (fileUrl)=>{
    const [loading,setLoading]=useState(true)
    const [error,setError] = useState('')
    const [file,setFile]=useState()

    const  fetchPdf =async()=>{
        try {
            const res = await fetch(fileUrl)

            if (res.ok && res.headers.get('content-type') === 'application/pdf') {
                setFile(fileUrl)
              } else {
                setError('Failed to fetch PDF');
              }

        } catch (error) {
            setError('An Error Occured. Try Refreshing the Page!')
            
        }finally{
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchPdf();
      }, []);

    return[loading,error,file]
}