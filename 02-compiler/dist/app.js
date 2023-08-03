"use strict";
console.log("Started");
const button = document.querySelector("button");
function clickHandler(message) {
    console.log("Clicked! " + message);
}
if (button) {
    button.addEventListener("click", clickHandler.bind(null, 'Youre welcome!'));
}
//# sourceMappingURL=app.js.map