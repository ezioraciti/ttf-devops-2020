"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_convert_1 = __importDefault(require("color-convert"));
//TODO --FATTO
function convert(color) {
    const colorToConvert = color;
    const convertedColor = color_convert_1.default.hex.rgb(colorToConvert.hex);
    return { red: convertedColor[0],
        green: convertedColor[1],
        blue: convertedColor[2] };
}
exports.convert = convert;
//# sourceMappingURL=Service.js.map