const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/api/ircc-news', async (req, res) => {
  try {
    const response = await fetch('https://www.canada.ca/en/immigration-refugees-citizenship/news/notices.html');
    const data = await response.text();
    res.send(data);
  } catch (err) {
    res.status(500).send('Error fetching IRCC news');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Backend running on port ${port}`));
