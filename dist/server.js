import express from 'express';
const app = express();
const port = process.env.PORT || 3499;
app.get('/', (req, res) => {
    res.send(`
        <p>this is <b>HTML</b></p>
    `);
});
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map