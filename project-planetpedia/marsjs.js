let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let planetimg = document.getElementById('planetimg');
let info = document.getElementById('information');

btn1.addEventListener("click",()=>{
    planetimg.src = "planet-mars.svg";
    info.innerHTML = "Mars is about half the size of Earth, with a diameter of approximately 6,779 kilometers (4,212 miles). It orbits the Sun at an average distance of 227.9 million kilometers (141.6 million miles). Mars has a thin atmosphere composed mostly of carbon dioxide (about 95.3%) with traces of nitrogen and argon. It lacks a significant amount of oxygen, making it inhospitable to humans.Mars is known for its distinctive reddish appearance due to iron oxide (rust) on its surface. It has a variety of surface features, including valleys, canyons, mountains, and impact craters. The largest volcano in the solar system, Olympus Mons, is located on Mars."
})

btn2.addEventListener("click",()=>{
    planetimg.src = "planet-mars-internal.svg";
    info.innerHTML = "Mars has a partially liquid iron and nickel core, similar to Earth. However, its core is much smaller in proportion to the planet's size.Surrounding the core is the mantle, which extends upward from the core to the planet's surface. The mantle is composed of silicate rock.The outermost layer of Mars is the crust, which is made up of basaltic rock and is covered in places by iron-rich dust and soil. Mars' crust is divided into several tectonic plates."
})

btn3.addEventListener("click", ()=>{
    planetimg.src = "planet-mars-internal.svg";
    info.innerHTML = "Mars features some of the largest volcanoes in the solar system, including Olympus Mons, Ascraeus Mons, and Pavonis Mons. These volcanoes are shield volcanoes, similar in shape to Hawaii's volcanoes. Valles Marineris, a vast canyon system, is one of Mars' most prominent geological features. It stretches for over 4,000 kilometers (2,500 miles) and is several times deeper than the Grand Canyon on Earth.Mars is heavily cratered, and it has numerous impact craters of various sizes. Some craters have been eroded by wind and water processes over time.Evidence of past water flow on Mars, such as river valleys, lake beds, and outflow channels, suggests that liquid water was once present on the planet's surface. Some water still exists in the form of subsurface ice.Mars is known for its frequent and sometimes massive dust storms that can obscure the planet's surface and affect its climate."
})