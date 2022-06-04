class HomePage {
  constructor() {
    Navbar.renderNavbar()
    this.features = new Features()
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

  static clearImplantFamliesText() {
    const implantFamiliesContainer = document.getElementById("implant-families-container")
    if (implantFamiliesContainer) {
      implantFamiliesContainer.parentNode.removeChild(implantFamiliesContainer)
    }

  }

  static clearImplantText() {
    const implantContainer = document.getElementById("implant-container")
    if (implantContainer) {
      implantContainer.parentNode.removeChild(implantContainer)
    }
  }

  static clearErrorText() {
    const errorsContainer = document.getElementById("shavers-container")
    if (errorsContainer) {
      errorsContainer.parentNode.removeChild(errorsContainer)
    }
  }

  static clearProbeText() {
    const probeContainer = document.getElementById("probes-container")
    if (probeContainer) {
      probeContainer.parentNode.removeChild(probeContainer)
    }
  }

  static clearShaverText() {
    const shaverContainer = document.getElementById("shavers-container")
    if (shaverContainer) {
      shaverContainer.parentNode.removeChild(shaverContainer)
    }
  }

  static clearShaverDetails() {
    const root = HomePage.root().children
    Array.from(root).forEach(function (element) {
      if (element.id !== "navbar") {
        if (element) {
          element.parentNode.removeChild(element)
        }
      }
    })
  }

  static clearFeatureData() {
    const featureData = HomePage.root()
    featureData.innerHTML = ""
  }

  static clearImplantDetails() {
    const root = HomePage.root().children
    Array.from(root).forEach(function (element) {
      if (element.id !== "navbar") {
        if (element) {
          element.parentNode.removeChild(element)
        }
      }
    })
  }

  static clearErrorDetails() {
    const root = HomePage.root().children
    Array.from(root).forEach(function (element) {
      if (element.id !== "navbar") {
        if (element) {
          element.parentNode.removeChild(element)
        }
      }
    })
  }

  static getImplantDetails(selectedInsert) {
    const inserts = Store.getInserts()
    const selectedInserts = []
    inserts.map((insert) => {
      if (insert.implant.pn === selectedInsert.id) {
        return selectedInserts.push(insert)
      }
    })
    HomePage.renderInsertDetails(selectedInserts, selectedInsert)
    Navbar.showBackBtn(selectedInserts)
  }

  static getErrorDetails(selectedError) {
    const errors = Store.getXf2Errors()
    const selectedErrors = []
    errors.map((error) => {
      if (error.id === selectedError.id) {
        return selectedErrors.push(error)
      }
    })
    HomePage.renderErrorDetails(selectedErrors, selectedError)
    Navbar.showBackBtn(selectedErrors)
  }

  static getXflowErrorDetails(selectedError) {
    const errors = Store.getXflowErrors()
    const selectedErrors = []
    errors.map((error) => {
      if (error.id === selectedError.id) {
        return selectedErrors.push(error)
      }
    })
    HomePage.renderErrorDetails(selectedErrors, selectedError)
    Navbar.showBackBtn(selectedErrors)
  }

  static renderErrorDetails(selectedErrors, selectedError) {
    if (selectedErrors[0].type) {
      HomePage.scrollToTop()
      HomePage.errorId(selectedErrors)
      HomePage.errorDescription(selectedErrors)
      HomePage.errorTroubleshooting(selectedErrors)
      HomePage.errorType(selectedErrors)
      HomePage.errorCause(selectedErrors)
    } else {
      HomePage.scrollToTop()
      HomePage.errorId(selectedErrors)
      HomePage.errorCategory(selectedErrors)
      HomePage.errorSolution(selectedErrors)
      HomePage.errorDescription(selectedErrors)
    }
  }

  static errorTroubleshooting(selectedErrors) {
    selectedErrors.map((error) => {
      const errorTroubleshootingDiv = document.createElement("div")
      errorTroubleshootingDiv.setAttribute("class", "insert-details-div")
      const errorTroubleshootingTitle = document.createElement("h3")
      errorTroubleshootingTitle.setAttribute("class", "insert-details-title")
      const errorTroubleshootingTextDiv = document.createElement("div")
      errorTroubleshootingTextDiv.setAttribute(
        "class",
        "insert-details-text-div"
      )
      const errorTroubleshootingText = document.createElement("p")
      errorTroubleshootingText.setAttribute("class", "insert-details-text")
      errorTroubleshootingTitle.innerText = "Troubleshooting"
      errorTroubleshootingText.innerText = error.troubleshooting
      errorTroubleshootingTextDiv.appendChild(errorTroubleshootingText)
      errorTroubleshootingDiv.appendChild(errorTroubleshootingTitle)
      errorTroubleshootingDiv.appendChild(errorTroubleshootingTextDiv)
      HomePage.root().appendChild(errorTroubleshootingDiv)
    })
  }

  static errorType(selectedErrors) {
    selectedErrors.map((error) => {
      const errorTypeDiv = document.createElement("div")
      errorTypeDiv.setAttribute("class", "insert-details-div")
      const errorTypeTitle = document.createElement("h3")
      errorTypeTitle.setAttribute("class", "insert-details-title")
      const errorTypeTextDiv = document.createElement("div")
      errorTypeTextDiv.setAttribute("class", "insert-details-text-div")
      const errorTypeText = document.createElement("p")
      errorTypeText.setAttribute("class", "insert-details-text")
      errorTypeTitle.innerText = "Type"
      errorTypeText.innerText = error.type
      errorTypeTextDiv.appendChild(errorTypeText)
      errorTypeDiv.appendChild(errorTypeTitle)
      errorTypeDiv.appendChild(errorTypeTextDiv)
      HomePage.root().appendChild(errorTypeDiv)
    })
  }

  static errorCause(selectedErrors) {
    selectedErrors.map((error) => {
      const errorCauseDiv = document.createElement("div")
      errorCauseDiv.setAttribute("class", "insert-details-div")
      const errorCauseTitle = document.createElement("h3")
      errorCauseTitle.setAttribute("class", "insert-details-title")
      const errorCauseTextDiv = document.createElement("div")
      errorCauseTextDiv.setAttribute("class", "insert-details-text-div")
      const errorCauseText = document.createElement("p")
      errorCauseText.setAttribute("class", "insert-details-text")
      errorCauseTitle.innerText = "Cause"
      errorCauseText.innerText = error.cause
      errorCauseTextDiv.appendChild(errorCauseText)
      errorCauseDiv.appendChild(errorCauseTitle)
      errorCauseDiv.appendChild(errorCauseTextDiv)
      HomePage.root().appendChild(errorCauseDiv)
    })
  }

  static errorSolution(selectedErrors) {
    selectedErrors.map((error) => {
      const errorSolutionDiv = document.createElement("div")
      errorSolutionDiv.setAttribute("class", "insert-details-div")
      const errorSolutionTitle = document.createElement("h3")
      errorSolutionTitle.setAttribute("class", "insert-details-title")
      const errorSolutionTextDiv = document.createElement("div")
      errorSolutionTextDiv.setAttribute("class", "insert-details-text-div")
      const errorSolutionText = document.createElement("p")
      errorSolutionText.setAttribute("class", "insert-details-text")
      errorSolutionTitle.innerText = "Solution"
      errorSolutionText.innerText = error.Solution
      errorSolutionTextDiv.appendChild(errorSolutionText)
      errorSolutionDiv.appendChild(errorSolutionTitle)
      errorSolutionDiv.appendChild(errorSolutionTextDiv)
      HomePage.root().appendChild(errorSolutionDiv)
    })
  }

  static getShaverDetails(selectedShaver) {
    const shavers = Store.getShavers()
    const selectedShavers = []
    shavers.map((shaver) => {
      if (shaver.PartNumber === selectedShaver.id) {
        return selectedShavers.push(shaver)
      }
    })
    HomePage.renderShaverDetails(selectedShavers, selectedShaver)
    Navbar.showBackBtn(selectedShavers)
  }

  static renderShaverDetails(selectedShavers, selectedShaver) {
    HomePage.scrollToTop()
    HomePage.shaverName(selectedShavers)
    HomePage.shaverPn(selectedShavers)
    HomePage.shaverOscDefault(selectedShavers)
    HomePage.shaverOscMax(selectedShavers)
    HomePage.shaverHighSpeedDefault(selectedShavers)
    HomePage.shaverHighSpeedMax(selectedShavers)
    HomePage.shaverLowSpeedDefault(selectedShavers)
    HomePage.shaverLowSpeedMax(selectedShavers)
    HomePage.shaverSpeedStepIncr(selectedShavers)
  }

  static errorId(selectedErrors) {
    selectedErrors.map((error) => {
      const errorIdDiv = document.createElement("div")
      errorIdDiv.setAttribute("class", "insert-details-div")
      errorIdDiv.setAttribute("id", "insert-name-div")
      if (error.type) {
        errorIdDiv.setAttribute("data-name", `${error.id}-xflow`)
      }
      errorIdDiv.setAttribute("data-name", `${error.id}-xf2`)
      const errorIdTitle = document.createElement("h3")
      errorIdTitle.setAttribute("class", "insert-details-title")
      const errorIdTextDiv = document.createElement("div")
      errorIdTextDiv.setAttribute("class", "insert-details-text-div")
      const errorIdText = document.createElement("p")
      errorIdText.setAttribute("class", "insert-details-text")
      errorIdTitle.innerText = "Error Code"
      errorIdText.innerText = error.id
      errorIdTextDiv.appendChild(errorIdText)
      errorIdDiv.appendChild(errorIdTitle)
      errorIdDiv.appendChild(errorIdTextDiv)
      HomePage.root().appendChild(errorIdDiv)
    })
  }

  static errorDescription(selectedErrors) {
    selectedErrors.map((error) => {
      const errorTypeDiv = document.createElement("div")
      errorTypeDiv.setAttribute("class", "insert-details-div")
      const errorTypeTitle = document.createElement("h3")
      errorTypeTitle.setAttribute("class", "insert-details-title")
      const errorTypeTextDiv = document.createElement("div")
      errorTypeTextDiv.setAttribute("class", "insert-details-text-div")
      const errorTypeText = document.createElement("p")
      errorTypeText.setAttribute("class", "insert-details-text")
      errorTypeTitle.innerText = "Description"
      errorTypeText.innerText = error.Description
      errorTypeTextDiv.appendChild(errorTypeText)
      errorTypeDiv.appendChild(errorTypeTitle)
      errorTypeDiv.appendChild(errorTypeTextDiv)
      HomePage.root().appendChild(errorTypeDiv)
    })
  }

  static errorCategory(selectedErrors) {
    selectedErrors.map((error) => {
      const errorCategoryDiv = document.createElement("div")
      errorCategoryDiv.setAttribute("class", "insert-details-div")
      const errorCategoryTitle = document.createElement("h3")
      errorCategoryTitle.setAttribute("class", "insert-details-title")
      const errorCategoryTextDiv = document.createElement("div")
      errorCategoryTextDiv.setAttribute("class", "insert-details-text-div")
      const errorCategoryText = document.createElement("p")
      errorCategoryText.setAttribute("class", "insert-details-text")
      errorCategoryTitle.innerText = "Category"
      errorCategoryText.innerText = error.Category
      errorCategoryTextDiv.appendChild(errorCategoryText)
      errorCategoryDiv.appendChild(errorCategoryTitle)
      errorCategoryDiv.appendChild(errorCategoryTextDiv)
      HomePage.root().appendChild(errorCategoryDiv)
    })
  }

  static shaverSpeedStepIncr(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "Speed Step Incrument"
      insertNameText.innerText = shaver.SpeedStepIncr
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverLowSpeedMax(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "Low Speed Maximum"
      insertNameText.innerText = `${shaver.LowSpeedMax} rpms`
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverLowSpeedDefault(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "Low Speed Default"
      insertNameText.innerText = shaver.LowSpeedDefault
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverHighSpeedMax(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "High Speed Maximum"
      insertNameText.innerText = `${shaver.HighSpeedMax} rpms`
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverHighSpeedDefault(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "High Speed Default"
      insertNameText.innerText = shaver.HighSpeedDefault
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverOscDefault(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "Oscillation Default"
      insertNameText.innerText = shaver.OscillateDefault
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverOscMax(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "Oscillation Maximum"
      insertNameText.innerText = `${shaver.OscillateMax} rpms`
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverName(selectedShavers) {
    selectedShavers.map((shaver) => {
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
      insertNameText.innerText = shaver.Name
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverPn(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "Part Number"
      insertNameText.innerText = shaver.PartNumber
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static getProbeDetails(selectedProbe) {
    const probes = Store.getProbes()
    const selectedProbes = []
    probes.map((probe) => {
      if (probe.probe.pn === selectedProbe.id) {
        return selectedProbes.push(probe)
      }
    })
    HomePage.renderProbeDetails(selectedProbes)
    Navbar.showBackBtn(selectedProbes)
  }

  static probeName(selectedProbes) {
    selectedProbes.map((probe) => {
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
      insertNameText.innerText = probe.probe.name
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static probePn(selectedProbes) {
    selectedProbes.map((probe) => {
      const insertPnDiv = document.createElement("div")
      insertPnDiv.setAttribute("class", "insert-details-div")
      const insertPnTitle = document.createElement("h3")
      insertPnTitle.setAttribute("class", "insert-details-title")
      const insertPnTextDiv = document.createElement("div")
      insertPnTextDiv.setAttribute("class", "insert-details-text-div")
      const insertPnText = document.createElement("p")
      insertPnText.setAttribute("class", "insert-details-text")
      insertPnTitle.innerText = "Part Number"
      insertPnText.innerText = probe.probe.pn
      insertPnTextDiv.appendChild(insertPnText)
      insertPnDiv.appendChild(insertPnTitle)
      insertPnDiv.appendChild(insertPnTextDiv)
      HomePage.root().appendChild(insertPnDiv)
    })
  }

  static probeLength(selectedProbes) {
    selectedProbes.map((probe) => {
      const insertPnDiv = document.createElement("div")
      insertPnDiv.setAttribute("class", "insert-details-div")
      const insertPnTitle = document.createElement("h3")
      insertPnTitle.setAttribute("class", "insert-details-title")
      const insertPnTextDiv = document.createElement("div")
      insertPnTextDiv.setAttribute("class", "insert-details-text-div")
      const insertPnText = document.createElement("p")
      insertPnText.setAttribute("class", "insert-details-text")
      insertPnTitle.innerText = "Length"
      insertPnText.innerText = probe.probe.length
      insertPnTextDiv.appendChild(insertPnText)
      insertPnDiv.appendChild(insertPnTitle)
      insertPnDiv.appendChild(insertPnTextDiv)
      HomePage.root().appendChild(insertPnDiv)
    })
  }

  static probeOuterDiamter(selectedProbes) {
    selectedProbes.map((probe) => {
      const insertPnDiv = document.createElement("div")
      insertPnDiv.setAttribute("class", "insert-details-div")
      const insertPnTitle = document.createElement("h3")
      insertPnTitle.setAttribute("class", "insert-details-title")
      const insertPnTextDiv = document.createElement("div")
      insertPnTextDiv.setAttribute("class", "insert-details-text-div")
      const insertPnText = document.createElement("p")
      insertPnText.setAttribute("class", "insert-details-text")
      insertPnTitle.innerText = "Outer Diamter"
      insertPnText.innerText = probe.probe.outer_diameter
      insertPnTextDiv.appendChild(insertPnText)
      insertPnDiv.appendChild(insertPnTitle)
      insertPnDiv.appendChild(insertPnTextDiv)
      HomePage.root().appendChild(insertPnDiv)
    })
  }

  static probeCoag(selectedProbes) {
    selectedProbes.map((probe) => {
      const insertPnDiv = document.createElement("div")
      insertPnDiv.setAttribute("class", "insert-details-div")
      const insertPnTitle = document.createElement("h3")
      insertPnTitle.setAttribute("class", "insert-details-title")
      const insertPnTextDiv = document.createElement("div")
      insertPnTextDiv.setAttribute("class", "insert-details-text-div")
      const insertPnText = document.createElement("p")
      insertPnText.setAttribute("class", "insert-details-text")
      insertPnTitle.innerText = "Coag"
      insertPnText.innerText = probe.probe.coag
      insertPnTextDiv.appendChild(insertPnText)
      insertPnDiv.appendChild(insertPnTitle)
      insertPnDiv.appendChild(insertPnTextDiv)
      HomePage.root().appendChild(insertPnDiv)
    })
  }

  static probeCutDefault(selectedProbes) {
    selectedProbes.map((probe) => {
      const insertPnDiv = document.createElement("div")
      insertPnDiv.setAttribute("class", "insert-details-div")
      const insertPnTitle = document.createElement("h3")
      insertPnTitle.setAttribute("class", "insert-details-title")
      const insertPnTextDiv = document.createElement("div")
      insertPnTextDiv.setAttribute("class", "insert-details-text-div")
      const insertPnText = document.createElement("p")
      insertPnText.setAttribute("class", "insert-details-text")
      insertPnTitle.innerText = "Cut Default"
      insertPnText.innerText = probe.probe.cut_default
      insertPnTextDiv.appendChild(insertPnText)
      insertPnDiv.appendChild(insertPnTitle)
      insertPnDiv.appendChild(insertPnTextDiv)
      HomePage.root().appendChild(insertPnDiv)
    })
  }

  static probeCutMax(selectedProbes) {
    selectedProbes.map((probe) => {
      const insertPnDiv = document.createElement("div")
      insertPnDiv.setAttribute("class", "insert-details-div")
      const insertPnTitle = document.createElement("h3")
      insertPnTitle.setAttribute("class", "insert-details-title")
      const insertPnTextDiv = document.createElement("div")
      insertPnTextDiv.setAttribute("class", "insert-details-text-div")
      const insertPnText = document.createElement("p")
      insertPnText.setAttribute("class", "insert-details-text")
      insertPnTitle.innerText = "Cut Max"
      insertPnText.innerText = probe.probe.cut_max
      insertPnTextDiv.appendChild(insertPnText)
      insertPnDiv.appendChild(insertPnTitle)
      insertPnDiv.appendChild(insertPnTextDiv)
      HomePage.root().appendChild(insertPnDiv)
    })
  }

  static renderProbeDetails(selectedProbes) {
    HomePage.scrollToTop()
    HomePage.probeName(selectedProbes)
    HomePage.probePn(selectedProbes)
    HomePage.probeLength(selectedProbes)
    HomePage.probeOuterDiamter(selectedProbes)
    HomePage.probeCoag(selectedProbes)
    HomePage.probeCutDefault(selectedProbes)
    HomePage.probeCutMax(selectedProbes)
  }

  static implantName(selectedInserts) {
    selectedInserts.map((insert) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      insertNameDiv.setAttribute("data-index", insert.implant.id)
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
      insertDrillWidthTitle.innerText = "Drill Diameter"
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
      insertWidthTitle.innerText = "Diameter"
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

  static implantIconixOneImage(filteredInsertSelection) {
    filteredInsertSelection.map(() => {
      const insertUrlTextDiv = document.createElement("div")
      insertUrlTextDiv.setAttribute("class", "insert-details-div")
      const insertUrlDiv = document.createElement("div")
      insertUrlDiv.setAttribute("class", "insert-img-div")
      insertUrlDiv.setAttribute("id", "iconix1-img-div")
      const insertUrlTitle = document.createElement("h3")
      insertUrlTitle.setAttribute("class", "insert-details-title")
      insertUrlTitle.innerText = "ICONIX 1 - Drill Image"
      insertUrlTextDiv.appendChild(insertUrlTitle)
      insertUrlTextDiv.appendChild(insertUrlDiv)
      HomePage.root().appendChild(insertUrlTextDiv)
    })
  }

  static implantIconixTwoImage(filteredInsertSelection) {
    filteredInsertSelection.map(() => {
      const insertUrlTextDiv = document.createElement("div")
      insertUrlTextDiv.setAttribute("class", "insert-details-div")
      const insertUrlDiv = document.createElement("div")
      insertUrlDiv.setAttribute("class", "insert-img-div")
      insertUrlDiv.setAttribute("id", "iconix2-img-div")
      const insertUrlTitle = document.createElement("h3")
      insertUrlTitle.setAttribute("class", "insert-details-title")
      insertUrlTitle.innerText = "ICONIX 2 - Drill Image"
      insertUrlTextDiv.appendChild(insertUrlTitle)
      insertUrlTextDiv.appendChild(insertUrlDiv)
      HomePage.root().appendChild(insertUrlTextDiv)
    })
  }

  static filterNeedleData(selectedInsert) {
    if (
      selectedInsert.id === "3910-500-412" ||
      selectedInsert.id === "3910-500-212" ||
      selectedInsert.id === "3910-500-422"
    ) {
      const needles = Store.getNeedles().needles[1]
      HomePage.renderNeedleData(needles)
    } else if (selectedInsert.id === "3910-500-222") {
      const needles = Store.getNeedles().needles[0]
      HomePage.renderNeedleData(needles)
    }
  }
  static renderNeedleData(needles) {
    const needlesDetailsContainer = document.createElement("div")
    needlesDetailsContainer.setAttribute("class", "insert-details-container")
    const needleTitle = document.createElement("h3")
    needleTitle.setAttribute("class", "insert-details-title")
    needleTitle.innerText = "Needle Specifications"
    const needleDetailsDiv = document.createElement("div")
    needleDetailsDiv.setAttribute("class", "needle-details-div")
    // // Name
    // needleDetailsDiv.setAttribute("class", "needle-details-div")
    // const needleName = document.createElement("div")
    // needleName.setAttribute("class", "needle-details")
    // needleName.innerText = `Name: ${needles.name}`
    // needleDetailsDiv.appendChild(needleName)
    // if (needles.pn === "105-208-062") {
    //   const surgerySpecialtyPn = document.createElement("div")
    //   surgerySpecialtyPn.setAttribute("class", "needle-details")
    //   surgerySpecialtyPn.innerText = `Surgical Specialties PNs:`
    //   needleDetailsDiv.appendChild(surgerySpecialtyPn)
    //   needles.surgical_specialties_pn.map((pn, index) => {
    //     if (index === 2) {
    //       // Surgical specialties part number
    //       const surgerySpecialtyPn = document.createElement("div")
    //       surgerySpecialtyPn.setAttribute("class", "needle-details-text-last")
    //       surgerySpecialtyPn.innerText = `${pn},`
    //       needleDetailsDiv.appendChild(surgerySpecialtyPn)
    //     } else {
    //       // Surgical specialties part number
    //       const surgerySpecialtyPn = document.createElement("div")
    //       surgerySpecialtyPn.setAttribute("class", "needle-details-text")
    //       surgerySpecialtyPn.innerText = `${pn},`
    //       needleDetailsDiv.appendChild(surgerySpecialtyPn)
    //     }
    //   })
    //   // Material
    //   const needleMaterial = document.createElement("div")
    //   needleMaterial.setAttribute("class", "needle-details")
    //   needleMaterial.innerText = `Materials:`
    //   needleDetailsDiv.appendChild(needleMaterial)
    //   needles.material.map((each_material, index) => {
    //     // Material
    //     if (index === 2) {
    //       const needleMaterial = document.createElement("div")
    //       needleMaterial.setAttribute("class", "needle-details-text-last")
    //       needleMaterial.innerText = `Material: ${each_material}`
    //       needleDetailsDiv.appendChild(needleMaterial)
    //     } else {
    //       const needleMaterial = document.createElement("div")
    //       needleMaterial.setAttribute("class", "needle-details-text")
    //       needleMaterial.innerText = `Material: ${each_material}`
    //       needleDetailsDiv.appendChild(needleMaterial)
    //     }
    //   })
    // } else {
    //   // Surgical specialties part number
    //   const surgerySpecialtyPn = document.createElement("div")
    //   surgerySpecialtyPn.setAttribute("class", "needle-details")
    //   surgerySpecialtyPn.innerText = `Surgical Specialties PN: ${needles.surgical_specialties_pn}`
    //   needleDetailsDiv.appendChild(surgerySpecialtyPn)
    //   // Material
    //   const needleMaterial = document.createElement("div")
    //   needleMaterial.setAttribute("class", "needle-details")
    //   needleMaterial.innerText = `Material: ${needles.material}`
    //   needleDetailsDiv.appendChild(needleMaterial)
    // }
    // Siliconza
    // const needleSiliconza = document.createElement("div")
    // needleSiliconza.setAttribute("class", "needle-details")
    // needleSiliconza.innerText = `Siliconza: ${needles.siliconza}`
    // needleDetailsDiv.appendChild(needleSiliconza)
    // Point Style
    const needlePointStyle = document.createElement("div")
    needlePointStyle.setAttribute("class", "needle-details")
    needlePointStyle.innerText = `Point Style`
    // Point style
    const pointStyle = document.createElement("div")
    pointStyle.setAttribute("class", "wire-diameter")
    pointStyle.innerText = needles.point_style
    needlePointStyle.appendChild(pointStyle)
    needleDetailsDiv.appendChild(needlePointStyle)
    // Circle
    const needleCircle = document.createElement("div")
    needleCircle.setAttribute("class", "needle-details")
    needleCircle.innerText = `Circle`
    needleDetailsDiv.appendChild(needleCircle)
    // Circle
    const circle = document.createElement("div")
    circle.setAttribute("class", "wire-diameter")
    circle.innerText = needles.circle
    needleCircle.appendChild(circle)
    needleDetailsDiv.appendChild(needleCircle)
    // Wire Diamter
    const needleWireDiameter = document.createElement("div")
    needleWireDiameter.setAttribute("class", "needle-details")
    needleWireDiameter.innerText = `Wire Diamter`
    // Min
    const wireDiameterMin = document.createElement("div")
    wireDiameterMin.setAttribute("class", "wire-diameter")
    wireDiameterMin.innerText = `Min: ${needles.wire_diamter.min}`
    needleWireDiameter.appendChild(wireDiameterMin)
    // Max
    const wireDiameterMax = document.createElement("div")
    wireDiameterMax.setAttribute("class", "wire-diameter")
    wireDiameterMax.innerText = `Max: ${needles.wire_diamter.max}`
    needleWireDiameter.appendChild(wireDiameterMax)

    needleDetailsDiv.appendChild(needleWireDiameter)
    // Wire Radius
    const needleWireRadius = document.createElement("div")
    needleWireRadius.setAttribute("class", "needle-details")
    needleWireRadius.innerText = `Radius`
    // Min
    const wireRadiusMin = document.createElement("div")
    wireRadiusMin.setAttribute("class", "wire-diameter")
    wireRadiusMin.innerText = `Min: ${needles.radius.min}`
    needleWireRadius.appendChild(wireRadiusMin)
    // Max
    const wireRadiusMax = document.createElement("div")
    wireRadiusMax.setAttribute("class", "wire-diameter")
    wireRadiusMax.innerText = `Max: ${needles.radius.max}`
    needleWireRadius.appendChild(wireRadiusMax)

    needleDetailsDiv.appendChild(needleWireRadius)
    // Needle Length
    const needleWireLength = document.createElement("div")
    needleWireLength.setAttribute("class", "needle-details")
    needleWireLength.innerText = `Needle Length`
    // Min
    const wireLengthMin = document.createElement("div")
    wireLengthMin.setAttribute("class", "wire-diameter")
    wireLengthMin.innerText = `Min: ${needles.needle_length.min}`
    needleWireLength.appendChild(wireLengthMin)
    // Max
    const wireLengthMax = document.createElement("div")
    wireLengthMax.setAttribute("class", "wire-diameter")
    wireLengthMax.innerText = `Max: ${needles.needle_length.max}`
    needleWireLength.appendChild(wireLengthMax)

    needleDetailsDiv.appendChild(needleWireLength)
    // Bore Diameter
    const needleboreDiameter = document.createElement("div")
    needleboreDiameter.setAttribute("class", "needle-details")
    needleboreDiameter.innerText = `Bore Diameter`
    // Min
    const boreDiameterMin = document.createElement("div")
    boreDiameterMin.setAttribute("class", "wire-diameter")
    boreDiameterMin.innerText = `Min: ${needles.bore_diameter.min}`
    needleboreDiameter.appendChild(boreDiameterMin)
    // Max
    const boreDiameterMax = document.createElement("div")
    boreDiameterMax.setAttribute("class", "wire-diameter")
    boreDiameterMax.innerText = `Max: ${needles.bore_diameter.max}`
    needleboreDiameter.appendChild(boreDiameterMax)

    needleDetailsDiv.appendChild(needleboreDiameter)
    // Bore Depth
    const needleboreDepth = document.createElement("div")
    needleboreDepth.setAttribute("class", "needle-details")
    needleboreDepth.innerText = `Bore Depth`
    // Min
    const boreDepthMin = document.createElement("div")
    boreDepthMin.setAttribute("class", "wire-diameter")
    boreDepthMin.innerText = `Min: ${needles.bore_depth.min}`
    needleboreDepth.appendChild(boreDepthMin)
    // Max
    const boreDepthMax = document.createElement("div")
    boreDepthMax.setAttribute("class", "wire-diameter")
    boreDepthMax.innerText = `Max: ${needles.bore_depth.max}`
    needleboreDepth.appendChild(boreDepthMax)

    needleDetailsDiv.appendChild(needleboreDepth)

    needlesDetailsContainer.appendChild(needleTitle)
    needlesDetailsContainer.appendChild(needleDetailsDiv)
    HomePage.root().appendChild(needlesDetailsContainer)
  }

  static iconixImage(selectedInserts, filteredInsertSelection) {
    selectedInserts.map((insert) => {
      if (
        insert.implant.name === "ICONIX 1" ||
        insert.implant.name === "ICONIX 1 TT"
      ) {
        HomePage.implantIconixOneImage(filteredInsertSelection)
      } else if (
        insert.implant.name === "ICONIX 2" ||
        insert.implant.name === "ICONIX 2 TT"
      ) {
        HomePage.implantIconixTwoImage(filteredInsertSelection)
      }
    })
  }

  static trocarImage(selectedInserts) {
    const insertUrlTextDiv = document.createElement("div")
    insertUrlTextDiv.setAttribute("class", "insert-details-div")
    const insertUrlDiv = document.createElement("div")
    insertUrlDiv.setAttribute("class", "trocar-img-div")
    // insertUrlDiv.setAttribute("id", "iconix2-img-div")
    const insertUrlTitle = document.createElement("h3")
    insertUrlTitle.setAttribute("class", "insert-details-title")
    insertUrlTitle.innerText = "Trocar Measurements:"
    insertUrlTextDiv.appendChild(insertUrlTitle)
    insertUrlTextDiv.appendChild(insertUrlDiv)
    HomePage.root().appendChild(insertUrlTextDiv)
  }

  static filteredInsertSelection(selectedInserts, selectedInsert) {
    let filteredInsertSelection = []
    if (selectedInserts.length > 1) {
      selectedInserts.map((insert) => {
        if (
          insert.implant.name.includes("needles") &&
          selectedInsert.children[0].textContent.includes("needles")
        ) {
          filteredInsertSelection.push(insert)
        } else if (
          !insert.implant.name.includes("needles") &&
          !selectedInsert.children[0].textContent.includes("needles")
        ) {
          filteredInsertSelection.push(insert)
        }
      })
    } else {
      filteredInsertSelection = selectedInserts
    }
  }

  static renderInsertDetails(selectedInserts, selectedInsert) {
    // HomePage.filterForIconixInserts()
    let filteredInsertSelection = []
    if (selectedInserts.length > 1) {
      selectedInserts.map((insert) => {
        if (
          insert.implant.name.includes("needles") &&
          selectedInsert.children[0].textContent.includes("needles")
        ) {
          filteredInsertSelection.push(insert)
        } else if (
          !insert.implant.name.includes("needles") &&
          !selectedInsert.children[0].textContent.includes("needles")
        ) {
          filteredInsertSelection.push(insert)
        }
      })
    } else {
      filteredInsertSelection = selectedInserts
    }
    HomePage.scrollToTop()
    HomePage.implantName(filteredInsertSelection)
    HomePage.implantPn(filteredInsertSelection)
    // Trocar image
    if (
      selectedInsert.id === "3910-500-931" ||
      selectedInsert.id === "3910-500-920" ||
      selectedInsert.id === "3910-500-922" ||
      selectedInsert.id === "3910-500-921"
    ) {
      HomePage.trocarImage(selectedInserts)
    }
    // Iconix 1 and 2 images
    HomePage.iconixImage(selectedInserts, filteredInsertSelection)
    // Needle data and image
    HomePage.filterNeedleData(selectedInsert)

    // Measurement image insert
    selectedInserts.map((insert) => {
      const reuableInsert = insert.implant.pn
      if (
        insert.implant.name.includes("ICONIX") &&
        insert.implant.id !== "3910-2" &&
        insert.implant.id !== "3910-4"
      ) {
        HomePage.implantMeasurementImg()
      } else if (
        insert.implant.pn === "3910-500-391" ||
        insert.implant.pn === "3910-500-392"
      ) {
        HomePage.implantReusableImage3_9(reuableInsert)
      } else if (
        insert.implant.pn === "3910-500-471" ||
        insert.implant.pn === "3910-500-472"
      ) {
        HomePage.implantReusableImage4_7(reuableInsert)
      } else {
        return
      }
    })
    HomePage.implantMaterial(filteredInsertSelection)
    HomePage.implantLength(filteredInsertSelection)
    HomePage.implantWidth(filteredInsertSelection)
    HomePage.implantDrillDepth(filteredInsertSelection)
    HomePage.implantDrillWidth(filteredInsertSelection)
    HomePage.implantNotes(filteredInsertSelection)
    HomePage.implantPositiveStop(filteredInsertSelection)
  }

  static implantReusableImage3_9(reusableInsert) {
    const insertUrlTextDiv = document.createElement("div")
    insertUrlTextDiv.setAttribute("class", "insert-details-div")
    const insertUrlDiv = document.createElement("div")
    insertUrlDiv.setAttribute("class", "reusable3_9-img-div")
    // insertUrlDiv.setAttribute("id", "iconix2-img-div")
    const insertUrlTitle = document.createElement("h3")
    insertUrlTitle.setAttribute("class", "insert-details-title")
    insertUrlTitle.innerText = "Reusable Instrumentation:"
    insertUrlTextDiv.appendChild(insertUrlTitle)
    insertUrlTextDiv.appendChild(insertUrlDiv)
    HomePage.root().appendChild(insertUrlTextDiv)
  }

  static implantReusableImage4_7(reusableInsert) {
    const insertUrlTextDiv = document.createElement("div")
    insertUrlTextDiv.setAttribute("class", "insert-details-div")
    const insertUrlDiv = document.createElement("div")
    insertUrlDiv.setAttribute("class", "reusable4_7-img-div")
    // insertUrlDiv.setAttribute("id", "iconix2-img-div")
    const insertUrlTitle = document.createElement("h3")
    insertUrlTitle.setAttribute("class", "insert-details-title")
    insertUrlTitle.innerText = "Reusable Instrumentation:"
    insertUrlTextDiv.appendChild(insertUrlTitle)
    insertUrlTextDiv.appendChild(insertUrlDiv)
    HomePage.root().appendChild(insertUrlTextDiv)
  }

  static implantMeasurementImg() {
    const insertUrlTextDiv = document.createElement("div")
    insertUrlTextDiv.setAttribute("class", "insert-details-div")
    const insertUrlDiv = document.createElement("div")
    insertUrlDiv.setAttribute("class", "measurement-img-div")
    // insertUrlDiv.setAttribute("id", "iconix2-img-div")
    const insertUrlTitle = document.createElement("h3")
    insertUrlTitle.setAttribute("class", "insert-details-title")
    insertUrlTitle.innerText = "ICONIX Measurements"
    insertUrlTextDiv.appendChild(insertUrlTitle)
    insertUrlTextDiv.appendChild(insertUrlDiv)
    HomePage.root().appendChild(insertUrlTextDiv)
  }

  static renderErrorsSearchField() {
    const inputDiv = document.createElement("div")
    inputDiv.setAttribute("class", "input-div")
    inputDiv.setAttribute("id", "input-div")
    inputDiv.innerHTML = '<i class="fas fa-search"></i>'
    const inputTag = document.createElement("input")
    inputTag.setAttribute("class", "input-field")
    inputTag.setAttribute("type", "text")
    inputTag.setAttribute("id", "input-field")
    inputTag.setAttribute("name", "input-field")
    inputTag.setAttribute("placeholder", "Search by error code")
    inputDiv.appendChild(inputTag)
    root.appendChild(inputDiv)
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

  // static renderSuctionProbes(suctionProbes) {
  //   const root = HomePage.root()
  //   const probesTitleDiv = document.createElement("div")
  //   probesTitleDiv.setAttribute("class", "probes-title-div")
  //   probesTitleDiv.innerText = "Suction Probes:"
  //   root.appendChild(probesTitleDiv)
  //   const probesContainer = document.createElement("div")
  //   probesContainer.setAttribute("class", "probes-container")
  //   probesContainer.setAttribute("id", "probes-container")
  //   suctionProbes.map((probe) => {
  //     const probeDiv = document.createElement("div")
  //     probeDiv.setAttribute("class", "probe-div")
  //     probeDiv.setAttribute("id", probe.probe.pn)
  //     const probeNameDiv = document.createElement("div")
  //     probeNameDiv.setAttribute("class", "probe-name-div")
  //     const probePnDiv = document.createElement("div")
  //     probePnDiv.setAttribute("class", "probe-pn-div")

  //     probeNameDiv.innerText = probe.probe.name
  //     probePnDiv.innerText = probe.probe.pn
  //     probeDiv.appendChild(probeNameDiv)
  //     probeDiv.appendChild(probePnDiv)
  //     probesContainer.appendChild(probeDiv)
  //   })
  //   root.appendChild(probesContainer)
  // }

  // static renderNonSuctionProbes(nonSuctionProbes) {
  //   const root = HomePage.root()
  //   const probesTitleDiv = document.createElement("div")
  //   probesTitleDiv.setAttribute("class", "probes-title-div")
  //   probesTitleDiv.innerText = "Non-suction Probes:"
  //   root.appendChild(probesTitleDiv)
  //   const probesContainer = document.createElement("div")
  //   probesContainer.setAttribute("class", "probes-container")
  //   probesContainer.setAttribute("id", "probes-container")
  //   nonSuctionProbes.map((probe) => {
  //     const probeDiv = document.createElement("div")
  //     probeDiv.setAttribute("class", "probe-div")
  //     probeDiv.setAttribute("id", probe.probe.pn)
  //     const probeNameDiv = document.createElement("div")
  //     probeNameDiv.setAttribute("class", "probe-name-div")
  //     const probePnDiv = document.createElement("div")
  //     probePnDiv.setAttribute("class", "probe-pn-div")

  //     probeNameDiv.innerText = probe.probe.name
  //     probePnDiv.innerText = probe.probe.pn
  //     probeDiv.appendChild(probeNameDiv)
  //     probeDiv.appendChild(probePnDiv)
  //     probesContainer.appendChild(probeDiv)
  //   })
  //   root.appendChild(probesContainer)
  // }

  static renderSmallJointProbes(smallJointProbes) {
    const root = HomePage.root()
    const probesTitleDiv = document.createElement("div")
    probesTitleDiv.setAttribute("class", "probes-title-div")
    probesTitleDiv.innerText = "Small Joint Probes:"
    root.appendChild(probesTitleDiv)
    const probesContainer = document.createElement("div")
    probesContainer.setAttribute("class", "probes-container")
    probesContainer.setAttribute("id", "probes-container")
    smallJointProbes.map((probe) => {
      const probeDiv = document.createElement("div")
      probeDiv.setAttribute("class", "probe-div")
      probeDiv.setAttribute("id", probe.probe.pn)
      const probeNameDiv = document.createElement("div")
      probeNameDiv.setAttribute("class", "probe-name-div")
      const probePnDiv = document.createElement("div")
      probePnDiv.setAttribute("class", "probe-pn-div")

      probeNameDiv.innerText = probe.probe.name
      probePnDiv.innerText = probe.probe.pn
      probeDiv.appendChild(probeNameDiv)
      probeDiv.appendChild(probePnDiv)
      probesContainer.appendChild(probeDiv)
    })
    root.appendChild(probesContainer)
  }

  static renderProbes(probes) {
    const root = HomePage.root()
    const probesContainer = document.createElement("div")
    probesContainer.setAttribute("class", "probes-container")
    probesContainer.setAttribute("id", "probes-container")
    const suctionDiv = document.createElement("div")
    suctionDiv.setAttribute("class", "suction-div")
    suctionDiv.setAttribute("id", "top-suction-div")
    const suctionTitle = document.createElement("h3")
    suctionTitle.setAttribute("class", "suction-title")
    suctionTitle.innerText = "Suction Probes"
    suctionDiv.appendChild(suctionTitle)

    const nonSuctionDiv = document.createElement("div")
    nonSuctionDiv.setAttribute("class", "suction-div")
    const nonSuctionTitle = document.createElement("h3")
    nonSuctionTitle.setAttribute("class", "suction-title")
    nonSuctionTitle.innerText = "Non-Suction Probes"
    nonSuctionDiv.appendChild(nonSuctionTitle)

    const smallJointDiv = document.createElement("div")
    smallJointDiv.setAttribute("class", "suction-div")
    const smallJointTitle = document.createElement("h3")
    smallJointTitle.setAttribute("class", "suction-title")
    smallJointTitle.innerText = "Small Joint Probes"
    smallJointDiv.appendChild(smallJointTitle)
    probes.map((probe) => {
      if (probe.probe.suction) {
        const probeDiv = document.createElement("div")
        probeDiv.setAttribute("class", "probe-div")
        probeDiv.setAttribute("id", probe.probe.pn)
        const probeNameDiv = document.createElement("div")
        probeNameDiv.setAttribute("class", "probe-name-div")
        const probePnDiv = document.createElement("div")
        probePnDiv.setAttribute("class", "probe-pn-div")

        probeNameDiv.innerText = probe.probe.name
        probePnDiv.innerText = probe.probe.pn
        probeDiv.appendChild(probeNameDiv)
        probeDiv.appendChild(probePnDiv)
        suctionDiv.appendChild(probeDiv)
        probesContainer.appendChild(suctionDiv)
      } else if (probe.probe.suction === false) {
        const probeDiv = document.createElement("div")
        probeDiv.setAttribute("class", "probe-div")
        probeDiv.setAttribute("id", probe.probe.pn)
        const probeNameDiv = document.createElement("div")
        probeNameDiv.setAttribute("class", "probe-name-div")
        const probePnDiv = document.createElement("div")
        probePnDiv.setAttribute("class", "probe-pn-div")

        probeNameDiv.innerText = probe.probe.name
        probePnDiv.innerText = probe.probe.pn
        probeDiv.appendChild(probeNameDiv)
        probeDiv.appendChild(probePnDiv)
        nonSuctionDiv.appendChild(probeDiv)
        probesContainer.appendChild(nonSuctionDiv)
      } else {
        const probeDiv = document.createElement("div")
        probeDiv.setAttribute("class", "probe-div")
        probeDiv.setAttribute("id", probe.probe.pn)
        const probeNameDiv = document.createElement("div")
        probeNameDiv.setAttribute("class", "probe-name-div")
        const probePnDiv = document.createElement("div")
        probePnDiv.setAttribute("class", "probe-pn-div")

        probeNameDiv.innerText = probe.probe.name
        probePnDiv.innerText = probe.probe.pn
        probeDiv.appendChild(probeNameDiv)
        probeDiv.appendChild(probePnDiv)
        smallJointDiv.appendChild(probeDiv)
        probesContainer.appendChild(smallJointDiv)
      }
    })
    root.appendChild(probesContainer)
    Probes.bindingProbesEventListener()
  }

  static renderShavers(shavers) {
    const shaversContainer = document.createElement("div")
    shaversContainer.setAttribute("class", "shavers-container")
    shaversContainer.setAttribute("id", "shavers-container")
    shavers.map((shaver) => {
      const shaverDiv = document.createElement("div")
      shaverDiv.setAttribute("class", "shaver-div")
      shaverDiv.setAttribute("id", shaver.PartNumber)
      const shaverNameDiv = document.createElement("div")
      shaverNameDiv.setAttribute("class", "shaver-name-div")
      const shaverPnDiv = document.createElement("div")
      shaverPnDiv.setAttribute("class", "shaver-pn-div")
      shaverNameDiv.innerText = shaver.Name
      shaverPnDiv.innerText = shaver.PartNumber
      shaverDiv.appendChild(shaverNameDiv)
      shaverDiv.appendChild(shaverPnDiv)
      shaversContainer.appendChild(shaverDiv)
    })
    HomePage.root().appendChild(shaversContainer)
    HomePage.scrollToTop()
    Shavers.bindingShaversEventListener()
  }

  static renderXf2Errors(errors) {
    const errorsContainer = document.createElement("div")
    errorsContainer.setAttribute("class", "shavers-container")
    errorsContainer.setAttribute("id", "shavers-container")
    errors.map((error) => {
      const errorDiv = document.createElement("div")
      errorDiv.setAttribute("class", "shaver-div")
      errorDiv.setAttribute("id", error.id)
      const errorTypeDiv = document.createElement("div")
      errorTypeDiv.setAttribute("class", "shaver-name-div")
      errorTypeDiv.innerText = error.id
      errorDiv.appendChild(errorTypeDiv)
      errorsContainer.appendChild(errorDiv)
    })
    HomePage.scrollToTop()
    HomePage.root().appendChild(errorsContainer)
    Xf2Errors.bindingErrorsEventListener()
  }

  static renderXflowErrors(errors) {
    const errorsContainer = document.createElement("div")
    errorsContainer.setAttribute("class", "shavers-container")
    errorsContainer.setAttribute("id", "shavers-container")
    errors.map((error) => {
      const errorDiv = document.createElement("div")
      errorDiv.setAttribute("class", "shaver-div")
      errorDiv.setAttribute("id", error.id)
      const errorTypeDiv = document.createElement("div")
      errorTypeDiv.setAttribute("class", "shaver-name-div")
      errorTypeDiv.innerText = error.id
      errorDiv.appendChild(errorTypeDiv)
      errorsContainer.appendChild(errorDiv)
    })
    HomePage.scrollToTop()
    HomePage.root().appendChild(errorsContainer)
    XflowErrors.bindingXflowErrorsEventListener()
  }

  static renderImplantFamilies(implantFamiles) {
    const implantFamilies = Store.getImplantFamilies()
    const root = HomePage.root()
    const implantFamiliesContainer = document.createElement('div')
    implantFamiliesContainer.setAttribute("class", "implant-families-container")
    implantFamiliesContainer.setAttribute("id", "implant-families-container")

    implantFamiles.implant_families.map(family => {
      const implantFamiliesDiv = document.createElement("div")
      implantFamiliesDiv.setAttribute("class", "implant-family-div")
      implantFamiliesDiv.setAttribute("id", family.id)
      implantFamiliesDiv.setAttribute("data-family", family.name)
      const implantFamilyNameDiv = document.createElement("div")
      implantFamilyNameDiv.setAttribute("class", "implant-family-name-div")
      implantFamilyNameDiv.innerText = family.name
      implantFamiliesDiv.appendChild(implantFamilyNameDiv)
      implantFamiliesContainer.appendChild(implantFamiliesDiv)
      root.appendChild(implantFamiliesContainer)
    })
    ImplantFamilies.bindingInplantFamiliesEventListener()
  }

  static renderImplants(inserts) {
    const root = HomePage.root()
    const implantContainer = document.createElement("div")
    implantContainer.setAttribute("class", "implant-container")
    implantContainer.setAttribute("id", "implant-container")

    inserts.map((implant) => {
      const implantDiv = document.createElement("div")
      implantDiv.setAttribute("class", "implant-div")
      implantDiv.setAttribute("id", implant.implant.pn)
      implantDiv.setAttribute("data-index", implant.implant.id)
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

  // Arthro Default Settings
  static renderArthroDefaults() {
    const shaverFootpedalDefaults = Store.getShaverFootpedalDefaults()
    const rfFootpedalDefaultSettings = Store.getRfFootpedalDefaults()
    const shaverDefaultSettings = Store.getShaverDefaults()
    const rfDefaultSettings = Store.getRfDefaults()

    HomePage.renderShaverDefaults(shaverDefaultSettings)
    HomePage.renderShaverFootPedalDefaults(shaverFootpedalDefaults)
    HomePage.renderRfDefaults(rfDefaultSettings)
    HomePage.renderRfFootpedalDefaults(rfFootpedalDefaultSettings)
  }

  static renderShaverDefaults(shaverDefaultSettings) {
    HomePage.renderShaverDefaultsTitle()
  }

  static renderShaverDefaultsTitle() {
    const shaverUrlTextDiv = document.createElement("div")
    shaverUrlTextDiv.setAttribute("class", "insert-details-div")
    shaverUrlTextDiv.setAttribute("id", "shaver-default-details-div")
    const shaverUrlDiv = document.createElement("div")
    shaverUrlDiv.setAttribute("class", "shaver-img-div")
    // insertUrlDiv.setAttribute("id", "iconix2-img-div")
    const shaverDefaultTitle = document.createElement("h3")
    shaverDefaultTitle.setAttribute("class", "insert-details-title")
    shaverDefaultTitle.innerText = "Shaver Defaults:"
    shaverUrlTextDiv.appendChild(shaverDefaultTitle)
    shaverUrlTextDiv.appendChild(shaverUrlDiv)
    HomePage.root().appendChild(shaverUrlTextDiv)
  }

  static renderShaverFootPedalDefaults(shaverFootpedalDefaults) {
    // console.log(shaverFootpedalDefaults)
  }

  static renderRfDefaults(rfDefaultSettings) {
    // console.log(rfDefaultSettings)
  }

  static renderRfFootpedalDefaults(rfFootpedalDefaultSettings) {
    // console.log(rfFootpedalDefaultSettings)
  }
}
