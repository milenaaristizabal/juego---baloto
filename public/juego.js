let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let op = document.querySelector('#op');

flipBtn.addEventListener("click", () =>{

  let i = Math.floor(Math.random() * 2);
  
  coin.getElementsByClassName.animation = "none";
  let opcion=parseInt(op.value)
  if(i){
    coin.style.animation = "spin-heads 3s forwards";
    setTimeout(function(){
      
      if(opcion===i){
        Swal.fire({
            title: "Felicidades, ganaste",
            icon: 'success'
            
        });
        console.log(i)
      }
      else{
        Swal.fire({
            title: "Perdiste",
            icon: 'error'
            
        });
        console.log(i)
      }
      
    }, 3000);
    heads++;
  }else{
    coin.style.animation = "spin-tails 3s forwards";
    setTimeout(function(){
      
      if(opcion===i){
       
        Swal.fire({
            title: "Felicidades, ganaste",
            icon: 'success'
            
        });
        console.log(i)
      }
      else{
        Swal.fire({
            title: "Perdiste",
            icon: 'error'
            
        });
        console.log(i)
      }
      
    },3000);
    tails++;
  }
  setTimeout(updateStats,3000);
  disableButton();
});



function updateStats(){
  document.querySelector("#heads-count").textContent = `Número 1: ${heads}`;
  document.querySelector("#tails-count").textContent = `Número 0: ${tails}`;
}

function disableButton(){
  flipBtn.disabled = true;
  setTimeout(function(){
    flipBtn.disabled = false;
  },3000)
}
resetBtn.addEventListener("click",() => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
})