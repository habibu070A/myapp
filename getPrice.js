import { coins } from "./network.js";

let coinId = Object.keys(coins).map(k => coins[k].id).join(",");

const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_24_change=true`;

let price = null;

const ids = document.getElementById("price");


async function getPrice() {
  
  try {
    const res = await fetch(url);
    let data = await res.json();
    price = data;
    Object.keys(coins).forEach(k => {
      let id = coins[k].id;
      ids.innerHTML += price[id].usd;
    })

  } catch (err) {
    console.error("error", err);
  }
}