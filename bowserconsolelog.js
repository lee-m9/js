
let browserConsole = console.log;
console.log = function (msg) {
    let logid = document.getElementById("logId");
    if (typeof arguments == "object") {
        let argstr = JSON && JSON.stringify ? JSON.stringify(arguments) : "";
        logid.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments).replace(/[0-9{}:"]/g, '') : arguments) + '<hr/>';
    }
    else {
        logid.innerHTML += arguments + '<hr/>';
    }
    browserConsole.apply(console, arguments);
}