import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import Header from './components/Header';
import Box from './components/Box';

function App() {
  const [colors, setColors] = useState([])

  const boxStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  }

  return (
    <div className="App">
    <Header/>
      <Form colors={colors} setColors={setColors} />
      <div style={boxStyle}>
        {
          colors.map((color, index) => {
            return <Box key={index} color={color}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
