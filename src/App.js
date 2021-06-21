import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm/InputForm';

function App() {
  const [name, setName] = useState({
    prenom: "",
    nomDeFamille: "",
    quebName: "",
  })
  const [showQueb, setShowQueb] = useState(false)

  return (
    <div className="App">
    <InputForm
      name={name}
      setName={setName}
      setShowQueb={setShowQueb}
    ></InputForm>
    {showQueb && <h2>Tu t'appelles: {name.quebName}</h2>}
    </div>
    );
  }
  
export default App;
