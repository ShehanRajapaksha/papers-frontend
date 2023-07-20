import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext} from './Auth';

export const RequireAuth = ({children})=>{
    const auth = useContext(AuthContext)

    if(!auth.user){
        return <Navigate to='/login' />
    }
    return children
}
