const searchFieldElem = document.querySelector('#searchField');
const photosElem = document.querySelector('#photos');

const API_KEY = `45ee5e5758f149d9560aff38950ac9d9`;
const SECRET = `34b61fb57ef5adfd`;
const BASE_URL = `https://api.flickr.com/services/rest`;
const METHOD = `?method=flickr.photos.search`;
const SEARCH_AMOUNT = 25;

for(let i = 0; i < SEARCH_AMOUNT; i++) {
    photosElem.innerHTML += `<div class="placeholderImg"> </div>`;
}
searchFieldElem.addEventListener('keypress', function(event) {
    console.log(event);
    
    if(event.keyCode == 13){ 
        let searchText = event.target.value;

        setTimeout(() => {
            getPhotos(searchText);
        }, 500);
    }
});


async function getPhotos(searchText) {
    const response = await fetch(`${BASE_URL}${METHOD}&api_key=${API_KEY}&text=${searchText}&per_page=${SEARCH_AMOUNT}&content_type=1&sort=relevance&format=json&nojsoncallback=1`);
    const data = await response.json();
    console.log("data", data);

    const photos = data.photos.photo;
    console.log(`photos of "${searchText}"`, photos);

    displayPhotos(photos);
    lightbox();
}

function lightbox(){
    const photos = photosElem.querySelectorAll('.searchedPhoto');
    for(let photo of photos) {
        photo.addEventListener('click', function(event) {
            console.log("clickety clakety");
        });
        const photoURLLarge = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
    }
}


function displayPhotos(searchedPhotos) {
    photosElem.innerHTML = ` `;
    for(let photo of searchedPhotos) {
        const photoURLThumbnail = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
        photosElem.innerHTML += `<img class="searchedPhoto" src="${photoURLThumbnail}">`;
        const photoURLLarge = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
    }
    photosElem.querySelectorAll('.searchedPhoto');
}