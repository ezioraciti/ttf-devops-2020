import colorConverter from 'color-convert'
import { TtfHex, TtfCmyk } from '../../../commons/src/model/Color'

//TODO --FATTO
export function convert(color: TtfHex): TtfCmyk {
    const colorToConvert: TtfHex = color;
    const convertedColor = colorConverter.hex.cmyk(colorToConvert.hex);
    return {cyan: convertedColor[0], 
            magenta: convertedColor[1], 
            yellow: convertedColor[2], 
            black: convertedColor[3]} as TtfCmyk;
}
