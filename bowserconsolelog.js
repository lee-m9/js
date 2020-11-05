
let browserConsole = console.log;
console.log = function (msg) {
    let logid = document.getElementById("logId");
    if (typeof arguments == "object") {
        logid.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments) : arguments) + '<hr/>';
    }
    else {
        logid.innerHTML += arguments + '<hr/>';
    }
    browserConsole.apply(console, arguments);
}