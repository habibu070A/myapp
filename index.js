import { getUser } from './database.js';


const adB = 100;

const bal = document.getElementById('balance');

bal.innerHTML = (adB).toLocaleString('en-EN', {
  minimumIntegerDigits: 2, minimumFractionDigits: 2
});


const user = document.getElementById('username');
const onUser = getUser();

user.innerHTML = `@ ${onUser?.username || onUser?.error}`;