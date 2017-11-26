window.addEventListener("click", getKeyboard);

function getKeyboard(event) {
    alert(`
        Ctrl Key: ${event.ctrlKey}
        Alt Key: ${event.altKey}`);
}