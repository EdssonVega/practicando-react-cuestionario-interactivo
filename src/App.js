import Navbarsection from './components/navbar.js';
import IntroductionSection from './components/introduction.js';
import PublicitySection from './components/publicity.js';
import FormSection from './components/publicity cards/form.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbarsection />
      <IntroductionSection />
      <PublicitySection />
      <FormSection />
    </div>
  );
}

export default App;
