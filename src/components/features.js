class Features {
  constructor() {
    this.features = []
    this.featuresAdapter = new FeaturesAdapter()
    this.inplants = new Implants()
    this.implantFamilies = new ImplantFamilies()
    this.capitalProducts = new CapitalProducts()
    this.shavers = new Probes()
    this.probes = new Shavers()
    this.xf2Errors = new Xf2Errors()
    this.xflowErrors = new XflowErrors()
    this.defaultSettings = new DefaultSettings()
    this.retrieveFeatureData()
  }

  retrieveFeatureData() {
    this.featuresAdapter
      .fetchFeaturesData()
      .then((data) => {
        return data.features.map((feature) => {
          this.features.push(feature)
        })
      })
      .then(() => {
        this.renderFeatures()
      })
      .then(() => {
        this.bindFeatureEventListener()
      })
  }

  renderFeatures() {
    const root = document.getElementById("root")
    const featureContainer = document.createElement("div")
    featureContainer.setAttribute("class", "features-container")
    featureContainer.setAttribute("id", "features-container")
    return this.features.map((feature) => {
      // console.log(feature)
      // Feature div
      const featureDiv = document.createElement("div")
      featureDiv.setAttribute("class", "feature-div")
      featureDiv.setAttribute("id", feature.id)
      featureDiv.setAttribute("data", feature.title)
      // Image and Title div
      const imgTitleDiv = document.createElement("div")
      imgTitleDiv.setAttribute("class", "feature-img-title-div")
      // Image div
      const imgDiv = document.createElement("div")
      imgDiv.setAttribute("class", "feature-img-div")
      imgDiv.setAttribute("id", `${feature.id}-img-url`)
      imgTitleDiv.appendChild(imgDiv)
      //Title div
      const titleDiv = document.createElement("div")
      titleDiv.setAttribute("class", "feature-title-div")
      titleDiv.innerText = feature.title
      imgTitleDiv.appendChild(titleDiv)
      // Description div
      const descriptionDiv = document.createElement("div")
      descriptionDiv.setAttribute("class", "feature-description-div")
      descriptionDiv.innerText = feature.description

      featureDiv.appendChild(imgTitleDiv)
      featureDiv.appendChild(descriptionDiv)
      featureContainer.appendChild(featureDiv)
      root.appendChild(featureContainer)
    })
  }

  bindFeatureEventListener() {
    const featureDivs = document.getElementsByClassName("feature-div")
    for (let item of featureDivs) {
      item.addEventListener("click", () => {
        let userSelection
        HomePage.clearFeaturesText()
        Navbar.updateTitle(item, this.features)
        Navbar.showHomeIcon()
        if (item.id === "implant-families") {
          userSelection = "Implant Families"
          const implantFamilies = Store.getImplantFamilies()
          HomePage.renderImplantFamilies(implantFamilies)
          Store.setUserSelection(userSelection)
        } else if (item.id === "implant") {
          const inserts = Store.getInserts()
          userSelection = "Implant"
          HomePage.renderSearchField()
          HomePage.renderImplants(implantFamilies)
          Search.bindInsertSearchEventListener()
          Store.setUserSelection(userSelection)
        } else if (item.id === "probe") {
          userSelection = "Probe"
          const probes = Store.getProbes()
          HomePage.renderSearchField()
          HomePage.renderProbes(probes)
          Search.bindProbeSearchEventListener()
          Store.setUserSelection(userSelection)
        } else if (item.id === "shaver") {
          userSelection = "Shaver"
          const shavers = Store.getShavers()
          HomePage.renderSearchField()
          HomePage.renderShavers(shavers)
          Search.bindShaverSearchEventListener()
          Store.setUserSelection(userSelection)
        } else if (item.id === "crossfire-errors") {
          userSelection = "Crossfire Errors"
          const errors = Store.getXf2Errors()
          HomePage.renderErrorsSearchField()
          HomePage.renderXf2Errors(errors)
          Search.bindErrorSearchEventListener()
          Store.setUserSelection(userSelection)
        } else if (item.id === "default") {
          userSelection = "Default"
          HomePage.renderArthroDefaults()
          Store.setUserSelection(userSelection)
        } else if (item.id === "capital") {
          userSelection = "Capital"
          const capitalProducts = Store.getCapitalProducts()
          HomePage.renderCapitalProducts(capitalProducts)
          Store.setUserSelection(userSelection)
        }  else if (item.id === "crossflow-errors") {
          userSelection = "Crossflow Errors"
          const errors = Store.getXflowErrors()
          HomePage.renderErrorsSearchField()
          HomePage.renderXflowErrors(errors)
          Search.bindCrossflowErrorSearchEventListener()
          Store.setUserSelection(userSelection)
        } else {
          window.open(
            "https://www.stryker.com/productexperience/Legal/Agreement"
          )
          // window.open(
          //   "https://forms.office.com/Pages/ResponsePage.aspx?id=-7udTko5g0WIEFP4H4GeOyvF9t6kmYZAnEVeps1nibRUMVRQRzEzNERSTTY4SEoxTEZBM1RaS05TSy4u"
          // )
          new HomePage()
        }
      })
    }
  }
}
