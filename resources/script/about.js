const professionalism = ["Graphic Artist/Designer", "Freehand Mixed-Media Artist", "Computer Engineer"]
let index = 0
let wordIndex = 0
let word = ""
let wait = 0

let imWhat = document.getElementById("imwhat")
let timer = setInterval(() => {
    if(wait > 0){
        wait--
    } else {
        word += professionalism[index][wordIndex]
        imWhat.textContent = word
        wordIndex++
        if(wordIndex >= professionalism[index].length){
            index++
            wait = 10
            if(index >= professionalism.length){
                index = 0
            }
            word = ""
            wordIndex = 0
        }
    }
}, 50);

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