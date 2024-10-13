let hides=document.querySelector("#box");
let prints=document.querySelectorAll(".div");
let message=document.querySelector(".msg");


function hide(){
  if(hides.style.visibility==="visible"){
    hides.style.visibility="hidden";
     reset()
    
  }else{
    hides.style.visibility="visible";
  }
    
}

 

function exit(){
  if(confirm("sure,you Exit")){
    window.close()
  }
 }
 let usermove=true;

prints.forEach((div)=> {
  div.addEventListener("click",()=>{
    
    if(usermove){
      div.innerText="O";
      
      usermove=false;
  
    
    }else{
      div.innerText="x";
      usermove=true;
     
    }
    div.classList.add("clicked");
    checkwinner();
  });
  

});

let winpatterns=[
                [6,7,8],
                [3,4,5],
                [0,1,2],
                [0,4,8],
                [2,4,6],
                [0,3,6],
                [1,4,7],
                [2,5,8],
];


  const checkwinner=()=>{
  
    for(let win of winpatterns){
      let pos1=prints[win[0]].innerText;
      let pos2=prints[win[1]].innerText;
      let pos3=prints[win[2]].innerText;
      if(pos1 !="" && pos2!="" && pos3 !=""){
        if(pos1===pos2 && pos2===pos3){
         let winn=message.innerText="winner is 👑"+ pos1;
         clearBoard() 
        return;
         
        }
      
       }
       }
      tie();
      
        };
        
        function reset() {
          prints.forEach((div) => {
              div.innerText = "";
              div.classList.remove("clicked");
          });
          message.innerText = "";
          
      }

  
        
      function tie() {
        let isTie = true;
        prints.forEach((div) => {
            if (div.innerText === "") {
                isTie = false;
            }
        });
        if (isTie) {
            message.innerText = "It's a Tie!";
        
        }
    }

    function clearBoard() {
      prints.forEach((div) => {
        if(!winpatterns)
          div.innerText = "";
          div.classList.add("clicked");
      });
  }

  
  
  
    
  