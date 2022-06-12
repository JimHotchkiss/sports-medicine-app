class Store {
  static getInserts() {
    let inserts
    if (localStorage.getItem("inserts") === null) {
      inserts = []
    } else {
      inserts = JSON.parse(localStorage.getItem("inserts"))
    }
    return inserts
  }

  // Assign Location
  static assignLocation(userLocation) {
    localStorage.setItem('location', `${userLocation}`)
  }

  // Get Location
  static getUserLocation() {
    return localStorage.getItem('location')
  }

  static addInserts(fetchedInserts) {
    localStorage.setItem("inserts", JSON.stringify(fetchedInserts))
  }

  // Set User Selections
  static setUserSelection(userSelection) {
    localStorage.setItem("user_selection", userSelection)
  }

  static getUserSelection(){
    return localStorage.getItem("user_selection")
  }

  // Capital Products addCapitalProducts
  static addCapitalProducts(fetchedCapitalProducts) {
    localStorage.setItem("capital products", JSON.stringify(fetchedCapitalProducts))
  }

  static getCapitalProducts() {
    let capitalProducts
    if (localStorage.getItem("capital products") === null) {
      capitalProducts = []
    } else {
      capitalProducts = JSON.parse(localStorage.getItem("capital products"))
    }
    return capitalProducts
  }

  // Implant Families
  static addImplantFamilies(fetchedImplantFamilies) {
    localStorage.setItem("implant families", JSON.stringify(fetchedImplantFamilies))
  }

  static getImplantFamilies() {
    let implantFamilies
    if (localStorage.getItem("implant families") === null) {
      implantFamilies = []
    } else {
      implantFamilies = JSON.parse(localStorage.getItem("implant families"))
    }
    return implantFamilies
  }


  static getProbes() {
    let probes
    if (localStorage.getItem("probes") === null) {
      probes = []
    } else {
      probes = JSON.parse(localStorage.getItem("probes"))
    }
    return probes
  }

  static addProbes(fetchedProbes) {
    localStorage.setItem("probes", JSON.stringify(fetchedProbes))
  }

  static getSuctionProbes() {
    let suctionProbes
    if (localStorage.getItem("suction probes") === null) {
      suctionProbes = []
    } else {
      suctionProbes = JSON.parse(localStorage.getItem("suction probes"))
    }
    return suctionProbes
  }

  static addSuctionProbes(suctionProbes) {
    localStorage.setItem("suction probes", JSON.stringify(suctionProbes))
  }

  static addNeedles(fetchedNeedles) {
    localStorage.setItem("needles", JSON.stringify(fetchedNeedles))
  }

  static getNeedles() {
    let needles
    if (localStorage.getItem("needles") === null) {
      needles = []
    } else {
      needles = JSON.parse(localStorage.getItem("needles"))
    }
    return needles
  }

  // Shavers
  static getShavers() {
    let shavers
    if (localStorage.getItem("shavers") === null) {
      shavers = []
    } else {
      shavers = JSON.parse(localStorage.getItem("shavers"))
    }
    return shavers
  }

  static addShavers(shavers) {
    localStorage.setItem("shavers", JSON.stringify(shavers))
  }

  // Xflow Errors
  static getXflowErrors() {
    let errors
    if (localStorage.getItem("xflow-errors") === null) {
      errors = []
    } else {
      errors = JSON.parse(localStorage.getItem("xflow-errors"))
    }
    return errors
  }

  static addXflowErrors(errors) {
    localStorage.setItem("xflow-errors", JSON.stringify(errors))
  }

  // XF2 Errors
  static getXf2Errors() {
    let errors
    if (localStorage.getItem("xf2-errors") === null) {
      errors = []
    } else {
      errors = JSON.parse(localStorage.getItem("xf2-errors"))
    }
    return errors
  }

  static addXf2Errors(errors) {
    localStorage.setItem("xf2-errors", JSON.stringify(errors))
  }

  // Arthro Default settings
  // Footpedal
  static getShaverFootpedalDefaults() {
    let defaultSettings
    if (localStorage.getItem("shaver-footpedal-defaults") === null) {
      defaultSettings = []
    } else {
      defaultSettings = JSON.parse(
        localStorage.getItem("shaver-footpedal-defaults")
      )
    }
    return defaultSettings
  }

  static addShaverFootpedalDefaults(defaults) {
    localStorage.setItem("shaver-footpedal-defaults", JSON.stringify(defaults))
  }

  // Shaver
  static addShaverDefaults(shaverDefaults) {
    localStorage.setItem("shaver-defaults", JSON.stringify(shaverDefaults))
  }

  static getShaverDefaults() {
    let defaultSettings
    if (localStorage.getItem("shaver-defaults") === null) {
      defaultSettings = []
    } else {
      defaultSettings = JSON.parse(localStorage.getItem("shaver-defaults"))
    }
    return defaultSettings
  }

  // RF Wand
  static getRfDefaults() {
    let defaultSettings
    if (localStorage.getItem("rfWand-defaults") === null) {
      defaultSettings = []
    } else {
      defaultSettings = JSON.parse(localStorage.getItem("rfWand-defaults"))
    }
    return defaultSettings
  }

  static addRfDefaults(rfDefaults) {
    localStorage.setItem("rfWand-defaults", JSON.stringify(rfDefaults))
  }

  // RF Footpedal
  static addRfFootpedalDefaults(rfFootpedal) {
    localStorage.setItem("rfFootpedal-defaults", JSON.stringify(rfFootpedal))
  }

  static getRfFootpedalDefaults() {
    let defaultSettings
    if (localStorage.getItem("rfFootpedal-defaults") === null) {
      defaultSettings = []
    } else {
      defaultSettings = JSON.parse(localStorage.getItem("rfFootpedal-defaults"))
    }
    return defaultSettings
  }
}
