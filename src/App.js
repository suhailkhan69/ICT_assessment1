
import './App.css';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Add from './components/Add';
import './components/Style.css'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Blogs />}></Route>
        <Route path='/add' element={<Add />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
