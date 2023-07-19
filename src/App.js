
import CardMain from './components/Card';
import Footer from './components/Footer';
import PapersView from './components/PapersView';
import Image from './components/Img';
import data from './data'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import axios from 'axios';
import PaperView from './components/PaperView';
import NotesView from './components/NotesView';
import UnitQuestionsView from './components/UnitQuestionsView';
import AdminView from './components/AdminView';
import Login from './components/Login';

axios.defaults.baseURL = 'http://localhost:3000'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PapersView />} />
        <Route path='/paper' element={<PaperView />} />
        <Route path='/note' element={<NotesView />} />
        <Route path='/unitquestion' element={<UnitQuestionsView />} />
        <Route path='/admin' element={<AdminView />} />
        <Route path='/login' element={<Login />} />
      </Route>

    </Routes>
  );
}

export default App;
