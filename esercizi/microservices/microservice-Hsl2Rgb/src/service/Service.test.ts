import chai from 'chai';
import {convert} from './Service';
import { hsl2rgbTestData } from "../../../commons/src/test-data/colors";

chai.config.includeStack = true;
const should = chai.should();

//TODO --FATTO
describe('test suite description', () => {
    hsl2rgbTestData.forEach((test) => {
        it(`test case description`, async () => {
            let result = await convert(test.hslValue);
            convert(test.hslValue).should.deep.equal(test.rgbValue);
        });
    });
});
