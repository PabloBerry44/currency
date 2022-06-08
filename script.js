let amountInpt = document.querySelectorAll('.data')[0]
let fromInpt = document.querySelectorAll('.data')[1]
let toInpt = document.querySelectorAll('.data')[2]
const input = document.querySelectorAll('.data')
const submit = document.querySelector('.submit')
const list = document.querySelectorAll('.list')
const result = document.querySelector('.result')
weGood = false

input.forEach(input => {
    input.addEventListener('click', ()=>{
        input.value=''
    })
});

const currency = ['AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BRL','BSD','BTC','BTN','BWP','BYN','BYR','BZD','CAD','CDF','CHF','CLF','CLP','CNY','COP','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','EUR','FJD','FKP','GBP','GEL','GGP','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','IMP','INR','IQD','IRR','ISK','JEP','JMD','JOD','JPY','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LVL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SRD','STD','SVC','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TWD','TZS','UAH','UGX','USD','UYU','UZS','VEF','VND','VUV','WST','XAF','XAG','XCD','XDR','XOF','XPF','YER','ZAR','ZMK','ZMW','ZWL']

submit.addEventListener('click', ()=>{
    if(weGood && currency.includes(toInpt.value) && currency.includes(fromInpt.value)){
        passToApi()
        result.innerHTML=''
        result.style.textTransform='uppercase'
    }
    else{
        result.style.textTransform='none'
        result.innerHTML='No such currency'
    }
})
fromInpt.addEventListener('input', ()=>{
    onInput(fromInpt, list[0])
})
toInpt.addEventListener('input', ()=>{
    onInput(toInpt, list[1])
})
function onInput(input, list){
    while(list.firstChild){
        list.removeChild(list.lastChild);
      }
      currency.forEach(currency => {
          if(currency.startsWith(input.value.toLocaleUpperCase())){
              const node = document.createElement('p');
              node.addEventListener('click', ()=>{
                  input.value = node.textContent
                  onInput(input, list)
                  return
              })
              const textnode = document.createTextNode(currency);
              node.appendChild(textnode);
              list.appendChild(node);
          }
      });
      if(list.firstChild){
        input.style.backgroundColor = 'white'
        weGood = true
      }
      else{
        input.style.backgroundColor = 'pink'
      }
}
function passToApi(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
            'X-RapidAPI-Key': 'ef79b26abdmsh5772688a1f9b732p1ea917jsn81f8538476fa'
        }
    };
    fetch('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have='+fromInpt.value+'&want='+toInpt.value+'&amount='+amountInpt.value+'', options)
    .then(response => response.json())
    .then(data => {result.innerHTML = amountInpt.value+' '+fromInpt.value+' =<span><br>'+data.new_amount+' '+toInpt.value+'</span>'})
    .catch(err => console.error(err));
}
function reset(){
    fromInpt.value=''
    toInpt.value=''
}