function additionnerPar(tableau, nombre) {
    return tableau.map(e => e + nombre);
}

const tableau = [1, 2, 3, 4, 5];
const nombre = 10;
console.log(additionnerPar(tableau, nombre)); // Output: [11, 12, 13, 14, 15]