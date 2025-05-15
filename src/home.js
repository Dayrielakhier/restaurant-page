import steak from "./pexels-hasan-kurt-154798938-10749578.jpg"
import food from "./pexels-cottonbro-4253320.jpg"
import table from "./say-s-bRihwX_BU1E-unsplash.jpg"

const content = document.querySelector("#content")

const headlineDiv = document.createElement("div")
headlineDiv.classList.add("headline") 

const headlineImgDiv = document.createElement("div")
const headlineImg = document.createElement("img")
headlineImg.src = steak
headlineImgDiv.appendChild(headlineImg)

const headlineTitle = document.createElement("h1")
headlineTitle.classList.add("title")
headlineTitle.textContent = "Harvest Table"
const headlineDesc = document.createElement("h2")
headlineDesc.classList.add("desc")
headlineDesc.textContent = "Farm-to-Table Freshness, Every Day"

headlineDiv.append(headlineImgDiv, headlineTitle, headlineDesc)


const storyDiv = document.createElement("div")
storyDiv.classList.add("story")

const insideDiv = document.createElement("div")
const storyTitle = document.createElement("h2")
storyTitle.classList.add("story-title")
storyTitle.textContent = "Our Story"
const storyDesc = document.createElement("p")
storyDesc.classList.add("story-desc")
storyDesc.textContent = "At Harvest Table, we believe great meals start with fresh ingredients. Nestled in the heart of the city, our restaurant brings you comfort food with a gourmet twist — all made from locally sourced produce and ethically raised meats."
insideDiv.append(storyTitle, storyDesc)

const storyImg1Div = document.createElement("div")
storyImg1Div.classList.add("story-img")
const storyImg1 = document.createElement("img")
storyImg1.src = food
storyImg1Div.appendChild(storyImg1)

const storyImg2Div = document.createElement("div")
storyImg2Div.classList.add("story-img")
const storyImg2 = document.createElement("img")
storyImg2.src = table
storyImg2Div.appendChild(storyImg2)

storyDiv.append(insideDiv, storyImg1Div, storyImg2Div)


const visitDiv = document.createElement("div")
visitDiv.classList.add("visit")

const visitTitle = document.createElement("div")
visitTitle.textContent = "Visit Us"

const locationDiv = document.createElement("div")
const locationTitle = document.createElement("h3")
locationTitle.classList.add("bottom-title")
locationTitle.textContent = "Location"
const locationDesc = document.createElement("p")
locationDesc.classList.add("location")
locationDesc.textContent = "123 Garden, Springfield, World"
locationDiv.append(locationTitle, locationDesc)

const hoursDiv = document.createElement("div")
const hoursTitle = document.createElement("h3")
hoursTitle.classList.add("bottom-title")
hoursTitle.textContent = "Business Hours"
const monday = document.createElement("p")
monday.textContent = "Monday: Closed"
const tuesday = document.createElement("p")
tuesday.textContent = "Tuesday: 10:00 - 20:00"
const wednesday = document.createElement("p")
wednesday.textContent = "Wednesday: 10:00 - 20:00"
const thursday = document.createElement("p")
thursday.textContent = "Thursday: 10:00 - 20:00"
const friday = document.createElement("p")
friday.textContent = "Friday: 10:00 - 21:00"
const saturday = document.createElement("p")
saturday.textContent = "Saturday: 10:00 - 21:00"
const sunday = document.createElement("p")
sunday.textContent = "Sunday: 10:00 - 21:00"
hoursDiv.append(hoursTitle, monday, tuesday, wednesday, thursday, friday, saturday, sunday)

visitDiv.append(visitTitle, locationDiv, hoursDiv)


export default function () {
    content.append(headlineDiv, storyDiv, visitDiv)
} 
