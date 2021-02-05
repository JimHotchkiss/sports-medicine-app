class UpdateHomePage {
  constructor() {
    this.fetchImplants = new Implants().fetchInplantsSpecifications()
  }
  clearInnerText() {
    const featuresContainer = document.getElementById("features-container")
    if (featuresContainer) {
      featuresContainer.parentNode.removeChild(featuresContainer)
    }
  }

  static clearImplantText() {
    const implantContainer = document.getElementById("implant-container")
    if (implantContainer) {
      implantContainer.parentNode.removeChild(implantContainer)
    }
  }

  clearFeatureData() {
    const featureData = document.getElementById("root").children[0]
    if (featureData) {
      featureData.parentNode.removeChild(featureData)
    }
  }

  static getImplantDetails(selectedInsert) {
    const inserts = Store.getInserts()
    const selectedInserts = []
    inserts.map((insert) => {
      if (insert.implant.pn === selectedInsert) {
        console.log(insert.implant.pn, selectedInsert)
        selectedInserts.push(insert)
        return inserts
      }
    })
    UpdateHomePage.renderInsertDetails(selectedInserts)
  }

  static renderInsertDetails(selectedInserts) {
    const root = document.getElementById("root")
    const insertContainer = document.createElement("div")
    insertContainer.setAttribute("class", "show-insert-container")
    selectedInserts.map((insert) => {
      const insertNameDiv = document.createElement("div")
      const insertPnDiv = document.createElement("div")
      insertNameDiv.innerHTML = `<div class="show-insert-name-div">${insert.implant.name}</div>`
      insertPnDiv.innerHTML = `<div class="show-insert-pn-div">${insert.implant.pn}</div>`
      insertContainer.appendChild(insertNameDiv)
      insertContainer.appendChild(insertPnDiv)

      root.appendChild(insertContainer)
      console.log(insert.implant.pn)
    })
  }

  renderInplants() {
    const inserts = Store.getInserts()
    const root = document.getElementById("root")
    const implantContainer = document.createElement("div")
    implantContainer.setAttribute("class", "implant-container")
    implantContainer.setAttribute("id", "implant-container")
    inserts.map((implant) => {
      const implantDiv = document.createElement("div")
      implantDiv.setAttribute("class", "implant-div")
      implantDiv.setAttribute("id", implant.implant.pn)
      const implantNameDiv = document.createElement("div")
      implantNameDiv.setAttribute("class", "implant-name-div")
      const implantPnDiv = document.createElement("div")
      implantPnDiv.setAttribute("class", "implant-pn-div")

      implantNameDiv.innerText = implant.implant.name
      implantPnDiv.innerText = implant.implant.pn
      implantDiv.appendChild(implantNameDiv)
      implantDiv.appendChild(implantPnDiv)
      implantContainer.appendChild(implantDiv)
    })
    root.appendChild(implantContainer)
    Implants.bindingImplantsEventListener()
  }
}
