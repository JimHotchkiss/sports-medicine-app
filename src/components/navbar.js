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
    const backBtn = Navbar.renderBackBtn()
    navbar.appendChild(backBtn)
    const imgTitleDiv = Navbar.renderImgTitleDiv()
    const imgDiv = Navbar.renderImgDiv()
    const titleDiv = Navbar.renderTitleDiv()
    const homeDiv = Navbar.renderHomeDiv()
    const spanDiv = Navbar.renderSpanDiv()

    titleDiv.innerText = "Sports"
    spanDiv.innerText = "Med"
    imgTitleDiv.appendChild(imgDiv)
    imgTitleDiv.appendChild(titleDiv)
    imgTitleDiv.appendChild(spanDiv)
    navbar.appendChild(imgTitleDiv)
    navbar.appendChild(homeDiv)
    root.appendChild(navbar)
  }

  static renderSpanDiv() {
    const spanDiv = document.createElement("div")
    spanDiv.setAttribute("class", "span-div")
    return spanDiv
  }

  static renderHomeDiv() {
    const homeDiv = document.createElement("div")
    homeDiv.setAttribute("class", "home-div")
    homeDiv.setAttribute("id", "home-div")
    return homeDiv
  }

  static renderTitleDiv() {
    const titleDiv = document.createElement("div")
    titleDiv.setAttribute("class", "title-div")
    return titleDiv
  }

  static renderImgDiv() {
    const imgDiv = document.createElement("div")
    imgDiv.setAttribute("class", "img-div")
    imgDiv.setAttribute("id", "img-div")
    return imgDiv
  }

  static renderImgTitleDiv() {
    const imgTitleDiv = document.createElement("div")
    imgTitleDiv.setAttribute("class", "img-title-div")
    imgTitleDiv.setAttribute("id", "img-title-div")
    return imgTitleDiv
  }

  static renderBackBtn() {
    const navbarBackBtn = document.createElement("div")
    navbarBackBtn.setAttribute("class", "navbar-back-btn")
    navbarBackBtn.setAttribute("id", "navbar-back-btn")
    return navbarBackBtn
  }
  static showBackBtn(selectedItem) {
    const navbarBackBtn = document.getElementById("navbar-back-btn")
    navbarBackBtn.classList.add("navbar-back-btn-show")
    Navbar.bindBackBtnEventListener(selectedItem)
  }

  static hideBackBtn() {
    const navbarBackBtn = document.getElementById("navbar-back-btn")
    navbarBackBtn.classList.remove("navbar-back-btn-show")
  }

  static bindBackBtnEventListener(selectedItem) {
    const navbarBackBtn = document.getElementById("navbar-back-btn")
    const implantFamilies = Store.getImplantFamilies()
    navbarBackBtn.addEventListener("click", () => {
      const implants = Implants.getImplantsFromStore()
      const probes = Probes.getProbesFromStore()
      const shavers = Shavers.getShaversFromStore()
      const xf2Errors = Xf2Errors.getXf2ErrorsFromStore()
      const xflowErrors = XflowErrors.getXflowErrorsFromStore()
      if (selectedItem == undefined) {
        HomePage.clearImplantText()
        HomePage.clearImplantFamliesText()
        Navbar.updateTitle()
        Navbar.hideBackBtn()
        Search.clearSearchField()
        HomePage.renderImplantFamilies(implantFamilies)
      }
      else if (selectedItem[0].implant) {
        const selectedImpantFamily = selectedItem[0].implant.family
        HomePage.clearImplantDetails()
        Search.clearSearchField()
        ImplantFamilies.selectedImplantFamily(selectedImpantFamily)
        HomePage.scrollToTop()
      } else if (selectedItem[0].probe) {
        HomePage.clearImplantDetails()
        Navbar.hideBackBtn()
        HomePage.renderSearchField()
        HomePage.renderProbes(probes)
        Search.bindProbeSearchEventListener()
        HomePage.scrollToTop()
      } else if (selectedItem[0].PartNumber) {
        HomePage.clearShaverDetails()
        Navbar.hideBackBtn()
        HomePage.renderSearchField()
        HomePage.renderShavers(shavers)
        Search.bindShaverSearchEventListener()
        HomePage.scrollToTop()
      } else if (selectedItem[0].type) {
        console.log(selectedItem[0])
        HomePage.clearErrorDetails()
        Navbar.hideBackBtn()
        HomePage.renderSearchField()
        HomePage.renderXflowErrors(xflowErrors)
        Search.bindErrorSearchEventListener()
        HomePage.scrollToTop()
      } else if (selectedItem[0].id) {
        HomePage.clearErrorDetails()
        Navbar.hideBackBtn()
        HomePage.renderSearchField()
        HomePage.renderXf2Errors(xf2Errors)
        Search.bindErrorSearchEventListener()
        HomePage.scrollToTop()
      }
    })
  }

  static updateTitle(item, features) {
    const navbarTitleDiv = document.getElementsByClassName("title-div")
    const spanDiv = document.getElementsByClassName("span-div")
    const imgDiv = document.getElementById("img-div")
    if (features !== undefined) {
      features.map((feature) => {
        if (feature.id === item.id) {
          const splitFeatureTitle = feature.title.split(" ")
          if (feature.id === "errors") {
            navbarTitleDiv[0].innerText = splitFeatureTitle[0]
            spanDiv[0].innerText = `${splitFeatureTitle[1]}s`
            imgDiv.classList.add("img-div-hide")
          } else {
            navbarTitleDiv[0].innerText = splitFeatureTitle[0]
            spanDiv[0].innerText = splitFeatureTitle[1]
            imgDiv.classList.add("img-div-hide")
          }
        }
      })
    } else if (item == undefined) {
      navbarTitleDiv[0].innerText = 'Implant'
      spanDiv[0].innerText = 'Families'
    } else {
      navbarTitleDiv[0].innerText = item
      spanDiv[0].innerText = 'Family'
    }
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
        HomePage.scrollToTop()
        HomePage.clearFeatureData()
        new HomePage()
      })
    }
  }
}
