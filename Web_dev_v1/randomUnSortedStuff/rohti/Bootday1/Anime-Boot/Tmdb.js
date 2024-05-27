const url = 'https://myanimelist.p.rapidapi.com/anime/top/%7Bcategory%7D';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d26e6e810mshf5ff20159464a18p15e173jsnf052f1af35d5',
		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
	}
};

async function fetchData() { 
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

fetchData();