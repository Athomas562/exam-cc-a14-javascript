function verifierMajorite(age) {
   if (age >=18) {
    return "majeur"
   }else {
    return "mineur"
   }
}

console.log(verifierMajorite(20)) // Output: "Majeur"
console.log(verifierMajorite(15)) // Output: "Mineur"