const searchFieldElem = document.querySelector('#searchField');
const thumbnailContaierElem = document.querySelector('#thumbnailContaier');
const lightboxElem = document.querySelector('#lightbox');

const API_KEY = `45ee5e5758f149d9560aff38950ac9d9`;
const SECRET = `34b61fb57ef5adfd`;
const BASE_URL = `https://api.flickr.com/services/rest`;
const METHOD = `?method=flickr.photos.search`;
const EXTRAS = `description,owner_name,icon_server`;
const SEARCH_AMOUNT = 25;


searchFieldElem.addEventListener('keypress', function(event) {
    //console.log(event);
    if(event.keyCode == 13){ 
        let searchText = event.target.value;

        setTimeout(() => {
            getPhotos(searchText);
        }, 500);
    }
});


async function getPhotos(searchText) {
    const response = await fetch(`${BASE_URL}${METHOD}&api_key=${API_KEY}&text=${searchText}&per_page=${SEARCH_AMOUNT}&content_type=1&sort=relevance&extras=${EXTRAS}&format=json&nojsoncallback=1`);
    const data = await response.json();
    // console.log("data", data);

    const photos = data.photos.photo;
    console.log(`photos of "${searchText}"`, photos);

    displayPhotos(photos);
}

function displayPhotos(photos) {
    thumbnailContaierElem.innerHTML = ` `;
    for(let photo of photos) {
        const photoURLThumbnail = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
        thumbnailContaierElem.innerHTML += `<img class="searchedPhotoThumbnail" src="${photoURLThumbnail}">`;
        
        //const photoURLLarge = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
        //lightboxElem.innerHTML += `<img class="lightbox-photo" src="${photoURLLarge}">`;
    }
    addThumbnailEvent();
}

function addThumbnailEvent() {
    const thumbnailsElems = thumbnailContaierElem.querySelectorAll('.searchedPhotoThumbnail');
    for(let thumbnail of thumbnailsElems) {
        thumbnail.addEventListener('click', function() {
            console.log("this", this.src);
        });
    }
}

