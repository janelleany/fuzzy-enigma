// === HTTP service ===
const express = require('express');
const app = express();
const path = require('path');
const serveStatic = require('serve-static');

// maps contents of root directory to the site's root
app.use(serveStatic('./'));


// start listening 
app.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});