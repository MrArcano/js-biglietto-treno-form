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
let numTicket = "";
let numberTrain = 0;
let dateTicket = "";
let trainCarriage = 0;
let stationPlatform = 0;
let postalCode = "00000";
let price = "0";
let insertOk = false;
let num = 0;
let letter = "";

// dichiarazione costanti
const priceKm = 0.21;
const discountUnder18 = 20;
const discountOver65 = 40;
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const europeanCity = [
  "Tirana",
  "Vienna",
  "Baku",
  "Minsk",
  "Brussels",
  "Sarajevo",
  "Sofia",
  "Prague",
  "Copenhagen",
  "Paris",
  "Berlin",
  "Athens",
  "Budapest",
  "Dublin",
  "Rome",
  "Luxembourg",
  "Valletta",
  "Chisinau",
  "Monaco",
  "Amsterdam",
  "Skopje",
  "Oslo",
  "Warsaw",
  "Lisbon",
  "Bucharest",
  "Moscow",
  "San Marino",
  "Belgrade",
  "Bratislava",
  "Ljubljana",
  "Madrid",
  "Stockholm",
  "Bern",
  "Ankara",
  "Kiev",
  "London"
];

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// };

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

    // rnd n° carrozza
    let max = 10;
    let min = 1;
    trainCarriage = Math.floor(Math.random() * (max - min + 1) ) + min;

    // rnd città partenza e arrivo

    // rnd giorno e mese
    num = Math.floor(Math.random() * months.length);
    let month = months[num];

    max = 30;
    console.log("default 30");
    if(num==1){
      max=28;
      console.log("febbrario 28");
    }
    if (num==0 || num==2 || num==4 || num==6 || num==7 || num==9 || num==11){
      max=31;
      console.log("mesi 31");
    }

    min = 1;
    let day = Math.floor(Math.random() * (max - min + 1) ) + min;
     
    dateTicket = day + " " + month;

    // rnd orario partenza e arrivo

    // rnd n° biglietto
    max = 9;
    min = 1;
    num = Math.floor(Math.random() * (max - min + 1) ) + min;
    letter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    numTicket = letter + num;

    max = 99999999999;
    min = 1;
    num = Math.floor(Math.random() * (max - min + 1) ) + min;
    numTicket += " " + num.toString().padStart(11,"0");

    // rnd n° treno
    max = 9999;
    min = 1;
    numberTrain = Math.floor(Math.random() * (max - min + 1) ) + min;

    // rnd n° binario
    max = 6;
    min = 1;
    stationPlatform = Math.floor(Math.random() * (max - min + 1) ) + min;

    // rnd n° posto sedile
    max = 99;
    min = 1;
    num = Math.floor(Math.random() * (max - min + 1) ) + min;
    letter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    seatTrain = letter + num.toString().padStart(2,"0");

    // rnd postalCode
    max = 98079;
    min = 10;
    postalCode = Math.floor(Math.random() * (max - min + 1) ) + min;
    
    // stampo il mio template ticket
    userTicket.innerHTML =
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
          <span class="fs-5 pe-4">${numTicket}</span>
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
                  <span class="fs-4 lh-0">${numberTrain.toString().padStart(4,"0")}</span>
                </div>
                <div class="pb-2">
                  <span class="d-block fs-6">PLATFORM</span>
                  <span class="fs-4 lh-0">${stationPlatform}</span>
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
                <span class="fs-4 lh-0">${dateTicket}</span>
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
                <span class="fs-4 lh-0">${seatTrain}</span>
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
                <span class="fs-4 lh-0">${numberTrain.toString().padStart(4,"0")}</span>
              </div>
              <div class="col-6">
                <span class="d-block fs-6">SEAT</span>
                <span class="fs-4 lh-0">${seatTrain}</span>
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