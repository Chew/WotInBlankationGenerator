function changeMessage() {
    for (var i = 0; i < 3; i++) {
        document.getElementById(i + "line").innerHTML = lines4[i][(Math.floor(Math.random() * lines4[i].length))];
    }
    document.getElementById("startBttn").textContent = "Again?";
}
