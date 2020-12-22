// "COSTANTI"
var minIngredients = 2;
var burgerBaseCost = 50;
var discount = 0.2;
var coupons=['alfredo10','ottavio20','enrico30'];

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



  // var extra=document.getElementById('extra');
  //   var price;
  //   var arrayX=[];
  //   var arrayY=[];
  //   for (var i = 0; i < checkboxes.length; i++) {
  //   checkboxes[i].addEventListener('click',function(){
  //    price=parseFloat(this.value);
  //         if(this.checked){
  //          arrayX.push(price);
  //         } else{
  //
  //         arrayX=arrayX.filter(function(e){
  //            return e!==price;  })
  //          }
  //          console.log(arrayX);
  //          })
  //          }

    var price;
    for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click',function(){
    var x=0;
    var y=0;
    var array=[];
for (var i = 0; i < checkboxes.length; i++) {

      price=parseFloat(checkboxes[i].value);
         if(checkboxes[i].checked){
          array.push(price);
          x+=price;
         }
}
console.log(array);
console.log(x);
}
)
}
