const d = document
const email = d.querySelector('.navbar-email')
const menuDesktop = d.querySelector('.desktop-menu')
const menuHamburguer = d.querySelector('.menu')
const menuMobile = d.querySelector('.mobile-menu')
const shoppingCart = d.getElementsByClassName('navbar-shopping-cart')[0]
const asideMenu = d.querySelector('.product-detail')
const productDetail = d.querySelector('#product-detail')
const iconProductDetail = d.querySelector('.product-detail-close')
const cardsContainer = d.querySelector('.cards-container')
const buttonShowCards = d.getElementsByClassName('rendercards')[0]
const shadow = d.querySelector('.shadow')
const renderContainer = d.querySelector('.render__container')
const mainCardsContainer = d.querySelector('.main-container')
const yardSaleLogo = d.querySelector('.logo')
const dinamicImage = d.querySelector('.dinamicImg')
const itemPrice = d.querySelector('.price-item')
const itemName = d.querySelector('.name-item')


/*Events*/ 
email.addEventListener('click', showDesktopMenu)
menuHamburguer.addEventListener('click', showMobileMenu)
shoppingCart.addEventListener('click', showAsideMenu)
iconProductDetail.addEventListener('click', closeProductDetail)
shadow.addEventListener('click', hideElements)
yardSaleLogo.addEventListener('click', reloadPage)



function hideElements(){
    const isDesktopMenuOpen = !menuDesktop.classList.contains('inactive')
    const isAsideMenuOpen = !asideMenu.classList.contains('inactive')
    const isMenuMobileOpen = !menuMobile.classList.contains('inactive')
    const isProductDetailOpen = !productDetail.classList.contains('inactive')

    if(isDesktopMenuOpen){
        menuDesktop.classList.add('inactive')
        shadow.classList.add('inactive')
        return;
    }

    if(isAsideMenuOpen){
        asideMenu.classList.add('inactive')
        shadow.classList.add('inactive')
        return;
    }

    if(isMenuMobileOpen){
        menuMobile.classList.add('inactive')
        shadow.classList.add('inactive')
        return;
    }

    if(isProductDetailOpen){
        productDetail.classList.add('inactive')
        shadow.classList.add('inactive')
    }

    shadow.classList.add('inactive')
    
}

function closeProductDetail(){

    const isShadowOpen = !shadow.classList.contains('inactive')

    if(isShadowOpen){
       shadow.classList.add('inactive') 
    }
    productDetail.classList.add('inactive')
    
}

function showDesktopMenu(){
    
    const isAsideMenuOpen = !asideMenu.classList.contains('inactive')
    const ismenuDesktopOpen = !menuDesktop.classList.contains('inactive')
    const isShadowOpen = !shadow.classList.contains('inactive')

    if(isAsideMenuOpen && isShadowOpen){
        asideMenu.classList.add('inactive')
        menuDesktop.classList.remove('inactive')
        return;
    }

    if(!ismenuDesktopOpen){
        shadow.classList.remove('inactive')
    }else{
        shadow.classList.add('inactive')
    }

    productDetail.classList.add('inactive')

    menuDesktop.classList.toggle('inactive')
}

function showMobileMenu(){

    const isAsideMenuOpen = !asideMenu.classList.contains('inactive')
    const isProductDetailOpen = !productDetail.classList.contains('inactive')
    const isMenuMobileOpen = !menuMobile.classList.contains('inactive')

    if(isAsideMenuOpen){
        asideMenu.classList.add('inactive')
    }

    if(isProductDetailOpen){
        productDetail.classList.add('inactive')
    }

    if(!isMenuMobileOpen){
        shadow.classList.remove('inactive')
    }else{
        shadow.classList.add('inactive')
    }

    menuMobile.classList.toggle('inactive')
    
}

function showAsideMenu(){

    const isDesktopMenuOpen = !menuDesktop.classList.contains('inactive')
    const isMobileMenuOpen = !menuMobile.classList.contains('inactive')
    const isAsideMenuClosed = asideMenu.classList.contains('inactive')
    
    if(isDesktopMenuOpen || isMobileMenuOpen){
        menuDesktop.classList.add('inactive')
        asideMenu.classList.remove('inactive')
        menuMobile.classList.add('inactive')
        return;
    }

    if(isAsideMenuClosed){
        shadow.classList.remove('inactive')
    }else{
        shadow.classList.add('inactive')
    }

    productDetail.classList.add('inactive')

    asideMenu.classList.toggle('inactive')
    

}

const productList = []
productList.push(
    {
        img : 'https://i.pinimg.com/564x/09/8e/5c/098e5cac17d2b721897ea1924a967057.jpg',
        price : '120',
        name: 'Bike'
    },
    {
        img : 'https://i.pinimg.com/564x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg',
        price : '1100',
        name: 'Phone'

    },
    {
        img : 'https://i.pinimg.com/564x/fb/26/bf/fb26bf0dadfd3741e5e6ea9a8a2f8a4b.jpg',
        price : '5500',
        name: 'Car'
    },

    {
        img : 'https://i.pinimg.com/564x/aa/ee/74/aaee744610590d71577c72c84b135d36.jpg',
        price : '950',
        name: 'Smartwatch'
    },
    {
        img : 'https://i.pinimg.com/564x/40/94/88/40948836a86563e38834071980fefc0c.jpg',
        price : '1000',
        name: 'Hoddie'
    },
    {
        img : 'https://i.pinimg.com/564x/94/03/17/94031722b35c95c0db1b012898ef2d20.jpg',
        price : '2500',
        name: 'Computer'
    },
    {
        img : 'https://i.pinimg.com/564x/38/80/9d/38809d95a6d72f0d6fdb148f68b446dd.jpg',
        price : '1500',
        name: 'Dog Collar'
    }
)

/*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
          </div>
            <figure>
              <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
         </div>
</div>*/

function renderCards(arr){

    

    
    for(product of productList){


        /*Create Elements*/ 
    
        const productCard = d.createElement('div')
        const productImg = d.createElement('img')
        const productInfo = d.createElement('div')
        const productDiv = d.createElement('div')
        const productPrice = d.createElement('p')
        const productItem = d.createElement('p')
        const productFigure = d.createElement('figure')
        const figureImg = d.createElement('img')
        productCard.classList.add('product-card')
        
        productImg.setAttribute('src', product.img)
        productInfo.classList.add('product-info')
        productPrice.innerText = '$' + product.price
        productItem.innerText = product.name
        figureImg.setAttribute('src', './icons/bt_add_to_cart.svg')
        figureImg.setAttribute('alt', 'cardIcon')
    
        /*Organize elements*/ 
    
        productFigure.appendChild(figureImg)
        productDiv.appendChild(productPrice)
        productDiv.appendChild(productItem)
        productInfo.appendChild(productDiv)
        productInfo.appendChild(productFigure)
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        cardsContainer.appendChild(productCard) 
       

        /*Creo evento click en la imagen*/ 

        productImg.addEventListener('click', openProductDetail)
    }



// Selecciona todos los elementos con la clase "product-card"
const productCards = d.querySelectorAll('.product-card');
console.log(productCards)

// Itera a través de los elementos "product-card"
for (let i = 0; i < productCards.length; i++) {
    // Almacena la tarjeta actual en la variable "item"
    const item = productCards[i];
    console.log(item)

    // Genera el nombre de la clase basado en el índice, por ejemplo, "card-1", "card-2", etc.
    const className = `card-${i + 1}`;
    console.log(className)

    // Agrega la clase generada a la tarjeta actual
    item.classList.add(className);
}


    


}

function openProductDetail(event){
    const clickedImage = event.target; // Obtén la imagen que se hizo clic
    console.log(clickedImage)
    const imageURL = clickedImage.getAttribute('src'); // Obten la URL de la imagen
    console.log(imageURL)

    // Establece la URL de la imagen en dinamicImage
    dinamicImage.setAttribute('src', imageURL);

   if(imageURL == "https://i.pinimg.com/564x/09/8e/5c/098e5cac17d2b721897ea1924a967057.jpg")
   {
    itemPrice.innerText= "$120"
    itemName.innerText = "Bike"
   } else if(imageURL == "https://i.pinimg.com/564x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg"){
    itemPrice.innerText= "$1100"
    itemName.innerText = "Phone"
   }else if(imageURL == "https://i.pinimg.com/564x/fb/26/bf/fb26bf0dadfd3741e5e6ea9a8a2f8a4b.jpg"){
    itemPrice.innerText= "$5500"
    itemName.innerText = "Car"
   }else if(imageURL == "https://i.pinimg.com/564x/aa/ee/74/aaee744610590d71577c72c84b135d36.jpg"){
    itemPrice.innerText= "$950"
    itemName.innerText = "Smartwatch"
   }else if(imageURL == "https://i.pinimg.com/564x/40/94/88/40948836a86563e38834071980fefc0c.jpg"){
    itemPrice.innerText= "$1000"
    itemName.innerText = "Hoddie"
   }else if(imageURL == "https://i.pinimg.com/564x/94/03/17/94031722b35c95c0db1b012898ef2d20.jpg"){
    itemPrice.innerText= "$2500"
    itemName.innerText = "Computer"
   }else{
    itemPrice.innerText= "$1500"
    itemName.innerText = "Dog Collar"
   }

    productDetail.classList.remove('inactive')
    asideMenu.classList.add('inactive')
    menuMobile.classList.add('inactive')
    menuDesktop.classList.add('inactive')
    shadow.classList.remove('inactive') 
    
}

function showCardsHideButton(){
    renderCards(productList)
    buttonShowCards.style.display = 'none'
    renderContainer.classList.add('inactive')
    mainCardsContainer.classList.remove('inactive')
   
}

function reloadPage(){
    location.reload()
}

buttonShowCards.addEventListener('click', showCardsHideButton)















