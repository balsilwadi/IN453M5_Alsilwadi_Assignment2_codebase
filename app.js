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
    cookie: { secure: false }
}));

app.post('/login', async (req, res) => {

        const { server, database, username, password } = req.body;
        const business = new BusinessLayer({  host: 'localhost',
        user: 'IN453A',
        password: 'passwordA',
        database: 'IN453' });
        await business.initialize();
        req.session.username = username;
        res.sendStatus(200);
    
    // } catch (error) {
    //     res.status(500).send("Login failed: " + error.message);
    // }
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
