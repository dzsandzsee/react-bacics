
import { useState } from 'react';
import './App.css';
import Text from './components/Text';

function App() {
  const texts = [
    {
      content: "Codecool",
      color: "red"
    },
    {
      content: "Frontend",
      color: "blue"
    },
    {
      content: "Course",
      color: "green"
    }
  ]

  const [clicked, setClicked] = useState(false);

  return (
    <div className="App">
     
     {clicked ? texts.map((text, index) => <Text key={index} content={text.content} color={text.color} />) : <button onClick={() => setClicked(true)}>show content</button>}
     
    </div>
  );
}

export default App;
