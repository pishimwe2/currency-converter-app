async function convertCurrency(from, to, amount) {
  const url = `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${from}&to=${to}&amount=${amount}&language=en`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'd4f46d0639msh957323259aed30dp140dd3jsn2a8c0b5deff2',
      'x-rapidapi-host': 'currency-converter5.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data); // 👈 ADD THIS

    // Check if the expected data exists
    if (data && data.rates && data.rates[to]) {
      return data.rates[to].rate_for_amount;
    } else {
      return 'Error';
    }
  } catch (error) {
    console.error('Fetch error:', error);
    return 'Error';
  }
}