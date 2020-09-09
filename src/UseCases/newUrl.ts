import { Request, Response } from "express";

import { db } from "../database/connection";
import { generateNewUniqueId } from "../utils/createUnique";
import { logError } from '../utils/logError';

export function newUrl(req: Request, res: Response) {
    const to = req.body.to;

    const id = generateNewUniqueId();

    db('url').insert({
        id,
        to
    }).then(rows => {
        const newUrl = req.protocol + '://' + req.get('host') + '/' + id
        return res.status(201).json({
            newUrl
        });
    }).catch(err => {
        logError(err);
        return res.status(500).json({
            message: 'Ocorreu um erro inesperado'
        });
    });
}