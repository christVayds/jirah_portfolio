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

setTimeout(() => {
    setInterval(change, 2000);
}, 2000);