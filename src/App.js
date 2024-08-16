import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Index from './Components/Index'
import Login from './Components/Login'
import Accredited from './Components/Accredited'
import Acdash from './Components/Acdash'
import Acdash2 from './Components/Acdash2'
import Admin from './Components/Admin'
import Happiness from './Components/Happiness'
import Lastpage from './Components/Lastpage'
import Pardash from './Components/Pardash'
import Parent from './Components/Parent'
import Quotient from './Components/Quotient'
import Signup from './Components/Signup'
import Studash from './Components/Studash'
import Student from './Components/Student'
import Teacher from './Components/Teacher'
import Teadash from './Components/Teadash'
import Top10 from './Components/Top10'
import Top10states from './Components/Top10states'
import {BrowserRouter} from 'react-router-dom';


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}></Route>
      <Route path='Login' element={<Login/>}></Route>
      <Route path='Accredited' element={<Accredited/>}></Route>
      <Route path='Acdash' element={<Acdash/>}></Route>
      <Route path='Acdash2' element={<Acdash2/>}></Route>
      <Route path='Admin' element={<Admin/>}></Route>
      <Route path='Happiness' element={<Happiness/>}></Route>
      <Route path='Lastpage' element={<Lastpage/>}></Route>
      <Route path='Pardash' element={<Pardash/>}></Route>
      <Route path='Parent' element={<Parent/>}></Route>
      <Route path='Quotient' element={<Quotient/>}></Route>
      <Route path='Signup' element={<Signup/>}></Route>
      <Route path='Studash' element={<Studash/>}></Route>
      <Route path='Student' element={<Student/>}></Route>
      <Route path='Teacher' element={<Teacher/>}></Route>
      <Route path='Teadash' element={<Teadash/>}></Route>
      <Route path='Top10' element={<Top10/>}></Route>
      <Route path='Top10states' element={<Top10states/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}
export default App;