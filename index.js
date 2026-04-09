const express = require('express');
const app = express();
const PORT = 3000;
const postRouter = require('./controller/controller')
const checkTime = require('./middlewares/checkTime.js')
const error500 = require ('./middlewares/error500.js')

// Serve static assets
app.use('/images', express.static('public/images'));

app.use(express.json());

app.use(error500);



app.use('posts',checkTime);


// Base route
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

app.use("/post", postRouter)



// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

