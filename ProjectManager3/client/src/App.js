import './App.css';
import Form from './components/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './components/Product';
import ProductList from './components/ProductList';
import EditForm from './components/EditForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />} default/>
          <Route path='/product' element={<ProductList />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/edit/:id' element={<EditForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
