/*
Draw Chess board with n*n params
*/

/**
 * Beginner level maybe
 * @param {*} x 
 * @param {*} y 
 */
export function htmlsquare(x, y) {
    let canvassqrhtml = document.createElement('canvassqrhtml');
    for (let yaxis = 0; yaxis < y; yaxis++) {
        let first, second;
        if (yaxis % 2 == 0) {
            first = 'white';
            second = 'black';
        }
        else {
            first = 'black';
            second = 'white';
        }
        let sqrelement = document.createElement("div");
        for (let xaxis = 0; xaxis < x; xaxis++) {
            let span = document.createElement("span");
            if (xaxis % 2 == 0) {
                span.className = first
            }
            else {
                span.className = second
            }
            sqrelement.appendChild(span);
        }
        canvassqrhtml.appendChild(sqrelement);
    }
}

/**
 * Intermediate - simplifications of above
 * @param {columns} x 
 * @param {rows} y 
 */
export function chessTable(x, y) {
    let table = document.createElement('table');
    for (let row = 0; row < y; row++) {
        let tr = document.createElement('tr');
        for (let column = 0; column < x; column++) {
            let td = document.createElement('td');
            if (column % 2 == row % 2) {
                td.className = 'white';
            }
            else {
                td.className = 'black';
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

/**
 * A little Advance then above
 * @param  {*x} 'Number of Columns' 
 * @param {*y} 'Number of Rows'
 */
export function chessCanvas(x, y) {
    const canvas = document.createElement("canvas");
    canvas.width = y * 50;
    canvas.height = x * 50;
    let sqWidth = 50, sqHeight = 50;
    const context = canvas.getContext('2d');
    for (let row = 0; row < y; row++) {
        for (let column = 0; column < x; column++) {
            if (column % 2 == row % 2) {
                context.fillStyle = 'white'
            }
            else {
                context.fillStyle = 'black';
            }
            context.fillRect(column * sqWidth, row * sqHeight, sqWidth, sqHeight);
        }
    }
    document.body.appendChild(canvas);
}