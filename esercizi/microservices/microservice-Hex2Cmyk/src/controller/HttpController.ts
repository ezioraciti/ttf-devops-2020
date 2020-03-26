import {convert} from '../service/Service';
import {Express} from 'express';
import { TtfHex } from '../../../commons/src/model/Color';
import { TtfCmyk } from '../../../commons/src/model/Color';

//TODO --FATTO
class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color = JSON.parse(req.query.color) as TtfHex;
            const convertedColor: TtfCmyk = convert(color);

            res.send(convertedColor);
        });
    }
}

export default HttpController;
