const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
		'X-RapidAPI-Key': 'ef79b26abdmsh5772688a1f9b732p1ea917jsn81f8538476fa'
	}
};

let amountInpt = document.querySelectorAll('.data')[0]
let fromInpt = document.querySelectorAll('.data')[1]
let toInpt = document.querySelectorAll('.data')[2]
const submit = document.querySelector('.submit')

const currency = ['AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BRL','BSD','BTC','BTN','BWP','BYN','BYR','BZD','CAD','CDF','CHF','CLF','CLP','CNY','COP','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','FKP','GBP','GEL','GGP','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','IMP','INR','IQD','IRR','ISK','JEP','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LVL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','STD','SVC','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','USD','UYU','UZS','VEF','VND','VUV','WST','XAF','XAG','XCD','XDR','XOF','XPF','YER','ZAR','ZMK','ZMW','ZWL']

// submit.addEventListener('click', pass_to_api(fromInpt.value, toInpt.value, amountInpt.value))

fromInpt.addEventListener('input', ()=>{
    console.log('input')

    for(i=0; i<currency.length; i++){
        if(currency[i].startsWith(fromInpt.value)){
            console.log(currency[i])
        }
    }
})

// function pass_to_api(have, want, amount){
//     fetch('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have='+have+'&want='+want+'&amount='+amount+'', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// }