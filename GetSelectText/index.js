window.onload = () => {
    let content = document.getElementById("content");

    content.addEventListener("click", getSelectText);

    function getSelectText(event) {
        let result = window.getSelection();
        console.log(result.toString());
    }
};