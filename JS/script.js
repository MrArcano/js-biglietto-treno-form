// creo delle variabili per collegarmi agli elementi dell'html
const btnGen = document.getElementById("btn-gen");
const btnDel = document.getElementById("btn-del");
const userTicket = document.getElementById("ticket");
const titleTicket = document.querySelector("h1.title-ticket");

// dichiarazione variabili utili
let userData = "userData";
let userKm = 0;
let userAge = 0;
let typeTicket = "tipo";
let trainCarriage = 0;
let postalCode = "00000";
let price = "0";
let insertOk = false;

// dichiarazione costanti
const priceKm = 0.21;
const discountUnder18 = 20;
const discountOver65 = 40;

btnGen.addEventListener("click", function(){
  // importa i dati dal form
  userData = document.getElementById("user").value;
  userKm = parseInt(document.getElementById("km").value);
  userAge = parseInt(document.getElementById("age").value);

  console.log("carico i dati nelle variabili");
  console.log(userData + " " + userKm + " " + userAge + " ");
  
  // controllo i dati
  if((userKm > 0) && (userAge >=0 && userAge <=2) && (userData.trim()!="")){
    insertOk=true;
    titleTicket.innerHTML = "IL TUO BIGLIETTO";
  }else{
    insertOk=false;
    titleTicket.innerHTML = "<h2>Hai inserito dei dati non validi</h2>";
    userTicket.innerHTML = "";
  }


  if(insertOk){
    // Calcolo tariffa chilometri
    price = parseInt(userKm) * priceKm;

    // minorenni
    if(userAge===0){
      price = price * (100 - discountUnder18) / 100;
      typeTicket = "Biglietto Silver";
    }

    // maggiorenni
    if(userAge==1){
      price = price;
      typeTicket = "Biglietto Normale";
    }

    // over65
    if(userAge==2){
      price = price * (100 - discountOver65) / 100;
      typeTicket = "Biglietto Gold";
    }

    // Calcolo numero random carrozza
    let max = 10;
    let min = 1;
    trainCarriage = Math.floor(Math.random() * (max - min + 1) ) + min;

    // Calcolo postalCode
    max = 98079;
    min = 10;
    postalCode = Math.floor(Math.random() * (max - min + 1) ) + min;
    
    // stampo il mio template ticket
    userTicket.innerHTML +=
    `
    <!-- inizio ticket -->
      <div class="bg-white my-3">
        <div class="container-fluid p-3">
          <h2>DETTAGLIO PASSEGGERI</h2>
          <div class="d-flex justify-content-between border border-secondary border-3 border-end-0">
    
            <div class="bg-secondary p-2 lh-0">
              <h4>NOME PASSEGGERO</h4>
              <span class="fw-bold">${userData}</span>
            </div>
    
            <div class="py-3 px-2">
              <h5 class="pb-4">Offerta</h5>
              <span>${typeTicket}</span>
            </div>
    
            <div class="py-3 px-2">
              <h5 class="pb-4">Carrozza</h5>
              <span>${trainCarriage}</span>
            </div>
    
            <div class="py-3 px-2">
              <h5 class="pb-4">Codice CP</h5>
              <span>${postalCode.toString().padStart(5,"0")}</span>
            </div>
    
            <div class="py-3 px-2">
              <h5 class="pb-4">Costo biglietto</h5>
              <span>${parseFloat(price).toFixed(2)} &euro;</span>
            </div>
    
          </div>
        </div>
      </div>
      <!-- fine ticket -->
    `;
  }/* fine if inserimento corretto */

  
})

// Pulisco il contenuto della sezione ticket
btnDel.addEventListener("click", function(){
  titleTicket.innerHTML = "";
  userTicket.innerHTML = "";
});