import { coins } from "./network.js";

let coinId = Object.keys(coins).map(k => coins[k].id).join(",");




const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_24hr_change=true`;







async function getCoin() {
  
  const list = document.getElementById("listCoins");
  
  let html = "";
  let p = null;
  
  
  try {
    const res = await fetch(url);
    let data = await res.json();
    p = data;
  } catch (err) {
    console.error("error", err);
  }
  
  Object.keys(coins).forEach((k) => {
    let d = coins[k];
    
    if (p && p[d.id]) {
      d.price = p[d.id].usd;
      d.change = p[d.id].usd_24h_change;
    }
    
    let color = d.change >= 0 ? "green" : "red";
    

    let format = d?.price.toLocaleString("en-US", {
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
    <span style="color:${color}">$${format}</span>
    
    <span style="color:white; background:${color}; border-radius: 10px; padding: 10px; height: 20px; display: flex;align-items:center;font-size:10px;width:auto">${d?.change.toFixed(2)}%</span>
    </div>
    </div>
    `
  });
  
  list.innerHTML = html;
  
}


getCoin();
setInterval(getCoin, 6000)