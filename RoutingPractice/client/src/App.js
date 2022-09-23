import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<h1>Welcome</h1>}/>
          <Route path='/:word' element={<Word/>}/>
          <Route path='/:word/:color/:color2' element={<Word/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
