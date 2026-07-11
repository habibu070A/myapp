import { coins } from "./network.js";

let coinId = Object.keys(coins).map(k => coins[k].id).join(",");




const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_24_change=true`;







function getCoin() {
  
  const list = document.getElementById("listCoins");
  
  let html = "";
  
  
  
  Object.keys(coins).forEach((k) => {
    const d = coins[k];

    
    const format = d?.price.toLocaleString("en-US", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    });
    
    
    html += `
    <div class="coin" onclick=Buy("")>
    <img src="${d?.logo}" alt="img" class="coinImage">
    <div class="coinName">
    <span>${d?.name}</span>
    <h2>${d?.symbol}</h2>
    </div>
    
    <div class="coinPrice">
    <span id="price">$${format}</span>
    <span>${d?.change}%</span>
    </div>
    </div>
    `
  });
  
  list.innerHTML = html;
  
}


getCoin();