const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => res.redirect(301, 'https://github.com/michalkrupa/csc-317-hw2-four-algorithms'));

// Route for Typesetting
app.get("/typesetting", (req, res) => res.redirect(301, 'https://github.com/michalkrupa/csc317-typesetting'));

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => res.redirect(301, 'https://github.com/brennafulop/climate-crisis'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});