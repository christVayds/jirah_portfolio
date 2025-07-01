
const urlParams = new URLSearchParams(window.location.search)
const view = urlParams.get('view')

const data = {
    "paintings": ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"],
    "calligraphy": [],
    "chibi_art": [],
    "indoor_signages": [],
    "product_promotional_matterials": [],
    "tshirt_print": [],
    "other_graphics_matterial": [],
    "gouache": [],
    "acrylic": [],
    "water": [],
    "text_effects": [],
    "image_wrapping": [],
    "brand_identity": [],
    "book_cover": [],
    "events_matterials": []
}

const names = {
    "gouache": "Gouache Painting",
    "acrylic": "Acrylic Painting",
    "water": "Water Painting",
    "calligraphy": "Calligraphy", 
    "chibi_art": "Chibi art", 
    "indoor_signages": "Indoor Signages", 
    "product_promotional_matterials": "Product Promotional Matterials", 
    "tshirt_print": "T-Shirt Print", 
    "other_graphics_matterial": "Other Graphic Matterials",
    "text_effects": "Text Effects",
    "image_wrapping": "Image Wrapping",
    "brand_identity": "Brand Identity",
    "book_cover": "Book Cover",
    "events_matterial": "Events Matterial"
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