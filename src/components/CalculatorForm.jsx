// import { useState } from 'react';
// import {
//   TextField,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
// } from '@mui/material';

// function CalculatorForm({ onCalculate }) {
//   const [P, setP] = useState('');
//   const [R, setR] = useState('');
//   const [N, setN] = useState('');

//   const calculateEMI = () => {
//     const principal = parseFloat(P);
//     const rate = parseFloat(R) / (12 * 100);
//     const time = parseFloat(N);
//     const emi =
//       (principal * rate * Math.pow(1 + rate, time)) /
//       (Math.pow(1 + rate, time) - 1);
//     if (!isNaN(emi)) {
//       onCalculate(emi.toFixed(2));
//     }
//   };

//   return (
//     <Card sx={{ mt: 4 }} elevation={3}>
//       <CardContent>
//         <Typography variant="h5" gutterBottom>
//           Loan EMI Calculator
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               label="Principal Amount"
//               variant="outlined"
//               fullWidth
//               type="number"
//               value={P}
//               onChange={(e) => setP(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Annual Interest Rate (%)"
//               variant="outlined"
//               fullWidth
//               type="number"
//               value={R}
//               onChange={(e) => setR(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Loan Duration (months)"
//               variant="outlined"
//               fullWidth
//               type="number"
//               value={N}
//               onChange={(e) => setN(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               onClick={calculateEMI}
//             >
//               Calculate EMI
//             </Button>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }

// export default CalculatorForm;

import { useState } from 'react';
import { TextField, Button, Grid, Card, CardContent, Typography } from '@mui/material';

function CalculatorForm({ onCalculate }) {
  const [P, setP] = useState('');
  const [R, setR] = useState('');
  const [N, setN] = useState('');

  const handleSubmit = () => {
    const principal = parseFloat(P);
    const annualRate = parseFloat(R);
    const months = parseFloat(N);

    if (!isNaN(principal) && !isNaN(annualRate) && !isNaN(months)) {
      onCalculate({ principal, annualRate, months });
    }
  };

  return (
    <Card sx={{ mt: 4 }} elevation={3}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Loan EMI Calculator
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Principal Amount"
              variant="outlined"
              fullWidth
              type="number"
              value={P}
              onChange={(e) => setP(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Annual Interest Rate (%)"
              variant="outlined"
              fullWidth
              type="number"
              value={R}
              onChange={(e) => setR(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Loan Duration (Months)"
              variant="outlined"
              fullWidth
              type="number"
              value={N}
              onChange={(e) => setN(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
              Calculate EMI
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CalculatorForm;