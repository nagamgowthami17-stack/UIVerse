let travellers=2, activeDay=1;
let days={1:[["09:00","✈️","Airport arrival","Transport"],["11:00","🏨","Hotel check-in","Stay"],["14:00","⛩️","Fushimi Inari Shrine","Culture"],["18:30","🍜","Dinner in Gion","Food"]],2:[["09:00","🍵","Traditional tea ceremony","Culture"],["12:30","🍣","Nishiki Market","Food"],["15:00","🌿","Philosopher's Path","Nature"]],3:[["08:30","🎋","Arashiyama Bamboo Grove","Nature"],["13:00","🍱","Lunch by the river","Food"],["16:00","🛍️","Downtown Kyoto","Explore"]],4:[["10:00","🏯","Nijo Castle","Culture"],["14:00","☕","Café break","Food"]]};
const tabs=document.getElementById("dayTabs"), timeline=document.getElementById("timeline");
function renderTabs(){tabs.innerHTML=Object.keys(days).map(d=>`<button class="${+d===activeDay?"active":""}" onclick="setDay(${d})">Day ${d}</button>`).join("")}
function renderTimeline(){timeline.innerHTML=days[activeDay].map((a,i)=>`<div class="timeline-item"><div class="time">${a[0]}</div><div class="dot">${a[1]}</div><div class="event"><div><h3>${a[2]}</h3><p>${a[3]} · Day ${activeDay}</p></div><button class="delete" onclick="removeActivity(${i})">×</button></div></div>`).join("")}
function setDay(d){activeDay=d;renderTabs();renderTimeline()}
function removeActivity(i){days[activeDay].splice(i,1);renderTimeline()}
document.getElementById("addActivity").onclick=()=>{const title=prompt("Activity name:","Explore a local café");if(title){days[activeDay].push(["16:30","✨",title,"Custom"]);renderTimeline()}}
document.getElementById("plus").onclick=()=>{travellers++;document.getElementById("travellers").textContent=travellers}
document.getElementById("minus").onclick=()=>{if(travellers>1)travellers--;document.getElementById("travellers").textContent=travellers}
document.querySelectorAll(".interest").forEach(x=>x.onclick=()=>x.classList.toggle("selected"));
document.getElementById("create").onclick=()=>{document.getElementById("tripTitle").textContent=document.getElementById("destination").value||"My Trip";alert("Trip refreshed successfully!")};
document.getElementById("optimize").onclick=()=>{days[activeDay].sort((a,b)=>a[0].localeCompare(b[0]));renderTimeline();alert("Day optimized by time order.")};
renderTabs();renderTimeline();