import { shallowCopyFn } from "./toxics/shallow-copy";
import { shallowcopyDataX } from "./dataobjects";

console.log('shallow-copy');
let shcopy = shallowCopyFn(shallowcopyDataX);
console.log('shcopy == shallowcopyDataX:' + (shcopy == shallowcopyDataX));
