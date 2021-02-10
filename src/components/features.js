class Features {
  constructor() {
    this.features = []
    this.featuresAdapter = new FeaturesAdapter()
    this.inplants = new Implants()
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
      // Feature div
      const featureDiv = document.createElement("div")
      featureDiv.setAttribute("class", "feature-div")
      featureDiv.setAttribute("id", feature.id)
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
        console.log(item.id)
        HomePage.clearFeaturesText()
        Navbar.updateTitle(item, this.features)
        Navbar.showHomeIcon()
        if (item.id === "implant-specifications") {
          const inserts = Store.getInserts()
          HomePage.renderSearchField()
          HomePage.renderInplants(inserts)
          Search.bindSearchEventListener()
        } else if (item.id === "probe") {
          console.log("probes")
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
