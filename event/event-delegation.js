const treeEvent = (event) => {
    if (event.target.tagName != "SPAN") {
        return;
    }

    console.log(event.target.innerText);

    let childUl = event.target.parentNode.querySelector("ul");

    if (childUl) {
        childUl.hidden = !childUl.hidden;
        setMessage(event, childUl);
    }
};

document.querySelector("#tree").addEventListener("click", treeEvent);

function setMessage(event, childUl) {
    document.getElementById(
        "treeh"
    ).innerHTML = `Event happened on <code>event.target</code> <strong>${
        event.target.innerText
    } (${childUl.hidden ? "collapsed" : "expanded"})</strong>`;
}
