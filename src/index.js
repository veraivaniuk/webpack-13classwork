import css from "./css/styles.css";
import libs from "./js/libs.js"
import fetchObject from "./js/fetch.js"
import x from "./js/refs.js";
//console.log(x.form);
//диструктуризация
const { form, searchBtn, gallery } = x;
//console.log(form, searchBtn, gallery);

//fetchObject.getFetch();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log(e);
    //console.log(e.target);
    //console.log(e.target.elements.query);
    console.log(e.target.elements.query.value);
    const inputValue = e.target.elements.query.value;
    fetchObject.getFetch(inputValue, gallery);
})