const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
		'X-RapidAPI-Key': 'ef79b26abdmsh5772688a1f9b732p1ea917jsn81f8538476fa'
	}
};

let want = prompt('want')
let have = prompt('have')
let amount = parseInt(prompt('amount'))

fetch('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have='+have+'&want='+want+'&amount='+amount+'', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));