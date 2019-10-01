//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
export const value = (colors) => {
  if(colors.length > 2) {
    colors.pop();
   }
   let colorNumber = '';
   for (let i = 0; i < colors.length; i++) {
     colorNumber += COLORS.indexOf(colors[i]).toString();
   }
   return parseInt(colorNumber);
};
