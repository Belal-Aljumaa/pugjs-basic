import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3499;
const __dirname = path.resolve(path.dirname(''));

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './public/views'));

app.get('/', (req: express.Request, res: express.Response) => {
  res.render('index');
});

app.get('/info', (req: express.Request, res: express.Response) => {
  res.render('info');
});
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
