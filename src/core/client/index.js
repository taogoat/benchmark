var start = null
var unstart = null
function spin(timestamp){
  var duration = 6000
    if (start === null) {
        start = timestamp;
    }
  var runtime = Number(timestamp) - Number(start)
  var progress = runtime / duration
  progress = Math.min(progress, 1)
  var xy = 32-(32*progress)
  var rotated = (1080*progress)
  var trans = 'translate('+xy+','+xy+',0)scale('+progress+')rotate('+rotated+',32,32)'
  var targ = document.getElementById('taijitu')
  targ.setAttribute("transform", trans)
    if (progress < 1) {
        requestAnimationFrame(spin)
    }
    else{unstart = null; requestAnimationFrame(unspin)}
}

function unspin(timestamp){
  var duration = 6000
    if (unstart === null) {
        unstart = timestamp;
    }
  var runtime = Number(timestamp) - Number(unstart)
  var progress = runtime / duration
  progress = Math.min(progress, 1)
  var xy = 32*progress
  var rotated = (1080*progress)
  var scaled = Number(1-progress)
  var trans = 'translate('+xy+','+xy+')scale('+scaled+')rotate('+rotated+',32,32)'
  var targ = document.getElementById('taijitu')
  targ.setAttribute("transform", trans)
    if (progress < 1) {
        requestAnimationFrame(unspin)
    }
    else{start = null; requestAnimationFrame(spin)}
}
window.requestAnimationFrame(spin)
