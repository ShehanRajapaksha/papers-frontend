
import CardMain from './components/Card';
import Footer from './components/Footer';
import PapersView from './components/PapersView';
import Image from './components/Img';
import data from './data'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        
      </Route>

    </Routes>
  );
}

export default App;
