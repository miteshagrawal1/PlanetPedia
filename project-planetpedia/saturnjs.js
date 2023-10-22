let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let planetimg = document.getElementById('planetimg');
let info = document.getElementById('information');

btn1.addEventListener("click",()=>{
    planetimg.src = "planet-saturn.svg";
    info.innerHTML = "Saturn is the second-largest planet in the solar system, with a diameter of approximately 116,464 kilometers (72,367 miles).It has a significant mass, about 95 times that of Earth, but its density is much lower, which would allow it to float on water.Saturn's atmosphere is primarily composed of hydrogen and helium, with traces of other gases. The planet's vibrant bands and zones are prominent features in its atmosphere.Saturn is famous for its extensive ring system, composed of countless icy particles ranging in size from tiny grains to larger moon-sized objects. These rings are divided into numerous distinct ringlets."
})

btn2.addEventListener("click",()=>{
    planetimg.src = "planet-saturn-internal.svg";
    info.innerHTML = "Saturn has a small, rocky core at its center, which is estimated to be about 20 times the mass of Earth. This core is surrounded by a layer of metallic hydrogen, a form of hydrogen that behaves like a metal under the extreme pressure found in the planet's interior.Above the metallic hydrogen layer, there are layers of molecular hydrogen and helium. These gases gradually transition from gas to liquid as the pressure increases deeper within the planet."
})

btn3.addEventListener("click", ()=>{
    planetimg.src = "planet-saturn-internal.svg";
    info.innerHTML = "Saturn's atmosphere displays a distinctive pattern of alternating dark bands and light zones, which are caused by differences in cloud cover and wind patterns. The exact mechanisms behind these features are still a subject of scientific study.Saturn is known for its massive storm systems, the most famous being the Great White Spot, a recurring storm that can encircle the planet. It also has hexagonal cloud patterns at its north pole."
})