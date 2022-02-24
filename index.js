/* code goes here */
document.addEventListener("DOMContentLoaded", () => {
  let e = document.querySelector("div#hidden-div")
  console.log(e.innerText)
  e.innerText = parseInt(e.innerText) + 1
})

