// "COSTANTI"
var minIngredients = 2;
var burgerBaseCost = 50;
var discount = 0.2;
var coupons=['immanuelkant1724','cyberbug2077','nandomartellone90'];

// ELEMENTI DOM
var btn=document.getElementById('btn');
var ingredients=document.getElementsByClassName('ingredient-container')[0];
var checkboxes=ingredients.getElementsByTagName('input');
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
  for(var x = 0; x < checkboxes.length; x++) {
    // conto il numero di ingredienti (almeno 2) e il loro prezzo
    // solo se checkati!
    if(checkboxes[x].checked) {
      counterValidIngredients++;
      // calcolare il costo degli ingredienti
      cost += parseInt(checkboxes[x].value);
    }
  }
  // se il numero di ingredienti non è > 2 allora mostro alert e non continuo
  if(counterValidIngredients < minIngredients) {
    alert('Seleziona almeno ' + minIngredients + ' ingredienti');
  } else if(burgerName.value.length === 0) {
    alert('Scegli un nome per il tuo burger');
  } else {

    // solo alla fine, sottraggo lo sconto (se è valido il coupon)
    if(coupons.indexOf(discount.value) !== -1) {
      cost = cost - (cost*discount);
    }

    output.innerText = '$ ' + cost;
  }

});

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
