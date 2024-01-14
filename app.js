const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const BusinessLayer = require('./business');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, httpOnly: true } // Secure and HttpOnly
}));

// Improved Input Validation
const validateLoginInput = (req, res, next) => {
    const { server, database, username, password } = req.body;
    if (!server || !database || !username || !password) {
        return res.status(400).send('Invalid input');
    }
    next();
};

app.post('/login', validateLoginInput, async (req, res) => {
    try {
        const { server, database, username, password } = req.body;
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const business = new BusinessLayer({ server, database, username, password: hashedPassword });
        await business.initialize();
        req.session.username = username;
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send("Login failed: " + error.message); // Proper error handling
    }
});


app.get('/rowCountIn453A', async (req, res) => {
    
        const business = new BusinessLayer({  host: 'localhost',
        user: 'IN453A',
        password: 'passwordA',
        database: 'IN453' });
        await business.initialize();
        const count = await business.getRowCountIn453A();
        res.json({ count });
});


app.get('/rowCountIn453C', async (req, res) => {
    const business = new BusinessLayer({  host: 'localhost',
    user: 'IN453A',
    password: 'passwordA',
    database: 'IN453' });
    await business.initialize();
    const count = await business.getRowCountIn453C();
    res.json({ count });
});

app.get('/namesIn453B', async (req, res) => {
    const business = new BusinessLayer({  host: 'localhost',
    user: 'IN453A',
    password: 'passwordA',
    database: 'IN453' });
    await business.initialize();
    const names = await business.getConcatenatedNamesIn453B();
    res.json({ names });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
