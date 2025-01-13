function provjeriBroj() {
    let broj = prompt("Unesite broj:");
    if (broj === null || broj.trim() === "") {
        alert("Niste unijeli broj.");
        return;
    }
    broj = Number(broj);
    if (isNaN(broj)) {
        alert("Unos nije broj. Pokušajte ponovno.");
        return;
    }
    if (broj > 10) {
        alert("Broj je veći od 10.");
    } else {
        alert("Broj nije veći od 10.");
    }
}
