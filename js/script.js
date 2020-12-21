// Ciao a tutti,
// ecco la nostra idea di startup, justeat trema! :D
// cartella/repo js-burger
// Obiettivo.
// L'utente con questa applicazione web potrà creare il suo hamburger e conoscere il prezzo del suo ordine.
// - assegnerà obbligatoriamente un nome al suo hamburger.
// - deve selezionare almeno due ingredienti.
// - se inserisce un codice coupon tra quelli che già abbiamo in lista, applichiamo uno sconto del 20% sul totale.
// - tutto ciò viene "generato", quindi calcolato (prezzo e/o sconto), al click sul pulsante.

var btn=document.getElementById('btn');
var ingredients=document.getElementsByClassName('ingredient-container')[0];
var checkbox=ingredients.getElementsByTagName('input');
var output=document.getElementById('output');
var humburger=document.getElementById('hamburger');
var discount=document.getElementById('discount');
// var lista;
var lista=[];
var coupon=['immanuelkant1724','cyberbug2077','nandomartellone90'];

btn.addEventListener('click',function(){
  btn.classList.add('clicked');
  btn.classList.remove('brown');
  var sum=0;
  var baseprice=50;
  var selezionati=[];
  var price;

  if(hamburger.value=='')
  {alert('Devi inserire il nome del tuo hamburger');}
  else{
    for (var i = 0; i < checkbox.length; i++) {
      if(checkbox[i].checked){
        price=parseFloat(checkbox[i].value);
        selezionati.push(price);
        sum+=price;
      }
    }
    
    // al posto di crearmi l'array da solo col push potevo fare:
    // var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    // e avrei avuto direttamente l'array dei check da usare poi nella verifica
    if(selezionati.length<2)
    {alert('Devi inserire più di un valore');}

    // console.log(selezionati);
    output.innerHTML='$ '+ (baseprice+sum);

    if(coupon.includes(discount.value)){

      output.innerHTML='$ '+ ((baseprice+sum)*0.8).toFixed(2);
    }
  }
}
)
