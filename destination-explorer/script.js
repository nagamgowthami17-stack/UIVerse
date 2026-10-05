const destinations=[
{name:"Kyoto",country:"Japan",rating:4.9,budget:"₹₹₹",category:"Culture",emoji:"⛩️",image:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80"},
{name:"Bali",country:"Indonesia",rating:4.8,budget:"₹₹",category:"Beach",emoji:"🌴",image:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80"},
{name:"Swiss Alps",country:"Switzerland",rating:4.9,budget:"₹₹₹₹",category:"Nature",emoji:"🏔️",image:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=80"},
{name:"Queenstown",country:"New Zealand",rating:4.8,budget:"₹₹₹",category:"Adventure",emoji:"🪂",image:"https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=900&q=80"},
{name:"Amalfi Coast",country:"Italy",rating:4.7,budget:"₹₹₹",category:"Beach",emoji:"🌊",image:"https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80"},
{name:"Marrakech",country:"Morocco",rating:4.7,budget:"₹₹",category:"Culture",emoji:"🕌",image:"https://images.unsplash.com/photo-1597212720386-31f4e0b4d0f5?auto=format&fit=crop&w=900&q=80"}];
let selected="All", favorites=new Set();
const grid=document.getElementById("destinationGrid");
function render(){
 const q=document.getElementById("searchInput").value.toLowerCase();
 const list=destinations.filter(d=>(selected==="All"||d.category===selected)&&`${d.name} ${d.country} ${d.category}`.toLowerCase().includes(q));
 grid.innerHTML=list.map(d=>`<article class="card"><div class="photo" style="background-image:url('${d.image}')"><button class="heart ${favorites.has(d.name)?"liked":""}" onclick="toggleFav('${d.name}')">${favorites.has(d.name)?"♥":"♡"}</button><span class="tag">${d.category}</span></div><div class="card-body"><div><h3>${d.name}</h3><p>📍 ${d.country}</p></div><strong>★ ${d.rating}</strong></div><div class="card-footer"><span>${d.budget}</span><button class="link" onclick="viewDestination('${d.name}')">Explore →</button></div></article>`).join("")||"<div class='empty'>No destinations found. Try another search.</div>";
}
function toggleFav(name){favorites.has(name)?favorites.delete(name):favorites.add(name);document.getElementById("favCount").textContent=favorites.size;render();document.getElementById("recommendationText").textContent=favorites.size?`You saved ${favorites.size} destination${favorites.size>1?"s":""}. Try building an itinerary around them.`:"Explore destinations and save your favorites to get better suggestions."}
function viewDestination(name){const d=destinations.find(x=>x.name===name);alert(`${d.name}, ${d.country}\n\nCategory: ${d.category}\nRating: ${d.rating}\nBudget: ${d.budget}\n\nTip: Add this destination to your TripCraft itinerary.`)}
document.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));b.classList.add("active");selected=b.dataset.category;render()});
document.getElementById("searchInput").oninput=render; document.getElementById("searchBtn").onclick=render; render();