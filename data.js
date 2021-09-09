


let setIdInfo=function(){
    for(let info in idInfo){
      document.getElementById(info).innerHTML=info+": "+document.getElementById(idInfo[info]).value;
    }  
    document.getElementById("card").style.display="grid";
  }

let uploadImage=function(){
  console.log('1');
  document.getElementById("inputImage").addEventListener("change", function(){
    const reader = new FileReader();
    console.log('2');
    reader.addEventListener("load",() => {
      console.log('3');
      localStorage.setItem("recent-image",reader.result);
    });
    reader.readAsDataURL(this.files[0]);
  });
    const recentImageDataUrl=localStorage.getItem("recent-image");
    if(recentImageDataUrl){
      document.querySelector("#imageId").setAttribute("src",recentImageDataUrl);
    }
}
