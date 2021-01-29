class UpdateNavbar {
  constructor() {
    this.bindHomeIconEventListener()
    this.updateHomePage = new UpdateHomePage()
    // this.updateNavbar()
  }
  updateTitle(item, features) {
    const navbarTitleDiv = document.getElementsByClassName("title-div")
    const spanDiv = document.getElementsByClassName("span-div")
    const imgDiv = document.getElementById("img-div")
    features.map((feature) => {
      if (feature.id === item.id) {
        const splitFeatureTitle = feature.title.split(" ")
        navbarTitleDiv[0].innerText = splitFeatureTitle[0]
        spanDiv[0].innerText = splitFeatureTitle[1]
        imgDiv.classList.add("img-div-hide")
      }
    })
  }

  addHomeIcon() {
    const imgTitleDiv = document.getElementById("img-title-div")
    // Resize image title div
    imgTitleDiv.style.marginLeft = "20%"
    // Insert new div after the img title div
    imgTitleDiv.insertAdjacentHTML(
      "afterend",
      '<div id="navbar-home-icon" class="navbar-home-icon"></div>'
    )
    // call the home icon event handler
    this.bindHomeIconEventListener()
  }

  bindHomeIconEventListener() {
    const navbarHomeIcon = document.getElementById("navbar-home-icon")
    if (navbarHomeIcon !== null) {
      navbarHomeIcon.addEventListener("click", () => {
        // this.updateNavbar()
        const navbar = document.getElementById("navbar")
        if (navbar) {
          navbar.parentNode.removeChild(navbar)
        }
        this.updateHomePage.clearInnerText()
        new HomePage()
      })
    }
  }
}
