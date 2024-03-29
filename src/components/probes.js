class Probes {
  constructor() {
    this.probeAdapter = new ProbeAdapter()
    this.fetchProbesSpecifications()
  }

  fetchProbesSpecifications() {
    this.probeAdapter.fetchProbeData().then((data) => {
      Store.addProbes(data)
    })
  }

  static getSuctionProbesFromStore() {
    return Store.getSuctionProbes()
  }

  static getProbesFromStore() {
    return Store.getProbes()
  }

  static bindingProbesEventListener() {
    const probeDivs = document.getElementsByClassName("content-div")
    for (let item of probeDivs) {
      item.addEventListener("click", () => {
        const selectedProbe = item
        HomePage.clearProbeText()
        Search.clearSearchField()
        HomePage.getProbeDetails(selectedProbe)
      })
    }
  }
}
