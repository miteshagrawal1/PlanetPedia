let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let planetimg = document.getElementById('planetimg');
let info = document.getElementById('information');

btn1.addEventListener("click",()=>{
    planetimg.src = "planet-venus.svg";
    info.innerHTML = "Venus is similar in size to Earth, with a diameter of about 12,104 kilometers (7,521 miles), making it the sixth-largest planet in the solar system. Its mass is approximately 86% of Earth's mass.Venus has a thick and extremely dense atmosphere composed mainly of carbon dioxide (about 96.5%) with clouds of sulfuric acid. This thick atmosphere traps heat, leading to a runaway greenhouse effect and extremely high temperatures on the surface.Venus has one of the most inhospitable environments in the solar system, with surface temperatures that can soar to around 900 degrees Fahrenheit (475 degrees Celsius), hotter than the surface of Mercury, despite being farther from the Sun."
})

btn2.addEventListener("click",()=>{
    planetimg.src = "planet-venus-internal.svg";
    info.innerHTML = "Venus has a solid crust composed of rock, including basaltic and granitic materials.Beneath the crust lies a mantle layer that is partially molten, allowing for volcanic activity.Venus likely has a metallic core made of iron and nickel, similar to Earth's core."
})

btn3.addEventListener("click", ()=>{
    planetimg.src = "planet-venus-internal.svg";
    info.innerHTML = "Venus has a large number of volcanic structures, including shield volcanoes and large volcanic plains. The planet's most famous volcano is Maat Mons, which is one of the highest volcanoes in the solar system.Venus also has impact craters, but they are relatively rare compared to other planetary bodies. This is because the thick atmosphere burns up or disintegrates many incoming meteoroids before they can strike the surface.Some areas of Venus are characterized by rugged, mountainous highlands."
})