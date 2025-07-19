const express = require ('express');
const bodyParser = require ('body-parser');
const PORT = 3000


// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));





app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})