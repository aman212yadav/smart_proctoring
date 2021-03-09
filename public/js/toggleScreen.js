

/* View in fullscreen */

let elem = document.documentElement;
window.onload=  ()=>{
     console.log("yo1");
    let toogleBtn=document.getElementById('full')
    let blurEle=document.getElementsByClassName('blur')[0];

    toogleBtn.addEventListener('click',function(){
        console.log('button clicked');
          if(blurEle.classList.contains('blur')){
              toogleBtn.innerText="click to exit full screen";
              blurEle.classList.remove('blur');
              openFullscreen();
          }else{
              toogleBtn.innerText="click to go full screen"
              blurEle.classList.add('blur');
              closeFullscreen();
          }

    })
};


function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
