var nav = document.querySelector("nav")

window.addEventListener("scroll", function(){
  if (document.body.scrollTop > 25) {
    nav.classList.add("active")
  } else {
    nav.classList.remove("active")
  }
})