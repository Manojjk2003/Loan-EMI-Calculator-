// import { useState } from 'react';
// import CalculatorForm from './components/CalculatorForm';
// import EMIResult from './components/EMIResult';

// function App() {
//   const [emi, setEmi] = useState(null);

//   return (
//     <div>
//       <h1>Loan Calculator</h1>
//       <CalculatorForm onCalculate={setEmi} />
//       {emi && <EMIResult emi={emi} />}
//     </div>
//   );
// }

// export default App;
// import { useState } from 'react';
// import CalculatorForm from './components/CalculatorForm';
// import EMIResult from './components/EMIResult';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { useMemo } from 'react';
// import Navbar from './components/Navbar';

// function App() {
//   const [emi, setEmi] = useState(null);

//   const handleCalculate = (calculatedEmi) => {
//     setEmi(calculatedEmi);
//   };
//   function App() {
//     const [darkMode, setDarkMode] = useState(false);
  
//     const theme = useMemo(
//       () =>
//         createTheme({
//           palette: {
//             mode: darkMode ? 'dark' : 'light',
//             primary: {
//               main: '#1976d2', // Blue from your screenshot
//             },
//           },
//         }),
//       [darkMode]
//     );
  
//     return (
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//         {/* other components */}
//       </ThemeProvider>
//     );
//   }
//   return (
//     <div>
//       <h2>Loan EMI Calculator</h2>
//       <CalculatorForm onCalculate={handleCalculate} />
//       {emi && <EMIResult emi={emi} baseCurrency="USD" />}
//     </div>
//   );
// }

// export default App;
// import { useState, useMemo } from 'react';
// import CalculatorForm from './components/CalculatorForm';
// import EMIResult from './components/EMIResult';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Navbar from './components/Navbar';

// function App() {
//   const [emi, setEmi] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);

//   const handleCalculate = (calculatedEmi) => {
//     setEmi(calculatedEmi);
//   };

//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode: darkMode ? 'dark' : 'light',
//           primary: {
//             main: '#1976d2', // Blue color
//           },
//         },
//       }),
//     [darkMode]
//   );

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//       <div style={{ padding: '16px' }}>
//         <h2>Loan EMI Calculator</h2>
//         <CalculatorForm onCalculate={handleCalculate} />
//         {emi && <EMIResult emi={emi} baseCurrency="USD" />}
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;
// src/App.jsx

import { useState, useMemo } from 'react';
import CalculatorForm from './components/CalculatorForm';
import EMIResult from './components/EMIResult';
import AmortizationTable from './components/AmortizationTable';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { generateAmortizationSchedule } from './components/amortizationCalculator';


function App() {
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleCalculate = ({ principal, annualRate, months }) => {
    const { emi, schedule } = generateAmortizationSchedule(principal, annualRate, months);
    setEmi(emi);
    setSchedule(schedule);
  };

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
        primary: {
          main: '#1976d2',
        },
      },
    }), [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div style={{ padding: '16px' }}>
        <h2>Loan EMI Calculator</h2>
        <CalculatorForm onCalculate={handleCalculate} />
        {emi && (
          <>
            <EMIResult emi={emi} baseCurrency="USD" />
            <AmortizationTable data={schedule} />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
