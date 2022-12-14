import express from 'express';
import path from 'path';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = process.env.PORT || 3499;
const __dirname = path.resolve(path.dirname(''));

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './public/views'));

const url = process.env.API_URL;
const books:any = await (await fetch(url)).json();

const siteData = {
  appTitle: 'Tech Book Club',
  pages: [
      {
          title: 'Home',
          path: '/'
      },
      {
          title: 'Info',
          path: '/info'
      }
  ],
  books
}

app.get('/', (req: express.Request, res: express.Response) => {
  res.render('index', { siteData, currentPath: '/' });
});

app.get('/info', (req: express.Request, res: express.Response) => {
  res.render('info', { siteData, currentPath: '/info', idCode: null });
});

app.get('/info/:idCode', (req: express.Request, res: express.Response) => {
  const idCode = req.params.idCode;
  res.render('info', { siteData, currentPath: '/info', idCode, book: books.find((m: any) => m.idCode === idCode) })
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
