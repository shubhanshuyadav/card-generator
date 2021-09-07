let setIdInfo=function(){
    Validite()
    let name =document.getElementById("inputFullName").value;
    let position =document.getElementById("inputPosition").value;
    let email =document.getElementById("inputEmail").value;
    document.getElementById("name").innerHTML=name;
    document.getElementById("position").innerHTML=position;
    document.getElementById("email").innerHTML=email;
    document.getElementById("card").setAttribute("style", "display:flex");
    
}


