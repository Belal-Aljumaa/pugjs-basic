import express from 'express';
import path from 'path';
const app = express();
const port = process.env.PORT || 3499;
const __dirname = path.resolve(path.dirname(''));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './public/views'));
app.get('/', (req, res) => {
    req.res.send(`
      <h1>Home</h1>
      <p>go to the <a href="/info">info page</a></p>
  `);
});
app.get('/info', (req, res) => {
    req.res.send(`
      <h1>Info</h1>
      <p>go back <a href="/">home</a></p>
  `);
});
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map