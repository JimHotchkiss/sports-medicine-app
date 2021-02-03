class UpdateHomePage {
  constructor() {
    this.implants = new Implants().implants
  }
  clearInnerText() {
    const featuresContainer = document.getElementById("features-container")

    if (featuresContainer) {
      featuresContainer.parentNode.removeChild(featuresContainer)
    }
  }

  clearFeatureData() {
    const featureData = document.getElementById("root").children[0]
    if (featureData) {
      featureData.parentNode.removeChild(featureData)
    }
  }

  renderInplants() {
    const root = document.getElementById("root")
    const implantContainer = document.createElement("div")
    implantContainer.setAttribute("class", "implant-container")
    implantContainer.setAttribute("id", "implant-container")
    this.implants.map((implant) => {
      // const splitImplant = implant.IMPLANT.split(" ")
      // console.log(implant)
      if (typeof implant.IMPLANT === "object") {
        implant.IMPLANT.ICONIX_SPEED.map((insert) => {
          console.log(Object.keys(implant.IMPLANT)[0])
          console.log(implant.IMPLANT, insert.name, insert.pn)
        })
      }

      const implantDiv = document.createElement("div")
      implantDiv.setAttribute("class", "implant-div")
      implantDiv.innerText = implant.IMPLANT
      implantContainer.appendChild(implantDiv)
    })
    root.appendChild(implantContainer)
  }
}
