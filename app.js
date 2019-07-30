const express = require('express');
const app = express();
const router = require('./router');
app.set('view engine', 'ejs');

app.listen('8080', () => {
    console.log('http://127.0.0.1:8080/');
})
app.use('/views', express.static('views'));
app.use('/assets', express.static('assets'));
app.use(router);
// app.use('/views', express.static('views'));
// app.use('/assets', express.static('assets'));
// app.set('view engine', 'ejs');
// app.get('/index.html', function (req, res) {
//     fs.readFile('./data/heros.json', "utf-8", (err, data) => {
//         if (err) console.log(err);
//         let arr = JSON.parse(data);
//         res.render('index', { array: arr })
//     })
// })
// app.get('/add.html', function (req, res) {
//     res.render('add', {});
// })