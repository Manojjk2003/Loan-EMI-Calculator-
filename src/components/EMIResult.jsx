import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from '@mui/material';
import { fetchConvertedEMI } from '../hooks/useCurrencyConverter';

const countries = [
  { name: 'United States', currency: 'USD' },
  { name: 'India', currency: 'INR' },
  { name: 'Eurozone', currency: 'EUR' },
  { name: 'United Kingdom', currency: 'GBP' },
  { name: 'Australia', currency: 'AUD' },
];

function EMIResult({ emi, baseCurrency = 'USD' }) {
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [converted, setConverted] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!emi) return;
    setLoading(true);
    setError('');
    fetchConvertedEMI(emi, baseCurrency, selectedCurrency)
      .then(setConverted)
      .catch(() => setError('Conversion failed'))
      .finally(() => setLoading(false));
  }, [emi, baseCurrency, selectedCurrency]);

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <Card sx={{ mt: 4 }} elevation={2}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          EMI Result
        </Typography>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Select Country</InputLabel>
          <Select
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            label="Select Country"
          >
            {countries.map((country) => (
              <MenuItem key={country.currency} value={country.currency}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Typography>
          Monthly EMI: {emi} {baseCurrency}
        </Typography>

        {loading ? (
          <Typography sx={{ mt: 1 }}>
            <CircularProgress size={20} sx={{ mr: 1 }} />
            Loading conversion...
          </Typography>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <Typography>
            Converted EMI: {converted} {selectedCurrency}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default EMIResult;
