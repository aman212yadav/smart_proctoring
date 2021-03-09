/* Get the documentElement (<html>) to display the page in fullscreen */

//  full screen solution ...... ends . . . . . .

const video = document.querySelector("#videoElement");
let logsDiv=document.getElementById('logs');

const img=document.getElementById('image');
let model=undefined;

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
let loaded=false;
video.addEventListener('loadeddata', function() {
  cocoSsd.load().then(mod => {
      // detect objects in the image.\
      model=mod;
      loaded=true;
    });
}, false);
let activity = [];
function addElem(Class) {

  let div = document.createElement('div');
  let d =new Date();
  div.textContent=Class+" ("+d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds() +")";
 div.style.color = "white";
 div.style.width = "100%";
 div.style.textAlign="center";
 div.style.borderBottom="thick solid #fff";
 
 div.style.height = "30px";

 logsDiv.insertBefore(div,logsDiv.firstChild);

let cnt=logsDiv.childElementCount;

if(cnt>10){
  logsDiv.removeChild(logsDiv.lastChild);
}
  
}
function addChild(Class){
    Class=Class.toUpperCase();
    console.log(Class);
  if(Class=='PERSON' || Class=='CELL PHONE' || Class=="REMOTE"){
    addElem(Class);
  }

}
function predict(){

  model.detect(video).then(predictions => {
  
    predictions.forEach((prediction)=>{
      addChild(prediction.class);
      if (prediction.class == 'PERSON')
        noPerson = false;
    });
   
    console.log(".....");

  });
}
setTimeout('',5000);
setInterval(predict,5000);
