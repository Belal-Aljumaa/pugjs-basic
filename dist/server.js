import express from 'express';
import path from 'path';
const app = express();
const port = process.env.PORT || 3499;
const __dirname = path.resolve(path.dirname(''));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './public/views'));
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
    ]
};
app.get('/', (req, res) => {
    res.render('index', { siteData, currentPath: '/' });
});
app.get('/info', (req, res) => {
    res.render('info', { siteData, currentPath: '/info' });
});
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map