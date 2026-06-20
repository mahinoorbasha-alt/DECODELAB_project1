/* LOGIN */
function login(){  
let u=document.getElementById("username").value;  
let p=document.getElementById("password").value;  

if(u && p){  
window.location.href="dashboard.html";  
}  
else{  
alert("Enter credentials");  
}  
}

/* SLIDES */
let slides=document.getElementsByClassName("slide");

function showSlide(n){
for(let i=0;i<slides.length;i++){
slides[i].classList.remove("active");
}
slides[n].classList.add("active");
}

/* REGISTER FARMER */
function registerFarmer(){

let farmer={
name:document.getElementById("name").value,
mobile:document.getElementById("mobile").value,
village:document.getElementById("village").value,
district:document.getElementById("district").value,
crop:document.getElementById("crop").value,
land:document.getElementById("land").value
};

if(farmer.name===""){
alert("Fill form");
return;
}

let farmers=JSON.parse(localStorage.getItem("farmers")) || [];
farmers.push(farmer);
localStorage.setItem("farmers",JSON.stringify(farmers));

document.getElementById("msg").innerHTML="✅ Registered Successfully!";

document.getElementById("name").value="";
document.getElementById("mobile").value="";
document.getElementById("village").value="";
document.getElementById("district").value="";
document.getElementById("crop").value="";
document.getElementById("land").value="";
}

/* SHOW FARMERS */
function showFarmers(){

let farmers=JSON.parse(localStorage.getItem("farmers")) || [];
let output="<h3>👨‍🌾 Registered Farmers</h3>";

if(farmers.length===0){
output+="<p>No farmers registered yet</p>";
}

farmers.forEach((f,i)=>{
output+=`
<div style="margin:10px;padding:10px;background:rgba(255,255,255,0.2);border-radius:10px;">
<b>${i+1}. ${f.name}</b><br>
📱 ${f.mobile}<br>
🌾 ${f.crop}<br>
📍 ${f.village}, ${f.district}<br>
🌱 Land: ${f.land}
</div>`;
});

document.getElementById("farmersList").innerHTML=output;
}

/* CROPS - DETAILED */
function showCrop(crop){

let data={

rice:`
<h3>🌾 Rice</h3>
<p>✔ Staple food of India</p>
<p>✔ Needs high water</p>
<p>✔ Grown in clay soil</p>
<p>✔ Major Kharif crop</p>
<p>✔ High market demand</p>
`,

wheat:`
<h3>🌾 Wheat</h3>
<p>✔ Rabi crop</p>
<p>✔ Needs cool climate</p>
<p>✔ Used for flour (atta)</p>
<p>✔ Rich in carbohydrates</p>
<p>✔ Grown in loamy soil</p>
`,

cotton:`
<h3>🌾 Cotton</h3>
<p>✔ Cash crop for textile industry</p>
<p>✔ Grows in black soil</p>
<p>✔ Warm climate needed</p>
<p>✔ High export value</p>
<p>✔ Pest management important</p>
`,

maize:`
<h3>🌽 Maize</h3>
<p>✔ Food & animal feed</p>
<p>✔ Warm weather crop</p>
<p>✔ Moderate rainfall needed</p>
<p>✔ Used in snacks & oil</p>
<p>✔ High energy crop</p>
`,

sugarcane:`
<h3>🍬 Sugarcane</h3>
<p>✔ Sugar production crop</p>
<p>✔ Needs tropical climate</p>
<p>✔ High water requirement</p>
<p>✔ 10–12 month duration</p>
<p>✔ Used for jaggery & ethanol</p>
`,

millets:`
<h3>🌾 Millets</h3>
<p>✔ Highly nutritious grains</p>
<p>✔ Low water requirement</p>
<p>✔ Drought resistant</p>
<p>✔ Good for health</p>
<p>✔ Fiber rich food</p>
`,

barley:`
<h3>🌾 Barley</h3>
<p>✔ Used in food & beverages</p>
<p>✔ Cool climate crop</p>
<p>✔ High fiber content</p>
<p>✔ Brewing industry use</p>
<p>✔ Low water requirement</p>
`

};

document.getElementById("cropInfo").innerHTML=data[crop];
}

/* SEARCH CROPS */
function searchCrops(){

let input=document.getElementById("searchCrop").value.toLowerCase();
let cards=document.getElementsByClassName("card");

for(let i=0;i<cards.length;i++){
let text=cards[i].innerText.toLowerCase();

if(text.includes(input)){
cards[i].style.display="block";
}else{
cards[i].style.display="none";
}
}
}

/* HOME INFO */
function showHomeInfo(type){

let info={
tips:`
<h3>🌾 Farming Tips</h3>
<p>✔ Use quality seeds</p>
<p>✔ Rotate crops regularly</p>
<p>✔ Check soil health</p>
<p>✔ Avoid over fertilizers</p>
<p>✔ Monitor weather</p>
`,

irrigation:`
<h3>💧 Irrigation Guide</h3>
<p>✔ Use drip irrigation</p>
<p>✔ Water early morning</p>
<p>✔ Avoid water wastage</p>
<p>✔ Maintain soil moisture</p>
<p>✔ Use sprinkler for fields</p>
`,

organic:`
<h3>🌿 Organic Farming</h3>
<p>✔ No chemicals used</p>
<p>✔ Use natural compost</p>
<p>✔ Eco-friendly farming</p>
<p>✔ Improves soil health</p>
<p>✔ Healthy food production</p>
`
};

document.getElementById("homeInfo").innerHTML=info[type];
}

/* SCHEMES */
function showScheme(type){

let schemes={

pmkisan:`
<h3>🌾 PM Kisan Scheme</h3>
<p>✔ ₹6000 yearly support</p>
<p>✔ Direct bank transfer</p>
<p>✔ For small farmers</p>
<p>✔ Government financial help</p>
`,

insurance:`
<h3>🌧 Crop Insurance</h3>
<p>✔ Protection from crop loss</p>
<p>✔ Natural disaster cover</p>
<p>✔ Low premium</p>
<p>✔ Financial security</p>
`,

soil:`
<h3>🌱 Soil Health Card</h3>
<p>✔ Soil testing report</p>
<p>✔ Improves crop yield</p>
<p>✔ Fertilizer guidance</p>
<p>✔ Better farming planning</p>
`

};

document.getElementById("schemeInfo").innerHTML=schemes[type];
}