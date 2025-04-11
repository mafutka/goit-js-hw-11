import axios from "axios";

const API_KEY = "49679717-f5eb164bef18f43bdb971e28c";

export function getImagesByQuery(query) {
    return axios("https://pixabay.com/api/", {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 9,
        }
    })
}


// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query). 
// Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком), 
// здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.