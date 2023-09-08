// creo delle variabili per collegarmi agli elementi dell'html
const btnGen = document.getElementById("btn-gen");
const btnDel = document.getElementById("btn-del");
const userTicket = document.getElementById("ticket");

// dichiarazione variabili utili
let userData = "userData";
let userKm = 0 ;
let userAge = 0 ;
let typeTicket = "tipo";
let trainCarriage = 0;
let postalCode = "00000" ;
let price = "00.00€";
let insertOk = false;

btnGen.addEventListener("click", function(){
  // importa i dati dal form
  userData = document.getElementById("user").value;
  userKm = parseFloat(document.getElementById("km").value);
  userAge = parseInt(document.getElementById("age").value);

  console.log("carico i dati nelle variabili");
  console.log(userData + " " + userKm + " " + userAge + " ");
  
  // controllo i dati
  if(userKm > 0 && (userAge >=0 && userAge <=2)){
    insertOk=true;
  }else{
    insertOk=false
    userTicket.innerHTML = "<h2>Hai inserito dei dati non validi</h2>"
  }


  if(insertOk){
      // stampo il mio template ticket
      userTicket.innerHTML +=
      `
      <!-- inizio ticket -->
          <div class="bg-white my-3">
            <div class="container-fluid p-3">
              <h2>DETTAGLIO PASSEGGERI</h2>
              <div class="d-flex justify-content-between">
        
                <div class="bg-secondary p-2">
                  <h4>NOME PASSEGGERO</h4>
                  <span>${userData}</span>
                </div>
        
                <div class="p-2">
                  <h5>Offerta</h5>
                  <span>${typeTicket}</span>
                </div>
        
                <div class="p-2">
                  <h5>Carrozza</h5>
                  <span>${trainCarriage}</span>
                </div>
        
                <div class="p-2">
                  <h5>Codice CP</h5>
                  <span>${postalCode}</span>
                </div>
        
                <div class="p-2">
                  <h5>Costo biglietto</h5>
                  <span>${price}</span>
                </div>
        
              </div>
            </div>
          </div>
          <!-- fine ticket -->
      `;
  }/* fine if inserimento corretto */

  
})