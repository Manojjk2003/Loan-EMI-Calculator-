import { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import EMIResult from './components/EMIResult';

function App() {
  const [emi, setEmi] = useState(null);

  return (
    <div>
      <h1>Loan Calculator</h1>
      <CalculatorForm onCalculate={setEmi} />
      {emi && <EMIResult emi={emi} />}
    </div>
  );
}

export default App;
