// "COSTANTI"
var minIngredients = 2;
var burgerBaseCost = 50;
var discount = 0.2;
var coupons=['immanuelkant1724','cyberbug2077','nandomartellone90'];

// ELEMENTI DOM
var btn=document.getElementById('btn');
var ingredients=document.getElementsByClassName('ingredient-container')[0];
var checkbox=ingredients.getElementsByTagName('input');
var output=document.getElementById('output');
var burgerName=document.getElementById('burger-name');
var discount=document.getElementById('discount');

// variabili accessorie

var counterValidIngredients = 0;
var cost; // così da non inizializzarla a ogni click

btn.addEventListener('click',function(){
  btn.classList.add('clicked');
  btn.classList.remove('brown');

  counterValidIngredients = 0;
  cost = burgerBaseCost;

  // ciclo gli ingredienti
  for(var x = 0; x < ingredientsList.length; x++) {
    // conto il numero di ingredienti (almeno 2) e il loro prezzo
    // solo se checkati!
    if(checkbox[x].checked) {
      counterValidIngredients++;
      // calcolare il costo degli ingredienti
      cost += parseInt(ingredientsList[x].value);
    }
  }
    if(selezionati.length<minIngredients){
      alert('Devi inserire più di un valore');
    }
    // console.log(selezionati);
    output.innerHTML='$ '+ (baseprice+sum);
    if(coupon.includes(discount.value)){
      output.innerHTML='$ '+ ((baseprice+sum)*0.8).toFixed(2);
    }
  }
}
)

// CHIEDERE AD ALFREDO ED ENRICO SE SI POTEVA FARE MEGLIO MAGARI CON UN ON CHANGE NON LO SO

//   var extra=document.getElementById('extra');
//    var checkboxes = document.querySelectorAll('input[type=checkbox]');
//     var price;
//     for (var i = 0; i < checkboxes.length; i++) {
//     checkboxes[i].addEventListener('click',function(){
//      price=parseFloat(this.value);
//           if(this.checked){
//             extra.innerHTML+= '+' + price;
//           } else{
//             extra.innerHTML+='-'+ price;
//           }
//
//       }
//     )
// }


var coupons = [
  'ws9mp83YF9',
  'NNhzvtrXqT',
  'viohDkBMBw'
]
// ----------------------------------------------------------------------

var burgerNameElement = document.getElementById('burger-name');
var containerIngredient = document.getElementsByClassName('ingredienti-container')[0];

var ingredientsList = containerIngredient.getElementsByTagName('input');
// per questo c'è un'alternativa: prendere tutti gli ingredienti con una classe
// da assegnare a ciascun input-checkbox e ciclare l'html collection.

var costElement = document.getElementById('cost');
var couponElement = document.getElementById('coupon');

var counterValidIngredients = 0;
var cost; // così da non inizializzarla a ogni click

document.getElementById("checkout").addEventListener("click", function() {

  counterValidIngredients = 0;
  cost = burgerBaseCost;

  // ciclo gli ingredienti
  for(var x = 0; x < ingredientsList.length; x++) {
    // conto il numero di ingredienti (almeno 2) e il loro prezzo
    // solo se checkati!
    if(ingredientsList[x].checked) {
      counterValidIngredients++;
      // calcolare il costo degli ingredienti
      cost += parseInt(ingredientsList[x].value);
    }
  }

  // se il numero di ingredienti non è > 2 allora mostro alert e non continuo
  if(counterValidIngredients < minIngredients) {
    alert('Seleziona almeno ' + minIngredients + ' ingredienti');
  } else if(burgerNameElement.value.length === 0) {
    alert('Scegli un nome per il tuo burger');
  } else {

    // solo alla fine, sottraggo lo sconto (se è valido il coupon)
    if(coupons.indexOf(couponElement.value) !== -1) {
      cost = cost - (cost*discount);
    }

    costElement.innerText = '$ ' + cost;
  }

});