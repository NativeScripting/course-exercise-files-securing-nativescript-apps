import * as express from 'express';
import { Express, Router, Request, Response } from "express";
import { getPlayers, getPlayerById } from './app/players/controller';

const app: Express = express();

const port = 8080;

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hi there, welcome to NativeScripting' });
});

router.get('/players', getPlayers);
router.get('/players/:id', getPlayerById);

app.use('/api', router);

app.listen(port);
