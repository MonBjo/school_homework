const key = `45ee5e5758f149d9560aff38950ac9d9`;
const secret = `34b61fb57ef5adfd`;
const baseUrl = `https://api.flickr.com/services/rest&method=flickr.photos.search&`;
let searchText = "banana";
console.log(fetchTest());

async function fetchTest() {
    const response = await fetch(`${baseUrl}api_key=${key}&format=json`); // No json callback thingy

    return response;
}
