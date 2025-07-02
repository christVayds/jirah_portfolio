
const urlParams = new URLSearchParams(window.location.search)
const view = urlParams.get('view')

const data = {
    "paintings": ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"],
    "calligraphy": [],
    "chibi_art": [],
    "indoor_signages": ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"],
    "promotional_materials": ["1.png", "2.png", "3.png", "4.png", "5.png"],
    "tshirt_print": ["1.png", "2.jpg"],
    "other_graphics_matterial": [],
    "gouache": ["1.png", "2.png", "3.jpg", "4.jpg", "5.jpg"],
    "acrylic": ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    "water": ["1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    "text_effects": ["1.png", "2.png", "3.png", "4.png"],
    "image_wrapping": ["1.png"],
    "brand_identity": ["1.png"],
    "book_cover": ["1.png", "2.png"],
    "event_materials": ["1.jpg", "2.png", "3.png", "4.png", "5.png"]
}

const names = {
    "gouache": "Gouache Painting",
    "acrylic": "Acrylic Painting",
    "water": "Watercolor Painting",
    "calligraphy": "Calligraphy", 
    "chibi_art": "Chibi art", 
    "indoor_signages": "Indoor Signages", 
    "promotional_materials": "Product Promotional Materials", 
    "tshirt_print": "T-Shirt Design", 
    "other_graphics_matterial": "Other Graphic Matterials",
    "text_effects": "Text Effects",
    "image_wrapping": "Image Wrapping",
    "brand_identity": "Brand Identity",
    "book_cover": "Book Cover",
    "event_materials": "Events Matterial"
}

// get view
if(view){
    if(view in data){
        getImages(view)
    }
}

function getImages(view){
    const viewName = document.getElementById("viewName")
    const container = document.getElementById("showImages")
    container.innerHTML = ""

    viewName.textContent = names[view]
    for(const img in data[view]){
        const image = document.createElement("img")
        image.src = "resources/assets/" + view + "/" + data[view][img]
        image.alt = "jiramaeteruelart"

        container.appendChild(image)
    }
}