// import axios from 'axios';

// export const fetchConvertedEMI = async (amount, fromCurrency, toCurrency) => {
//     const apiKey = process.env.REACT_APP_EXCHANGE_API_KEY;
//     console.log('API Key:', apiKey); // check in the console if it's working
    
//     const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/INR`;
    

//   try {
//     const response = await axios.get(url);
//     const rate = response.data.conversion_rate;
//     return (amount * rate).toFixed(2);
//   } catch (error) {
//     console.error('Currency conversion error:', error);
//     throw error;
//   }
// };
// import axios from 'axios';

// export const fetchConvertedEMI = async (amount, fromCurrency, toCurrency) => {
//     const apiKey = process.env.REACT_APP_EXCHANGE_API_KEY;
//     console.log('API Key:', apiKey); // for debugging

//     const url = `https://v6.exchangerate-api.com/v6/9d23602f51481a3b09bdcb2a/latest/USD`;
    
//     try {
//         const response = await axios.get(url);
//         const rate = response.data.conversion_rate;
//         return (amount * rate).toFixed(2);
//     } catch (error) {
//         console.error('Currency conversion error:', error);
//         throw error;
//     }
    
// };
import axios from 'axios';

export const fetchConvertedEMI = async (amount, fromCurrency, toCurrency) => {
  const apiKey = process.env.REACT_APP_EXCHANGE_API_KEY;

  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  try {
    const response = await axios.get(url);

    const rate = response.data.conversion_rates[toCurrency]; // ✅ fixed key here

    if (!rate) {
      throw new Error('Currency conversion rate not found');
    }

    return (amount * rate).toFixed(2);
  } catch (error) {
    console.error('Currency conversion error:', error);
    throw error;
  }
};
