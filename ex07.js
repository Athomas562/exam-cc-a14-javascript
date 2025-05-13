function supprimerDoublon(tableau) {
	return tableau.filter(supprimerDoublon.length );
}

console.log(
	supprimerDoublon([1, "foo", true, false, true, "bar", 1, "test", "test"])
); // Output: ["foo", false, "bar"]
