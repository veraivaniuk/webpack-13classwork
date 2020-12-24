import { createClient } from "pexels";
import refs from './refs';
import template from "../templates/item.hbs";
let key = "563492ad6f91700001000001ebf716c3253e4da8859cca17a446c87a";

const client = createClient('key');

console.log(client)
//const img = document.createElement("img");
/*img.width = "300"
refs.gallery.append(img)
client.photos.random().then((obj) => {
    console.log(obj);
    img.src = obj.src.original;
});
*/
let query = "lotus";

client.photos.search({ query, per_page: 10 }).then((result) => {
    console.log(result.photos);
    const items = template(result.photos)
    refs.gallery.insertAdjacentHTML("afterbegin", items)
    });




/* client.photos.search({ query, per_page: 10 }).then((result) => {
    console.log(result.photos);
    const images = result.photos.map((el) => {
        img.src = el.src.original
        return img;
    });
    console.log(images);
    return images;
})
    .then((images) => {
        refs.gallery.append(...images)
    });
*/


