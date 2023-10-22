let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let planetimg = document.getElementById('planetimg');
let info = document.getElementById('information');

btn1.addEventListener("click",()=>{
    planetimg.src = "planet-jupiter.svg";
    info.innerHTML = "Jupiter is enormous, with a diameter of approximately 139,822 kilometers (86,881 miles), making it more than 11 times wider than Earth.It has a mass over 300 times greater than Earth, making it the most massive planet in our solar system.Jupiter has a thick and dynamic atmosphere, which includes bands of clouds, high-speed winds, and a giant red spot, a massive storm system. It has a strong magnetic field that is the largest of any planet in the solar system, protecting it from harmful solar radiation."
})

btn2.addEventListener("click",()=>{
    planetimg.src = "planet-jupiter-internal.svg";
    info.innerHTML = "Jupiter is believed to have a relatively small, rocky core at its center, which may be about 20 times the mass of Earth.Above the core, there is a layer composed of metallic hydrogen, a form of hydrogen that behaves like a metal under high pressure.The majority of Jupiter is its thick atmosphere, which consists mainly of molecular hydrogen and helium, along with traces of other gases. The atmosphere becomes denser with depth, transitioning into a fluid-like metallic hydrogen layer."
})

btn3.addEventListener("click", ()=>{
    planetimg.src = "planet-jupiter-internal.svg";
    info.innerHTML = "Jupiter doesn't have a solid surface like Earth or some other planets. It is a gas giant, and its outer layer gradually transitions from gas to a more liquid-like state due to the extreme pressure and temperature as you move deeper into the planet. As a result, there's no solid ground or defined surface on Jupiter where you could land. Instead, the planet's appearance is characterized by its dynamic cloud bands, zones, and storms in its upper atmosphere.Jupiter's most famous feature is the 'Great Red Spot,' a massive storm system that has been observed for centuries. It's a high-pressure region in Jupiter's atmosphere with reddish-brown clouds. The planet's atmosphere is constantly in motion, with bands of clouds and zones of different colors and compositions."
})