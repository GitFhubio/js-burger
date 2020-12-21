// Ciao a tutti,
// ecco la nostra idea di startup, justeat trema! :D
// cartella/repo js-burger
// Obiettivo.
// L'utente con questa applicazione web potrà creare il suo hamburger e conoscere il prezzo del suo ordine.
// - assegnerà obbligatoriamente un nome al suo hamburger.
// - deve selezionare almeno due ingredienti.
// - se inserisce un codice coupon tra quelli che già abbiamo in lista, applichiamo uno sconto del 20% sul totale.
// - tutto ciò viene "generato", quindi calcolato (prezzo e/o sconto), al click sul pulsante.
// - il testo dove inserire il nome dell'hamburger è un input, di quelli che abbiamo visto in classe, customizzato a nostro piacimento ;)
// Proseguite per step, piano piano, trovate il primo muro, il primo ostacolo e distruggetelo proprio ;) cercate tutta la documentazione che vi può servire per quell'obiettivo.
// Controllate anche la mia repo su boolean-code, dal live coding di oggi, ci sarà sicuramente qualcosa che potrà esservi utile :)
// Quindi poi lavorate su un html bruttissimo e un bel po' di js che vi permetta almeno di calcolare il totale.
// Poi aggiungete le immagini e tutto il css.
// E soprattutto divertitevi!
// Questo esercizio durerà un po', ci metteremo il tempo giusto per comprenderne ogni suo aspetto, e non lasciare niente al caso.
// N.B: Non vi allego alcuna immagine perché per oggi vi chiedo di non lavorare sulla parte estetica, lo faremo domani. Oggi solo funzionalità!
// Daje branco! (edited)


var btn=document.getElementById('btn');
var div=document.getElementsByClassName('ingredient-container')[0];
var checkbox=div.getElementsByTagName('input');
var price=document.getElementById('price');
// var lista;
var lista=[];
btn.addEventListener('click',function(){

var sum=0;
for (var i = 0; i < checkbox.length; i++) {

if (checkbox[i].checked)
{sum+=parseInt(checkbox[i].value);
};

price.innerHTML=sum;
}





})
