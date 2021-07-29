let btn = document.querySelector(".icon_bottom")
let contEls=document.querySelector(".navbar")

btn.addEventListener("click", toggleClass)


function toggleClass(){
    contEls.classList.toggle("collapse")
}

let Elements = document.querySelectorAll(".content_els")



Elements.forEach(btn => btn.addEventListener("click", toggleClas))

function toggleClas(){
    let previousEls = document.querySelectorAll(".content_els")
    console.log(this)
    previousEls.forEach(els => els.classList.remove("els-hover"))
    this.classList.add("els-hover")
    console.log(this)

}
