

function onSend(id) {
  const Wcon = document.querySelectorAll('.Wcon');
  const root = document.getElementById('root');
  const bigCon = document.querySelector('.w-container');
  
  
  
  if (!Wcon) return null;
  
  Wcon.forEach(w => w.classList.remove('Wactive'));
  
  document.getElementById(id).classList.add('Wactive');
  root.classList.add('active');
  bigCon.classList.add('opacity');
}




function onClose() {
  const cont = document.querySelector('.w-container');
  const wcon = document.querySelector('.W-con');
  const root = document.getElementById('root');
  
  cont.classList.remove('opacity');
  wcon.classList.remove('Wactive');
  root.classList.remove('active');
}

document.getElementById('Wcon').addEventListener('click', function(e) {
  e.stopPropagation();
});