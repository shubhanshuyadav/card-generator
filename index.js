let cardInfo={"Father":"inputFatherName","Email":"inputEmail","Roll-No":"inputRollNo","Contact-No":"inputContactNo","Branch":"inputBranch","DOB":"inputDOB"}
let isImageInserted=false;

var loadFile = function(event) {
  isImageInserted=true;
	var image = document.getElementById('imageId');
	image.src = URL.createObjectURL(event.target.files[0]);
}

let validate=function(){
  let contact =document.getElementById("inputContactNo").value;
  let email=document.getElementById('inputEmail').value;
  let image=document.getElementById("imageId").src;
  let backgroundColor=document.getElementById("inputBackgroundColor").value;
  let textColor=document.getElementById("inputTextColor").value;
  var phonenoReg = /^\d{10}$/;
  var colorCodeRegex=/^#(?:[0-9a-fA-F]{3}){1,2}$/
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
if(!phonenoReg.test(contact)){
  alert("Please enter a valid contact no...");
  return false
}
if(backgroundColor){
  if(!colorCodeRegex.test(backgroundColor)){
    alert("Please enter a valid color code no...");
    return false
  }
}
if(textColor){
  if(!colorCodeRegex.test(textColor)){
    alert("Please enter a valid color code no...");
    return false;
  }
}

if(!isImageInserted){
  alert("Please insert a id photo...");
  return false
}


  for(let info in cardInfo){
    let value=document.getElementById(cardInfo[info]).value;
    if(!value){
      alert("please fill all the required fields...");
      return false;
    }
  }

  if(!email){
    alert("email field can't be empty...");
    return false;
  }else{
    if(!emailRegex.test(String(email).toLowerCase())){
      alert("please enter a valid email...");
      return false
    };
  }
 
     return true
  }

const addCardInfo=(e)=>{
e.preventDefault();
if(validate()){
  const Name=document.getElementById("Name");
  const Address=document.getElementById("Address");
  const College=document.getElementById("College-Name");
  Name.innerHTML=document.getElementById("inputName").value;
  Address.innerHTML=document.getElementById("inputAddress").value;
  College.innerHTML=document.getElementById("inputCollegeName").value;
  const BackgroundColor=document.getElementById("inputBackgroundColor").value;
  const TextColor=document.getElementById("inputTextColor").value;
  for(let info in cardInfo){
    document.getElementById(info).innerHTML=info+" :  "+document.getElementById(cardInfo[info]).value;
  }  
  document.getElementById("card").style.background=BackgroundColor;
  document.getElementById("card").style.color=TextColor;
  document.getElementById("card").style.display="flex";
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById("submitBtn").addEventListener('click', addCardInfo);
});
