import { Shallowcopy } from "./toxics/shallow-copy.js";
import { deepcopyDataX, shallowcopyDataX } from "./dataobjects.js";
import { Deepcopy } from "./toxics/deep-copy.js";
import { Calc } from "./toxics/closure.js";
import { ArrayProtoSquare } from "./toxics/prototypes.js";
import { chessCanvas } from "./toxics/canvas.js";

console.log(' ---shallow-copy---');
let shcopy = new Shallowcopy().shallowCopyFn(shallowcopyDataX);
console.log(' Are passed arg object & returned object  reference same = ' + (shcopy == shallowcopyDataX));
console.log(' Is nested object references same as arg & returned object = ' + (shcopy.childobj1 == shallowcopyDataX.childobj1));

console.log(' ---deep-copy---');
let deepcopy = new Deepcopy().deepCopyFn(deepcopyDataX);
console.log(' Are passed arg object & returned object reference same = ' + (deepcopy == deepcopyDataX));
console.log(' Is nested object references same as arg & returned object = ' + (deepcopy.childobj1 == deepcopyDataX.childobj1));
console.log(' Is nested child object references same as arg & returned object = ' + (deepcopy.childobj2.objarray2 == deepcopyDataX.childobj2.objarray2));
console.log(' Is circular reference handled and deep copied are same? = ' + (deepcopy.circular == deepcopyDataX.circular));

console.log(' ---Closures with Modular pattern---');
console.log(" Calc().add(5).sub(2).mul(2).val() = " + Calc().add(5).sub(2).mul(2).val());

console.log(' ---Adding custom function to Array to return sqaured values using Prototype---');
ArrayProtoSquare(); //Execution of this is required for below line to work as I am loading only on demand
console.log(" [2, 4, 6, 9].Square() = ", [2, 4, 6, 9].Square());

console.log(' --- Chess Canvas added to body --');
chessCanvas(4, 3);
console.log(' --- Chess drawn using Canvas: chessCanvas(4, 3) --');


