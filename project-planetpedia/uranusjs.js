let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let planetimg = document.getElementById('planetimg');
let info = document.getElementById('information');

btn1.addEventListener("click",()=>{
    planetimg.src = "planet-uranus.svg";
    info.innerHTML = "Uranus is the seventh planet from the Sun in our solar system.It is classified as an ice giant, similar to Neptune, because it has a relatively small rocky core surrounded by a thick layer of icy and gaseous materials. Uranus is known for its distinct bluish-green color, which is the result of the absorption and scattering of sunlight by methane in its atmosphere. It is named after the ancient Greek god of the sky, Uranus."
})

btn2.addEventListener("click",()=>{
    planetimg.src = "planet-uranus-internal.svg";
    info.innerHTML = "Uranus has a rocky core, which is thought to be relatively small, with a mass about 0.55 times that of Earth. This core is surrounded by high-pressure ices, including water, ammonia, and methane compounds.Beyond the core, there is a mantle composed of water, ammonia, and methane compounds, which exist in a supercritical state due to the intense pressure and temperature. This icy mantle extends outward and makes up a significant portion of Uranus's interior.The outermost layer of Uranus is its atmosphere, primarily composed of hydrogen (about 83%) and helium (about 15%), with traces of methane and other gases. Unlike most other gas giants in our solar system, Uranus has a relatively low percentage of hydrogen and helium."
})

btn3.addEventListener("click", ()=>{
    planetimg.src = "planet-uranus-internal.svg";
    info.innerHTML = " Uranus consists of several cloud layers, with the most prominent being the methane clouds. These clouds give the planet its bluish-green appearance, as methane absorbs red and reflects blue-green light.Uranus exhibits band-like cloud formations, similar to Jupiter and Saturn, but they are less pronounced. The planet's atmosphere is known for its relatively uniform appearance.Uranus experiences extreme weather patterns, including strong winds with speeds of up to 560 miles per hour (900 kilometers per hour). These winds are responsible for shaping and moving the cloud features within the atmosphere. Uranus has numerous moons, with the largest ones being Titania, Oberon, Umbriel, Ariel, and Miranda. These moons vary in size, and some of them show evidence of geological activity and surface features."
})