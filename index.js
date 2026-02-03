function sayHello() {
    alert("Hello, Everyone!");
}

function showInput() {
    let text = document.getElementById("userInput").value;
    document.getElementById("output").innerText = text;
}

document.getElementById("hoverText").onmouseover = function () {
    this.style.color = "blue";
};
