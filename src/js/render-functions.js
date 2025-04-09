import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imageList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
let lightbox = null;

function createImageCard(image) {
    const shortAlt = image.tags.split(',').slice(0, 3).join(', ');
    return `
    <li class="gallery-item">
        <a href="${image.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${image.webformatURL}"
                alt="${shortAlt}"
            />
            <div class="info">
                <div class="info-item">
                    <p class="info-label">Likes</p>
                    <span class="info-value">${image.likes}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Views</p>
                    <span class="info-value">${image.views}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Comments</p>
                    <span class="info-value">${image.comments}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Downloads</p>
                    <span class="info-value">${image.downloads}</span>
                </div>
            </div>
        </a>
    </li>
    `;
}

export function createGallery(images) {
    const createMurkup = images.map(createImageCard).join('');
    imageList.insertAdjacentHTML('beforeend', createMurkup);

    if (lightbox) {
        lightbox.refresh();
    } else {
        lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });
    }
}

export function clearGallery() {
    imageList.innerHTML = '';
    if (lightbox) {
        lightbox.destroy();
        lightbox = null;
    }
}

export function showLoader() {
    loader.classList.remove("hidden");
}

export function hideLoader() {
    loader.classList.add("hidden");
}



// У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном 
// та зберігай функції для відображення елементів інтерфейсу:

// createGallery(images). Ця функція повинна приймати масив images, 
// створювати HTML-розмітку для галереї, 
// додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). 
// Нічого не повертає.
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. 
// Нічого не повертає.
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. 
// Нічого не повертає.
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. 
// Нічого не повертає.