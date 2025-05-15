const content = document.querySelector("#content")
content.classList.add("background")

const title = document.createElement("h1")
title.classList.add("big-title")
title.textContent = "HARVEST TABLE"

const contactTitle = document.createElement("div")
contactTitle.classList.add("contact-title")
contactTitle.textContent = "Contact Us"

const infoDiv = document.createElement("div")
infoDiv.classList.add("info-div")
const address = document.createElement("p")
address.textContent = "123 Garden, Springfield, World"
const telephone = document.createElement("p")
telephone.textContent = "(555) 123-4567"
const email = document.createElement("p")
email.textContent = "hello@harvesttable.com"
infoDiv.append(address, telephone, email)

export default function () {
    content.append(title, contactTitle, infoDiv)
}

