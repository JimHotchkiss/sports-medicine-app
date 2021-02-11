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

    // back btn
    const navbarBackBtn = document.createElement("div")
    navbarBackBtn.setAttribute("class", "navbar-back-btn")
    navbarBackBtn.setAttribute("id", "navbar-back-btn")
    navbar.appendChild(navbarBackBtn)
    const imgTitleDiv = document.createElement("div")
    imgTitleDiv.setAttribute("class", "img-title-div")
    imgTitleDiv.setAttribute("id", "img-title-div")
    const imgDiv = document.createElement("div")
    imgDiv.setAttribute("class", "img-div")
    imgDiv.setAttribute("id", "img-div")
    const titleDiv = document.createElement("div")
    titleDiv.setAttribute("class", "title-div")
    const homeDiv = document.createElement("div")
    homeDiv.setAttribute("class", "home-div")
    homeDiv.setAttribute("id", "home-div")
    const spanDiv = document.createElement("div")
    spanDiv.setAttribute("class", "span-div")
    titleDiv.innerText = "Sports"
    spanDiv.innerText = "Med"
    imgTitleDiv.appendChild(imgDiv)
    imgTitleDiv.appendChild(titleDiv)
    imgTitleDiv.appendChild(spanDiv)
    navbar.appendChild(imgTitleDiv)
    navbar.appendChild(homeDiv)
    root.appendChild(navbar)
  }
  static showBackBtn() {
    const navbarBackBtn = document.getElementById("navbar-back-btn")
    navbarBackBtn.classList.add("navbar-back-btn-show")
    Navbar.bindBackBtnEventListener()
  }

  static hideBackBtn() {
    const navbarBackBtn = document.getElementById("navbar-back-btn")
    navbarBackBtn.classList.remove("navbar-back-btn-show")
  }

  static bindBackBtnEventListener() {
    const navbarBackBtn = document.getElementById("navbar-back-btn")
    navbarBackBtn.addEventListener("click", () => {
      const implants = Implants.getImplantsFromStore()
      HomePage.clearImplantDetails()
      Navbar.hideBackBtn()
      HomePage.renderSearchField()
      HomePage.renderInplants(implants)
      Search.bindSearchEventListener()
    })
  }

  static updateTitle(item, features) {
    const navbarTitleDiv = document.getElementsByClassName("title-div")
    const spanDiv = document.getElementsByClassName("span-div")
    const imgDiv = document.getElementById("img-div")
    features.map((feature) => {
      if (feature.id === item.id) {
        const splitFeatureTitle = feature.title.split(" ")
        if (feature.id === "complaint") {
        }
        navbarTitleDiv[0].innerText = splitFeatureTitle[0]
        spanDiv[0].innerText = splitFeatureTitle[1]
        imgDiv.classList.add("img-div-hide")
      }
    })
  }

  static showHomeIcon() {
    const homeDiv = document.getElementById("home-div")
    homeDiv.classList.add("home-div-show")
    // call the home icon event handler
    Navbar.bindHomeIconEventListener()
  }

  static bindHomeIconEventListener() {
    const navbarHomeIcon = document.getElementById("home-div")
    if (navbarHomeIcon !== null) {
      navbarHomeIcon.addEventListener("click", () => {
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
