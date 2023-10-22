let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let planetimg = document.getElementById('planetimg');
let info = document.getElementById('information');

btn1.addEventListener("click",()=>{
    planetimg.src = "planet-mercury.svg";
    info.innerHTML = "Mercury is about 4,880 kilometers (3,032 miles) in diameter, making it only slightly larger than Earth's Moon. It is the closest planet to the Sun, orbiting at an average distance of about 57.9 million kilometers (36 million miles).Mercury has a highly elliptical and eccentric orbit, which means that its distance from the Sun varies significantly throughout its orbit. It takes about 88 Earth days to complete one orbit.Mercury has an extremely thin exosphere, composed primarily of trace amounts of hydrogen, helium, and oxygen. It has no substantial atmosphere to speak of."
})

btn2.addEventListener("click",()=>{
    planetimg.src = "planet-mercury-internal.svg";
    info.innerHTML = "The outermost layer, the crust, is relatively thin compared to the other terrestrial planets. It is made up of rocky materials and is heavily cratered, testifying to a history of meteoroid impacts.Beneath the crust lies the mantle, which is thought to be partially molten. The mantle's semi-fluid nature is believed to be responsible for Mercury's tectonic features.Mercury has a disproportionately large core, making up about 42% of the planet's total volume. This core is rich in iron and is primarily responsible for Mercury's weak magnetic field. The core is thought to be partially molten and is responsible for the planet's magnetic field."
})

btn3.addEventListener("click", ()=>{
    planetimg.src = "planet-mercury-internal.svg";
    info.innerHTML = "The surface is heavily cratered, indicating a history of numerous impacts from asteroids and comets. Some of the craters are quite large, and there are also smaller ones. Many craters have raised rims and central peaks.There are extensive plains on Mercury, which are believed to have been formed by volcanic activity. These plains often fill in the spaces between older craters.One of the most distinctive features of Mercury's surface is its numerous fault scarps, or cliffs. These scarps are caused by the planet's shrinking as its core cools. As it contracts, the crust wrinkles and forms these scarps."
})