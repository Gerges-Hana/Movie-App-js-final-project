let logEmail= document.getElementById("logEmail");
let logPass=document.getElementById("logPass");
var fillInp = document.getElementById("fillInp");
var errorMsg = document.getElementById("errorMsg");
let btnLogin=document.getElementById("btnLogin");

function logIN(){
 
  if (logEmail.value == "" || logPass.value == "" ){
      fillInp.classList.replace('d-non', 'd-block');
      
  }else{
    
    for(var i=0; i<freindContainer.length; i++){ 
      if(freindContainer[i].userEmail == logEmail.value &&
       freindContainer[i].userpass == logPass.value){
          
            // btnLogin.setAttribute("href", "index.html")
            errorMsg.classList.add("d-none");
            location.replace("main.html")
          }else{
         
            errorMsg.classList.replace("d-none", "d-block");

          }
        }
      }
    }

