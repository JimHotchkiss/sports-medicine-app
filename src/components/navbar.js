class Navbar {
  static renderNavbar() {
    const root = document.getElementById("root")
    const spentNavbar = root.children[0]
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
    root.appendChild(navbar)
  }

  // update navbar

  static updateTitle(item, features) {
    const navbarTitleDiv = document.getElementsByClassName("title-div")
    const spanDiv = document.getElementsByClassName("span-div")
    const imgDiv = document.getElementById("img-div")
    features.map((feature) => {
      if (feature.id === item.id) {
        const splitFeatureTitle = feature.title.split(" ")
        if (feature.id === "complaint") {
          navbarTitleDiv[0].style.marginLeft = "50%"
        }
        navbarTitleDiv[0].innerText = splitFeatureTitle[0]
        spanDiv[0].innerText = splitFeatureTitle[1]
        imgDiv.classList.add("img-div-hide")
      }
    })
  }

  static addHomeIcon() {
    const imgTitleDiv = document.getElementById("img-title-div")
    // Resize image title div
    imgTitleDiv.style.marginLeft = "20%"
    // Insert new div after the img title div
    imgTitleDiv.insertAdjacentHTML(
      "afterend",
      '<div id="navbar-home-icon" class="navbar-home-icon"></div>'
    )
    // call the home icon event handler
    Navbar.bindHomeIconEventListener()
  }

  static bindHomeIconEventListener() {
    const navbarHomeIcon = document.getElementById("navbar-home-icon")
    if (navbarHomeIcon !== null) {
      navbarHomeIcon.addEventListener("click", () => {
        console.log("home icon")
        const navbar = document.getElementById("navbar")
        if (navbar) {
          navbar.parentNode.removeChild(navbar)
        }
        HomePage.clearFeatureData()
        new HomePage()
      })
    }
  }
}
