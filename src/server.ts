import express from 'express';

const app = express();
const port = process.env.PORT || 3499;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(`
        <p>this is <b>HTML</b></p>
    `);
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
