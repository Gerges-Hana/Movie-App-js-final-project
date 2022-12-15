// globale variable

let signName=document.getElementById("signName");
let signEmail=document.getElementById("signEmail");
let signPass=document.getElementById("signPass");
let btnSignup=document.getElementById("btnSignup");
let confirmFailed = document.getElementById("confirmFailed");
let confirmSuccess = document.getElementById("confirmSuccess");
let labelName=document.getElementsByClassName("labelName");
let labelEmail=document.getElementsByClassName("labelEmail");
let labelPass=document.getElementsByClassName("labelPass");
// sign form validation 
// 1- name validation 
function validationName(){
    var nameRegex =  /^[a-z0-9]{3,10}$/;
    if (!nameRegex.test(signName.value)){//false
      signName.classList.add("is-invalid");
      signName.classList.remove("is-valid");
      console.log("false");
      signName.setAttribute("placeholder","your name have string and number")
      
      // alert("your name have string and number");
      return false;
    }else{//true
      signName.classList.add("is-valid");
      signName.classList.remove("is-invalid");
      console.log("True");
      return true;
    }
    // console.log(signName);
    // console.log(!nameRegex.test(signName.value));
  }

// 2- email validation 
function validationEmail(){
let emailRegex =   /^[a-z]{3,15}[0-9]{0,}(@)[a-z]{4,8}\.(com)$/;
if (!emailRegex.test(signEmail.value)){//false
    signEmail.classList.add("is-invalid");
    signEmail.classList.remove("is-valid");
    console.log("false");
    // alert("ex:gergeshana70@gmail.com");
    signEmail.setAttribute("placeholder","ex:gergeshana70@gmail.com")

    return false;
}else{//true
    signEmail.classList.add("is-valid");
    signEmail.classList.remove("is-invalid");
    console.log("True");
    return true;
}
}

// 3- Passworde validation 
function validationPass(){
    let emailRegex = /^[A-Za-z0-9]{6,10}$/;
    if (!emailRegex.test(signPass.value)){
      signPass.classList.add("is-invalid");
      signPass.classList.remove("is-valid");
      // alert("your pass fild:you have from 6 to 10 letters ex:AfsFF4556");
      signPass.setAttribute("placeholder","your pass fild:you have from 6 to 10 letters ex:AfsFF4556")
      console.log("false");
      return false;
    }else{
      signPass.classList.add("is-valid");
      signPass.classList.remove("is-invalid");
      console.log("True");
      return true;
    }
};

  //for check inputs is empty or not
  function isEmpty() {

    if (signName.value == "" || signEmail.value == "" || signPass.value == "") {
        alert("you shoudn't have empty input ");
        return false
    } else {
        // alert("sucsess sign up");
        allValid()
        return true
    }
}

function allValid(){
  if (validationName()==validationEmail()==validationPass()==true) {
    alert("your all input tmamm");
    checkLockalData();
  }
  else{
    alert("you have an input error");
  }
}


// storage sign up data from user in local storage 
 var freindContainer;
//  chik if you have olde data 
function checkLockalData(){
  if (localStorage.getItem("signUpList") == null) {
      freindContainer = [];
      console.log(freindContainer);
  } else {
      // json parse to change from string to array of object 
      freindContainer = JSON.parse(localStorage.getItem("signUpList"));
      console.log(freindContainer);
      addSignUp();
  }

}

function addSignUp(){
    var freind={

        name:signName.value,
        email:signEmail.value,
        pass:signPass.value
    }

    freindContainer.push(freind);
    localStorage.setItem("signUpList",JSON.stringify( freindContainer));
    console.log(freindContainer);
    console.log(freind);

    clear()
}
// clear data input after user enter his data 
function clear(){
    signName.value="";
    signEmail.value="";
    signPass.value="";
}

function SignUp(){
  isEmpty();
};
// btnSignup.addEventListener('click',isEmpty)

// ===================================================================
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ===================================================================

// login validation 
let logEmail= document.getElementById("logEmail");
let logPass=document.getElementById("logPass");
var fillInp = document.getElementById("fillInp");
var errorMsg = document.getElementById("errorMsg");
let btnLogin=document.getElementById("btnLogin");
var done=document.getElementById("done");

function logIN(){
 var getLocalData;
 getLocalData=localStorage.getItem("signUpList");
 var usersListLogin=JSON.parse(getLocalData)
  if (logEmail.value == "" || logPass.value == "" ){
      fillInp.classList.replace('d-non', 'd-block');
      fillInp.style.color="red"
  }
  else{
    
    var checkLogin;
    for(var i=0; i<usersListLogin.length; i++){

      if(usersListLogin[i].email == logEmail.value &&
       usersListLogin[i].pass == logPass.value){
        checkLogin=true;
            // btnLogin.setAttribute("href", "index.html")
            // location.replace("main.html")
          }else{
            checkLogin=false;
              }
        }
    
  console.log(checkLogin);
        if(checkLogin==true){

          console.log("ant mogod ya 7ag");

          done.classList.remove("d-non");
          done.classList.add("d-block");
          errorMsg.classList.remove("d-block");
          errorMsg.classList.add("d-non");

          done.style.color="green"
          // document.getElementsByClassName("login").classList.add("d-none")
          // var regesteration=document.getElementById("loinname");
          // console.log(regesteration.innerHTML=`hhhhhhhhhhhhh`);
          
          console.log("gerges");
          
          location.replace("../../index.html")


          
      }
      else{
        console.log("Meshhhh  mogod ??");
        errorMsg.classList.remove("d-non");
        errorMsg.classList.add("d-block");
        done.classList.remove("d-block");
        done.classList.add("d-non");
        errorMsg.style.color="red"
        

    

      }

    }
  }

  console.log("ljhnljhouhs;dfjpp");