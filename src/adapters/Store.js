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
}
