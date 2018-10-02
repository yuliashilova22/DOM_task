let pizzaObjects = [ 
    {
        pizzaName: "Пицца Четыре сезона",
        ingridients: "томатный соус, бекон, ветчина, болгарский соус, зеленая стручковая фасоль, оливки, сыр Моцарелла",
        calories: "340 калорий",
        price: "95.00 грн",
        // pizzaPicSrc: "images/4-сезона.jpg",
    }, 
    {
        pizzaName: "Пицца с пармской ветчиной",
        ingridients: "томатный соус, пармская ветчина, сыр Моцарелла, руккола, оливковое масло",
        calories: "284 калории",
        price: "100.00 грн",
        // pizzaPicSrc: "images/пицца-с-пармской-ветчиной.jpg",
    }, 
    {
        pizzaName: "Пицца с салями Пикантная",
        ingridients: "соус томатный, сыр Моцарелла, салями, острый перец Чили",
        calories: "321 калория",
        price: "90.00 грн",
        // pizzaPicSrc: "images/пицца-с-салями.jpg",
    }, 
    {
        pizzaName: "Пицца Морская",
        ingridients: "соус томатный, сыр Моцарелла, коктейльная креветка, лосось, мидии, лимон",
        calories: "248 калорий",
        price: "140.00 грн",
        // pizzaPicSrc: "images/морская.jpg",
    }, 
    {
        pizzaName: "Пицца с ветчиной и грибами",
        ingridients: "соус томатный, ветчина, шампиньоны, сыр Моцарелла, зелень",
        calories: "220 калорий",
        price: "85.00 грн",
        // pizzaPicSrc: "images/ветчина-грибы.jpg",
    }, 
    {
        pizzaName: "Пицца Мясная",
        ingridients: "отварная телятина, сыр Моцарелла, соус томатный, помидоры Черри, по желанию чеснок",
        calories: "380 калорий",
        price: "95.00 грн",
        // pizzaPicSrc: "images/мясная.jpg",
    }, 
    {
        pizzaName: "Пицца 4 сыра",
        ingridients: "сыр Моцарелла, сыр Пармезан, Сыр Дор-Блю, Сыр Бри, свежая груша, соус томатный или сливочный на выбор",
        calories: "400 калорий",
        price: "120.00 грн",
        // pizzaPicSrc: "images/4-сыра.jpg",
    }, 
    {
        pizzaName: "Пицца с лососем и сливками",
        ingridients: "сливочный соус, лосось слабосоленый, сыр Моцарелла, помидор, руккола",
        calories: "297 калорий",
        price: "130.00 грн",
        // pizzaPicSrc: "images/лосось-на-сливках.jpg",
    }, 
    {
        pizzaName: "Пицца Болоньезе",
        ingridients: "соус томатный, мясное рагу Болоньезе, сыр Моцарелла, зелень",
        calories: "270 калорий",
        price: "95.00 грн",
        // pizzaPicSrc: "images/пицца-болоньезе.jpg",
    }, 
    {
        pizzaName: "Пицца Маргарита",
        ingridients: "сыр Моцарелла, томатный соус, специи",
        calories: "190 калорий",
        price: "70.00 грн",
        // pizzaPicSrc: "images/маргарита.jpg",
    }, 
    {
        pizzaName: "Пицца Вегетарианская",
        ingridients: "соус томатный, брокколи, цветная капуста, фасоль стручковая, перец сладкий, шампиньоны, оливки, зелень",
        calories: "200 калорий",
        price: "90.00 грн",
        // pizzaPicSrc: "images/пицца-вегетарианская.jpg",
    }, 
    {
        pizzaName: "Пицца с курицей и ананасом",
        ingridients: "соус томатный, филе куриное-гриль, свежий ананас, сыр Моцарелла, зелень",
        calories: "305 калорий",
        price: "95.00 грн",
        // pizzaPicSrc: "images/курица-ананас.jpg",
    }, 
    {
        pizzaName: "Пицца с куриной грудкой и грибами",
        ingridients: "соус томатный, филе куриное-гриль, шампиньоны, сыр Моцарелла, зелень",
        calories: "320 калорий",
        price: "90.00 грн",
        // pizzaPicSrc: "images/курица-грибы.jpg",
    }, 
    {
        pizzaName: "Пицца Капричеза",
        ingridients: "соус томатный, ветчина, шампиньоны, каперсы, артишоки, оливки, сыр Моцарелла",
        calories: "200 калорий",
        price: "100.00 грн",
        // pizzaPicSrc: "images/капричеза.jpg",
    }, 
    {
        pizzaName: "Пицца Карбонара",
        ingridients: "сливочный соус с яичным желтком, белым вином, бекон, сыр Пармезан, сыр Моцарелла",
        calories: "350 калорий",
        price: "95.00 грн",
        // pizzaPicSrc: "images/пицца-карбонара.jpg",
    }, 
];

let temp = document.getElementsByTagName('template')[0];
let item = temp.content.querySelector('.pizza-card');
let clone = document.importNode(item, true);
let allItems = clone.querySelectorAll('*');


for (let pizza of pizzaObjects) {   
    var valuesOfPizza = Object.values(pizza);   
    allItems.forEach((item, i, allItems) => {for (let value of valuesOfPizza) item.textContent = value;});
    
}
document.getElementById('pizzasBlockContainer').appendChild(clone);


// var temp, item, a, i;
//   temp = document.getElementsByTagName("template")[0];
//   item = temp.content.querySelector("div");
//   for (i = 0; i < myArr.length; i++) {
//     a = document.importNode(item, true);
//     a.textContent += myArr[i];
//     document.body.appendChild(a);
//   }

//   // An array of comments.
// var comments = [
//   {'author': 'Joe', 'body': 'I love this product.'},
//   {'author': 'Mary', 'body': 'Great idea. I have got to get me one of these!'},
//   {'author': 'Eric', 'body': 'These things are fantastic. I bought three.'}
// ];

// // Get a reference to the comments list in the main DOM.
// var commentsList = document.getElementById('comments');

// // Loop through each of the comments and add them to the comments list.
// for (var i = 0; i < comments.length; i++) {
//   var comment = comments[i];
//   var tmpl = document.getElementById('comment-template').content.cloneNode(true);
//   tmpl.querySelector('.comment-author').innerText = comment.author;
//   tmpl.querySelector('.comment-body').innerText = comment.body;
//   commentsList.appendChild(tmpl);
// }


function onBlockClick() {
    pizzasListContainer.style.display = 'none';
    pizzasBlockContainer.style.display = 'flex';
}

function onListClick() {
    pizzasBlockContainer.style.display = 'none';
    pizzasListContainer.style.display = 'initial';
}





