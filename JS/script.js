

const btnGen = document.getElementById("btn-gen");
const btnDel = document.getElementById("btn-del");

btnGen.addEventListener("click", function(){
  // importa i dati dal form
  const userData = document.getElementById("user").value;
  const userKm = document.getElementById("km").value;
  const userAge = document.getElementById("age").value;


  console.log(userData + " età: " + userAge + " Km: " + userKm);
})