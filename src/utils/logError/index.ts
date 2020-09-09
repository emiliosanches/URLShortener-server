import fs from 'fs';
import path from 'path';

export function logError(err: any): string {
    const message = `[${(new Date()).toISOString()}]\n${err}\n--------------\n\n`
    fs.appendFileSync(path.resolve(__dirname, '..', '..', '..', 'logs', 'logs.txt'), message);
    return message;
}