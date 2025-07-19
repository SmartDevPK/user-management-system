const express = require ('express');
const bodyParser = require ('body-parser');
const app = express ()

const PORT = 3000


// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req, res)=>{
    res.render("home", ({data:users}));
})





app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})