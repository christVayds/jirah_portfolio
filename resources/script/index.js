
const urlParams = new URLSearchParams(window.location.search)
const view = urlParams.get('view')

const data = {
    "paintings": ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp", "10.webp", "11.webp"],
    "calligraphy": [],
    "chibi_art": [],
    "indoor_signages": ["2.webp", "4.webp", "6.webp", "10.webp"],
    "promotional_materials": ["1.webp", "2.webp", "3.webp", "4.webp"],
    "tshirt_print": ["1.png", "2.png", "3.png", "2.webp"],
    "other_graphics_matterial": [],
    "gouache": ["1.webp", "2.webp", "3.webp", "4.webp"],
    "acrylic": ["1.webp", "2.webp", "3.webp"],
    "water": ["1.png", "2.webp", "3.webp", "4.webp", "5.webp"],
    // "text_effects": ["1.webp", "2.webp", "3.webp", "4.webp"],
    // "image_wrapping": ["1.webp"],
    "brand_identity": ["1.png", "2.png", "3.png", "4.png"],
    "book_cover": ["1.webp", "2.webp"],
    "event_materials": ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"]
}

const names = {
    "gouache": ["Gouache Painting", ""],
    "acrylic": ["Acrylic Painting", ""],
    "water": ["Watercolor Painting", ""],
    "calligraphy": ["Calligraphy", ""], 
    "chibi_art": ["Chibi art", ""], 
    "indoor_signages": ["Indoor Signages", "Design concepts and mockups for common indoor display signs, and other directional or informational designs, made to enhance visual clarity and style in interior spaces."], 
    "promotional_materials": ["Product Promotional Materials", ""], 
    "tshirt_print": ["T-Shirt Design", "Custom shirt graphics created for advocacy campaigns and reunion events, combining meaningful themes, cohesive color palettes, and striking visuals to make each design stand out."], 
    "other_graphics_matterial": ["Other Graphic Matterials", ""],
    // "text_effects": "Text Effects",
    // "image_wrapping": "Image Wrapping",
    "brand_identity": ["Brand Identity", "Complete visual identity created for a clothing brand, including logo design, color palette, and branding elements that reflect the brand’s character and target market."],
    "book_cover": ["Book Cover", "A concept test design for a book launch, showcasing creative layout composition, typography, and visual storytelling."],
    "event_materials": ["Event Materials", "Creative layouts developed for various events, featuring eye-catching posters, banners, and print ads designed to attract attention and communicate event details effectively."]
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
    const imagedescription = document.getElementById("imagedescription")
    container.innerHTML = ""

    viewName.textContent = names[view][0]
    for(const img in data[view]){
        const image = document.createElement("img")
        image.src = "resources/assets/" + view + "/" + data[view][img]
        image.alt = "jiramaeteruelart"
        image.loading = "lazy"

        container.appendChild(image)
    }

    const desc = names[view][1]
    imagedescription.textContent = desc
}