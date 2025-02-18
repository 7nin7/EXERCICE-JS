// Exercice 1
function prenom() {
    let name = document.getElementById("fname").value;
    document.getElementById("holder1").innerHTML = name;
}

function nomdefamille() {
    let name = document.getElementById("lname").value;
    document.getElementById("holder1").innerHTML = name;
}

function nomcomplet() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    document.getElementById("holder1").innerHTML = fname.concat(" ", lname);
}


// Exercice 2
function segmentText() {
    let texte = document.getElementById("texte").value;
    let decoupe = new RegExp("[ ,\".]", "g");
    tokens = texte.split(decoupe);

    document.getElementById("holder2").innerHTML = tokens.join (" | ");
}
