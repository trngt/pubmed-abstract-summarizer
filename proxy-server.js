const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/proxy/:pubmedID', async (req, res) => {
  const { pubmedID } = req.params;
  const url = `https://pubmed.ncbi.nlm.nih.gov/${pubmedID}`;

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    console.error(`Proxy server error fetching website content: `, error);
    res.status(500).send('Unable to fetch website content.');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening at http://localhost:${PORT}`);
});
