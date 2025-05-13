function motDePasseValide(motDePasse) {
    if (motDePasse.length >= 8) {
        return "valide";
    }else {
        return "invalide";
    }
}

console.log(motDePasseValide("azerty12"))    // Output: "Valide"
console.log(motDePasseValide("1234"))        // Output: "Invalide"