const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample User Data
let users = [
    { userUniqueId: "1", userName: "Emmanuel Michael", userEmail: "emmanuelmichaelpk3@gmail", userAge: "27" },
    { userUniqueId: "2", userName: "Hypertek", userEmail: "emmanuel@gmail.com", userAge: "24" },
    { userUniqueId: "3", userName: "Hypertek", userEmail: "emmanuelmichael@gmail.com", userAge: "24" }
];

// Home Route - Display users
app.get('/', (req, res) => {
    res.render("home", { data: users });
});

// Add User Route
app.post('/', (req, res) => {
    const newUser = {
        userUniqueId: req.body.userUniqueId,
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userAge: req.body.userAge
    };

    users.push(newUser);
    res.render("home", { data: users });
});

// Delete User Route
app.post('/delete', (req, res) => {
    const requestedUserUniqueId = req.body.userUniqueId;
    users = users.filter(user => user.userUniqueId !== requestedUserUniqueId);

    res.render("home", { data: users });
});

// Update User Route
app.post('/update', (req, res) => {
    users.forEach(user => {
        if (user.userUniqueId === req.body.userUniqueId) {
            user.userName = req.body.userName;
            user.userEmail = req.body.userEmail;
            user.userAge = req.body.userAge;
        }
    });

    res.render("home", { data: users });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
