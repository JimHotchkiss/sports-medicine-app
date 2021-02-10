class HomePage {
  constructor() {
    Navbar.renderNavbar()
    this.features = new Features()
    this.implants = new Implants()
  }

  static scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" })
  }

  static root() {
    return document.getElementById("root")
  }

  static clearFeaturesText() {
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

  static clearFeatureData() {
    console.log("clear")
    const featureData = document.getElementById("root")
    featureData.innerHTML = ""
  }

  static getImplantDetails(selectedInsert) {
    const inserts = Store.getInserts()
    const selectedInserts = []
    inserts.map((insert) => {
      if (insert.implant.pn === selectedInsert) {
        selectedInserts.push(insert)
        return inserts
      }
    })
    HomePage.renderInsertDetails(selectedInserts)
    Navbar.showBackBtn()
  }

  static implantName(selectedInserts) {
    selectedInserts.map((insert) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      insertNameDiv.setAttribute("id", "insert-name-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "Name"
      insertNameText.innerText = insert.implant.name
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static implantPn(selectedInserts) {
    selectedInserts.map((insert) => {
      const insertPnDiv = document.createElement("div")
      insertPnDiv.setAttribute("class", "insert-details-div")
      const insertPnTitle = document.createElement("h3")
      insertPnTitle.setAttribute("class", "insert-details-title")
      const insertPnTextDiv = document.createElement("div")
      insertPnTextDiv.setAttribute("class", "insert-details-text-div")
      const insertPnText = document.createElement("p")
      insertPnText.setAttribute("class", "insert-details-text")
      insertPnTitle.innerText = "Part Number"
      insertPnText.innerText = insert.implant.pn
      insertPnTextDiv.appendChild(insertPnText)
      insertPnDiv.appendChild(insertPnTitle)
      insertPnDiv.appendChild(insertPnTextDiv)
      HomePage.root().appendChild(insertPnDiv)
    })
  }

  static implantMaterial(selectedInserts) {
    selectedInserts.map((insert) => {
      const insertMaterialDiv = document.createElement("div")
      insertMaterialDiv.setAttribute("class", "insert-details-div")
      const insertMaterialTitle = document.createElement("h3")
      insertMaterialTitle.setAttribute("class", "insert-details-title")
      const insertMaterialTextDiv = document.createElement("div")
      insertMaterialTextDiv.setAttribute("class", "insert-details-text-div")
      const insertMaterialText = document.createElement("p")
      insertMaterialText.setAttribute("class", "insert-details-text")
      insertMaterialTitle.innerText = "Material"
      insertMaterialText.innerText = insert.implant.MATERIAL
      insertMaterialTextDiv.appendChild(insertMaterialText)
      insertMaterialDiv.appendChild(insertMaterialTitle)
      insertMaterialDiv.appendChild(insertMaterialTextDiv)
      HomePage.root().appendChild(insertMaterialDiv)
    })
  }

  static implantDrillDepth(selectedInserts) {
    selectedInserts.map((insert) => {
      const insertDrillDepthDiv = document.createElement("div")
      insertDrillDepthDiv.setAttribute("class", "insert-details-div")
      const insertDrillDepthTitle = document.createElement("h3")
      insertDrillDepthTitle.setAttribute("class", "insert-details-title")
      const insertDrillDepthTextDiv = document.createElement("div")
      insertDrillDepthTextDiv.setAttribute("class", "insert-details-text-div")
      const insertDrillDepthText = document.createElement("p")
      insertDrillDepthText.setAttribute("class", "insert-details-text")
      insertDrillDepthTitle.innerText = "Drill Depth"
      insertDrillDepthText.innerText = insert.implant.IMPLANT_DRILL_DEPTH
      insertDrillDepthTextDiv.appendChild(insertDrillDepthText)
      insertDrillDepthDiv.appendChild(insertDrillDepthTitle)
      insertDrillDepthDiv.appendChild(insertDrillDepthTextDiv)
      HomePage.root().appendChild(insertDrillDepthDiv)
    })
  }
  static implantDrillWidth(selectedInserts) {
    selectedInserts.map((insert) => {
      const insertDrillWidthDiv = document.createElement("div")
      insertDrillWidthDiv.setAttribute("class", "insert-details-div")
      const insertDrillWidthTitle = document.createElement("h3")
      insertDrillWidthTitle.setAttribute("class", "insert-details-title")
      const insertDrillWidthTextDiv = document.createElement("div")
      insertDrillWidthTextDiv.setAttribute("class", "insert-details-text-div")
      const insertDrillWidthText = document.createElement("p")
      insertDrillWidthText.setAttribute("class", "insert-details-text")
      insertDrillWidthTitle.innerText = "Drill Width"
      insertDrillWidthText.innerText = insert.implant.IMPLANT_DRILL_WIDTH
      insertDrillWidthTextDiv.appendChild(insertDrillWidthText)
      insertDrillWidthDiv.appendChild(insertDrillWidthTitle)
      insertDrillWidthDiv.appendChild(insertDrillWidthTextDiv)
      HomePage.root().appendChild(insertDrillWidthDiv)
    })
  }

  static implantLength(selectedInserts) {
    selectedInserts.map((insert) => {
      const insertLengthDiv = document.createElement("div")
      insertLengthDiv.setAttribute("class", "insert-details-div")
      const insertLengthTitle = document.createElement("h3")
      insertLengthTitle.setAttribute("class", "insert-details-title")
      const insertLengthTextDiv = document.createElement("div")
      insertLengthTextDiv.setAttribute("class", "insert-details-text-div")
      const insertLengthText = document.createElement("p")
      insertLengthText.setAttribute("class", "insert-details-text")
      insertLengthTitle.innerText = "Length"
      insertLengthText.innerText = insert.implant.IMPLANT_LENGTH
      insertLengthTextDiv.appendChild(insertLengthText)
      insertLengthDiv.appendChild(insertLengthTitle)
      insertLengthDiv.appendChild(insertLengthTextDiv)
      HomePage.root().appendChild(insertLengthDiv)
    })
  }

  static implantWidth(selectedInserts) {
    selectedInserts.map((insert) => {
      const insertWidthDiv = document.createElement("div")
      insertWidthDiv.setAttribute("class", "insert-details-div")
      const insertWidthTitle = document.createElement("h3")
      insertWidthTitle.setAttribute("class", "insert-details-title")
      const insertWidthTextDiv = document.createElement("div")
      insertWidthTextDiv.setAttribute("class", "insert-details-text-div")
      const insertWidthText = document.createElement("p")
      insertWidthText.setAttribute("class", "insert-details-text")
      insertWidthTitle.innerText = "Width"
      insertWidthText.innerText = insert.implant.IMPLANT_WIDTH
      insertWidthTextDiv.appendChild(insertWidthText)
      insertWidthDiv.appendChild(insertWidthTitle)
      insertWidthDiv.appendChild(insertWidthTextDiv)
      HomePage.root().appendChild(insertWidthDiv)
    })
  }

  static implantNotes(selectedInserts) {
    selectedInserts.map((insert) => {
      const insertNotesDiv = document.createElement("div")
      insertNotesDiv.setAttribute("class", "insert-details-div")
      const insertNotesTitle = document.createElement("h3")
      insertNotesTitle.setAttribute("class", "insert-details-title")
      const insertNotesTextDiv = document.createElement("div")
      insertNotesTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNotesText = document.createElement("p")
      insertNotesText.setAttribute("class", "insert-details-text")
      insertNotesTitle.innerText = "Notes"
      insertNotesText.innerText = insert.implant.NOTES
      insertNotesTextDiv.appendChild(insertNotesText)
      insertNotesDiv.appendChild(insertNotesTitle)
      insertNotesDiv.appendChild(insertNotesTextDiv)
      HomePage.root().appendChild(insertNotesDiv)
    })
  }

  static implantPositiveStop(selectedInserts) {
    selectedInserts.map((insert) => {
      const insertPositiveStopDiv = document.createElement("div")
      insertPositiveStopDiv.setAttribute("class", "insert-details-div")
      const insertPositiveStopTitle = document.createElement("h3")
      insertPositiveStopTitle.setAttribute("class", "insert-details-title")
      const insertPositiveStopTextDiv = document.createElement("div")
      insertPositiveStopTextDiv.setAttribute("class", "insert-details-text-div")
      const insertPositiveStopText = document.createElement("p")
      insertPositiveStopText.setAttribute("class", "insert-details-text")
      insertPositiveStopTitle.innerText = "Positive Stop"
      insertPositiveStopText.innerText = insert.implant.POSITIVE_STOP
      insertPositiveStopTextDiv.appendChild(insertPositiveStopText)
      insertPositiveStopDiv.appendChild(insertPositiveStopTitle)
      insertPositiveStopDiv.appendChild(insertPositiveStopTextDiv)
      HomePage.root().appendChild(insertPositiveStopDiv)
    })
  }

  static implantPullOutStrength(selectedInserts) {
    selectedInserts.map((insert) => {
      const insertPullOutStrengthDiv = document.createElement("div")
      insertPullOutStrengthDiv.setAttribute("class", "insert-details-div")
      const insertPullOutStrengthTitle = document.createElement("h3")
      insertPullOutStrengthTitle.setAttribute("class", "insert-details-title")
      const insertPullOutStrengthTextDiv = document.createElement("div")
      insertPullOutStrengthTextDiv.setAttribute(
        "class",
        "insert-details-text-div"
      )
      const insertPullOutStrengthText = document.createElement("p")
      insertPullOutStrengthText.setAttribute("class", "insert-details-text")
      insertPullOutStrengthTitle.innerText = "Pull Out Strength"
      insertPullOutStrengthText.innerText = insert.implant.PULL_OUT_STRENGTH
      insertPullOutStrengthTextDiv.appendChild(insertPullOutStrengthText)
      insertPullOutStrengthDiv.appendChild(insertPullOutStrengthTitle)
      insertPullOutStrengthDiv.appendChild(insertPullOutStrengthTextDiv)
      HomePage.root().appendChild(insertPullOutStrengthDiv)
    })
  }

  static renderInsertDetails(selectedInserts) {
    HomePage.scrollToTop()
    HomePage.implantName(selectedInserts)
    HomePage.implantPn(selectedInserts)
    HomePage.implantMaterial(selectedInserts)
    HomePage.implantLength(selectedInserts)
    HomePage.implantWidth(selectedInserts)
    HomePage.implantDrillDepth(selectedInserts)
    HomePage.implantDrillWidth(selectedInserts)
    HomePage.implantNotes(selectedInserts)
    HomePage.implantPositiveStop(selectedInserts)
    HomePage.implantPullOutStrength(selectedInserts)
  }

  static renderSearchField() {
    // Search feature
    const inputDiv = document.createElement("div")
    inputDiv.setAttribute("class", "input-div")
    inputDiv.setAttribute("id", "input-div")
    inputDiv.innerHTML = '<i class="fas fa-search"></i>'
    const inputTag = document.createElement("input")
    inputTag.setAttribute("class", "input-field")
    inputTag.setAttribute("type", "text")
    inputTag.setAttribute("id", "input-field")
    inputTag.setAttribute("name", "input-field")
    inputTag.setAttribute("placeholder", "Search by name or part number")
    inputDiv.appendChild(inputTag)
    root.appendChild(inputDiv)
    //
  }

  static renderInplants(inserts) {
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
