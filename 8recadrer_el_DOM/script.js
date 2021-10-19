const main = document.querySelector('.main');


document.addEventListener('mousedown', (e) => {
  //set moussemoove x + securité pour la mousse sur le dom
  if (e.target.className == "drag-x" && (window.event != null)) {

    document.onmousemove = (e) => {
      e == null ? e = window.event : "";
      console.log(e.clientX + '////' + main.clientWidth);
      document.querySelector(".box-1").style.flex = "0 0" + e.clientX / (main.clientWidth / 100) + "%";
    }
    preventBahavior(e);
  }
  //set moussemoove y + securité pour la mousse sur le dom
  else if (e.target.className == "drag-y" && (window.event != null)) {

    document.onmousemove = (e) => {
      e == null ? e = window.event : "";
      console.log(e.clientY + '////' + main.clientWidth);
      document.querySelector(".top").style.flex = "0 0" + e.clientY / (main.clientHeight / 100) + "%";
    }
    preventBahavior(e);
  }
});

//stop mouvement mousse up:
document.addEventListener('mouseup', (e) => {
  if (e.target != null) {
    document.onmousemove = null;
    document.onselectstart = null;
    e.target.ondragstart = null;
  }
})

//prevent bad behavior on moving element:
const preventBahavior = (e) => {
  document.onselectstart = () => false;
  e.target.ondragstart = () => false;
  return false;
}