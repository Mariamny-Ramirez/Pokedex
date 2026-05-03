const express = require('express');
const app = express();
const port = 80;

const apiRoutes = require('./src/routes/api');
const webRoutes = require('./src/routes/web');

app.use('/api', apiRoutes);
app.use('/web', webRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});