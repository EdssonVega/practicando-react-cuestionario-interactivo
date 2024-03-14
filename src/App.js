import Navbarsection from './components/navbar.js';
import IntroductionSection from './components/introduction.js';
import PublicitySection from './components/publicity.js';
import FormSection from './components/publicity cards/form.js';
import Pop from './components/resultsModal.js';
import { useState } from 'react';
import './App.css';

function App() {

  const [vamos, setvamos] = useState(false)
  
  const finalmenteFuncionara =() =>{
      setvamos(!vamos)
  }

  return (
    <div className="App">
       {vamos==true &&(
            <Pop />
        )} 
      <Navbarsection />
      <IntroductionSection />
      <PublicitySection />
      <FormSection finalmenteFuncionara={finalmenteFuncionara} />
      
    </div>
  );
}

export default App;
