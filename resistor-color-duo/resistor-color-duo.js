//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { colorCode } from '../resistor-color/resistor-color';

export const value = ([color1, color2]) => {
   let colorNumber = '';
   colorNumber = '' + colorCode(color1) + colorCode(color2);
   return parseInt(colorNumber);
};
