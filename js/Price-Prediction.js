function predictPrice() {
	// Get input values
	const size = parseFloat(document.getElementById("size").value);
	const bedrooms = parseInt(document.getElementById("bedrooms").value);
	const bathrooms = parseInt(document.getElementById("bathrooms").value);
	const location = parseInt(document.getElementById("location").value);

	// Calculate predicted price
	let price = 0;
	if (location === 1) {
		price = 200 * size + 10000 * bedrooms + 15000 * bathrooms;
	} else if (location === 2) {
		price = 150 * size + 8000 * bedrooms + 12000 * bathrooms;
	} else if (location === 3) {
		price = 100 * size + 5000 * bedrooms + 8000 * bathrooms;
	}

	// Display result
	const resultDiv = document.getElementById("result");
	resultDiv.innerHTML = `The estimated price of the house is $${price}.`;
}
