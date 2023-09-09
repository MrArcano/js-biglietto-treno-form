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
      typeTicket = "TICKET YOUNG";
    }

    // maggiorenni
    if(userAge==1){
      price = price;
      typeTicket = "TICKET ADULT";
    }

    // over65
    if(userAge==2){
      price = price * (100 - discountOver65) / 100;
      typeTicket = "TICKET SENIOR";
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
    <!--inizo ticket -->
    <div class="ticket-box row rounded-3 overflow-hidden shadow">
      <!-- Ticket LEFT -->
      <div class="ticket-left col-8">
        <div class="ticket-top d-flex justify-content-between align-items-center">
          <div>
            <img class="img-fluid" src="img/train-left.svg" alt="train-left">
            <span class="fs-4 fw-bold align-middle ps-3">TRAIN TICKET</span>
          </div>
          <span class="fs-5 pe-4">T4 04592963153</span>
        </div>
        <div class="ticket-middle">
          <div class="container-fluid">
            <div class="row">
              <div class="col-6">
                <div class="pb-2">
                  <span class="d-block fs-6">NAME OF PASSENGER</span>
                  <span class="fs-4 lh-0">${userData.toUpperCase()}</span>
                </div>

                <div class="pb-2">
                  <span class="d-block fs-6">FROM:</span>
                  <span class="fs-4 lh-0">PARIS</span>
                </div>

                <div class="pb-2">
                  <span class="d-block fs-6">TO:</span>
                  <span class="fs-4 lh-0">LONDON</span>
                </div>

              </div>
              <div class="col-2">
                <div class="pb-2">
                  <span class="d-block fs-6">PRICE:</span>
                  <span class="fs-4 lh-0">${parseFloat(price).toFixed(2)}&euro;</span>
                </div>
              </div>
              <div class="col-3">
                <div class="pb-2">
                  <span class="d-block fs-6">TRAIN</span>
                  <span class="fs-4 lh-0">3924</span>
                </div>
                <div class="pb-2">
                  <span class="d-block fs-6">PLATFORM</span>
                  <span class="fs-4 lh-0">3</span>
                </div>
                <div class="pb-2">
                  <span class="d-block fs-6">CARRIAGE N°</span>
                  <span class="fs-4 lh-0">${trainCarriage}</span>
                </div>
              </div>
              <div class="col-1 p-0">
                <div class="barcode">
                  <img class="img-fluid" src="img/bardcode.svg" alt="">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-3">
                <span class="d-block fs-6">DATE</span>
                <span class="fs-4 lh-0">12 MAY</span>
              </div>
              <div class="col-3">
                <span class="d-block fs-6">DEPATURE</span>
                <span class="fs-4 lh-0">14:30</span>
              </div>
              <div class="col-2">
                <span class="d-block fs-6">ARRIVE</span>
                <span class="fs-4 lh-0">16:50</span>
              </div>
              <div class="col">
                <span class="d-block fs-6">SEAT</span>
                <span class="fs-4 lh-0">A18</span>
              </div>
            </div>
          </div>
        </div>
        <div class="ticket-bottom">
          <div class="container-fluid">
            <span>${typeTicket}</span>
          </div>
        </div>
      </div>

      <!-- Ticket RIGHT -->
      <div class="ticket-right col-4">
        <div class="ticket-top d-flex justify-content-center align-items-center">
          <span class="fs-4 fw-bold align-middle ps-3">TRAIN TICKET</span>
        </div>
        <div class="ticket-middle">
          <div class="container-fluid">
            <div class="pb-2">
              <span class="d-block fs-6">NAME OF PASSENGER</span>
              <span class="fs-4 lh-0">${userData.toUpperCase()}</span>
            </div>
  
            <div class="pb-2">
              <span class="d-block fs-6">FROM:</span>
              <span class="fs-4 lh-0">PARIS</span>
            </div>
  
            <div class="pb-2">
              <span class="d-block fs-6">TO:</span>
              <span class="fs-4 lh-0">LONDON</span>
            </div>

            <div class="row">
              <div class="col-6">
                <span class="d-block fs-6">TRAIN</span>
                <span class="fs-4 lh-0">3924</span>
              </div>
              <div class="col-6">
                <span class="d-block fs-6">SEAT</span>
                <span class="fs-4 lh-0">A18</span>
              </div>
            </div>
          </div>
        </div>
        <div class="ticket-bottom">
          <div class="container-fluid">
            <span>${typeTicket}</span>
          </div>
        </div>
      </div>
    </div>
    <!--fine ticket -->


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