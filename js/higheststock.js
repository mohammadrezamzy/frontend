const stocks = [
	{
		name: "Electric Khodro",
		price: 12912,
	},
	{
		name: "Iran Khodro",
		price: 15218,
	},
	{
		name: "Iran arghaam",
		price: 8853,
	},
	// ...
];

export function getHighestPrice(stocks) {
	if (!stocks.length) {
		return null;
	}
	return [...stocks].sort((a, b) => b.price - a.price)[0].name;
}
