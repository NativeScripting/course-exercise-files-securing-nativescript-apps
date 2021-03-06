require('dotenv').load();
import * as express from 'express';
import { Express, Router, Request, Response } from "express";
import * as bodyParser from 'body-parser';
import * as expressJwt from 'express-jwt';
import * as fs from 'fs';
import * as https from 'https';

import { getPlayers, getPlayerById } from './app/players/controller';
import { registerUser, loginUser } from './app/users/controller';

const app: Express = express();

const jwtCheckMiddleware = expressJwt({
    secret: process.env['SECRET']
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8080;

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hi there, welcome to NativeScripting' });
});

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/players', jwtCheckMiddleware, getPlayers);
router.get('/players/:id', jwtCheckMiddleware, getPlayerById);

app.use('/api', router);

//app.listen(port);

const httpsPort = 8443;

const httpsServer = https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app);

httpsServer.listen(httpsPort);
