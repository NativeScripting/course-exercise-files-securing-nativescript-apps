import { Express, Router, Request, Response } from "express";
import { createUser } from "../../../app/data/data-access";

export function registerUser(req: Request, res: Response) {

    const userData = {
        email: req.body.email,
        password: req.body.password
    };

    createUser(userData);

    return res.json({ message: 'User created!' });
}

export function loginUser(req: Request, res: Response) {
    return res.json({ message: 'User logged in!' });
}
