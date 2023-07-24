

import PapersView from './components/PapersView';
import Image from './components/Img';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import axios from 'axios';
import PaperView from './components/PaperView';
import NotesView from './components/NotesView';
import UnitQuestionsView from './components/UnitQuestionsView';
import AdminView from './components/AdminView';
import Login from './components/Login';
import { AuthProvider } from './components/Auth';
import { RequireAuth } from './components/RequireAuth';
import Home from './components/Home';
import data from './data';


axios.defaults.baseURL = 'http://localhost:3000'
const loggedIn = window.localStorage.getItem('isLoggedIn')

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/papers' element={<PapersView />} />
          <Route path='/paper' element={<PaperView PaperData={data[0]} />} />
          <Route path='/note' element={<NotesView />} />
          <Route path='/unitquestion' element={<UnitQuestionsView />} />
          <Route path='/admin' element={loggedIn ? <AdminView /> : <RequireAuth><AdminView /></RequireAuth>} />
          <Route path='/login' element={<Login />} />
        </Route>

      </Routes>
    </AuthProvider>

  );
}

export default App;
