
var btn_translator = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputText = document.querySelector("#output");

function clickHandler() {
    outputText.innerText = "abifvwubevuobqef " +textInput.value;
};


btn_translator.addEventListener("click", clickHandler);









