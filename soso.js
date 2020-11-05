import { Shallowcopy } from "./toxics/shallow-copy.js";
import { deepcopyDataX, shallowcopyDataX } from "./dataobjects.js";
import { Deepcopy } from "./toxics/deep-copy.js";

console.log('---shallow-copy---');
let shcopy = new Shallowcopy().shallowCopyFn(shallowcopyDataX);
console.log('Are passed arg object & returned object  reference same = ' + (shcopy == shallowcopyDataX));
console.log('Is nested object references same as arg & returned object = ' + (shcopy.childobj1 == shallowcopyDataX.childobj1));

console.log('---deep-copy---');
let deepcopy = new Deepcopy().deepCopyFn(deepcopyDataX);
console.log('Are passed arg object & returned object reference same = ' + (deepcopy == deepcopyDataX));
console.log('Is nested object references same as arg & returned object = ' + (deepcopy.childobj1 == deepcopyDataX.childobj1));
console.log('Is nested child object references same as arg & returned object = ' + (deepcopy.childobj2.objarray2 == deepcopyDataX.childobj2.objarray2));
console.log('Is circular reference handled and deep copied are same? = ' + (deepcopy.circular == deepcopyDataX.circular));


