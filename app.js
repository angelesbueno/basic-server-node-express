const express = require('express')
const app = express()
var cors = require('cors')
const referrerPolicy = require('referrer-policy')
const port = 80
const _app_folder = 'dist/demo';

app.use(cors())
app.use(referrerPolicy({ policy: 'unsafe-url' }))

// ---- SERVE STATIC FILES ---- //
app.get('*.*', express.static(_app_folder, { maxAge: '1y' }));
// ---- SERVE APLICATION PATHS ---- //
app.get('*', function (req, res) {
    res.status(200).sendFile(`/`, { root: _app_folder });
});

// app.get('/', (req, res) => {
//     res.send('URL OK/KO')
// })
app.post('/ko', (req, res) => {
    res.send('URL KO')
})

app.post('/ok', (req, res) => {
    res.send('URL OK')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




