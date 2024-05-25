const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Render backend!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
