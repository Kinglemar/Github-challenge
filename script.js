// ***********************input blue ring effect****************************

const inputEffect = document.querySelector(".none")
const inputSpaceEffect = document.querySelector(".input-space")
const reset = document.querySelector(".button")
const defaultDisplay = document.querySelector(".switch-menu")
const image = document.querySelector(".buttton")
const navbar = document.querySelector(".nav")

function newWidth(){
    inputSpaceEffect.style.minWidth = "500px"
    inputEffect.style.minWidth = "470px"  
    inputSpaceEffect.style.border = "blue 1px solid"
    inputEffect.style.outline = "none"
    inputSpaceEffect.style.transititon = "width .36s ease"
    inputEffect.style.transititon = "width .36s ease"
}

function defaultWidth(){
    inputEffect.style.minWidth = "243px"
    inputSpaceEffect.style.minWidth = "272px"
    inputEffect.style.border = "none"
    inputSpaceEffect.style.border = "rgb(70, 69, 69) 1px solid"
}


// ****************************Star button effect*********************************

const starButton = document.querySelector(".click")
const unStarButton = document.querySelector(".clicked")

starButton.classList.remove("conceal")
unStarButton.classList.add("conceal")



function display(){

    starButton.classList.toggle("conceal")
    unStarButton.classList.toggle("conceal")
}


// **************************************************************

const starButton1 = document.querySelector(".click1")
const unStarButton1 = document.querySelector(".clicked1")

starButton1.classList.remove("conceal")
unStarButton1.classList.add("conceal")



function display1(){

    starButton1.classList.toggle("conceal")
    unStarButton1.classList.toggle("conceal")
}

// *******************************************************************

const starButton2 = document.querySelector(".click2")
const unStarButton2 = document.querySelector(".clicked2")

starButton2.classList.remove("conceal")
unStarButton2.classList.add("conceal")



function display2(){

    starButton2.classList.toggle("conceal")
    unStarButton2.classList.toggle("conceal")
}

// ***********************************************************************

const starButton3 = document.querySelector(".click3")
const unStarButton3 = document.querySelector(".clicked3")

starButton3.classList.remove("conceal")
unStarButton3.classList.add("conceal")



function display3(){

    starButton3.classList.toggle("conceal")
    unStarButton3.classList.toggle("conceal")
}


const starButtonUpdate = document.querySelector(".update")
const unStarButtonUpdate = document.querySelector(".updated")

starButtonUpdate.classList.remove("conceal")
unStarButtonUpdate.classList.add("conceal")

function update(){
    starButtonUpdate.classList.toggle("conceal")
    unStarButtonUpdate.classList.toggle("conceal")
}


// *************************************star button effect for smaller view ports**************************************

const butterflyEffect = document.querySelector(".touch")
const butterflyEffectDefault = document.querySelector(".touched")

butterflyEffect.classList.remove("hide")
butterflyEffectDefault.classList.add("hide")

function ireAde(){
    butterflyEffect.classList.toggle("hide")
    butterflyEffectDefault.classList.toggle("hide")
}


const butterflyEffect1 = document.querySelector(".touch1")
const butterflyEffectDefault1 = document.querySelector(".touched1")

butterflyEffect1.classList.remove("hide")
butterflyEffectDefault1.classList.add("hide")

function ireAde1(){
    butterflyEffect1.classList.toggle("hide")
    butterflyEffectDefault1.classList.toggle("hide")
}


const butterflyEffect2 = document.querySelector(".touch2")
const butterflyEffectDefault2 = document.querySelector(".touched2")

butterflyEffect2.classList.remove("hide")
butterflyEffectDefault2.classList.add("hide")

function ireAde2(){
    butterflyEffect2.classList.toggle("hide")
    butterflyEffectDefault2.classList.toggle("hide")
}

const butterflyEffect3 = document.querySelector(".touch3")
const butterflyEffectDefault3 = document.querySelector(".touched3")

butterflyEffect3.classList.remove("hide")
butterflyEffectDefault3.classList.add("hide")

function ireAde3(){
    butterflyEffect3.classList.toggle("hide")
    butterflyEffectDefault3.classList.toggle("hide")
}


const starButtonUpdate1 = document.querySelector(".update-fallback")
const unStarButtonUpdate2 = document.querySelector(".updated-fallback")

starButtonUpdate1.classList.remove("hide")
unStarButtonUpdate2.classList.add("hide")

function update(){
    starButtonUpdate1.classList.toggle("hide")
    unStarButtonUpdate2.classList.toggle("hide")
}


// *******************CONTROLS**********************

inputEffect.addEventListener("focus", newWidth, false)
inputEffect.addEventListener("focusout", defaultWidth, false)

// *********************************star button for higher viewports*********************************

starButton.addEventListener("click", display, false)
unStarButton.addEventListener("click", display, false)

starButton1.addEventListener("click", display1, false)
unStarButton1.addEventListener("click", display1, false)

starButton2.addEventListener("click", display2, false)
unStarButton2.addEventListener("click", display2, false)

starButton3.addEventListener("click", display3, false)
unStarButton3.addEventListener("click", display3, false)

starButtonUpdate.addEventListener("click", update, false)
unStarButtonUpdate.addEventListener("click", update, false)

// *************************************star button for smaller viewports**********************************

butterflyEffect.addEventListener("click", ireAde, false)
butterflyEffectDefault.addEventListener("click", ireAde, false)

butterflyEffect1.addEventListener("click", ireAde1, false)
butterflyEffectDefault1.addEventListener("click", ireAde1, false)

butterflyEffect2.addEventListener("click", ireAde2, false)
butterflyEffectDefault2.addEventListener("click", ireAde2, false)

butterflyEffect3.addEventListener("click", ireAde3, false)
butterflyEffectDefault3.addEventListener("click", ireAde3, false)

starButtonUpdate1.addEventListener("click", update, false)
unStarButtonUpdate2.addEventListener("click", update, false)