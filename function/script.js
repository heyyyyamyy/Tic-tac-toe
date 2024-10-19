let boxes = document.querySelectorAll(".box")

let turn = true;

let reset = document.querySelector(".reset")

let win = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]

boxes.forEach((e)=>{
  e.addEventListener("click", ()=>{
    if(turn == true){
      e.innerHTML = "X"
      turn = false;
    }else{
      e.innerHTML = "O"
      turn = true;
    }
    e.disabled = true;

    winning();
  })
})

const disabledbtn = ()=>{
  for(let box of boxes){
    box.disabled = true;
  }
}

const winning = ()=>{
  for(let wins of win){
    let pos1 = boxes[wins[0]].innerHTML
    let pos2 = boxes[wins[1]].innerHTML
    let pos3 = boxes[wins[2]].innerHTML
   
    if(pos1 !="" && pos2!= "" && pos2 != ""){
        if(pos1==pos2 && pos2==pos3){
          
          alert("winner" + "is " + pos1)
         
          disabledbtn();
        }
      
    }
    
    
  }
  
  
}

reset.addEventListener("click" , ()=>{
for(let box of boxes){
  box.innerHTML = ""
  box.disabled = false
}
 
})