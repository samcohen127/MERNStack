import './App.css';
import Form from './components/Form';
import Todo from './components/Todo';
import { useState } from 'react'
import Header from './components/Header';

function App() {
  const [todoList, setTodoList] = useState([])

  return (
    <div className="App">
      <Header />
      <Form todoList={todoList} setTodoList={setTodoList} />
      {
        todoList.map((todo, index) => {
          return <Todo
            key={index}
            index={index}
            todo={todo}
            todoList={todoList}
            setTodoList={setTodoList} />
        })
      }
    </div>
  );
}

export default App;
