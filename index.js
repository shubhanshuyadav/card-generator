let cardInfo={"Name":"inputName","Father":"inputFatherName","Email":"inputEmail","Roll-No":"inputRollNo","Contact-No":"inputContactNo","Branch":"inputBranch","DOB":"inputDOB"}

const addCardInfo=(e)=>{
e.preventDefault();
const Image=document.getElementById("inputImage").value;
console.log(Image);
const Address=document.getElementById("Address");
const College=document.getElementById("College-Name");
const BackgroundColor=document.getElementById("inputBackgroundColor").value;
const TextColor=document.getElementById("inputTextColor").value;
Address.innerHTML=document.getElementById("inputAddress").value;
College.innerHTML=document.getElementById("inputCollegeName").value;
document.getElementById("imageId").src=Image;


for(let info in cardInfo){
  console.log(document.getElementById(cardInfo[info]).value);
  document.getElementById(info).innerHTML=info+": "+document.getElementById(cardInfo[info]).value;
}  
document.getElementById("card").style.background=BackgroundColor;
document.getElementById("card").style.color=TextColor;
document.getElementById("card").style.display="grid";
}

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById("submitBtn").addEventListener('click', addCardInfo);
});
