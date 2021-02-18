class HomePage {
  constructor() {
    Navbar.renderNavbar()
    this.features = new Features()
    this.probes = new Probes()
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

  static clearProbeText() {
    const probeContainer = document.getElementById("probes-container")
    if (probeContainer) {
      probeContainer.parentNode.removeChild(probeContainer)
    }
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

  static getImplantDetails(selectedInsert) {
    const inserts = Store.getInserts()
    const selectedInserts = []
    inserts.map((insert) => {
      if (insert.implant.pn === selectedInsert.id) {
        return selectedInserts.push(insert)
      }
    })
    HomePage.renderInsertDetails(selectedInserts, selectedInsert)
    Navbar.showBackBtn()
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
    Navbar.showBackBtn()
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
      HomePage.render2_0NeedleData(selectedInsert)
    } else if (selectedInsert.id === "3910-500-222") {
      HomePage.render1_2NeedleData(selectedInsert)
    }
  }

  static render2_0NeedleData() {
    const needles = Store.getNeedles().needles[0]
    console.log(needles)
    const needlesDetailsContainer = document.createElement("div")
    needlesDetailsContainer.setAttribute("class", "insert-details-container")
    const needleTitle = document.createElement("h3")
    needleTitle.setAttribute("class", "insert-details-title")
    needleTitle.innerText = "ICONIX Needles"
    // Name
    const needleDetailsDiv = document.createElement("div")
    needleDetailsDiv.setAttribute("class", "needle-details-div")
    const needleName = document.createElement("div")
    needleName.setAttribute("class", "needle-details")
    needleName.innerText = `Name: ${needles.name}`
    needleDetailsDiv.appendChild(needleName)
    // Surgical specialties part number
    const surgerySpecialtyPn = document.createElement("div")
    surgerySpecialtyPn.setAttribute("class", "needle-details")
    surgerySpecialtyPn.innerText = `Surgical Specialties PN: ${needles.pn}`
    needleDetailsDiv.appendChild(surgerySpecialtyPn)
    // Material
    const needleMaterial = document.createElement("div")
    needleMaterial.setAttribute("class", "needle-details")
    needleMaterial.innerText = `Material: ${needles.material}`
    needleDetailsDiv.appendChild(needleMaterial)
    // Siliconza
    const needleSiliconza = document.createElement("div")
    needleSiliconza.setAttribute("class", "needle-details")
    needleSiliconza.innerText = `Siliconza: ${needles.siliconza}`
    needleDetailsDiv.appendChild(needleSiliconza)
    // Point Style
    const needlePointStyle = document.createElement("div")
    needlePointStyle.setAttribute("class", "needle-details")
    needlePointStyle.innerText = `Point Style: ${needles.point_style}`
    needleDetailsDiv.appendChild(needlePointStyle)
    // Circle
    const needleCircle = document.createElement("div")
    needleCircle.setAttribute("class", "needle-details")
    needleCircle.innerText = `Circle: ${needles.circle}`
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

    // Needle Image
    const needleImgContainer = document.createElement("div")
    needleImgContainer.setAttribute("class", "needle-img-container")
    const needleImgTitle = document.createElement("h3")
    needleImgTitle.setAttribute("class", "needle-img-title")
    needleImgTitle.innerText = "Iconix Needle Image"
    const oneTwoNeedleImage = document.createElement("div")
    oneTwoNeedleImage.setAttribute("class", "needle-one-image")
    needleImgContainer.appendChild(needleImgTitle)
    needleImgContainer.appendChild(oneTwoNeedleImage)

    needlesDetailsContainer.appendChild(needleTitle)
    needlesDetailsContainer.appendChild(needleDetailsDiv)
    HomePage.root().appendChild(needlesDetailsContainer)
    HomePage.root().appendChild(needleImgContainer)
  }

  static render1_2NeedleData(filteredInserts) {
    console.log(filteredInserts)
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
    console.log(selectedInserts)
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
    // Iconix 1 and 2 images
    HomePage.iconixImage(selectedInserts, filteredInsertSelection)
    // Needle data and image
    HomePage.filterNeedleData(selectedInsert)

    // Measurement image insert
    selectedInserts.map((insert) => {
      if (
        insert.implant.name.includes("ICONIX") &&
        insert.implant.id !== "3910-2" &&
        insert.implant.id !== "3910-4"
      ) {
        HomePage.implantMeasurementImg()
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

  static renderSuctionProbes(suctionProbes) {
    const root = HomePage.root()
    const probesTitleDiv = document.createElement("div")
    probesTitleDiv.setAttribute("class", "probes-title-div")
    probesTitleDiv.innerText = "Suction Probes:"
    root.appendChild(probesTitleDiv)
    const probesContainer = document.createElement("div")
    probesContainer.setAttribute("class", "probes-container")
    probesContainer.setAttribute("id", "probes-container")
    suctionProbes.map((probe) => {
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

  static renderNonSuctionProbes(nonSuctionProbes) {
    const root = HomePage.root()
    const probesTitleDiv = document.createElement("div")
    probesTitleDiv.setAttribute("class", "probes-title-div")
    probesTitleDiv.innerText = "Non-suction Probes:"
    root.appendChild(probesTitleDiv)
    const probesContainer = document.createElement("div")
    probesContainer.setAttribute("class", "probes-container")
    probesContainer.setAttribute("id", "probes-container")
    nonSuctionProbes.map((probe) => {
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
    probes.map((probe) => {
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
    Probes.bindingProbesEventListener()
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
}
