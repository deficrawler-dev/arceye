const launches = [
  {symbol:"VOLT",name:"Arc Voltage",image:"assets/tokens/volt.svg",age:"42s",cap:"$84.2K",change:"+182%",liq:"$18.4K",record:"1 / 1",dead:"0 dead",bundle:"4.8%",risk:"low",label:"CLEAN",tags:["new"]},
  {symbol:"GHOST",name:"Ghost Protocol",image:"assets/tokens/ghost.svg",age:"2m",cap:"$211K",change:"+74.8%",liq:"$31.9K",record:"8 / 8",dead:"7 dead",bundle:"31.2%",risk:"high",label:"HIGH RISK",tags:["new","flagged"]},
  {symbol:"KERN",name:"Kernel Cat",image:"assets/tokens/kern.svg",age:"5m",cap:"$47.6K",change:"-12.4%",liq:"$12.1K",record:"2 / 2",dead:"1 dead",bundle:"9.7%",risk:"medium",label:"CAUTION",tags:["flagged"]},
  {symbol:"ARCX",name:"Arc Xeno",image:"assets/tokens/arcx.svg",age:"11m",cap:"$592K",change:"+316%",liq:"$74.8K",record:"3 / 3",dead:"0 dead",bundle:"2.1%",risk:"low",label:"CLEAN",tags:["watching"]},
  {symbol:"MINT",name:"Mint Condition",image:"assets/tokens/mint.svg",age:"19m",cap:"$128K",change:"+8.2%",liq:"$24.6K",record:"12 / 12",dead:"10 dead",bundle:"26.4%",risk:"high",label:"FEE FARMER",tags:["flagged","watching"]},
  {symbol:"NOVA",name:"Nova Relay",image:"assets/tokens/nova.svg",age:"27m",cap:"$73.1K",change:"-31.9%",liq:"$15.2K",record:"1 / 1",dead:"0 dead",bundle:"7.2%",risk:"medium",label:"WATCH",tags:["watching"]}
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
const creatorLaunches=[
  ["GHOST","assets/tokens/ghost.svg","$211K","LIVE","+74.8%"],["MINT","assets/tokens/mint.svg","$1.8M peak","-98.7%","2d ago"],["DEAD","assets/tokens/dead.svg","$420K peak","-99.4%","4d ago"],["BOZO","assets/tokens/bozo.svg","$91K peak","-97.2%","7d ago"],["ARC7","assets/tokens/arcx.svg","$680K peak","-99.1%","11d ago"],["ZAP","assets/tokens/volt.svg","$54K peak","-96.8%","14d ago"],["FOLD","assets/tokens/ghost.svg","$310K peak","-99.8%","17d ago"],["ZERO","assets/tokens/dead.svg","$76K peak","-100%","19d ago"]
];
const bundleWallets=[
  ["0xA822…C611","4.82%","$10,170","Launch block"],["0x19B4…F882","4.11%","$8,672","Launch block"],["0xCC41…9A02","3.74%","$7,891","Launch block"],["0x831D…117C","3.20%","$6,752","+1 block"],["0xF294…20E1","2.97%","$6,267","+1 block"],["7 more wallets","12.36%","$26,080","≤ 4 blocks"]
];
const holders=[
  ["1 · 0xA822…C611","4.82%","Likely bundle","No sells"],["2 · 0x19B4…F882","4.11%","Likely bundle","No sells"],["3 · 0xCC41…9A02","3.74%","Likely bundle","Sold 12%"],["4 · 0x71F2…A19C","3.51%","Creator","No sells"],["5 · 0x831D…117C","3.20%","Likely bundle","No sells"],["6–100 · Other wallets","43.12%","Mixed","—"]
];
const trades=[
  ["BUY","$1,842","0xF28…81C","now"],["BUY","$420","0x30A…912","2s"],["SELL","$2,119","0xA18…0F2","4s"],["BUY","$718","0x98C…7DE","7s"],["BUY","$3,201","0x44B…11A","11s"],["SELL","$890","0x7D1…8C4","14s"]
];
const marketTokens=[
  {symbol:"ARGUS",image:"assets/tokens/argus.svg",change:"−35.1%",cap:"$15.03M",tone:"loss",x:50,y:49,s:154},
  {symbol:"NOW",image:"assets/tokens/bozo.svg",change:"+773.6%",cap:"$21.7K",tone:"gain",x:4,y:31,s:64},
  {symbol:"ARCSCAN",image:"assets/arceye-logo.png",change:"+589.9%",cap:"$17.1K",tone:"gain",x:14,y:30,s:70},
  {symbol:"ROBOTMONEY",image:"assets/tokens/ghost.svg",change:"+37.5%",cap:"$15.4K",tone:"gain",x:26,y:29,s:58},
  {symbol:"FLYBRIARC",image:"assets/tokens/arcx.svg",change:"+333.2%",cap:"$10.7K",tone:"gain",x:38,y:30,s:62},
  {symbol:"DUKE",image:"assets/tokens/kern.svg",change:"+96,401.9%",cap:"$2.39M",tone:"gain",x:62,y:29,s:118},
  {symbol:"USDC",image:"assets/tokens/volt.svg",change:"+96,315.5%",cap:"$2.39M",tone:"gain",x:78,y:29,s:116},
  {symbol:"PI",image:"assets/tokens/nova.svg",change:"+25,221.5%",cap:"$628K",tone:"gain",x:93,y:30,s:101},
  {symbol:"VOLT",image:"assets/tokens/volt.svg",change:"+182%",cap:"$84K",tone:"gain",x:7,y:15,s:105},
  {symbol:"GHOST",image:"assets/tokens/ghost.svg",change:"+74.8%",cap:"$211K",tone:"gain",x:19,y:19,s:82},
  {symbol:"KERN",image:"assets/tokens/kern.svg",change:"−12.4%",cap:"$47K",tone:"loss",x:30,y:10,s:68},
  {symbol:"ARCX",image:"assets/tokens/arcx.svg",change:"+316%",cap:"$592K",tone:"gain",x:41,y:17,s:102},
  {symbol:"MINT",image:"assets/tokens/mint.svg",change:"+8.2%",cap:"$128K",tone:"gain",x:61,y:13,s:73},
  {symbol:"NOVA",image:"assets/tokens/nova.svg",change:"−31.9%",cap:"$73K",tone:"loss",x:72,y:19,s:91},
  {symbol:"WAVE",image:"assets/tokens/arcx.svg",change:"+483.1%",cap:"$14.5K",tone:"gain",x:84,y:11,s:79},
  {symbol:"SCOUT",image:"assets/tokens/bozo.svg",change:"+14.7%",cap:"$204K",tone:"gain",x:10,y:40,s:92},
  {symbol:"WLD",image:"assets/tokens/mint.svg",change:"+5.3%",cap:"$98K",tone:"gain",x:23,y:39,s:68},
  {symbol:"CRO",image:"assets/tokens/arcx.svg",change:"+24.1%",cap:"$302K",tone:"gain",x:34,y:37,s:84},
  {symbol:"STABLE",image:"assets/tokens/ghost.svg",change:"−9.7%",cap:"$188K",tone:"loss",x:66,y:42,s:104},
  {symbol:"LINK",image:"assets/tokens/volt.svg",change:"+17.9%",cap:"$72K",tone:"gain",x:80,y:37,s:72},
  {symbol:"POL",image:"assets/tokens/mint.svg",change:"+4.7%",cap:"$44K",tone:"gain",x:92,y:43,s:76},
  {symbol:"CAKE",image:"assets/tokens/kern.svg",change:"+57.6%",cap:"$247K",tone:"gain",x:6,y:68,s:112},
  {symbol:"NEAR",image:"assets/tokens/arcx.svg",change:"+61.4%",cap:"$416K",tone:"gain",x:20,y:68,s:122},
  {symbol:"ENA",image:"assets/tokens/nova.svg",change:"+82.3%",cap:"$351K",tone:"gain",x:35,y:71,s:106},
  {symbol:"PUMP",image:"assets/tokens/mint.svg",change:"+37.4%",cap:"$271K",tone:"gain",x:64,y:72,s:116},
  {symbol:"SUI",image:"assets/tokens/volt.svg",change:"+4.0%",cap:"$67K",tone:"gain",x:78,y:68,s:75},
  {symbol:"UNI",image:"assets/tokens/nova.svg",change:"+106%",cap:"$489K",tone:"gain",x:92,y:70,s:118},
  {symbol:"PEPE",image:"assets/tokens/bozo.svg",change:"+34.1%",cap:"$114K",tone:"gain",x:13,y:90,s:85},
  {symbol:"SOL",image:"assets/tokens/volt.svg",change:"+31.5%",cap:"$153K",tone:"gain",x:27,y:89,s:89},
  {symbol:"RAIN",image:"assets/tokens/ghost.svg",change:"−7.8%",cap:"$62K",tone:"loss",x:42,y:90,s:76},
  {symbol:"JUP",image:"assets/tokens/arcx.svg",change:"+30.2%",cap:"$132K",tone:"gain",x:57,y:91,s:84},
  {symbol:"RENDER",image:"assets/tokens/nova.svg",change:"+9.6%",cap:"$77K",tone:"gain",x:72,y:91,s:72},
  {symbol:"TON",image:"assets/tokens/mint.svg",change:"+12.9%",cap:"$108K",tone:"gain",x:84,y:91,s:80},
  {symbol:"FOLD",image:"assets/tokens/dead.svg",change:"−18.3%",cap:"$29K",tone:"loss",x:97,y:91,s:52}
];
const directoryNames=["ARGUS","VOLT","GHOST","KERN","ARCX","MINT","NOVA","WAVE","SCOUT","WLD","CRO","STABLE","LINK","POL","CAKE","NEAR","ENA","PUMP","SUI","UNI","PEPE","SOL","RAIN","JUP"];
const directoryTokens=directoryNames.map((symbol,index)=>{
  const market=marketTokens.find(token=>token.symbol===symbol)||marketTokens[index%marketTokens.length];
  const source=launches.find(token=>token.symbol===symbol)||launches[index%launches.length];
  const names={ARGUS:"Argus",SCOUT:"Jeremy's Dog",WAVE:"Arc Wave",WLD:"World Ledger",CRO:"Crow Protocol",STABLE:"Stable Arc",LINK:"Arc Link",POL:"Polygon Relay",CAKE:"Cake House",NEAR:"Near Arc",ENA:"Enara",PUMP:"Arc Pump",SUI:"Sui Bridge",UNI:"Uni Arc",PEPE:"Pepe on Arc",SOL:"Solar Arc",RAIN:"Purple Rain",JUP:"Jupiter Arc"};
  return {...source,symbol,image:market.image,name:names[symbol]||source.name,age:index<6?source.age:`${index+1}h`,cap:market.cap,change:market.change,liq:`$${(18+index*3.7).toFixed(1)}K`,bundle:`${(2.1+(index%7)*3.4).toFixed(1)}%`};
});
const argusToken=directoryTokens.find(token=>token.symbol==="ARGUS");
Object.assign(argusToken,{
  name:"Argus",age:"14d",cap:"$15.03M",change:"−35.1%",changePeriod:"24H",price:"$0.015",liq:"Not indexed",pair:"ARGUS / USDC",
  address:"0xeCe5…cb3c",fullAddress:"",creator:"0x7d61…beE4",launched:"Launched 14 days ago",
  creatorHolding:"—",creatorNote:"View holder distribution",bundle:"—",bundleNote:"Open supply map",score:"—",
  scoreNote:"Native ecosystem token",risk:"medium",label:"NATIVE",verifiedSnapshot:true
});

function bubbleMarkup(tokens,variant="full"){
  const heroLayout=[[50,50,160],[12,18,106],[29,22,82],[72,16,70],[88,24,110],[16,55,78],[82,58,88],[28,82,98],[48,84,72],[68,84,86],[7,88,55],[94,86,60],[37,47,68],[64,44,74],[91,49,52]];
  return tokens.map((token,index)=>{const layout=variant==="hero"?heroLayout[index]:null;const x=layout?.[0]??token.x;const y=layout?.[1]??token.y;const size=layout?.[2]??token.s;return `<button class="pro-bubble ${token.tone} ${token.symbol==="ARGUS"?"native":""}" data-token="${token.symbol}" style="--x:${x};--y:${y};--size:${size}px" aria-label="${token.symbol} ${token.change}"><img src="${token.image}" alt=""/><strong>${token.symbol}</strong><span>${token.change}</span><small>${token.cap}</small></button>`}).join("");
}
document.querySelector("#full-bubble-field").innerHTML=bubbleMarkup(marketTokens);
document.querySelector("#home-bubble-field").innerHTML=bubbleMarkup(marketTokens,"home");
document.querySelector("#hero-bubble-field")?.replaceChildren();
const heroTokenPool=directoryTokens.filter(token=>token.symbol&&token.image);
let heroTokenIndex=0;
function rotateHeroToken(){
  const token=heroTokenPool[heroTokenIndex%heroTokenPool.length];heroTokenIndex+=1;
  const card=document.querySelector(".scan-token-card");if(!card)return;
  card.classList.add("switching");
  setTimeout(()=>{document.querySelector("#hero-token-image").src=token.image;document.querySelector("#hero-token-symbol").textContent=`${token.symbol}`;document.querySelector("#hero-token-name").textContent=token.name;document.querySelector("#hero-token-address").textContent=token.address||`Arc launch · ${token.age}`;card.classList.remove("switching")},180);
}
rotateHeroToken();setInterval(rotateHeroToken,3600);

const rowRoot=document.querySelector("#launch-rows");
function tokenRowMarkup(x){const displayAddress=x.address||`0x${Math.random().toString(16).slice(2,8)}…${Math.random().toString(16).slice(2,6)}`;return `<tr data-token="${x.symbol}"><td><div class="token-cell"><img class="token-icon" src="${x.image}" alt="${x.name} token" /><div><strong>${x.symbol} · ${x.name}</strong><small>${displayAddress}</small></div></div></td><td class="mono">${x.age}</td><td class="mono">${x.cap}</td><td class="mono change ${String(x.change).startsWith("+")?"up":"down"}">${x.change}</td><td class="mono">${x.liq}</td><td><span class="record">${x.record}<small class="${x.dead.startsWith("0")?"":"death"}">${x.dead}</small></span></td><td class="mono">${x.bundle}</td><td><span class="risk-pill ${x.risk}">${x.label}</span></td><td class="row-open">›</td></tr>`}
function renderLaunches(filter="all",query=""){
  const normalized=query.toLowerCase();
  const items=launches.filter(x=>(filter==="all"||x.tags.includes(filter))&&(`${x.symbol} ${x.name} ${x.label}`.toLowerCase().includes(normalized)));
  rowRoot.innerHTML=items.length?items.map(tokenRowMarkup).join(""):`<tr><td colspan="9" style="text-align:center;padding:38px;color:#7f8c93">No matching launches.</td></tr>`;
  rowRoot.querySelectorAll("tr[data-token]").forEach(row=>row.addEventListener("click",()=>openToken(row.dataset.token)));
}
renderLaunches();
function renderDirectory(query=""){const root=document.querySelector("#all-launch-rows");const matches=directoryTokens.filter(x=>`${x.symbol} ${x.name}`.toLowerCase().includes(query.toLowerCase()));root.innerHTML=matches.map(tokenRowMarkup).join("");root.querySelectorAll("tr[data-token]").forEach(row=>row.addEventListener("click",()=>openToken(row.dataset.token)))}
renderDirectory();document.querySelector("#directory-search").addEventListener("input",event=>renderDirectory(event.target.value));
document.querySelector("#farmer-list").innerHTML=farmers.map(x=>`<button class="farmer-row" data-wallet="${x.wallet}"><div class="wallet-id"><i class="identicon"></i><div><strong>${x.wallet}</strong><br><span>${x.launches}</span></div></div><span class="death">${x.dead}</span><span>${x.fees} fees</span><span class="risk-pill ${x.risk.toLowerCase()}">${x.risk.toUpperCase()}</span><b>View tokens →</b></button>`).join("");
document.querySelector("#activity-list").innerHTML=activities.map((x,index)=>`<button class="activity-item" data-activity="${index}"><span class="activity-icon">${x.icon}</span><p>${x.text}</p><time>${x.time}</time></button>`).join("");
document.querySelector("#block-list").innerHTML=blocks.map(x=>`<div class="block-row"><strong>${x[0]}</strong><span>Validator ${x[1]}</span><span>${x[2]}</span><span>${x[3]} ago</span></div>`).join("");
const launchMarkup=creatorLaunches.map(x=>`<div class="creator-launch-row"><strong class="launch-token"><img src="${x[1]}" alt="" />${x[0]}</strong><span>${x[2]}</span><span class="${x[3].startsWith("-")?"danger-text":x[3]==="LIVE"?"up":""}">${x[3]}</span><span>${x[4]}</span></div>`).join("");
document.querySelector("#creator-launches").innerHTML=launchMarkup;
document.querySelector("#full-creator-launches").innerHTML=launchMarkup;
document.querySelector("#bundle-wallets").innerHTML=bundleWallets.map(x=>`<div class="bundle-row"><strong>${x[0]}</strong><span>${x[1]} supply</span><span>${x[2]}</span><span>${x[3]}</span></div>`).join("");
document.querySelector("#holders-list").innerHTML=holders.map(x=>`<div class="holder-row"><strong>${x[0]}</strong><span>${x[1]}</span><span>${x[2]}</span><span>${x[3]}</span></div>`).join("");
document.querySelector("#trades-list").innerHTML=trades.map(x=>`<div class="trade-row"><strong class="${x[0]==="BUY"?"up":"danger-text"}">${x[0]}</strong><span>${x[1]}</span><span>${x[2]}</span><span>${x[3]} ago</span></div>`).join("");
document.querySelector("#farmer-token-list").innerHTML=creatorLaunches.concat(creatorLaunches.slice(0,4)).map((x,index)=>`<div class="farmer-token"><div><img src="${x[1]}" alt=""/><span><strong>${x[0]}${index>7?` ${index-7}`:""}</strong><small>${x[2]} · ${x[3]}</small></span></div><code>0x${(index+71).toString(16)}f2${(index+9402).toString(16)}…${(index+411).toString(16)}c</code><button class="copy-ca" data-ca="0x${(index+71).toString(16)}f2${(index+9402).toString(16)}a19c">Copy CA</button><button class="open-farmer-token" data-token="${x[0]}">Open →</button></div>`).join("");

function openToken(symbol){
  const token=directoryTokens.find(x=>x.symbol===symbol)||launches.find(x=>x.symbol===symbol)||launches[1];
  const native=Boolean(token.verifiedSnapshot);
  const set=(selector,value)=>{const node=document.querySelector(selector);if(node)node.textContent=value};
  set("#detail-symbol",token.symbol);
  const icon=document.querySelector("#detail-icon");icon.src=token.image;icon.alt=`${token.name} token`;
  set("#detail-name",token.name);set("#detail-ticker",token.symbol);set("#detail-cap",token.cap);
  set("#detail-change",`${token.change} ${token.changePeriod||"1H"}`);
  document.querySelector("#detail-change").className=String(token.change).startsWith("+")?"up":"down";
  set("#detail-liquidity",native?"Not indexed":token.liq);set("#detail-pair",token.pair||`USDC / ${token.symbol}`);
  set("#detail-creator-holding",native?"—":"8.4%");set("#detail-creator-note",native?"Awaiting holder index":"3 linked wallets");
  set("#detail-bundle",native?"—":token.bundle);set("#detail-bundle-note",native?"Open supply map":"Supply concentration");
  set("#detail-score",native?"—":"87 / 100");set("#detail-score-note",native?"Native ecosystem asset":"Creator evidence score");
  set("#detail-chart-pair",token.pair||`${token.symbol} / USDC`);set("#detail-price",token.price||"—");set("#detail-price-change",token.change);
  document.querySelector("#detail-price-change").className=String(token.change).startsWith("+")?"up":"down";
  const address=document.querySelector("#detail-address");address.textContent=token.address||"Contract";address.dataset.address=token.fullAddress||"";address.title=token.fullAddress?"Copy contract address":"Full contract address requires live indexing";
  set("#detail-launch-meta",token.launched||"Launched via Argus");
  const risk=document.querySelector("#detail-risk");risk.textContent=native?"NATIVE":token.label;risk.className=`risk-pill ${native?"medium":token.risk}`;
  set("#detail-verdict-score",native?"—":"87");set("#detail-verdict-kicker",native?"DATA STATUS":"ARCEYE VERDICT");
  set("#detail-verdict-title",native?"Market snapshot only":"Proceed with caution");
  set("#detail-verdict-copy",native?"Native ecosystem asset. Market performance is shown alongside the evidence available for this token. Creator-specific signals appear only when they apply.":"ArcEye combines creator history, supply concentration, fee movements and linked-wallet evidence into one readable trail.");
  document.querySelector("#detail-signals").innerHTML=native
    ? `<div><span class="safe-dot"></span><strong>Market cap</strong><small>$15.03M supplied snapshot</small></div><div><span class="bad-dot"></span><strong>24H performance</strong><small>−35.1% supplied snapshot</small></div><div><span class="warn-dot"></span><strong>Creator analysis</strong><small>Awaiting live indexer</small></div><div><span class="warn-dot"></span><strong>Bundle analysis</strong><small>Awaiting live indexer</small></div>`
    : `<div><span class="safe-dot"></span><strong>Creator trail</strong><small>Open the creator tab for launch history</small></div><div><span class="warn-dot"></span><strong>Supply concentration</strong><small>Open bundle evidence for wallet links</small></div>`;
  document.querySelector("#detail-secondary-intel").hidden=native;
  document.querySelectorAll("[data-detail-tab]").forEach(tab=>{tab.hidden=native&&tab.dataset.detailTab!=="overview";tab.classList.toggle("active",tab.dataset.detailTab==="overview")});
  document.querySelectorAll(".detail-pane").forEach(pane=>pane.classList.toggle("active",pane.id==="overview-pane"));
  const downPath="M0 25L35 30L70 45L105 38L140 70L175 64L210 92L245 82L280 110L315 102L350 135L385 126L420 155L455 146L490 175L525 165L560 192L595 183L630 208L665 198L700 224L735 214L770 235L805 226L840 244L875 232L900 240";
  const upPath="M0 220L35 211L70 218L105 190L140 198L175 175L210 181L245 154L280 165L315 139L350 148L385 111L420 126L455 96L490 102L525 72L560 91L595 62L630 70L665 38L700 56L735 31L770 42L805 17L840 28L875 11L900 21";
  const path=native?downPath:upPath;document.querySelector(".price-line").setAttribute("d",path);document.querySelector(".price-area").setAttribute("d",`${path}V260H0Z`);
  changeView("token");
}

let activeFilter="all";
document.querySelectorAll(".tab").forEach(tab=>tab.addEventListener("click",()=>{document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));tab.classList.add("active");activeFilter=tab.dataset.filter;renderLaunches(activeFilter,document.querySelector("#token-search").value)}));
document.querySelector("#token-search").addEventListener("input",e=>renderLaunches(activeFilter,e.target.value));

function closeMenu(){document.querySelector("#mobile-menu").classList.remove("open");document.querySelector("#mobile-menu-scrim").classList.remove("open");document.querySelector("#mobile-menu").setAttribute("aria-hidden","true");document.querySelector("#menu-toggle").setAttribute("aria-expanded","false")}
function changeView(name){document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));document.querySelector(`#${name}-view`)?.classList.add("active");document.querySelectorAll(".nav-item,.mobile-nav-item").forEach(n=>n.classList.toggle("active",n.dataset.view===name));document.querySelector("#command-panel").classList.remove("open");closeMenu();window.scrollTo({top:0,behavior:"smooth"});}
document.querySelectorAll("[data-view]").forEach(el=>el.addEventListener("click",e=>{e.preventDefault();changeView(el.dataset.view)}));
document.querySelector("#menu-toggle").addEventListener("click",()=>{document.querySelector("#mobile-menu").classList.add("open");document.querySelector("#mobile-menu-scrim").classList.add("open");document.querySelector("#mobile-menu").setAttribute("aria-hidden","false");document.querySelector("#menu-toggle").setAttribute("aria-expanded","true")});
document.querySelector("#menu-close").addEventListener("click",closeMenu);document.querySelector("#mobile-menu-scrim").addEventListener("click",closeMenu);
document.querySelectorAll("[data-scroll]").forEach(button=>button.addEventListener("click",()=>document.querySelector(`#${button.dataset.scroll}`)?.scrollIntoView({behavior:"smooth"})));
function enableBubbleDrag(bubble){
  let active=false,moved=false,startX=0,startY=0,originX=0,originY=0,containerRect=null;
  bubble.addEventListener("pointerdown",event=>{active=true;moved=false;startX=event.clientX;startY=event.clientY;containerRect=bubble.parentElement.getBoundingClientRect();const rect=bubble.getBoundingClientRect();originX=rect.left-containerRect.left+rect.width/2;originY=rect.top-containerRect.top+rect.height/2;bubble.setPointerCapture(event.pointerId);bubble.classList.add("dragging")});
  bubble.addEventListener("pointermove",event=>{if(!active)return;const dx=event.clientX-startX,dy=event.clientY-startY;if(Math.abs(dx)+Math.abs(dy)>5)moved=true;const radius=bubble.offsetWidth/2;const x=Math.max(radius,Math.min(containerRect.width-radius,originX+dx));const y=Math.max(radius,Math.min(containerRect.height-radius,originY+dy));bubble.style.left=`${x}px`;bubble.style.top=`${y}px`});
  const finish=()=>{if(!active)return;active=false;bubble.classList.remove("dragging");if(moved){bubble.dataset.dragged="true";setTimeout(()=>delete bubble.dataset.dragged,120)}};
  bubble.addEventListener("pointerup",finish);bubble.addEventListener("pointercancel",finish);
  bubble.addEventListener("click",event=>{if(bubble.dataset.dragged){event.preventDefault();event.stopPropagation();return}openToken(bubble.dataset.token)});
}
document.querySelectorAll(".pro-bubble").forEach(enableBubbleDrag);
document.querySelectorAll(".bubble-controls button,.mini-time-controls button").forEach(button=>button.addEventListener("click",()=>{const group=button.parentElement;group.querySelectorAll("button").forEach(item=>item.classList.remove("active"));button.classList.add("active");showToast(`${button.textContent} market view selected.`)}));
document.querySelectorAll(".farmer-row").forEach(row=>row.addEventListener("click",()=>{document.querySelector("#farmer-wallet").textContent=row.dataset.wallet;changeView("farmer")}));
document.querySelectorAll(".activity-item").forEach((row,index)=>row.addEventListener("click",()=>{if(index===1||index===3)changeView("network");else openDrawer()}));
document.querySelectorAll(".open-farmer-token").forEach(button=>button.addEventListener("click",event=>{event.stopPropagation();openToken(button.dataset.token)}));
document.querySelectorAll(".copy-ca").forEach(button=>button.addEventListener("click",async event=>{event.stopPropagation();try{await navigator.clipboard.writeText(button.dataset.ca);showToast("Contract address copied.")}catch{showToast(button.dataset.ca)}}));
function toggleTheme(){const light=document.body.classList.toggle("light-mode");document.querySelector("#theme-toggle").setAttribute("aria-label",light?"Switch to dark theme":"Switch to light theme");showToast(light?"Light theme enabled.":"Dark theme enabled.")}
document.querySelector("#theme-toggle").addEventListener("click",toggleTheme);document.querySelector("#mobile-theme-toggle").addEventListener("click",toggleTheme);

const command=document.querySelector("#command-panel");
document.querySelector(".search-trigger").addEventListener("click",()=>{command.classList.add("open");command.setAttribute("aria-hidden","false");setTimeout(()=>document.querySelector("#global-search").focus(),50)});
command.addEventListener("click",e=>{if(e.target===command)command.classList.remove("open")});
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key==="k"){e.preventDefault();command.classList.add("open")}if(e.key==="Escape")command.classList.remove("open")});

function openDrawer(){document.querySelector("#tx-drawer").classList.add("open");document.querySelector("#drawer-scrim").classList.add("open");document.querySelector("#tx-drawer").setAttribute("aria-hidden","false")}
function closeDrawer(){document.querySelector("#tx-drawer").classList.remove("open");document.querySelector("#drawer-scrim").classList.remove("open");document.querySelector("#tx-drawer").setAttribute("aria-hidden","true")}
let detectedScan={type:"",value:""},selectedScanMode="auto";
const ARC_RPC="https://rpc.mainnet.arc.io";
async function rpcCall(method,params){
  const response=await fetch(ARC_RPC,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:Date.now(),method,params})});
  const payload=await response.json();if(payload.error)throw new Error(payload.error.message||"RPC request failed");return payload.result;
}
function decodeAbiText(hex){
  if(!hex||hex==="0x")return "";
  try{const clean=hex.slice(2);let data=clean;if(clean.length>64){const offset=parseInt(clean.slice(0,64),16)*2;const length=parseInt(clean.slice(offset,offset+64),16)*2;data=clean.slice(offset+64,offset+64+length)}else data=clean;const bytes=data.match(/.{1,2}/g).map(byte=>parseInt(byte,16)).filter(Boolean);return new TextDecoder().decode(new Uint8Array(bytes)).replace(/\0/g,"").trim()}catch{return ""}
}
function setDetectedMode(mode){
  document.querySelectorAll("[data-scan-mode]").forEach(button=>button.classList.toggle("active",button.dataset.scanMode===mode));
}
async function classifyArcAddress(address){
  if(selectedScanMode==="token")return {type:"Token",kind:"TOKEN",title:"Token contract",action:"Open token contract",view:"scan",address};
  if(selectedScanMode==="wallet")return {type:"Wallet",kind:"WALLET",title:"Wallet address",action:"Open wallet intelligence",view:"network",address};
  try{
    const code=await rpcCall("eth_getCode",[address,"latest"]);
    if(!code||code==="0x"||code==="0x0")return {type:"Wallet",kind:"WALLET",title:"Wallet address",action:"Open wallet intelligence",view:"network",address};
    const [symbolHex,nameHex]=await Promise.all([
      rpcCall("eth_call",[{to:address,data:"0x95d89b41"},"latest"]).catch(()=>null),
      rpcCall("eth_call",[{to:address,data:"0x06fdde03"},"latest"]).catch(()=>null)
    ]);
    const symbol=decodeAbiText(symbolHex),name=decodeAbiText(nameHex);
    if(symbol||name)return {type:"Token",kind:"TOKEN",title:symbol&&name?`${symbol} · ${name}`:(symbol||name),action:"Open token contract",view:"scan",address,rpcVerified:true};
    return {type:"Contract",kind:"CONTRACT",title:"Smart contract",action:"Inspect contract activity",view:"scan",address};
  }catch{
    return {type:"Address",kind:"ADDRESS",title:"Arc address",action:"Inspect on Arc Explorer",view:"scan",address,rpcUnavailable:true};
  }
}
async function detectInput(value){
  const raw=value.trim();if(!raw)return null;
  if(selectedScanMode==="block"||(/^\d+$/.test(raw)&&selectedScanMode==="auto"))return {type:"Block",kind:"BLOCK",title:`Block #${raw}`,action:"Inspect block transactions",view:"scan"};
  if(selectedScanMode==="transaction"||(/^0x[a-fA-F0-9]{64}$/.test(raw)&&selectedScanMode==="auto"))return {type:"Transaction",kind:"TRANSACTION",title:"Transaction",action:"Trace asset flow",view:"scan"};
  if(/^0x[a-fA-F0-9]{40}$/.test(raw))return classifyArcAddress(raw);
  const token=directoryTokens.find(item=>item.symbol.toLowerCase()===raw.replace("$","").toLowerCase()||item.name.toLowerCase().includes(raw.toLowerCase()));
  if(token)return {type:"Token",kind:"TOKEN",title:`${token.symbol} · ${token.name}`,action:"Open token intelligence",view:"token",symbol:token.symbol};
  return {type:"Search",kind:"SEARCH",title:raw.toUpperCase(),action:"Search Arc launches",view:"launches"};
}
async function inspect(){
  const input=document.querySelector("#scan-input"),button=document.querySelector("#scan-button"),raw=input.value.trim();
  if(!raw){input.focus();showToast("Paste a token, wallet, transaction or block to inspect.");return}
  button.disabled=true;button.innerHTML='Scanning Arc <span>···</span>';
  const result=await detectInput(raw);
  button.disabled=false;button.innerHTML='Run scan <span>↗</span>';
  if(!result)return;
  detectedScan={...result,value:raw};
  setDetectedMode(result.type==="Token"?"token":result.type==="Wallet"?"wallet":result.type==="Transaction"?"transaction":result.type==="Block"?"block":"auto");
  document.querySelector("#scan-result-empty").hidden=true;document.querySelector("#scan-result-live").hidden=false;
  document.querySelector("#scan-kind").textContent=result.kind;document.querySelector("#scan-result-title").textContent=result.title;
  document.querySelector("#scan-result-value").textContent=raw;document.querySelector("#scan-input-type").textContent=result.type;
  document.querySelector("#scan-next-action").textContent=result.action;document.querySelector("#scan-result-shell").classList.add("has-result");
  document.querySelector("#scan-open-result").textContent=result.rpcVerified?"Open token contract →":result.rpcUnavailable?"Open Arc Explorer →":"Open intelligence →";
}
document.querySelector("#scan-button").addEventListener("click",inspect);document.querySelector("#scan-input").addEventListener("keydown",e=>{if(e.key==="Enter")inspect()});
document.querySelectorAll("[data-scan-example]").forEach(button=>button.addEventListener("click",()=>{document.querySelector("#scan-input").value=button.dataset.scanExample;inspect()}));
document.querySelectorAll("[data-scan-mode]").forEach(button=>button.addEventListener("click",()=>{selectedScanMode=button.dataset.scanMode;setDetectedMode(selectedScanMode);document.querySelector("#scan-input").focus()}));
document.querySelector("#scan-open-result").addEventListener("click",()=>{if(detectedScan.symbol)openToken(detectedScan.symbol);else if(detectedScan.address)window.open(`https://explorer.arc.io/address/${detectedScan.address}`,"_blank","noopener");else changeView(detectedScan.view||"scan")});
document.querySelector("#scan-copy-result").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(detectedScan.value);showToast("Input copied.")}catch{showToast(detectedScan.value)}});
document.querySelectorAll(".evidence-stack button").forEach(button=>button.addEventListener("click",()=>{changeView("network");setTimeout(()=>showToast(`${button.dataset.networkReason}: relationship view opened.`),250)}));
document.querySelectorAll(".wallet-btn,.empty-state .primary-btn").forEach(b=>b.addEventListener("click",()=>showToast("Wallet connection will activate with the Arc data layer.")));
const networkModes={
  money:{count:"7 wallets · 14 transfers",title:"Money-flow evidence",copy:"Follow funding and creator-fee transfers between wallets. Red paths mark movements that preceded another launch."},
  lineage:{count:"4 creators · 8 launches",title:"Launch-lineage evidence",copy:"See which deployers created each token and where a creator resurfaced through a newly funded wallet."},
  buyers:{count:"6 shared buyers",title:"Shared-buyer evidence",copy:"Compare first-block buyers across launches to reveal repeated coordinated accumulation patterns."}
};
document.querySelectorAll("[data-network-mode]").forEach(button=>button.addEventListener("click",()=>{document.querySelectorAll("[data-network-mode]").forEach(item=>item.classList.remove("active"));button.classList.add("active");const mode=button.dataset.networkMode,data=networkModes[mode],graph=document.querySelector(".wallet-graph");graph.className.baseVal=`wallet-graph mode-${mode}`;document.querySelector("#network-mode-count").textContent=data.count;const panel=document.querySelector("#network-evidence");panel.querySelector("h3").textContent=data.title;panel.querySelector(".evidence p").textContent=data.copy;showToast(`${button.textContent} view selected.`)}));
document.querySelectorAll(".graph-node").forEach(node=>node.addEventListener("click",()=>{document.querySelectorAll(".graph-node").forEach(item=>item.classList.remove("selected"));node.classList.add("selected");const wallet=node.dataset.wallet||"linked wallet";const panel=document.querySelector("#network-evidence");panel.querySelector("h3").textContent="Selected wallet evidence";panel.querySelector(".evidence p").textContent=`${wallet} is connected through the active relationship layer. The highlighted edge shows the evidence path.`;showToast(`Selected ${wallet}`)}));
document.querySelector(".open-network-dossier")?.addEventListener("click",()=>changeView("farmer"));
document.querySelectorAll("[data-detail-tab]").forEach(tab=>tab.addEventListener("click",()=>{document.querySelectorAll("[data-detail-tab]").forEach(t=>t.classList.remove("active"));document.querySelectorAll(".detail-pane").forEach(p=>p.classList.remove("active"));tab.classList.add("active");document.querySelector(`#${tab.dataset.detailTab}-pane`).classList.add("active")}));
document.querySelectorAll(".open-creator").forEach(button=>button.addEventListener("click",()=>changeView("creator")));
document.querySelectorAll(".watch-toggle").forEach(button=>button.addEventListener("click",()=>{const watched=button.classList.toggle("active");button.textContent=watched?"✓ Watching":"+ Watch";showToast(watched?"Added to your ArcEye watchlist.":"Removed from your watchlist.")}));
document.querySelectorAll(".copy-address").forEach(button=>button.addEventListener("click",async()=>{const value=button.dataset.address;if(!value){showToast("Full contract address requires the live indexer.");return}try{await navigator.clipboard.writeText(value);showToast("Address copied to clipboard.")}catch{showToast(value)}}));
document.querySelectorAll(".block-row,.trade-row").forEach(row=>row.addEventListener("click",openDrawer));
document.querySelector("#close-drawer").addEventListener("click",closeDrawer);document.querySelector("#drawer-scrim").addEventListener("click",closeDrawer);

let toastTimer;function showToast(message){const toast=document.querySelector("#toast");toast.querySelector("p").textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),3200)}
setTimeout(()=>showToast("ArcEye intelligence interface ready."),900);

const globalSearch=document.querySelector("#global-search"),commandResults=document.querySelector("#command-results");
const quickCommandHTML=commandResults.innerHTML;
function renderCommandResults(query){
  const q=query.trim().toLowerCase();if(!q){commandResults.innerHTML=quickCommandHTML;bindCommandRoutes();return}
  const tokens=directoryTokens.filter(item=>`${item.symbol} ${item.name}`.toLowerCase().includes(q)).slice(0,5);
  const walletMatch=q.startsWith("0x");
  commandResults.innerHTML=`<div class="command-group"><span>RESULTS</span>${tokens.map(token=>`<button data-command-token="${token.symbol}"><img src="${token.image}" alt=""/><b>${token.symbol} · ${token.name}</b><small>${token.cap} · Open intelligence</small></button>`).join("")}${walletMatch?`<button data-command-wallet="${query}"><i>⌁</i><b>Inspect wallet or transaction</b><small>${query}</small></button>`:""}${!tokens.length&&!walletMatch?`<button data-command-scan="${query}"><i>↗</i><b>Scan “${query}”</b><small>Search across ArcEye</small></button>`:""}</div>`;
  commandResults.querySelectorAll("[data-command-token]").forEach(button=>button.addEventListener("click",()=>openToken(button.dataset.commandToken)));
  commandResults.querySelectorAll("[data-command-wallet],[data-command-scan]").forEach(button=>button.addEventListener("click",()=>{document.querySelector("#scan-input").value=button.dataset.commandWallet||button.dataset.commandScan;changeView("scan");inspect()}));
}
function bindCommandRoutes(){commandResults.querySelectorAll("[data-view]").forEach(button=>button.addEventListener("click",()=>changeView(button.dataset.view)))}
globalSearch.addEventListener("input",event=>renderCommandResults(event.target.value));bindCommandRoutes();
