import logo from './logo.svg';
import './App.scss';
import {Routes ,Route} from 'react-router-dom'
import layout from './components/layout'

function App() {
  return (
   <>
   <Routes>
     <Route path="" element={<layout/>}></Route>
    </Routes>
    </>
  );
}

export default App;
