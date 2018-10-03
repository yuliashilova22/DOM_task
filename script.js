let pizzaObjects = [ 
    {
        pizzaName: "Пицца Четыре сезона",
        ingridients: "томатный соус, бекон, ветчина, болгарский соус, зеленая стручковая фасоль, оливки, сыр Моцарелла",
        calories: "340 калорий",
        price: "95.00 грн",
        pizzaPicSrc: "images/4-сезона.jpg",
    }, 
    {
        pizzaName: "Пицца с пармской ветчиной",
        ingridients: "томатный соус, пармская ветчина, сыр Моцарелла, руккола, оливковое масло",
        calories: "284 калории",
        price: "100.00 грн",
        pizzaPicSrc: "images/пицца-с-пармской-ветчиной.jpg",
    }, 
    {
        pizzaName: "Пицца с салями Пикантная",
        ingridients: "соус томатный, сыр Моцарелла, салями, острый перец Чили",
        calories: "321 калория",
        price: "90.00 грн",
        pizzaPicSrc: "images/пицца-с-салями.jpg",
    }, 
    {
        pizzaName: "Пицца Морская",
        ingridients: "соус томатный, сыр Моцарелла, коктейльная креветка, лосось, мидии, лимон",
        calories: "248 калорий",
        price: "140.00 грн",
        pizzaPicSrc: "images/морская.jpg",
    }, 
    {
        pizzaName: "Пицца с ветчиной и грибами",
        ingridients: "соус томатный, ветчина, шампиньоны, сыр Моцарелла, зелень",
        calories: "220 калорий",
        price: "85.00 грн",
        pizzaPicSrc: "images/ветчина-грибы.jpg",
    }, 
    {
        pizzaName: "Пицца Мясная",
        ingridients: "отварная телятина, сыр Моцарелла, соус томатный, помидоры Черри, по желанию чеснок",
        calories: "380 калорий",
        price: "95.00 грн",
        pizzaPicSrc: "images/мясная.jpg",
    }, 
    {
        pizzaName: "Пицца 4 сыра",
        ingridients: "сыр Моцарелла, сыр Пармезан, Сыр Дор-Блю, Сыр Бри, свежая груша, соус томатный или сливочный на выбор",
        calories: "400 калорий",
        price: "120.00 грн",
        pizzaPicSrc: "images/4-сыра.jpg",
    }, 
    {
        pizzaName: "Пицца с лососем и сливками",
        ingridients: "сливочный соус, лосось слабосоленый, сыр Моцарелла, помидор, руккола",
        calories: "297 калорий",
        price: "130.00 грн",
        pizzaPicSrc: "images/лосось-на-сливках.jpg",
    }, 
    {
        pizzaName: "Пицца Болоньезе",
        ingridients: "соус томатный, мясное рагу Болоньезе, сыр Моцарелла, зелень",
        calories: "270 калорий",
        price: "95.00 грн",
        pizzaPicSrc: "images/пицца-болоньезе.jpg",
    }, 
    {
        pizzaName: "Пицца Маргарита",
        ingridients: "сыр Моцарелла, томатный соус, специи",
        calories: "190 калорий",
        price: "70.00 грн",
        pizzaPicSrc: "images/маргарита.jpg",
    }, 
    {
        pizzaName: "Пицца Вегетарианская",
        ingridients: "соус томатный, брокколи, цветная капуста, фасоль стручковая, перец сладкий, шампиньоны, оливки, зелень",
        calories: "200 калорий",
        price: "90.00 грн",
        pizzaPicSrc: "images/пицца-вегетарианская.jpg",
    }, 
    {
        pizzaName: "Пицца с курицей и ананасом",
        ingridients: "соус томатный, филе куриное-гриль, свежий ананас, сыр Моцарелла, зелень",
        calories: "305 калорий",
        price: "95.00 грн",
        pizzaPicSrc: "images/курица-ананас.jpg",
    }, 
    {
        pizzaName: "Пицца с куриной грудкой и грибами",
        ingridients: "соус томатный, филе куриное-гриль, шампиньоны, сыр Моцарелла, зелень",
        calories: "320 калорий",
        price: "90.00 грн",
        pizzaPicSrc: "images/курица-грибы.jpg",
    }, 
    {
        pizzaName: "Пицца Капричеза",
        ingridients: "соус томатный, ветчина, шампиньоны, каперсы, артишоки, оливки, сыр Моцарелла",
        calories: "200 калорий",
        price: "100.00 грн",
        pizzaPicSrc: "images/капричеза.jpg",
    }, 
    {
        pizzaName: "Пицца Карбонара",
        ingridients: "сливочный соус с яичным желтком, белым вином, бекон, сыр Пармезан, сыр Моцарелла",
        calories: "350 калорий",
        price: "95.00 грн",
        pizzaPicSrc: "images/пицца-карбонара.jpg",
    }, 
];

function createView(arr) {
    for (let pizza of arr) {   
        let pizzaItem = temp.content.querySelector('.pizza-card');
        let clone = document.importNode(pizzaItem, true);
        clone.querySelector('.pizza-pic').setAttribute('src', pizza.pizzaPicSrc);
        clone.querySelector('.pizza-pic').setAttribute('alt', pizza.pizzaName);
        clone.querySelector('.pizza-name').textContent = pizza.pizzaName;
        clone.querySelector('.ingridients').textContent = pizza.ingridients;
        clone.querySelector('.calories').textContent = pizza.calories;
        clone.querySelector('.price').textContent = pizza.price;
        pizzaContainer.append(clone);
    }
}

function caloriesSort() {
    while (pizzaContainer.firstChild) {
        pizzaContainer.removeChild(pizzaContainer.firstChild);
    }
    pizzaObjects.sort((pizzaObj1, pizzaObj2) => parseInt(pizzaObj1.calories) - parseInt(pizzaObj2.calories));
    createView(pizzaObjects);
}

function priceSort() {
    while (pizzaContainer.firstChild) {
        pizzaContainer.removeChild(pizzaContainer.firstChild);
    }
    pizzaObjects.sort((pizzaObj1, pizzaObj2) => parseInt(pizzaObj1.price) - parseInt(pizzaObj2.price));
    createView(pizzaObjects);
}

let changeClassesForList = function(item) {
    item.removeChild(item.querySelector('.pizza-pic'));
    item.removeChild(item.querySelector('.change-ingridients'));
    item.classList.remove('pizza-card');
    item.classList.add('list-view__item');
    item.children.className = '';
    pizzaContainer.style = 'justify-content: initial';
}

function changeViewToList() {
    let pizzaCards = pizzaContainer.querySelectorAll('.pizza-card');
    pizzaCards.forEach(changeClassesForList);

}

function pizzaFilter() {
    let ingridient = document.querySelector('.filter-input').value;
    for (let pizza of pizzaObjects) {
        var filteredPizzaObjects = pizzaObjects.filter(ingridient => pizza.ingridients.includes(ingridient));
    }          
    while (pizzaContainer.firstChild) {
        pizzaContainer.removeChild(pizzaContainer.firstChild);
    }
    createView(filteredPizzaObjects);
}

let temp = document.getElementsByTagName('template')[0];
let pizzaContainer = document.getElementById('pizzasBlockContainer');

document.querySelector('.calories-sort').addEventListener('click', caloriesSort);
document.querySelector('.price-sort').addEventListener('click', priceSort);
document.querySelector('.list-icon').addEventListener('click', changeViewToList);
document.querySelector('.filter-button').addEventListener('click', pizzaFilter);

createView(pizzaObjects);





