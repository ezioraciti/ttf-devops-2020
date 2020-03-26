import chai from 'chai';
import {convert} from './Service';
import { hex2cmykTestData } from '../../../commons/src/test-data/colors'

chai.config.includeStack = true;
const should = chai.should();

//TODO --FATTO
describe('test suite description', () => {
    hex2cmykTestData.forEach((test) => {
        it(`test case description`, () => {
            convert(test.hexValue).should.deep.equal(test.cmykValue);
        });
    });
});
