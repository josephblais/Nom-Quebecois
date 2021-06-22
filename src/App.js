import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm/InputForm';
import NameResult from './components/NameResult/NameResult';

function App() {
  const [name, setName] = useState({
    prenom: "",
    nomDeFamille: "",
    quebName: "",
  })
  const [showQueb, setShowQueb] = useState(false)

  return (
    <div className="App">
      <img alt={"Queb Logo"} src={"../public/signature-PIV.svg"}></img>
    {!showQueb && <InputForm
      name={name}
      setName={setName}
      setShowQueb={setShowQueb}
    ></InputForm>}
    {showQueb && 
      <NameResult 
        name={name}
        setName={setName}
        setShowQueb={setShowQueb}
        />}
    </div>
    );
  }
  
export default App;
