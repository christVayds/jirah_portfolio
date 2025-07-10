
const urlParams = new URLSearchParams(window.location.search)
const view = urlParams.get('view')

const data = {
    "paintings": ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp", "10.webp", "11.webp"],
    "calligraphy": [],
    "chibi_art": [],
    "indoor_signages": ["1.webp", "3.webp", "5.webp", "7.webp", "9.webp", "2.webp", "4.webp", "6.webp", "8.webp", "10.webp"],
    "promotional_materials": ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"],
    "tshirt_print": ["1.webp", "2.webp"],
    "other_graphics_matterial": [],
    "gouache": ["1.webp", "2.webp", "3.webp", "4.webp"],
    "acrylic": ["1.webp", "2.webp", "3.webp"],
    "water": ["1.png", "2.webp", "3.webp", "4.webp", "5.webp"],
    "text_effects": ["1.webp", "2.webp", "3.webp", "4.webp"],
    "image_wrapping": ["1.webp"],
    "brand_identity": ["1.webp"],
    "book_cover": ["1.webp", "2.webp"],
    "event_materials": ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"]
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
    "event_materials": "Event Materials"
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
        image.loading = "lazy"

        container.appendChild(image)
    }
}