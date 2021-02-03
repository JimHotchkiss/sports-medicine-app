class Navbar {
  constructor() {
    this.root = document.getElementById("root")
  }
  renderNavbar() {
    const spentNavbar = this.root.children[0]
    if (spentNavbar !== undefined) {
      if (spentNavbar) {
        spentNavbar.parentNode.removeChild(spentNavbar)
      }
    }

    const navbar = document.createElement("div")
    navbar.setAttribute("class", "navbar")
    navbar.setAttribute("id", "navbar")
    const imgTitleDiv = document.createElement("div")
    imgTitleDiv.setAttribute("class", "img-title-div")
    imgTitleDiv.setAttribute("id", "img-title-div")
    const imgDiv = document.createElement("div")
    imgDiv.setAttribute("class", "img-div")
    imgDiv.setAttribute("id", "img-div")
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
