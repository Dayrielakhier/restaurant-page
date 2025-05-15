import "./styles.css"
import home from "./home"
import menu from "./menu"
import contact from "./contact"

const homeBtn = document.querySelector("#home")
const menuBtn = document.querySelector("#menu")
const contactBtn = document.querySelector("#contact")

const content = document.querySelector("#content")

home()

homeBtn.addEventListener("click", () => {
    content.replaceChildren()
    home()
})

menuBtn.addEventListener("click", () => {
    content.replaceChildren()
    menu()
})

contactBtn.addEventListener("click", () => {
    content.replaceChildren()
    contact()
})