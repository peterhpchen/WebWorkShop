window.onload = () => {
    let content = document.getElementById("content");
    let result = document.getElementById("result");

    content.addEventListener("click", getSelectText);

    function getSelectText(event) {
        let selectedText = window.getSelection();
        result.innerText = selectedText.toString();
    }
};