let cardInfo={"College-Name":"inputCollegeName","Name":"inputName","Father":"inputFatherName","Email":"inputEmail","Roll-No":"inputRollNo","Contact-No":"inputContactNo","Branch":"inputBranch","DOB":"inputDOB","Address":"inputAddress"}
console.log();
var loadFile = function(event) {
	var image = document.getElementById('imageId');
	image.src = URL.createObjectURL(event.target.files[0]);
}

const addCardInfo=(e)=>{
e.preventDefault();
if(validate()){
const BackgroundColor=document.getElementById("inputBackgroundColor").value;
const TextColor=document.getElementById("inputTextColor").value;
for(let info in cardInfo){
  document.getElementById(info).innerHTML=info+": "+document.getElementById(cardInfo[info]).value;
}  
document.getElementById("card").style.background=BackgroundColor;
document.getElementById("card").style.color=TextColor;
document.getElementById("card").style.display="grid";
}
}

let validate=function(){
let email=document.getElementById('inputEmail').value;
let image=document.getElementById("imageId").src;
if(!image){
  alert("please select a id photo");
  return false;
}
let backgroundColor=document.getElementById("inputBackgroundColor").value;
let textColor=document.getElementById("inputTextColor").value;
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(!re.test(String(email).toLowerCase())){
  alert("please enter a valid email...");
  return false
};
  for(let info in cardInfo){
    let value=document.getElementById(cardInfo[info]).value;
    if(!value){
      alert("please fill all the required fields...");
      return false;
    }
  } return true
}

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById("submitBtn").addEventListener('click', addCardInfo);
});
