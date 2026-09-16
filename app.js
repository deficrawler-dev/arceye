const launches = [
  {symbol:"VOLT",name:"Arc Voltage",age:"42s",cap:"$84.2K",change:"+182%",liq:"$18.4K",record:"1 / 1",dead:"0 dead",bundle:"4.8%",risk:"low",label:"CLEAN",tags:["new"]},
  {symbol:"GHOST",name:"Ghost Protocol",age:"2m",cap:"$211K",change:"+74.8%",liq:"$31.9K",record:"8 / 8",dead:"7 dead",bundle:"31.2%",risk:"high",label:"HIGH RISK",tags:["new","flagged"]},
  {symbol:"KERN",name:"Kernel Cat",age:"5m",cap:"$47.6K",change:"-12.4%",liq:"$12.1K",record:"2 / 2",dead:"1 dead",bundle:"9.7%",risk:"medium",label:"CAUTION",tags:["flagged"]},
  {symbol:"ARCX",name:"Arc Xeno",age:"11m",cap:"$592K",change:"+316%",liq:"$74.8K",record:"3 / 3",dead:"0 dead",bundle:"2.1%",risk:"low",label:"CLEAN",tags:["watching"]},
  {symbol:"MINT",name:"Mint Condition",age:"19m",cap:"$128K",change:"+8.2%",liq:"$24.6K",record:"12 / 12",dead:"10 dead",bundle:"26.4%",risk:"high",label:"FEE FARMER",tags:["flagged","watching"]},
  {symbol:"NOVA",name:"Nova Relay",age:"27m",cap:"$73.1K",change:"-31.9%",liq:"$15.2K",record:"1 / 1",dead:"0 dead",bundle:"7.2%",risk:"medium",label:"WATCH",tags:["watching"]}
];
const farmers=[
  {wallet:"0x71F2…A19C",launches:"12 launches",dead:"10 / 12 dead",fees:"$41,820",risk:"High"},
  {wallet:"0x9A83…07EF",launches:"8 launches",dead:"7 / 8 dead",fees:"$28,140",risk:"High"},
  {wallet:"0x2D91…E210",launches:"5 launches",dead:"4 / 5 dead",fees:"$11,604",risk:"Medium"}
];
const activities=[
  {icon:"↗",text:"<strong>0x9A83…07EF</strong> withdrew $4,210 in creator fees",time:"8s"},
  {icon:"⌁",text:"Wallet linked to <strong>GHOST</strong> created a fresh deployer",time:"21s"},
  {icon:"◎",text:"<strong>VOLT</strong> crossed $75K market cap with no sell from creator",time:"38s"},
  {icon:"!",text:"Coordinated buy cluster detected on <strong>MINT</strong>",time:"1m"}
];
const blocks=[
  ["#9,841,274","0x4fe…9a1","118 tx","now"],["#9,841,273","0xa08…cc2","94 tx","0.5s"],["#9,841,272","0x91b…3e8","131 tx","1.0s"],["#9,841,271","0x37d…42f","86 tx","1.5s"],["#9,841,270","0xef4…761","109 tx","2.0s"]
];

const rowRoot=document.querySelector("#launch-rows");
function renderLaunches(filter="all",query=""){
  const normalized=query.toLowerCase();
  const items=launches.filter(x=>(filter==="all"||x.tags.includes(filter))&&(`${x.symbol} ${x.name} ${x.label}`.toLowerCase().includes(normalized)));
  rowRoot.innerHTML=items.length?items.map(x=>`<tr data-token="${x.symbol}"><td><div class="token-cell"><span class="token-icon">${x.symbol.slice(0,2)}</span><div><strong>${x.symbol} · ${x.name}</strong><small>0x${Math.random().toString(16).slice(2,8)}…${Math.random().toString(16).slice(2,6)}</small></div></div></td><td class="mono">${x.age}</td><td class="mono">${x.cap}</td><td class="mono change ${x.change.startsWith("+")?"up":"down"}">${x.change}</td><td class="mono">${x.liq}</td><td><span class="record">${x.record}<small class="${x.dead.startsWith("0")?"":"death"}">${x.dead}</small></span></td><td class="mono">${x.bundle}</td><td><span class="risk-pill ${x.risk}">${x.label}</span></td><td class="row-open">›</td></tr>`).join(""):`<tr><td colspan="9" style="text-align:center;padding:38px;color:#7f8c93">No matching launches.</td></tr>`;
  rowRoot.querySelectorAll("tr[data-token]").forEach(row=>row.addEventListener("click",()=>showToast(`${row.dataset.token} intelligence view is queued for the data integration phase.`)));
}
renderLaunches();
document.querySelector("#farmer-list").innerHTML=farmers.map(x=>`<div class="farmer-row"><div class="wallet-id"><i class="identicon"></i><div><strong>${x.wallet}</strong><br><span>${x.launches}</span></div></div><span class="death">${x.dead}</span><span>${x.fees} fees</span><span class="risk-pill ${x.risk.toLowerCase()}">${x.risk.toUpperCase()}</span></div>`).join("");
document.querySelector("#activity-list").innerHTML=activities.map(x=>`<div class="activity-item"><span class="activity-icon">${x.icon}</span><p>${x.text}</p><time>${x.time}</time></div>`).join("");
document.querySelector("#block-list").innerHTML=blocks.map(x=>`<div class="block-row"><strong>${x[0]}</strong><span>Validator ${x[1]}</span><span>${x[2]}</span><span>${x[3]} ago</span></div>`).join("");

let activeFilter="all";
document.querySelectorAll(".tab").forEach(tab=>tab.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));tab.classList.add("active");activeFilter=tab.dataset.filter;renderLaunches(activeFilter,document.querySelector("#token-search").value)}));
document.querySelector("#token-search").addEventListener("input",e=>renderLaunches(activeFilter,e.target.value));

function changeView(name){document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));document.querySelector(`#${name}-view`)?.classList.add("active");document.querySelectorAll(".nav-item").forEach(n=>n.classList.toggle("active",n.dataset.view===name));document.querySelector("#command-panel").classList.remove("open");window.scrollTo({top:0,behavior:"smooth"});}
document.querySelectorAll("[data-view]").forEach(el=>el.addEventListener("click",e=>{e.preventDefault();changeView(el.dataset.view)}));

const command=document.querySelector("#command-panel");
document.querySelector(".search-trigger").addEventListener("click",()=>{command.classList.add("open");command.setAttribute("aria-hidden","false");setTimeout(()=>document.querySelector("#global-search").focus(),50)});
command.addEventListener("click",e=>{if(e.target===command)command.classList.remove("open")});
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key==="k"){e.preventDefault();command.classList.add("open")}if(e.key==="Escape")command.classList.remove("open")});

function inspect(){const input=document.querySelector("#scan-input");if(!input.value.trim()){input.focus();showToast("Paste a token, wallet, transaction or block to inspect.");return}showToast(`Queued inspection for ${input.value.slice(0,18)}${input.value.length>18?"…":""}`)}
document.querySelector("#scan-button").addEventListener("click",inspect);document.querySelector("#scan-input").addEventListener("keydown",e=>{if(e.key==="Enter")inspect()});
document.querySelectorAll(".wallet-btn,.empty-state .primary-btn").forEach(b=>b.addEventListener("click",()=>showToast("Wallet connection will activate with the Arc data layer.")));
document.querySelectorAll(".graph-node").forEach(n=>n.addEventListener("click",()=>showToast(`Selected ${n.dataset.wallet||"linked wallet"}`)));

let toastTimer;function showToast(message){const toast=document.querySelector("#toast");toast.querySelector("p").textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),3200)}
setTimeout(()=>showToast("Prototype online. On-chain values are representative data."),900);
