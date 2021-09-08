let idInfo={"Name":"inputName","Father":"inputFatherName","Email":"inputEmail","Roll-No":"inputRollNo","Contact-No":"inputContactNo","Branch":"inputBranch","DOB":"inputDOB","Address":"inputAddress"}


let setIdInfo=function(){
  uploadImage();
    for(let info in idInfo){
      document.getElementById(info).innerHTML=info+": "+document.getElementById(idInfo[info]).value;
    }  
    document.getElementById("card").style.display="grid";
  }

let uploadImage=function(){
  console.log('1');

  window.onunload = function () {
    localStorage.removeItem("recent-image");
  }
  document.getElementById("inputImage").addEventListener("change", function(){
    const reader = new FileReader();
    console.log('2');
    reader.addEventListener("load",() => {
      console.log('3');
      localStorage.setItem("recent-image",reader.result);
      console.log(reader.result);
    });
    reader.readAsDataURL(this.files[0]);

  });
    const recentImageDataUrl=localStorage.getItem("recent-image");
    if(recentImageDataUrl){
      document.querySelector("#imageId").setAttribute("src",recentImageDataUrl);
    }
}




  



