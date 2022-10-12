import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form';
import AuthorList from './components/AuthorList';
import EditForm from './components/EditForm';
import Delete from './components/Delete';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthorList />} />
          <Route path='/form' element={<Form />} />
          <Route path='/edit/:id' element={<EditForm />} />
          <Route path='/delete/:id' element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
