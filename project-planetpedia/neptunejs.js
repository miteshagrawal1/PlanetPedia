let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let planetimg = document.getElementById('planetimg');
let info = document.getElementById('information');

btn1.addEventListener("click",()=>{
    planetimg.src = "planet-neptune.svg";
    info.innerHTML = "Neptune is the eighth and farthest known planet from the Sun in our solar system. It is classified as an ice giant, along with Uranus, due to its substantial composition of ice and gas.Neptune is the fourth-largest planet by diameter and the third largest by mass in the solar system.Its atmosphere is predominantly composed of hydrogen (about 80%) and helium (about 19%), with trace amounts of other gases like methane, ammonia, and water vapor.Neptune is known for its striking blue color, which is the result of the absorption and scattering of sunlight by methane in its atmosphere."
})

btn2.addEventListener("click",()=>{
    planetimg.src = "planet-neptune-internal.svg";
    info.innerHTML = "Neptune is believed to have a rocky core that is about 1.2 times the mass of Earth. This core is surrounded by high-pressure ices and compounds.Above the core, there is a layer of water, ammonia, and methane compounds. The mantle makes up a significant portion of Neptune's mass.The outermost layer is the atmosphere, which extends for thousands of kilometers. The atmosphere consists of hydrogen and helium, with traces of methane. The extreme pressure and temperature conditions within Neptune's atmosphere create exotic forms of ice and other compounds."
})

btn3.addEventListener("click", ()=>{
    planetimg.src = "planet-neptune-internal.svg";
    info.innerHTML = "Neptune is primarily a gas giant, and it doesn't have a solid surface like Earth. Instead, as you descend into the planet's atmosphere, the pressure and temperature increase significantly, eventually leading to a transition from gaseous to liquid and then to solid ice layers. These layers contain compounds such as methane, ammonia, and water.The top layer of Neptune's atmosphere consists of clouds of methane ice crystals. These clouds are responsible for the planet's distinctive blue color.The turbulent atmosphere of Neptune is marked by a complex system of dark spots, bands, and high-speed winds, with wind speeds reaching up to 1,500 miles per hour (2,400 kilometers per hour). The most famous feature is the Great Dark Spot, a massive storm system."
})