import fs from 'fs';
import path from 'path';


export function generateNewUniqueId(): string {
    const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json')).toString());
    const lastId = data.lastId;
    
    const newId = (parseInt(lastId, 36) + 1).toString(36);

    let parsedId = "";
    
    if (newId.length < 5) {
        for (let i = 0; i < 5 - newId.length; i++) {
            parsedId += "0";
        }

        parsedId += newId;
    }

    const newData = {
        ...data,
        lastId: parsedId
    };

    fs.writeFileSync(path.resolve(__dirname, 'data.json'), JSON.stringify(newData, null, 4));

    return parsedId;
}    