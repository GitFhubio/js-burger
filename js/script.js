// L'utente con questa applicazione web potrà creare il suo hamburger e conoscere il prezzo del suo ordine.
// - assegnerà obbligatoriamente un nome al suo hamburger.
// - deve selezionare almeno due ingredienti.
// - se inserisce un codice coupon tra quelli che già abbiamo in lista, applichiamo uno sconto del 20% sul totale.
// - tutto ciò viene "generato", quindi calcolato (prezzo e/o sconto), al click sul pulsante.

// "COSTANTI"
var minIngredients = 2;
var baseprice = 50;
var discount = 0.8;
var coupon=['immanuelkant1724','cyberbug2077','nandomartellone90'];

// ELEMENTI DOM
var btn=document.getElementById('btn');
var ingredients=document.getElementsByClassName('ingredient-container')[0];
var checkboxes=ingredients.getElementsByTagName('input');
var output=document.getElementById('output');
var burgerName=document.getElementById('burger-name');
var discount=document.getElementById('discount');

// variabili accessorie

var selezionati;
var price;
var sum;

btn.addEventListener('click',function(){
  btn.classList.add('clicked');
  btn.classList.remove('brown');
  sum=0;
  selezionati=[];

  if(burgerName.value=='')
  {alert('Devi inserire il nome del tuo hamburger');}
  else{
    for (var i = 0; i < checkboxes.length; i++) {
      if(checkboxes[i].checked){
        price=parseFloat(checkboxes[i].value);
        selezionati.push(price);
        sum+=price;
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

  // OPPURE AL POSTO DI FARMI L'ARRAY DA SOLO:
    // var choices = document.querySelectorAll('input[type="checkbox"]:checked');
