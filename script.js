var items = [];

function addKey() {
    items.push("key");
}

var keyButton = document.getElementById("takeKey");

var keySentence = document.getElementById("keySentence");

button.addEventListener('click', () => { 
    addKey();
    keySentence.innerHTML = "You got a key! Use it wisely..."
});

function hasKey() {
    for (var i = 0; i < items.length; i++) {
        if (items[i] === "key") {
            return true;
        }
    }
    return false;
}