import { Express, Router, Request, Response } from "express";
import { createUser, getUser } from "../../../app/data/data-access";
import { hashPassword, verifyPassword, createToken } from "../../../app/shared/util";

export function registerUser(req: Request, res: Response) {

    const hashedPassword = hashPassword(req.body.password);

    const userData = {
        email: req.body.email,
        password: hashedPassword
    };

    createUser(userData);

    return res.json({ message: 'User created!' });
}

export function loginUser(req: Request, res: Response) {
    const user = getUser(req.body.email);


    if (user) {
        const passwordMatches = verifyPassword(req.body.password, user.password);
        if (passwordMatches) {

            const jwt = createToken(user);

            return res.json({ message: 'User logged in!', access_token: jwt });
        } else {
            res.status(403).json({
                message: 'Wrong email or password.'
            });
        }
    } else {
        res.status(403).json({
            message: 'Wrong email or password.'
        });
    }


}
