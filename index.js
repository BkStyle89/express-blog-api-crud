const express = require('express');
const app = express();
const PORT = 3000;
const postRouter = require('./controller/controller')

// Serve static assets
app.use('/images', express.static('public/images'));

// Base route
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

app.use("/controller", postRouter)



// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

