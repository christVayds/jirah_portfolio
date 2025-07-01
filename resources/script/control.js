const graphicsArt = document.getElementById("graphics")
const mixedmediaArt = document.getElementById("trad")
const graphicsButton = document.getElementById("graphicButton")
const mixedmediaButton = document.getElementById("mixedmediaButton")
graphicsButton.addEventListener("click", function(){
    graphicsArt.classList.add("show")
    mixedmediaArt.classList.remove("show")
    graphicsButton.classList.add("selected")
    mixedmediaButton.classList.remove("selected")
})

mixedmediaButton.addEventListener("click", function(){
    graphicsArt.classList.remove("show")
    mixedmediaArt.classList.add("show")
    graphicsButton.classList.remove("selected")
    mixedmediaButton.classList.add("selected")
})