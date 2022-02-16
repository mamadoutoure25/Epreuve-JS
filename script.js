const select=document.querySelectorAll('select')
const amountValue=document.querySelectorAll('amount')
const btn=document.querySelectorAll('.btn')
const convertValue=document.querySelectorAll('.btn')



fetch("https://api.frankfurter.app/currencies")
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
    // Convertir les données récupérées en un tableau de valeurs
const entries = Object.entries(data);

// Remplir les listes déroulantes
for (let i = 0; i < entries.length; i++) {
  select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
}
});

btn.addEventListener("click",function(){
  const host = "api.frankfurter.app";
  const currency1 = select[0].value;
  const currency2 = select[1].value;
  const amountValue = document.getElementById("amount");

  fetch(
    `https://${host}/latest?amount=${amountValue}&from=${currency1}&to=${currency2}`

)
.then((response)=> response.json())
.then((data)=>{
 const rate = Object.values(data.rates);
 console.log(rate);

 convertValue.innerText = rate + "" + currency2

});






  });