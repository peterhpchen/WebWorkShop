window.addEventListener("click", createWindow);

function createWindow(event) {
    let win = createOrGetDivById("floatingWindow");
    win.style.top = event.clientY + "px";
    win.style.left = event.clientX + "px";
    document.body.appendChild(win);
}

function createOrGetDivById(id) {
    let result = document.getElementById(id);
    if (!!result) return result;
    result = document.createElement("div");
    result.id = id;
    return result;
}