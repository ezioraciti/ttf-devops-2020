import {convert} from '../service/Service';
import {Express} from 'express';
import { TtfHsl, TtfRgb } from "../../../commons/src/model/Color";

//TODO --FATTO
class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color = JSON.parse(req.query.color) as TtfHsl;
            const convertedColor: TtfRgb = convert(color);

            res.send(convertedColor);
        });
    }
}

export default HttpController;
