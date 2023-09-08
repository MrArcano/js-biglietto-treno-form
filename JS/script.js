

const btnGen = document.getElementById("btn-gen");
const btnDel = document.getElementById("btn-del");
const userTicket = document.getElementById("ticket");

btnGen.addEventListener("click", function(){
  // importa i dati dal form
  const userData = document.getElementById("user").value;
  const userKm = document.getElementById("km").value;
  const userAge = document.getElementById("age").value;

  console.log(userData + " età: " + userAge + " Km: " + userKm);

  userTicket.innerHTML +=
  `
  <!-- inizio ticket -->
      <div class="bg-white">
        <div class="container-fluid p-3">
          <h2>DETTAGLIO PASSEGGERI</h2>
          <div class="d-flex justify-content-between">
    
            <div class="bg-secondary p-2">
              <h4>NOME PASSEGGERO</h4>
              <span>dati user</span>
            </div>
    
            <div class="p-2">
              <h5>Offerta</h5>
              <span>Biglietto Standard</span>
            </div>
    
            <div class="p-2">
              <h5>Carrozza</h5>
              <span>5</span>
            </div>
    
            <div class="p-2">
              <h5>Codice CP</h5>
              <span>92911</span>
            </div>
    
            <div class="p-2">
              <h5>Costo biglietto</h5>
              <span>2.10€</span>
            </div>
    
          </div>
        </div>
      </div>
      <!-- fine -->
  `
})