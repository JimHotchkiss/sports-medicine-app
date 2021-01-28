class Features {
  constructor() {
    this.features = []
    this.featuresAdapter = new FeaturesAdapter()
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
  }

  renderFeatures() {
    const root = document.getElementById("root")
    const featureContainer = document.createElement("div")
    featureContainer.setAttribute("class", "feature-container")
    featureContainer.setAttribute("id", "feature-container")
    return this.features.map((feature) => {
      console.log(feature.description)
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
}
