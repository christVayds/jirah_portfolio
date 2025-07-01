const professionalism = ["Graphic Artist/Designer", "Freehand Mixed-Media Artist", "Computer Engineer"]
var count = 0

function change(){
    const imWhat = document.getElementById("imwhat")
    imWhat.textContent = professionalism[count]
    if(count >= professionalism.length -1){
        count = 0
    } else {
        count++
    }
}

const popup = document.getElementById("popup")
const certItem = document.querySelectorAll(".certItem")

popup.addEventListener("click", () => {
    popup.classList.remove("show")
})

certItem.forEach(item => {
    item.addEventListener("click", () => {
        popup.classList.add("show")
        const classList = item.classList
        switch(classList[1]){
            case "1":
                popup.querySelector("img").src = "resources/assets/certificates/Screenshot from 2025-07-02 03-46-31.png"
                break;
            case "2":
                popup.querySelector("img").src = "resources/assets/certificates/Screenshot from 2025-07-02 03-46-49.png"
                break;
            case "3":
                popup.querySelector("img").src = "resources/assets/certificates/Screenshot from 2025-07-02 03-47-23.png"
                break;
            case "4":
                popup.querySelector("img").src = "resources/assets/certificates/Screenshot from 2025-07-02 03-47-40.png"
                break;
        }
    })
})

setTimeout(() => {
    setInterval(change, 2000);
}, 2000);