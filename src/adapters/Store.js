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
}
