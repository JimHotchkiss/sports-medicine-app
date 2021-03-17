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

  static addInserts(fetchedInserts) {
    localStorage.setItem("inserts", JSON.stringify(fetchedInserts))
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

  static addRfFootpedalDefaults(rf) {
    localStorage.setItem("rf-defaults", JSON.stringify(rf))
  }

  static getRfFootpedalDefaults() {
    let defaultSettings
    if (localStorage.getItem("rf-defaults") === null) {
      defaultSettings = []
    } else {
      defaultSettings = JSON.parse(localStorage.getItem("rf-defaults"))
    }
    return defaultSettings
  }
}
