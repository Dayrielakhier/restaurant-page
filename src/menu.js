const content = document.querySelector("#content")
content.classList.add("background")

const headingDiv = document.createElement("div")

const bigTitle = document.createElement("h1")
bigTitle.classList.add("big-title")
bigTitle.textContent = "HARVEST TABLE"
const menuTitle = document.createElement("h2")
menuTitle.classList.add("menu-title")
menuTitle.textContent = "MENU"

headingDiv.append(bigTitle, menuTitle)


const startersDiv = document.createElement("div")
startersDiv.classList.add("starters-div")

const startersTitle = document.createElement("h3")
startersTitle.classList.add("starters-title")
startersTitle.textContent = "STARTERS"

const startersDiv1 = document.createElement("div")
startersDiv1.classList.add("flex-div")
const startMenuDiv1 = document.createElement("div")
const startersMenu1 = document.createElement("h4")
startersMenu1.textContent = "Roasted Beet Salad"
const startersDesc1 = document.createElement("p")
startersDesc1.textContent = "Goat cheese, arugula, balsamic glaze"
startMenuDiv1.append(startersMenu1, startersDesc1)
const startersPrice1 = document.createElement("p")
startersPrice1.textContent = "$9"
startersDiv1.append(startMenuDiv1, startersPrice1)

const startersDiv2 = document.createElement("div")
startersDiv2.classList.add("flex-div")
const startMenuDiv2 = document.createElement("div")
const startersMenu2 = document.createElement("h4")
startersMenu2.textContent = "Tomato Basil Soup"
const startersDesc2 = document.createElement("p")
startersDesc2.textContent = "Classic soup served with basil pesto"
startMenuDiv2.append(startersMenu2, startersDesc2)
const startersPrice2 = document.createElement("p")
startersPrice2.textContent = "$7"
startersDiv2.append(startMenuDiv2, startersPrice2)

const startersDiv3 = document.createElement("div")
startersDiv3.classList.add("flex-div")
const startMenuDiv3 = document.createElement("div")
const startersMenu3 = document.createElement("h4")
startersMenu3.textContent = "Grilled Artichokes"
const startersDesc3 = document.createElement("p")
startersDesc3.textContent = "Lemon-garlic aioli"
startMenuDiv3.append(startersMenu3, startersDesc3)
const startersPrice3 = document.createElement("p")
startersPrice3.textContent = "$11"
startersDiv3.append(startMenuDiv3, startersPrice3)

startersDiv.append(startersTitle, startersDiv1, startersDiv2, startersDiv3)


const mainsDiv = document.createElement("div")
mainsDiv.classList.add("mains-div")

const mainsTitle = document.createElement("h3")
mainsTitle.classList.add("mains-title")
mainsTitle.textContent = "MAIN COURSES"

const mainsDiv1 = document.createElement("div")
mainsDiv1.classList.add("flex-div")
const mainsMenuDiv1 = document.createElement("div")
const mainsMenu1 = document.createElement("h4")
mainsMenu1.textContent = "Herb-Crusted Salmon"
const mainsDesc1 = document.createElement("p")
mainsDesc1.textContent = "Quinoa and seasonal vegetables"
mainsMenuDiv1.append(mainsMenu1, mainsDesc1)
const mainsPrice1 = document.createElement("p")
mainsPrice1.textContent = "$21"
mainsDiv1.append(mainsMenuDiv1, mainsPrice1)

const mainsDiv2 = document.createElement("div")
mainsDiv2.classList.add("flex-div")
const mainsMenuDiv2 = document.createElement("div")
const mainsMenu2 = document.createElement("h4")
mainsMenu2.textContent = "Grass-Fed Steak"
const mainDesc2 = document.createElement("p")
mainDesc2.textContent = "10 oz ribeye, mashed potatoes, and sauteed greens"
mainsMenuDiv2.append(mainsMenu2, mainDesc2)
const mainsPrice2 = document.createElement("p")
mainsPrice2.textContent = "$28"
mainsDiv2.append(mainsMenuDiv2, mainsPrice2)

const mainsDiv3 = document.createElement("div")
mainsDiv3.classList.add("flex-div")
const mainsMenuDiv3 = document.createElement("div")
const mainsMenu3 = document.createElement("h4")
mainsMenu3.textContent = "Mushroom Risotto"
const mainDesc3 = document.createElement("p")
mainDesc3.textContent = "Wild mushrooms, parmesan, and fresh herbs"
mainsMenuDiv3.append(mainsMenu3, mainDesc3)
const mainsPrice3 = document.createElement("p")
mainsPrice3.textContent = "$18"
mainsDiv3.append(mainsMenuDiv3, mainsPrice3)

mainsDiv.append(mainsTitle, mainsDiv1, mainsDiv2, mainsDiv3)


const dessertsDiv = document.createElement("div")
dessertsDiv.classList.add("desserts-div")

const dessertsTitle = document.createElement("h3")
dessertsTitle.classList.add("desserts-title")
dessertsTitle.textContent = "DESSERTS"

const dessertsDiv1 = document.createElement("div")
dessertsDiv1.classList.add("flex-div")
const dessertsMenuDiv1 = document.createElement("div")
const dessertsMenu1 = document.createElement("h4")
dessertsMenu1.textContent = "Chocolate Torte"
const dessertsDesc1 = document.createElement("p")
dessertsDesc1.textContent = "Flourless cake, finished with raspberry coulis"
dessertsMenuDiv1.append(dessertsMenu1, dessertsDesc1)
const dessertsPrice1 = document.createElement("p")
dessertsPrice1.textContent = "$9"
dessertsDiv1.append(dessertsMenuDiv1, dessertsPrice1)

const dessertsDiv2 = document.createElement("div")
dessertsDiv2.classList.add("flex-div")
const dessertsMenuDiv2 = document.createElement("div")
const dessertsMenu2 = document.createElement("h4")
dessertsMenu2.textContent = "Vanilla Bean Cheesecake"
const dessertsDesc2 = document.createElement("p")
dessertsDesc2.textContent = "Topped with mixed berry compote"
dessertsMenuDiv2.append(dessertsMenu2, dessertsDesc2)
const dessertsPrice2 = document.createElement("p")
dessertsPrice2.textContent = "$9"
dessertsDiv2.append(dessertsMenuDiv2, dessertsPrice2)

const dessertsDiv3 = document.createElement("div")
dessertsDiv3.classList.add("flex-div")
const dessertsMenuDiv3 = document.createElement("div")
const dessertsMenu3 = document.createElement("h4")
dessertsMenu3.textContent = "Apple Crisp"
const dessertsDesc3 = document.createElement("p")
dessertsDesc3.textContent = "Served warm with vanilla ice cream"
dessertsMenuDiv3.append(dessertsMenu3, dessertsDesc3)
const dessertsPrice3 = document.createElement("p")
dessertsPrice3.textContent = "$8"
dessertsDiv3.append(dessertsMenuDiv3, dessertsPrice3)

dessertsDiv.append(dessertsTitle, dessertsDiv1, dessertsDiv2, dessertsDiv3)


export default function () {
    content.append(headingDiv, startersDiv, mainsDiv, dessertsDiv)
} 