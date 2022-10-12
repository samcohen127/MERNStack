import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form';
import PlayerList from './components/PlayerList';
import Delete from './components/Delete';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/players/list' element={<PlayerList />} />
          <Route path='/form' element={<Form />} />
          <Route path='/delete/:id' element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
