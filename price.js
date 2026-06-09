
async function getPrice() {
const coinPrice = document.getElementById('coinPrice');
const url = 'https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd';

try {
  const res = await fetch(url);
  const data = await res.json();
  const price = data.tether.usd;
  coinPrice.innerHTML = '$' + price;
} catch (err) {
  console.error('error', error);
 }

}


getPrice();
setInterval(getPrice, 60000);