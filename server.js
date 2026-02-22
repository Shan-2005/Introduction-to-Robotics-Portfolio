import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom body parser with increased limit
server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now();
    }
    // Continue to JSON Server router
    next();
});

// Use router
server.use(router);

server.listen(3001, '0.0.0.0', () => {
    console.log('JSON Server is running on port 3001');
});
