class Navbar {
  constructor() {
    this.root = document.getElementById("root")
  }
  renderNavbar() {
    const navbar = document.createElement("div")
    navbar.setAttribute("class", "navbar")
    const imgTitleDiv = document.createElement("div")
    imgTitleDiv.setAttribute("class", "img-title-div")
    const imgDiv = document.createElement("div")
    imgDiv.setAttribute("class", "img-div")
    const titleDiv = document.createElement("div")
    titleDiv.setAttribute("class", "title-div")
    const spanDiv = document.createElement("div")
    spanDiv.setAttribute("class", "span-div")
    titleDiv.innerText = "Sports"
    spanDiv.innerText = "Med"
    imgTitleDiv.appendChild(imgDiv)
    imgTitleDiv.appendChild(titleDiv)
    imgTitleDiv.appendChild(spanDiv)
    navbar.appendChild(imgTitleDiv)
    this.root.appendChild(navbar)
  }
}
