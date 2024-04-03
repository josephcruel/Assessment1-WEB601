const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
