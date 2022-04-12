const city = document.querySelector("#search_city")
const form = document.querySelector(".form")
form.addEventListener("submit", e => {
    e.preventDefault()

})
city.addEventListener("keyup", e => {
    console.log(city.value.trim())
})