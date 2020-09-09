import { Request, Response } from "express";

import { db } from "../database/connection";
import { logError } from '../utils/logError'

export function redirect(req: Request, res: Response) {
    const id = req.params.id;

    db('url').where('id', parseInt(id, 36).toString(36)).then(rows => {
        return res.redirect(rows[0].to);
    }).catch(err => {
        logError(err);
        return res.status(500).json({
            message: 'Ocorreu um erro inesperado'
        });
    });
}